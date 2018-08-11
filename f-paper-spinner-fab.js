/**
Combines [`<paper-spinner-lite>`](https://elements.polymer-project.org/elements/paper-spinner?active=paper-spinner-lite)
and [`<paper-fab>`](https://elements.polymer-project.org/elements/paper-fab)

Example:

    <link rel="import" href="bower_components/iron-icons/iron-icons.html">
    <link rel="import" href="bower_components/f-paper-spinner-fab/f-paper-spinner-fab.html">

    <f-paper-spinner-fab icon="cancel" active></f-paper-spinner-fab>

@element f-paper-spinner-fab
@demo demo/index.html
*/
import {Polymer} from '@polymer/polymer/polymer-legacy.js';

import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-fab/paper-fab.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="f-paper-spinner-fab">
  <template>
    <style>
      :host { @apply(--layout-flex-auto); }

      .container {
        @apply(--layout-relative);
        width: 100%;
        height: 100%;
        min-width: 5em;
        min-height: 5em;
      }

      .container &gt; * {
        @apply(--layout-fit);
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
      }

      paper-spinner-lite {
        --paper-spinner-stroke-width: 0.25em;
        width: 5em;
        height: 5em;
        align-self: center;
      }

      paper-fab {
        width: 4.5em;
        height: 4.5em;
      }
    </style>
    <div class="container">
      <paper-spinner-lite active="[[active]]" alt="[[alt]]"></paper-spinner-lite>
      <paper-fab icon="[[icon]]" label="[[label]]" src="[[src]]" disabled="{{disabled}}" focused="{{focused}}" noink="[[noink]]" pointer-down="{{pointerDown}}" pressed="{{pressed}}"></paper-fab>
    </div>
  </template>
  </dom-module>`;

  document.head.appendChild($_documentContainer.content);
  Polymer({
    is: 'f-paper-spinner-fab',

    properties: {
      /**
       * Displays the spinner.
       */
      active: {
        type: Boolean,
        value: false
      },
      /**
       * Alternative text content for accessibility support. If alt is present,
       * it will add an aria-label whose content matches alt when active.
       * If alt is not present, it will default to 'loading' as the alt value.
     */
    alt: {
      type: String,
      value: 'loading'
    },
    /**
     * Specifies the icon name or index
     * in the set of icons available in the icon's icon set.
     * If the icon property is specified, the src property should not be.
     */
    icon: String,
    /**
     * The label displayed in the badge.
     * The label is centered, and ideally should have very few characters.
     */
    label: String,
    /**
     * The URL of an image for the icon.
     * If the src property is specified, the icon property should not be.
     */
    src: String,
    /**
     * If true, the user cannot interact with this element.
     */
    disabled: {
      type: Boolean,
      value: false,
      notify: true
    },
    /**
     * If true, the element currently has focus.
     *
     * readOnly
     */
    focused: {
      type: Boolean,
      notify: true
    },
    /**
     * If true, the element will not produce a ripple effect
     * when interacted with via the pointer.
     */
    noink: Boolean,
    /**
     * True if the element is currently being pressed by a "pointer,"
     * which is loosely defined as mouse
     * or touch input (but specifically excluding keyboard input).
     *
     * readOnly
     */
    pointerDown: {
      type: Boolean,
      notify: true
    },
    /**
     * If true, the user is currently holding down the button.
     *
     * readOnly
     */
    pressed: {
      type: Boolean,
      notify: true
    }
  }
});
