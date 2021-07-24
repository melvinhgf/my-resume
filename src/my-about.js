/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyAbout extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      
      <div class="card">
        <h1>About</h1>
        <p>Full Name: <b>Ho Guang Fu</b></p>
        <p>Alias: <b>Melvin Ho</b></p>
        <p>Current Location: <b>Sengkang, Singapore</b></p>
        <p>Citizenship: <b>Singaporean</b></p>
        <p>Academic Qualifications: <b>Graduate</b></p>
        <p>Marital Status: <b><i>Please contact me directly.</i></b></p>
        <p>Contacts: <b><i>Please use the Contact form.</i></b></p>
        <p>Social: <a href="https://facebook.com/melvinhgf" target="_blank"><b>Facebook</b></a> and <a href="https://linkedin.com/in/melvinhgf" target="_blank" ><b>LinkedIn</b></a></p>
      </div>
    `;
  }
}

window.customElements.define('my-about', MyAbout);
