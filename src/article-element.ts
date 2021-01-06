import { LitElement, html, property } from 'lit-element'

class ArticleElement extends LitElement 
{
  @property({ type: String })
  text = ''

  render() {
    return html`
      <article>${this.text}</article>
    `
  }
}

customElements.define('article-element', ArticleElement)