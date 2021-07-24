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
<p>Melvin is an explorer of life, a person who loves to defeat challenges that come his way and climb new heights in life.</p>
<p>He loves - and equally capable of - interacting and exchanging ideas with people of all ages. He makes a patient and nurturing mentor who always brings an underdog's positive traits.</p>
<p>Melvin has high standards for things and expects everyone, including himself, to meet them.</p>
<p>Years of overcoming challenges in life, Melvin's set his  mission in life as <quote>“Using Life To Influence Lives”</quote>. He is determined to live out his mission.</p> 

</div>
    `;
  }
}

window.customElements.define('my-intro', MyIntro)
