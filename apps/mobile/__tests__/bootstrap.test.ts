import { bootstrapTitle } from '../bootstrap';

describe('mobile bootstrap', () => {
  it('exposes the neutral application title', () => {
    expect(bootstrapTitle).toBe('Gestor');
  });
});
