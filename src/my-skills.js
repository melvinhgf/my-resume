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

class MySkills extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Skills</h1>
        <b>Languang Proficiency</b>
        <ul>
        <li>Speaking: English and Chinese</li>
        <li>Reading: English and Chinese</li>
        <li>Writing: English</li>
        </ul>
        <b>Computer Literacy</b>
        <ul>
        <li>General: Windows and Mac (including iOS)</li>
        <li>Work Applications: Windows and Mac (including iOS)</li>
        <li>Programming: Basic (eg HTML, CSS, Javerscripts etc)</li>
        </ul>
        <b>Others</b>
        <ul>
        <li>Social media marking (endorsed by SkillsFuture Singapore and SHATEC)</li>
        <li>Customer service in hospitality (endorsed by SkillsFuture Singapore and SHATEC)</li>
        <li>Basic Open Waters Driving Certification (issued by National Association of Underwater Instructors)</li>
        <li>Powered Pleasure Craft Driving License (issued by Maritime and Port Authority of Singapore)</li>
        <li>Class 3 Driving License (issued by Republic of Singapore)</li>
        </ul>
      </div>
      
      <div class="card">
        <p><h1>National Awards</h1> <i>(in order of significance)</i></p>
        <p><b>National Youth Achievement Award (Gold)</b> (awarded by NYAA Council Singapore)</p>
        <p><b>National Service Medal</b> (awarded by Singapore Armed Forces)</p>
        <p><b>Good Service Medal</b> (awarded by Singapore Armed Forces)</p>
      </div>
    `;
  }
}

window.customElements.define('my-skills', MySkills);
