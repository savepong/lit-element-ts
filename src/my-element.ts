import { LitElement, customElement, html, property, css } from 'lit-element'

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host p {
      color: blue;
    }
  `;

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
      <p class="prime">${this.myString}</p>

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

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}