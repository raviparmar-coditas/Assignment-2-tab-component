import { OrxeTestTabs } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-test-tabs-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let TestTabs;

  beforeEach(async () => {
    OrxeTestTabs;
    document.body.appendChild(document.createElement('TestTabs'));
    TestTabs = document.querySelector('TestTabs') as OrxeTestTabs;
  });

  afterEach(() => {
    TestTabs.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(TestTabs);
    expect(result).toHaveNoViolations();
  });
});
