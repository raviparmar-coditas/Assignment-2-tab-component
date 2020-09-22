var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement } from "lit-element";
import styles from "./tabs-css";
let OrxeTabs = class OrxeTabs extends LitElement {
    constructor() {
        super();
        this.tabs = [];
        this.changetab = (params) => {
            console.log(params);
            let tabWidth = this.renderRoot.querySelectorAll(`${params}`)[0]['offsetWidth'].toString();
            let tabOffsetLeft = this.renderRoot.querySelectorAll(`${params}`)[0]['offsetLeft'].toString();
            this.renderRoot.querySelectorAll(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
            this.renderRoot.querySelectorAll(".tab-indicator")[0]['style']['left'] = `${tabOffsetLeft}px`;
            this.renderRoot.querySelectorAll(".active")[0]['classList'].remove('active');
            this.renderRoot.querySelectorAll(`${params}`)[0]['classList'].add('active');
        };
        this.tabs = ['Label1', 'Label2', 'Label3'];
    }
    static get properties() {
        return {
            tabs: { type: Array },
        };
    }
    render() {
        return html `
    <div class="container">
      <div class="tabs-container">
        ${this.tabs.map(item => html `
        <div id="${item}" class="tab-item" @click="${() => this.changetab(`#${item}`)}">
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
        let tabWidth = this.renderRoot.querySelectorAll(`#${this.tabs[0]}`)[0]['offsetWidth'].toString();
        this.renderRoot.querySelectorAll(".tab-indicator")[0]['style']['width'] = `${tabWidth}px`;
        this.renderRoot.querySelectorAll(`#${this.tabs[0]}`)[0]['classList'].add('active');
    }
};
OrxeTabs.styles = styles;
OrxeTabs = __decorate([
    customElement("orxe-tabs"),
    __metadata("design:paramtypes", [])
], OrxeTabs);
export default OrxeTabs;
