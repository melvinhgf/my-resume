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
        <p>Marital Status: <i>Please contact me directly.</i></p>
        <p>Contacts: <i>Please use the Contact form</b></p>
        <p>Social: <a href="https://facebook.com/melvinhgf" target="_blank" text-decoration="none" >Facebook</a> and <a href="https://linkedin.com/in/melvinhgf" target="_blank" text-decoration="none" >LinkedIn</a></p>
        
        <p>Melvin is an explorer of life, a person who loves to defeat challenges that come his way and climb new heights in life.</p>
        <p>He loves - and equally capable of - interacting and exchanging ideas with people of all ages. He makes a patient and nurturing mentor who always brings an underdog's positive traits.</p>
        <p>Melvin has high standards for things and expects everyone, including himself, to meet them.</p>
        <p>Years of overcoming challenges have formed Melvin's mission in life: <b><i>“Using Life To Influence Lives”</i></b>. He is determined to live out this mission.</p> 
      </div>
    `;
  }
}

window.customElements.define('my-about', MyAbout);
