class Modal extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    const template = document.querySelector("#wc-modal");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  attributeChangedCallback(name, oldValue, newValue){
    if (name === "opened") {
      if (this.hasAttribute("opened")) {
        this.shadowRoot.querySelector("#backdrop").style.opacity = 1;
        this.shadowRoot.querySelector("#backdrop").style.pointerEvents = "all";
        this.shadowRoot.querySelector("#modal").style.opacity = 1;
        this.shadowRoot.querySelector("#modal").style.pointerEvents = "all";

      }
    }
  }

  static get observedAttributes(){
    return ["opened"];
  }
}


customElements.define("basic-modal", Modal);
