import { LitElement } from 'lit-element';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    myString: string;
    myArray: string[];
    myBool: boolean;
    myProp1: string;
    myProp2: boolean;
    myProp3: string;
    render(): import("lit-element").TemplateResult;
    clickHandler(e: {
        type: any;
    }): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=my-element.d.ts.map