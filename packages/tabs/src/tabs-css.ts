import {css} from 'lit-element';
export default css`:host{--tab-font-family: var(--global-font-family);--tab-background-color: var(--neutral);--active-tab-indicator: var(--secondary);--inactive-tab-indicator: var(--separator-01);--tab-font-weight-regular: var(--font-weight-regular);--tab-font-weight-semi-bold: var(--font-weight-semi-bold);--tab-height: 40px;--tab-font-color: var(--tertiary-text)
}.container{position:relative;overflow:auto;background-color:var(--card-background-color)}.container .tabs-container{display:flex;width:100%;height:var(--tab-height);justify-content:space-between}.container .tabs-container .tab-item{padding:12px 16px;flex:1;display:flex;justify-content:center;cursor:pointer;font-weight:var(--tab-font-weight-regular);color:var(--tab-font-color)}.container .tabs-container .tab-item .tabs-icon{margin-right:4px}.container .tabs-container .tab-item p{padding:0;margin:0;font-size:1.4rem}.container .tab-indicator{position:absolute;left:0;bottom:0;height:2px;background-color:black;transition:cubic-bezier(0.42, 0, 0.58, 0) 240ms}.active{color:var(--active-tab-indicator) !important;font-weight:var(--tab-font-weight-semi-bold) !important}`;