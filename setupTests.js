import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './src/__tests__/mocks/server.js';

expect.extend(matchers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
