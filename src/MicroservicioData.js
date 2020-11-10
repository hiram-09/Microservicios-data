import { html, css, LitElement } from 'lit-element';

export class MicroservicioData extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--microservicio-data-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      url: { type: String },
    };
  }

  constructor() {
    super();
    this.url = 'http://localhost:8090/api/items/listar';
  }

  firstUpdated(){
    fetch(this.url)
      .then(response => response.json())
      .then(this.dispatchEvent(data => new CustomEvent('listarItems', {lista: { items: data}})));
  }

  render() {
    return html``;
  }
}
