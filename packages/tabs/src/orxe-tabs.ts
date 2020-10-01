import { html, customElement, LitElement } from "lit-element";
import styles from "./tabs-css";
import"@orxe-components/icons";
import"@orxe-components/icon"; 

@customElement("orxe-tabs")
export default class OrxeTabs extends LitElement {

  tabs :Array<any> =[];
  static get properties() {
    return {
      tabs: {type: Array},
    };
  }
  constructor(){
    super()
    this.tabs=[
      {label:"Label 1",id:"Lable1",icon:"ic-hotel"},
      {label:"Label 2",id:"Lable2",icon:"ic-car"},
      {label:"Label 3",id:"Lable3"}
    ]
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
    <div class="container">
      <div class="tabs-container">
        ${this.tabs.map(item => html`
        <div data-testid="tab-active-class-on-click"  id="${item.id}" class="tab-item" @click=${()=>this.changeTab(`#${item.id}`)}>
            ${this.renderIcon(item.icon)}
          <p>
          ${item.label}
          </p>
        </div>
        `)}
        <div class="tab-indicator">
        </div>
      </div>
      </div>
    `;
  }
   /**
   * This method render bottom line to first when load the component'
   */
  firstUpdated() {
    
    let tabWidth:string = this.renderRoot.querySelectorAll<HTMLElement>(`#${this.tabs[0].id}`)[0]['offsetWidth'].toString();
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(`#${this.tabs[0].id}`)[0]['classList'].add('active');
  }
   /**
   * This method render bottom line when click on specific tab'
   */
  changeTab = (params) => {
    let tabWidth:string = this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['offsetWidth'].toString();
    let tabOffsetLeft:string = this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['offsetLeft'].toString();
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['left'] = `${tabOffsetLeft}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(".active")[0]['classList'].remove('active');
    this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['classList'].add('active');
  /**
   * output event for onclick tab
   */
    const event = new CustomEvent('tabEvent',{
      detail:{
        tabId:params
      }
    });
    this.dispatchEvent(event);
  }
   /**
   * This method render the icon if the icon is present'
   */
  renderIcon(icon) {
    let result = html ``;
    if (icon) {
        result = html `
    <div class="tabs-icon">   
    <orxe-icon icon="${icon}" type="small" size="small"></orxe-icon>
    </div>
  `;
    }
    return result;
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
