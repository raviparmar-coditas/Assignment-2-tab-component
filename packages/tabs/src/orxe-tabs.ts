import { html, customElement, LitElement } from "lit-element";
import styles from "./tabs-css";

@customElement("orxe-tabs")
export default class OrxeTabs extends LitElement {

  tabs :Array<string> =[];
  static get properties() {
    return {
      tabs: {type: Array},
    };
  }
  constructor(){
    super()
    this.tabs=['Label1','Label2','Label3']
  }

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
    <div class="container">
      <div class="tabs-container">
        ${this.tabs.map(item => html`
        <div id="${item}" class="tab-item" @click="${()=>this.changetab(`#${item}`)}">
          <p>
          ${item}
          </p>
        </div>
        `)}
        <div class="tab-indicator">
        </div>
      </div>
      </div>
    `;
  }

  updated() {
    let tabWidth:string = this.renderRoot.querySelectorAll<HTMLElement>(`#${this.tabs[0]}`)[0]['offsetWidth'].toString();
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(`#${this.tabs[0]}`)[0]['classList'].add('active');
  }

  changetab = (params) => {
    console.log(params);
    let tabWidth:string = this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['offsetWidth'].toString();
    let tabOffsetLeft:string = this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['offsetLeft'].toString();
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(".tab-indicator")[0]['style']['left'] = `${tabOffsetLeft}px`;
    this.renderRoot.querySelectorAll<HTMLElement>(".active")[0]['classList'].remove('active');
    this.renderRoot.querySelectorAll<HTMLElement>(`${params}`)[0]['classList'].add('active');
  }
  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
