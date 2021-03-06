import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

class DreamConfig extends connect(store)(LitElement) {

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 32pt;
          color: green;
        }
      `
    ];
  }

  render() {
    return html`Hello World`;
  }
}

window.customElements.define('dream-config', DreamConfig);
