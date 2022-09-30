/* eslint-disable no-plusplus */
import { html, LitElement, css } from 'lit';
import { signal, computed } from '@preact/signals-core';
import { BlockquoteMixinSignals } from '../index.js';

const count = signal(0);

export class SignalExample extends BlockquoteMixinSignals(LitElement) {
  static get is() {
    return 'signal-example';
  }

  static styles = css`
    :host {
      display: block;
      border: solid 1px gainsboro;
      padding: 0.5rem;
      margin-bottom: 1rem;
      min-width: calc(50% - 1.5rem);
    }
  `;

  static get properties() {
    return {
      /**
       * The heading to say "Hello" to.
       * @type {string}
       */
      heading: { type: String },

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.heading = 'Hey there';
    this.counter = 1;
  }

  get #product() {
    return computed(() => count.value * this.counter);
  }

  render() {
    return html`
      <h2 style="font-weight: 400; margin-top:0">${this.heading}</h2>
      <p>
        Signal <strong>count</strong>: ${count} x Lit <strong>counter</strong>: ${this.counter} =
        ${this.#product}
        <button @click=${() => count.value++}>++</button>
      </p>
      <p>
        Lit <strong>counter</strong>: ${this.counter}
        <button @click=${() => this.counter++}>++</button>
      </p>
    `;
  }
}

window.customElements.define(SignalExample.is, SignalExample);
