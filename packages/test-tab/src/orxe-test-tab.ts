import { html, customElement, LitElement } from 'lit-element';
import styles from './test-tab-css';

import '../../tabs/dist/index.js'

@customElement('orxe-test-tab')
export default class OrxeTestTab extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  tabs :Array<any> =[];

  constructor(){
    super()
    this.tabs=[
      {label:"Flight",id:"Lable1",icon:"ic-flight"},
      {label:"Car",id:"Lable2",icon:"ic-car"},
      {label:"Label 3",id:"Lable3"}
    ]
  }

  render() {
    return html`
         <orxe-tabs .tabs=${this.tabs}>
    </orxe-tabs>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
