import { mountReactApp } from './main.jsx';
import indexStyle from './index.css?inline';


class newMFE extends HTMLElement {
  connectedCallback() {
    const mountable = document.createElement('div');
    mountable.id = 'mfe-root';
    this.attachShadow({ mode: 'open' }).appendChild(mountable);

    this.addStyles();

    this.shadowRoot.appendChild(mountable);
    mountReactApp({ element: mountable, options: this.options });
  }

  addStyles() {
    const id = 'react-16-mfe-style';
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(indexStyle));
    this.shadowRoot?.appendChild(style);
  }
}

customElements.define('new-react-16-mfe', newMFE);
