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

class MyWork extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Work Experiences</h1>
        <b>Post-Graduate Diploma in Education (with Credit), 2005</b>
        <ul>
        <li>National Institute of Education, Nanyang Technological Univeristy, Singapore</li>
        <li>Major: Teaching of Secondary Science (Biology and Chemistry)</li>
        </ul>
        <b>Bachelor of Science with Second Class Honours (Lower Division), 2004</b>
        <ul>
        <li>University Scholars Programme, National Univeristy of Singapore, Singapore</li>
        <li>Major: Biological Sciences (Molecular Biology and Evolutionary Biology)</li>
        </ul>
        <b>Singapore-Cambridge General Certificate in Education A-Level, 1997</b>
        <ul>
        <li>Anderson Junior College, Singapore</li>
        <li>Distinctions: 2"A" + 1"AO"</li>
        <li>General Paper: B3</li>
        </ul>
      </div>
    `;
  }
}

window.customElements.define('my-work', MyWork);
