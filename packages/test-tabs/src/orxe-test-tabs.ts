import { html, customElement, LitElement } from 'lit-element';
import styles from './test-tabs-css';

import '../../tabs/dist/index.js'

@customElement('orxe-test-tabs')
export default class OrxeTestTabs extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  tabs :Array<any> =[];
  constructor(){
    super()
    this.tabs = [
      {label:"Hotel",id:"Lable1",icon:"ic-hotel"},
      {label:"Car",id:"Lable2",icon:"ic-car"},
      {label:"Flights",id:"Lable3",icon:"ic-flight"}
    ]
  }

  render() {
    return html`
         <orxe-tabs .tabs=${this.tabs} @tabEvent="${(e) => { console.log(e.detail) }}" >
    </orxe-tabs>
    `;
  }

  onEvent(){
    console.log("event called");
    
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
