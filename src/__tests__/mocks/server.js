import { setupServer } from 'msw/node';
import { handlers } from './handlers.js';
debugger;
export const server = setupServer(...handlers);
