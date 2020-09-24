import { LitElement } from "lit-element";
import "@orxe-components/icons";
import "@orxe-components/icon";
export default class OrxeTabs extends LitElement {
    tabs: Array<any>;
    static get properties(): {
        tabs: {
            type: ArrayConstructor;
        };
    };
    constructor();
    render(): import("lit-element").TemplateResult;
    firstUpdated(): void;
    changeTab: (params: any) => void;
    renderIcon(icon: any): import("lit-element").TemplateResult;
    static styles: import("lit-element").CSSResult;
}
