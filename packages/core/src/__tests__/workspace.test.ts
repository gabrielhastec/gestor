import { coreWorkspaceName } from '../workspace';

describe('core workspace', () => {
  it('exposes its technical contract', () => {
    expect(coreWorkspaceName).toBe('@gestor/core');
  });
});
