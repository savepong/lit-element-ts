import { LitElement, html } from 'lit-element';
class ArticleElement extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        };
    }
    constructor() {
        super();
    }
    render() {
        return html `
      <article>${this.text}</article>
    `;
    }
}
customElements.define('article-element', ArticleElement);
//# sourceMappingURL=article-element.js.map