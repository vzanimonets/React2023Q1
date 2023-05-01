/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.js
import '@cypress/code-coverage/support';

describe('Test pages', () => {
  it('Visit nav links', () => {
    cy.visit('/');

    cy.get('nav a').contains('Home').click();
    cy.location('pathname').should('eq', '/');
    cy.get('h2').contains('Main page');

    cy.get('h2').contains('Main page');
    cy.get('nav a').contains('About').click();
    cy.location('pathname').should('eq', '/about');
    cy.get('h2').contains('About page');

    cy.get('nav a').contains('Forms').click();
    cy.location('pathname').should('eq', '/forms');
    cy.get('h2').contains('Forms page');
  });
  it('Input Search', () => {
    cy.visit('/');
    cy.get('input[type="search"]').type('terry');
    cy.get('button[type="submit"]').click();
    cy.get('input[type="search"]').should('have.value', 'terry');
  });
  it('Form', () => {
    cy.visit('/forms');
    cy.get('input[name="title"]').type('Some title');
    cy.get('textarea[name="description"]').type('Some description');
    cy.get('input[type=file]').selectFile('src/assets/images/10.jpg', { force: true });
    cy.get('select').select('In stock');
    cy.get('input[type="radio"]').first().check();
    cy.get('input[type="date"]').type('2020-01-21');
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();
  });
});
