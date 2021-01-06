var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from 'lit-element';
import './article-element';
function headerTemplate(title) {
    return html `<header>${title}</header>`;
}
function articleTemplate(text) {
    return html `<article-element text="${text}"></article-element>`;
}
function footerTemplate() {
    return html `<footer>Your footer here.</footer>`;
}
class MyPage extends LitElement {
    constructor() {
        super(...arguments);
        this.article = {
            title: 'My Nifty Article',
            text: 'Some witty text.',
            attribute: false,
        };
    }
    render() {
        return html `
      ${headerTemplate(this.article.title)}
      ${articleTemplate(this.article.text)}
      ${footerTemplate()}
    `;
    }
}
__decorate([
    property({ type: Object })
], MyPage.prototype, "article", void 0);
customElements.define('my-page', MyPage);
//# sourceMappingURL=my-page.js.map