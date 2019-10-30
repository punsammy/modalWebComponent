class Modal extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    const template = document.querySelector("#wc-modal");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("basic-modal", Modal);
