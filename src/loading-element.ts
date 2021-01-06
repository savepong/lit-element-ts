import { LitElement, html, property } from 'lit-element'

class LoadingElement extends LitElement
{
  @property({ type: String })
  message = 'loading';

  constructor() {
    super();
    this.addEventListener('stuff-loaded', () => { this.message = '' })
    this.loadStuff();
  }
  render() {
    return html`
      <p>${this.message}</p>
    `
  }
  loadStuff() {
    setInterval(() => {
      const loaded = new CustomEvent('stuff-loaded', {
        detail: 'Loading completed'
      })
      this.dispatchEvent(loaded)
    }, 3000)
  }
}

customElements.define('loading-element', LoadingElement)