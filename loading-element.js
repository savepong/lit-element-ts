var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from 'lit-element';
class LoadingElement extends LitElement {
    constructor() {
        super();
        this.message = 'loading';
        this.addEventListener('stuff-loaded', () => { this.message = ''; });
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
__decorate([
    property({ type: String })
], LoadingElement.prototype, "message", void 0);
customElements.define('loading-element', LoadingElement);
//# sourceMappingURL=loading-element.js.map