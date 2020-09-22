import { OrxeTabs } from '../';
import '@testing-library/jest-dom';

describe('orxe-tabs', () => {

  let tabs;

  beforeEach(async function() {
    OrxeTabs;
    tabs = (await document.body.appendChild(document.createElement('orxe-tabs'))) as OrxeTabs;
  });

  it('should function call render', () => {
    expect(tabs.render()).toBeTruthy();
  });

  
});