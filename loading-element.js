import { LitElement, html } from 'lit-element';
class LoadingElement extends LitElement {
    static get properties() {
        return {
            message: { type: String }
        };
    }
    constructor() {
        super();
        this.message = 'loading';
        this.addEventListener('stuff-loaded', (e) => { this.message = e.detail; });
        this.loadStuff();
    }
    render() {
        return html `
      <p>${this.message}</p>
    `;
    }
    loadStuff() {
        setInterval(() => {
            const loaded = new CustomEvent('stuff-loaded', {
                detail: 'Loading completed'
            });
            this.dispatchEvent(loaded);
        }, 3000);
    }
}
customElements.define('loading-element', LoadingElement);
//# sourceMappingURL=loading-element.js.map