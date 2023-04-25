/**
 * Usage:
 *
 *  <gas-pedal></gas-pedal>
 *
 */
class GasPedal extends HTMLElement {
  get _root() {
    return this.shadowRoot || this;
  }

  constructor() {
    super();
    const self = this;

    this.state = {};
    if (!this.props) {
      this.props = {};
    }

    this.componentProps = ["id", "img"];

    // used to keep track of all nodes created by show/for
    this.nodesToDestroy = [];
    // batch updates
    this.pendingUpdate = false;

    // Event handler for 'touchstart' event on button-gas-pedal-1
    this.onButtonGasPedal1Touchstart = (event) => {
      accelerate;
    };

    // Event handler for 'touchend' event on button-gas-pedal-1
    this.onButtonGasPedal1Touchend = (event) => {
      decelerate;
    };

    if (undefined) {
      this.attachShadow({ mode: "open" });
    }
  }

  destroyAnyNodes() {
    // destroy current view template refs before rendering again
    this.nodesToDestroy.forEach((el) => el.remove());
    this.nodesToDestroy = [];
  }

  connectedCallback() {
    this.getAttributeNames().forEach((attr) => {
      const jsVar = attr.replace(/-/g, "");
      const regexp = new RegExp(jsVar, "i");
      this.componentProps.forEach((prop) => {
        if (regexp.test(prop)) {
          const attrValue = this.getAttribute(attr);
          if (this.props[prop] !== attrValue) {
            this.props[prop] = attrValue;
          }
        }
      });
    });

    this._root.innerHTML = `
      <div data-el="div-gas-pedal-1">
        <button type="button" data-el="button-gas-pedal-1">
          <img alt="Gas Pedal" data-el="img-gas-pedal-1" />
        </button>
      </div>
      
      <style>
        #gasPedal {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>`;
    this.pendingUpdate = true;

    this.render();
    this.onMount();
    this.pendingUpdate = false;
    this.update();
  }

  onMount() {}

  onUpdate() {}

  update() {
    if (this.pendingUpdate === true) {
      return;
    }
    this.pendingUpdate = true;
    this.render();
    this.onUpdate();
    this.pendingUpdate = false;
  }

  render() {
    // re-rendering needs to ensure that all nodes generated by for/show are refreshed
    this.destroyAnyNodes();
    this.updateBindings();
  }

  updateBindings() {
    this._root.querySelectorAll("[data-el='div-gas-pedal-1']").forEach((el) => {
      el.setAttribute("id", this.props.id);
    });

    this._root
      .querySelectorAll("[data-el='button-gas-pedal-1']")
      .forEach((el) => {
        el.removeEventListener("touchstart", this.onButtonGasPedal1Touchstart);
        el.addEventListener("touchstart", this.onButtonGasPedal1Touchstart);
        el.removeEventListener("touchend", this.onButtonGasPedal1Touchend);
        el.addEventListener("touchend", this.onButtonGasPedal1Touchend);
      });

    this._root.querySelectorAll("[data-el='img-gas-pedal-1']").forEach((el) => {
      el.setAttribute("src", this.props.img);
    });
  }

  // Helper to render content
  renderTextNode(el, text) {
    const textNode = document.createTextNode(text);
    if (el?.scope) {
      textNode.scope = el.scope;
    }
    if (el?.context) {
      textNode.context = el.context;
    }
    el.after(textNode);
    this.nodesToDestroy.push(el.nextSibling);
  }
}

customElements.define("gas-pedal", GasPedal);