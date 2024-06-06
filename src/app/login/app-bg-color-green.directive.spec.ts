import { AppBgColorGreenDirective } from './app-bg-color-green.directive';

class MockElementRef {}
describe('AppBgColorGreenDirective', () => {
  it('should create an instance', () => {
    const directive = new AppBgColorGreenDirective(new MockElementRef() as any);
    expect(directive).toBeTruthy();
  });
});
