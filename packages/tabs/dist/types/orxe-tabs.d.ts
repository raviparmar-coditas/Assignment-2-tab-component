import { LitElement } from "lit-element";
export default class OrxeTabs extends LitElement {
    tabs: Array<string>;
    static get properties(): {
        tabs: {
            type: ArrayConstructor;
        };
    };
    constructor();
    render(): import("lit-element").TemplateResult;
    updated(): void;
    changetab: (params: any) => void;
    static styles: import("lit-element").CSSResult;
}
