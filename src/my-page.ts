import { LitElement, html, property } from 'lit-element'
import './article-element'

function headerTemplate(title: string) {
  return html`<header>${title}</header>`
}

function articleTemplate(text: string) {
  return html`<article-element text="${text}"></article-element>`
}

function footerTemplate() {
  return html`<footer>Your footer here.</footer>`
}

class MyPage extends LitElement
{

  @property({ type: Object })
  article = {
    title: 'My Nifty Article',
    text: 'Some witty text.',
    attribute: false,
  }

  render() {
    return html`
      ${headerTemplate(this.article.title)}
      ${articleTemplate(this.article.text)}
      ${footerTemplate()}
    `
  }
}

customElements.define('my-page', MyPage)