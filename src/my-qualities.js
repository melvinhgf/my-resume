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

class MyQualities extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Qualities</h1>
        <h2>Prohibited Activities and Uses</h2>
<p>You may not use the Website and Services to publish content or engage in activity that is illegal under applicable law, that is harmful to others, or that would subject us to liability, including, without limitation, in connection with any of the following, each of which is prohibited under this Policy:</p>
<ul>
<li>Distributing malware or other malicious code.</li>
<li>Disclosing sensitive personal information about others.</li>
<li>Collecting, or attempting to collect, personal information about third parties without their knowledge or consent.</li>
<li>Distributing pornography or adult related content.</li>
<li>Promoting or facilitating prostitution or any escort services.</li>
<li>Hosting, distributing or linking to child pornography or content that is harmful to minors.</li>
<li>Promoting or facilitating gambling, violence, terrorist activities or selling weapons or ammunition.</li>
<li>Engaging in the unlawful distribution of controlled substances, drug contraband or prescription medications.</li>
<li>Managing payment aggregators or facilitators such as processing payments on behalf of other businesses or charities.</li>
<li>Facilitating pyramid schemes or other models intended to seek payments from public actors.</li>
<li>Threatening harm to persons or property or otherwise harassing behavior.</li>
<li>Infringing the intellectual property or other proprietary rights of others.</li>
<li>Facilitating, aiding, or encouraging any of the above activities through the Website and Services.</li>
</ul>
      </div>
    `;
  }
}

window.customElements.define('my-qualities', MyQualities);
