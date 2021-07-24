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

class MyIntro extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="card">
<h1>Introduction</h1>
<p>Use this form to reach out to us regarding your questions and concerns. For reporting purposes and data subject requests, please use our <a href="./view5">DSAR</a> form.</p>
<iframe src="https://www.cognitoforms.com/f/YtcYQljz2kStKCpk9voQJw?id=1" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="1042" width="100%"></iframe>
<script src="https://www.cognitoforms.com/scripts/embed.js"></script>
</div>
    `;
  }
}

window.customElements.define('my-intro', MyIntro)
