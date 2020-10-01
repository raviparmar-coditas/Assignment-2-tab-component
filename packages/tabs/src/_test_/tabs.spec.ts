import { OrxeTabs } from '../';
import '@testing-library/jest-dom';

describe('orxe-tabs', () => {

  let tabs;

  beforeEach(async function() {
    OrxeTabs;
    tabs = (await document.body.appendChild(document.createElement('orxe-tabs'))) as OrxeTabs;
  });
  
  afterEach(async function() {
    await tabs.remove();
  });
  function getByTestId(id: string): HTMLElement {
    return tabs.shadowRoot.querySelector(`[data-testid=${id}]`);
  }

  it('should function call render', () => {
    expect(tabs.render()).toBeTruthy();
  });

  it('check on click tab add active class',async ()=>{
    const tabClick = getByTestId('tab-active-class-on-click');
    await tabClick.click();
    expect(tabClick).toHaveClass('active');
  });
  
});