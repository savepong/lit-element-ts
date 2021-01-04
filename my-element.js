import { LitElement, html } from 'lit-element';
class MyElement extends LitElement {
    static get properties() {
        return {
            myString: { type: String },
            myArray: { type: Array },
            myBool: { type: Boolean }
        };
    }
    constructor() {
        super();
        this.myString = 'Hello World';
        this.myArray = ['an', 'array', 'of', 'test', 'data'];
        this.myBool = true;
        this.prop1 = 'mydiv';
        this.prop2 = true;
        this.prop3 = 'The Cat';
    }
    render() {
        return html `
      <!-- text binding -->
      <p>${this.myString}</p>

      <!-- attribute binding -->
      <div id="${this.prop1}">Attribute binding</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop2}"/>
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input type="text" .value="${this.prop3}"/>
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
customElements.define('my-element', MyElement);
//# sourceMappingURL=my-element.js.map