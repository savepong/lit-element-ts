import { LitElement, html, property } from 'lit-element'

class MyElement extends LitElement {
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean }
    }
  }

  @property({ type: String })
  myString = 'Hello World';

  @property({ type: Array })
  myArray = ['an', 'array', 'of', 'test', 'data'];

  @property({ type: Boolean })
  myBool = true;

  @property()
  myProp1 = 'myDiv';
  myProp2 = true;
  myProp3 = 'The Cat';

  render() {
    return html`
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
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>

      <!-- conditionals -->
      ${
        this.myBool
        ? html`<p>Render some HTML if myBool is true</p>`
        : html`<p>Render some other HTML if myBool is false</p>`
      }

      <!-- slot -->
      <slot></slot>
      <slot name="other"></slot>
    `;
  }

  clickHandler(e: { type: any; }) {
    alert(e.type);
  }
}

customElements.define('my-element', MyElement)