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

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Cookie Policy</h1>
<p>This cookie policy (&quot;Policy&quot;) describes what cookies are and how and they&#039;re being used by <a target="_blank" rel="nofollow" href="https://melvinhgf.business.site">our</a> website (&quot;Website&quot; or &quot;Service&quot;) and any of our related products and services (collectively, &quot;Services&quot;). This Policy is a legally binding agreement between you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and this Website operator (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). You should read this Policy so you can understand the types of cookies we use, the information we collect using cookies and how that information is used. It also describes the choices available to you regarding accepting or declining the use of cookies. For further information on how we use, store and keep your personal data secure, see our <a href="https://docs.melvinhgf.net/view1">Privacy Policies</a>.</p>
<h2>What are cookies?</h2>
<p>Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (through a &quot;session cookie&quot;) or for multiple repeat visits (using a &quot;persistent cookie&quot;).</p>
<p>Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser.</p>
<p>Persistent cookies are used to remember your preferences within our Website and remain on your desktop or mobile device even after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting the Website and Services.</p>
<p>Cookies may be set by the Website (&quot;first-party cookies&quot;), or by third parties, such as those who serve content or provide advertising or analytics services on the Website (&quot;third party cookies&quot;). These third parties can recognize you when you visit our website and also when you visit certain other websites. Click <a target="_blank" href="https://www.websitepolicies.com/blog/cookies">here</a> to learn more about cookies and how they work.</p>
<h2>What type of cookies do we use?</h2>
<h3>Necessary cookies</h3>
<p>Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our Website and using its features. For example, these cookies let us recognize that you have created an account and have logged into that account to access the content.</p>
<h3>Analytical cookies</h3>
<p>These cookies enable us and third party services to collect aggregated data for statistical purposes on how our visitors use the Website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the Website.</p>
<h3>Social media cookies</h3>
<p>Third party cookies from social media sites (such as Facebook, Twitter, etc) let us track social network users when they visit or use the Website and Services, or share content, by using a tagging mechanism provided by those social networks.</p>
<p>These cookies are also used for event tracking and remarketing purposes. Any data collected with these tags will be used in accordance with our and social networks’ privacy policies. We will not collect or share any personally identifiable information from the user.</p>
<h2>What are your cookie options?</h2>
<p>If you don’t like the idea of cookies or certain types of cookies, you can change your browser’s settings to delete cookies that have already been set and to not accept new cookies. Visit <a target="_blank" href="https://www.internetcookies.com" rel="noopener">internetcookies.com</a> to learn more about how to do this.</p>
<h2>Changes and amendments</h2>
<p>We reserve the right to modify this Policy or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do, we will post a notification on the main page of the Website. Continued use of the Website and Services after any such changes shall constitute your consent to such changes.</p>
<h2>Acceptance of this policy</h2>
<p>You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.</p>
<h2>Contacting us</h2>
<p>If you have any questions about this Policy, please contact us at support@melvinhgf.freshdesk.com.</p>
<p>This document was last updated on April 3, 2019</p>
       
         <!-- Cookie Consent by https://www.TermsFeed.com -->
<script type="text/javascript" src="//www.termsfeed.com/public/cookie-consent/4.0.0/cookie-consent.js" charset="UTF-8"></script>
<script type="text/javascript" charset="UTF-8">
document.addEventListener('DOMContentLoaded', function () {
cookieconsent.run({"notice_banner_type":"headline","consent_type":"express","palette":"light","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"website_name":"MELVINHGF.NET: Your Online Solutions Provider","website_privacy_policy_url":"https://www.termsfeed.com/live/dfff3e93-4e85-4b8d-9aa4-e6658c9b1c5d"});
});
</script>

<noscript>Cookie Consent by <a href="https://www.TermsFeed.com/" rel="nofollow noopener">TermsFeed</a></noscript>
<!-- End Cookie Consent -->
        
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
