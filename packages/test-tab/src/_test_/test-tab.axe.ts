import { OrxeTestTab } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-test-tab-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let TestTab;

  beforeEach(async () => {
    OrxeTestTab;
    document.body.appendChild(document.createElement('TestTab'));
    TestTab = document.querySelector('TestTab') as OrxeTestTab;
  });

  afterEach(() => {
    TestTab.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(TestTab);
    expect(result).toHaveNoViolations();
  });
});
