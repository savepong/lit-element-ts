var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from 'lit-element';
class MyElement extends LitElement {
    constructor() {
        super(...arguments);
        this.myString = 'Hello World';
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
        this.myBool = true;
        this.myProp1 = 'myDiv';
        this.myProp2 = true;
        this.myProp3 = 'The Cat';
    }
    static get properties() {
        return {
            myString: { type: String },
            myArray: { type: Array },
            myBool: { type: Boolean }
        };
    }
    render() {
        return html `
      <!-- text binding -->
      <p>${this.myString}</p>

      <!-- attribute binding -->
      <div id="${this.myProp1}">Attribute binding</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.myProp2}"/>
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input type="text" .value="${this.myProp3}"/>
      </div>

      <!-- event handler binding -->
      <div>
        event handler binding
        <button @click="${this.clickHandler}">Click</button>
      </div>

      <!-- loops -->
      <ul>
        ${this.myArray.map(i => html `<li>${i}</li>`)}
      </ul>

      <!-- conditionals -->
      ${this.myBool
            ? html `<p>Render some HTML if myBool is true</p>`
            : html `<p>Render some other HTML if myBool is false</p>`}

      <!-- slot -->
      <slot></slot>
      <slot name="other"></slot>
    `;
    }
    clickHandler(e) {
        alert(e.type);
    }
}
__decorate([
    property({ type: String })
], MyElement.prototype, "myString", void 0);
__decorate([
    property({ type: Array })
], MyElement.prototype, "myArray", void 0);
__decorate([
    property({ type: Boolean })
], MyElement.prototype, "myBool", void 0);
__decorate([
    property()
], MyElement.prototype, "myProp1", void 0);
customElements.define('my-element', MyElement);
//# sourceMappingURL=my-element.js.map