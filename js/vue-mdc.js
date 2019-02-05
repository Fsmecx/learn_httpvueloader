/*!
 * vue-mdc v0.0.10
 * (c) 2017 Eduardo San Martin Morote
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.VueMdc = {})));
}(this, (function (exports) { 'use strict';

'use strict';
var decamelize = function (str, sep) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	sep = typeof sep === 'undefined' ? '_' : sep;

	return str
		.replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
		.toLowerCase();
};

function propsToClasses (base, props) {
  return Object.keys(props).reduce(function (classes, key) {
    if (props[key]) { classes += " " + base + "--" + (decamelize(key, '-')); }
    return classes
  }, base)
}

var MdcButton = {
  functional: true,

  props: {
    dense: Boolean,
    raised: Boolean,
    compact: Boolean,
    primary: Boolean,
    accent: Boolean,
    themeDark: Boolean,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var props = ref.props;
    var children = ref.children;

    var staticClass = propsToClasses('mdc-button', props);
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('button', Object.assign({}, data), children)
  },
};

var CardPrimary = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = 'mdc-card__primary';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('section', Object.assign({}, data), children)
  },
};

var CardTitle = {
  functional: true,

  props: {
    large: Boolean,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var props = ref.props;
    var staticClass = propsToClasses('mdc-card__title', props);
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('h1', Object.assign({}, data), children)
  },
};

var CardSubtitle = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = 'mdc-card__subtitle';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('h2', Object.assign({}, data), children)
  },
};

var CardActions = {
  functional: true,

  props: {
    vertical: Boolean,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var props = ref.props;

    var staticClass = propsToClasses('mdc-card__actions', props);
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    children.forEach(function (child) {
      if (child.tag === 'button') {
        child.data.staticClass += ' mdc-card__action';
      }
    });
    return h('section', Object.assign({}, data), children)
  },
};

var CardMedia = {
  functional: true,

  props: {
    media: String,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var props = ref.props;

    var staticClass = 'mdc-card__media';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    data.style = data.style || {};
    data.style['background-image'] = data.style['background-image'] || ("url(" + (props.media) + ")");

    return h('section', Object.assign({}, data), children)
  },
};

var CardSupportingText = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = 'mdc-card__supporting-text';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('section', Object.assign({}, data), children)
  },
};

var Card = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-card",class:_vm.cardClasses},[(_vm.media)?_c('card-media',{staticClass:"mdc-card__media--default",style:(_vm.mediaStyle),attrs:{"media":_vm.media}},[_vm._t("media")],2):_vm._e(),_vm._v(" "),(_vm.title || _vm.subtitle || _vm.$slots.primary)?_c('card-primary',{staticClass:"mdc-card__primary"},[_vm._t("primary",[(_vm.title)?_c('card-title',{attrs:{"large":""}},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),(_vm.subtitle)?_c('card-subtitle',[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()])],2):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.supportingText || _vm.$slots.supportingText)?_c('card-supporting-text',[_vm._t("supporting-text",[_vm._v(_vm._s(_vm.supportingText))])],2):_vm._e(),_vm._v(" "),(_vm.$slots.actions)?_c('card-actions',[_vm._t("actions")],2):_vm._e()],2)},staticRenderFns: [],
  props: {
    title: String,
    subtitle: String,
    supportingText: String,
    media: String,
    mediaHeight: {
      type: String,
      default: '12.313rem',
    },
    themeDark: Boolean,
  },

  components: {
    CardActions: CardActions,
    CardTitle: CardTitle,
    CardSubtitle: CardSubtitle,
    CardMedia: CardMedia,
    CardSupportingText: CardSupportingText,
    CardPrimary: CardPrimary,
  },

  computed: {
    mediaStyle: function mediaStyle () {
      return {
        height: this.mediaHeight,
      }
    },
    cardClasses: function cardClasses () {
      return {
        'mdc-card--theme-dark': this.themeDark,
      }
    },
  },
};

var CardHorizontalBlock = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = 'mdc-card__horizontal-block';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('div', Object.assign({}, data), children)
  },
};

var Checkbox = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mdc-checkbox"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"mdc-checkbox__native-control",attrs:{"type":"checkbox","disabled":_vm.disabled,"id":_vm.id},domProps:{"value":_vm.value,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.value)>-1:(_vm.model)},on:{"__c":function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]));}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.model=$$c;}}}}),_vm._v(" "),_c('div',{staticClass:"mdc-checkbox__background"},[_c('svg',{staticClass:"mdc-checkbox__checkmark",attrs:{"version":"1.1","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","xml:space":"preserve"}},[_c('path',{staticClass:"mdc-checkbox__checkmark__path",attrs:{"fill":"none","stroke":"white","d":"M1.73,12.91 8.1,19.28 22.79,4.59"}})]),_vm._v(" "),_c('div',{staticClass:"mdc-checkbox__mixedmark"})])])},staticRenderFns: [],
  model: {
    prop: 'checked',
    event: 'change',
  },

  props: {
    value: {
      required: false,
    },
    checked: [Array, Boolean],
    disabled: [Boolean, String],
    id: String,
  },

  computed: {
    model: {
      get: function get () {
        return this.checked
      },
      set: function set (check) {
        this.$emit('change', check);
      },
    },
  },
};

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
var MDCFoundation = function MDCFoundation(adapter) {
  if ( adapter === void 0 ) adapter = {};

  /** @protected {!A} */
  this.adapter_ = adapter;
};

var staticAccessors = { cssClasses: { configurable: true },strings: { configurable: true },numbers: { configurable: true },defaultAdapter: { configurable: true } };

staticAccessors.cssClasses.get = function () {
  // Classes extending MDCFoundation should implement this method to return an object which exports every
  // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
  return {};
};

/** @return enum{strings} */
staticAccessors.strings.get = function () {
  // Classes extending MDCFoundation should implement this method to return an object which exports all
  // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
  return {};
};

/** @return enum{numbers} */
staticAccessors.numbers.get = function () {
  // Classes extending MDCFoundation should implement this method to return an object which exports all
  // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
  return {};
};

/** @return {!Object} */
staticAccessors.defaultAdapter.get = function () {
  // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
  // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
  // validation.
  return {};
};

MDCFoundation.prototype.init = function init () {
  // Subclasses should override this method to perform initialization routines (registering events, etc.)
};

MDCFoundation.prototype.destroy = function destroy () {
  // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
};

Object.defineProperties( MDCFoundation, staticAccessors );

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template F
 */
var MDCComponent = function MDCComponent(root, foundation) {
  var args = [], len = arguments.length - 2;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 2 ];

  if ( foundation === void 0 ) foundation = undefined;
  /** @protected {!Element} */
  this.root_ = root;
  (ref = this).initialize.apply(ref, args);
  // Note that we initialize foundation here and not within the constructor's default param so that
  // this.root_ is defined and can be used within the foundation class.
  /** @protected {!F} */
  this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
  this.foundation_.init();
  this.initialSyncWithDOM();
  var ref;
};

MDCComponent.attachTo = function attachTo (root) {
  // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
  // returns an instantiated component with its root set to that element. Also note that in the cases of
  // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
  // from getDefaultFoundation().
  return new MDCComponent(root, new MDCFoundation());
};

MDCComponent.prototype.initialize = function initialize (/* ...args */) {
  // Subclasses can override this to do any additional setup work that would be considered part of a
  // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
  // initialized. Any additional arguments besides root and foundation will be passed in here.
};

/**
 * @return {!F} foundation
 */
MDCComponent.prototype.getDefaultFoundation = function getDefaultFoundation () {
  // Subclasses must override this method to return a properly configured foundation class for the
  // component.
  throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
    'foundation class');
};

MDCComponent.prototype.initialSyncWithDOM = function initialSyncWithDOM () {
  // Subclasses should override this method if they need to perform work to synchronize with a host DOM
  // object. An example of this would be a form control wrapper that needs to synchronize its internal state
  // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
  // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
};

MDCComponent.prototype.destroy = function destroy () {
  // Subclasses may implement this method to release any resources / deregister any listeners they have
  // attached. An example of this might be deregistering a resize event from the window object.
  this.foundation_.destroy();
};

/**
 * Wrapper method to add an event listener to the component's root element. This is most useful when
 * listening for custom events.
 * @param {string} evtType
 * @param {!Function} handler
 */
MDCComponent.prototype.listen = function listen (evtType, handler) {
  this.root_.addEventListener(evtType, handler);
};

/**
 * Wrapper method to remove an event listener to the component's root element. This is most useful when
 * unlistening for custom events.
 * @param {string} evtType
 * @param {!Function} handler
 */
MDCComponent.prototype.unlisten = function unlisten (evtType, handler) {
  this.root_.removeEventListener(evtType, handler);
};

/**
 * Fires a cross-browser-compatible custom event from the component root of the given type,
 * with the given data.
 * @param {string} evtType
 * @param {!Object} evtData
 * @param {boolean=} shouldBubble
 */
MDCComponent.prototype.emit = function emit (evtType, evtData, shouldBubble) {
    if ( shouldBubble === void 0 ) shouldBubble = false;

  var evt;
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent(evtType, {
      detail: evtData,
      bubbles: shouldBubble,
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }

  this.root_.dispatchEvent(evt);
};

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel',
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel',
};

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCDialogFoundation = (function (MDCFoundation) {
  function MDCDialogFoundation(adapter) {
    var this$1 = this;

    MDCFoundation.call(this, Object.assign(MDCDialogFoundation.defaultAdapter, adapter));
    this.isOpen_ = false;
    this.componentClickHandler_ = function (evt) {
      if (this$1.adapter_.eventTargetHasClass(evt.target, cssClasses.BACKDROP)) {
        this$1.cancel(true);
      }
    };
    this.dialogClickHandler_ = function (evt) { return this$1.handleDialogClick_(evt); };
    this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this$1.cancel(true);
      }
    };
    this.transitionEndHandler_ = function (evt) { return this$1.handleTransitionEnd_(evt); };
  }

  if ( MDCFoundation ) MDCDialogFoundation.__proto__ = MDCFoundation;
  MDCDialogFoundation.prototype = Object.create( MDCFoundation && MDCFoundation.prototype );
  MDCDialogFoundation.prototype.constructor = MDCDialogFoundation;

  var staticAccessors = { cssClasses: { configurable: true },strings: { configurable: true },defaultAdapter: { configurable: true } };

  staticAccessors.cssClasses.get = function () {
    return cssClasses;
  };

  staticAccessors.strings.get = function () {
    return strings;
  };

  staticAccessors.defaultAdapter.get = function () {
    return {
      addClass: function (/* className: string */) {},
      removeClass: function (/* className: string */) {},
      addBodyClass: function (/* className: string */) {},
      removeBodyClass: function (/* className: string */) {},
      eventTargetHasClass: function (/* target: EventTarget, className: string */) { return false; },
      registerInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      deregisterInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      registerSurfaceInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      deregisterSurfaceInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      registerDocumentKeydownHandler: function (/* handler: EventListener */) {},
      deregisterDocumentKeydownHandler: function (/* handler: EventListener */) {},
      registerTransitionEndHandler: function (/* handler: EventListener */) {},
      deregisterTransitionEndHandler: function (/* handler: EventListener */) {},
      notifyAccept: function () {},
      notifyCancel: function () {},
      trapFocusOnSurface: function () {},
      untrapFocusOnSurface: function () {},
      isDialog: function (/* el: Element */) { return false; },
      layoutFooterRipples: function () {},
    };
  };

  MDCDialogFoundation.prototype.destroy = function destroy () {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  };

  MDCDialogFoundation.prototype.open = function open () {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.close = function close () {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  };

  MDCDialogFoundation.prototype.isOpen = function isOpen () {
    return this.isOpen_;
  };

  MDCDialogFoundation.prototype.accept = function accept (shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.cancel = function cancel (shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  };

  MDCDialogFoundation.prototype.handleDialogClick_ = function handleDialogClick_ (evt) {
    var target = evt.target;
    if (this.adapter_.eventTargetHasClass(target, cssClasses.ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, cssClasses.CANCEL_BTN)) {
      this.cancel(true);
    }
  };

  MDCDialogFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_ (evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
        this.adapter_.layoutFooterRipples();
      } else {
        this.enableScroll_();
      }
    }
  };

  MDCDialogFoundation.prototype.disableScroll_ = function disableScroll_ () {
    this.adapter_.addBodyClass(cssClasses.SCROLL_LOCK);
  };

  MDCDialogFoundation.prototype.enableScroll_ = function enableScroll_ () {
    this.adapter_.removeBodyClass(cssClasses.SCROLL_LOCK);
  };

  Object.defineProperties( MDCDialogFoundation, staticAccessors );

  return MDCDialogFoundation;
}(MDCFoundation));

var tabbable = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]' ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        index: i,
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) { return false; }

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) { return isOffCache[i][1]; }
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) { return false; }

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) { return true; }

    return computedStyle.visibility === 'hidden';
  }
}

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) { return; }

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) { return; }

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) { return; }
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) { return; }
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) { return; }

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) { return; }

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) { return; }
    if (container.contains(e.target)) { return; }
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) { return; }
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') { e.target.blur(); }
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) { return tryFocus(firstTabbableNode); }

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) { return; }
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

var focusTrap_1 = focusTrap;

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createFocusTrapInstance(surfaceEl, acceptButtonEl, focusTrapFactory) {
  if ( focusTrapFactory === void 0 ) focusTrapFactory = focusTrap_1;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true,
  });
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function MDCRippleAdapter () {};

MDCRippleAdapter.prototype.browserSupportsCssVars = function browserSupportsCssVars () {};

/** @return {boolean} */
MDCRippleAdapter.prototype.isUnbounded = function isUnbounded () {};

/** @return {boolean} */
MDCRippleAdapter.prototype.isSurfaceActive = function isSurfaceActive () {};

/** @return {boolean} */
MDCRippleAdapter.prototype.isSurfaceDisabled = function isSurfaceDisabled () {};

/** @param {string} className */
MDCRippleAdapter.prototype.addClass = function addClass (className) {};

/** @param {string} className */
MDCRippleAdapter.prototype.removeClass = function removeClass (className) {};

/**
 * @param {string} evtType
 * @param {!Function} handler
 */
MDCRippleAdapter.prototype.registerInteractionHandler = function registerInteractionHandler (evtType, handler) {};

/**
 * @param {string} evtType
 * @param {!Function} handler
 */
MDCRippleAdapter.prototype.deregisterInteractionHandler = function deregisterInteractionHandler (evtType, handler) {};

/**
 * @param {!Function} handler
 */
MDCRippleAdapter.prototype.registerResizeHandler = function registerResizeHandler (handler) {};

/**
 * @param {!Function} handler
 */
MDCRippleAdapter.prototype.deregisterResizeHandler = function deregisterResizeHandler (handler) {};

/**
 * @param {string} varName
 * @param {?number|string} value
 */
MDCRippleAdapter.prototype.updateCssVariable = function updateCssVariable (varName, value) {};

/** @return {!ClientRect} */
MDCRippleAdapter.prototype.computeBoundingRect = function computeBoundingRect () {};

/** @return {{x: number, y: number}} */
MDCRippleAdapter.prototype.getWindowPageOffset = function getWindowPageOffset () {};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses$1 = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};

var strings$1 = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83,
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */
function supportsCssVariables(windowObj, forceRefresh) {
  if ( forceRefresh === void 0 ) forceRefresh = false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */


/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches' ].filter(function (p) { return p in HTMLElementPrototype; }).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x;
  var y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX;
  var normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @enum {string}
 */
var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
var MDCRippleFoundation = (function (MDCFoundation$$1) {
  function MDCRippleFoundation(adapter) {
    var this$1 = this;

    MDCFoundation$$1.call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.xfDuration_ = 0;

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'} ];

    /** @private {!ListenersType} */
    this.listeners_ = {
      activate: function (e) { return this$1.activate_(e); },
      deactivate: function (e) { return this$1.deactivate_(e); },
      focus: function () { return requestAnimationFrame(
        function () { return this$1.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); }
      ); },
      blur: function () { return requestAnimationFrame(
        function () { return this$1.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); }
      ); },
    };

    /** @private {!Function} */
    this.resizeHandler_ = function () { return this$1.layout(); };

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = function () {
      this$1.activationAnimationHasEnded_ = true;
      this$1.runDeactivationUXLogicIfReady_();
    };
  }

  if ( MDCFoundation$$1 ) MDCRippleFoundation.__proto__ = MDCFoundation$$1;
  MDCRippleFoundation.prototype = Object.create( MDCFoundation$$1 && MDCFoundation$$1.prototype );
  MDCRippleFoundation.prototype.constructor = MDCRippleFoundation;

  var prototypeAccessors = { isSupported_: { configurable: true } };
  var staticAccessors = { cssClasses: { configurable: true },strings: { configurable: true },numbers: { configurable: true },defaultAdapter: { configurable: true } };

  /**
   * @return {!ActivationStateType}
   */
  staticAccessors.cssClasses.get = function () {
    return cssClasses$1;
  };

  staticAccessors.strings.get = function () {
    return strings$1;
  };

  staticAccessors.numbers.get = function () {
    return numbers;
  };

  staticAccessors.defaultAdapter.get = function () {
    return {
      browserSupportsCssVars: function () {},
      isUnbounded: function () {},
      isSurfaceActive: function () {},
      isSurfaceDisabled: function () {},
      addClass: function (/* className: string */) {},
      removeClass: function (/* className: string */) {},
      registerInteractionHandler: function (/* evtType: string, handler: EventListener */) {},
      deregisterInteractionHandler: function (/* evtType: string, handler: EventListener */) {},
      registerResizeHandler: function (/* handler: EventListener */) {},
      deregisterResizeHandler: function (/* handler: EventListener */) {},
      updateCssVariable: function (/* varName: string, value: string */) {},
      computeBoundingRect: function () {},
      getWindowPageOffset: function () {},
    };
  };

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   */
  prototypeAccessors.isSupported_.get = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function defaultActivationState_ () {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  };

  MDCRippleFoundation.prototype.init = function init () {
    var this$1 = this;

    if (!this.isSupported_) {
      return;
    }
    this.addEventListeners_();

    var ref = MDCRippleFoundation.cssClasses;
    var ROOT = ref.ROOT;
    var UNBOUNDED = ref.UNBOUNDED;
    requestAnimationFrame(function () {
      this$1.adapter_.addClass(ROOT);
      if (this$1.adapter_.isUnbounded()) {
        this$1.adapter_.addClass(UNBOUNDED);
      }
      this$1.layoutInternal_();
    });
  };

  /** @private */
  MDCRippleFoundation.prototype.addEventListeners_ = function addEventListeners_ () {
    var this$1 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        this$1.adapter_.registerInteractionHandler(info[k], this$1.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  };

  /**
   * @param {Event} e
   * @private
   */
  MDCRippleFoundation.prototype.activate_ = function activate_ (e) {
    var this$1 = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var ref = this;
    var activationState = ref.activationState_;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(function () {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this$1.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this$1.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this$1.activationState_ = this$1.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.activate = function activate () {
    this.activate_(null);
  };

  /** @private */
  MDCRippleFoundation.prototype.animateActivation_ = function animateActivation_ () {
    var this$1 = this;

    var ref = MDCRippleFoundation.strings;
    var VAR_FG_TRANSLATE_START = ref.VAR_FG_TRANSLATE_START;
    var VAR_FG_TRANSLATE_END = ref.VAR_FG_TRANSLATE_END;
    var ref$1 = MDCRippleFoundation.cssClasses;
    var BG_ACTIVE_FILL = ref$1.BG_ACTIVE_FILL;
    var FG_DEACTIVATION = ref$1.FG_DEACTIVATION;
    var FG_ACTIVATION = ref$1.FG_ACTIVATION;
    var ref$2 = MDCRippleFoundation.numbers;
    var DEACTIVATION_TIMEOUT_MS = ref$2.DEACTIVATION_TIMEOUT_MS;

    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var ref$3 = this.getFgTranslationCoordinates_();
      var startPoint = ref$3.startPoint;
      var endPoint = ref$3.endPoint;
      translateStart = (startPoint.x) + "px, " + (startPoint.y) + "px";
      translateEnd = (endPoint.x) + "px, " + (endPoint.y) + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () { return this$1.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
  };

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function getFgTranslationCoordinates_ () {
    var ref = this;
    var activationState = ref.activationState_;
    var activationEvent = activationState.activationEvent;
    var wasActivatedByPointer = activationState.wasActivatedByPointer;

    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    var endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint: startPoint, endPoint: endPoint};
  };

  /** @private */
  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function runDeactivationUXLogicIfReady_ () {
    var this$1 = this;

    var ref = MDCRippleFoundation.cssClasses;
    var FG_DEACTIVATION = ref.FG_DEACTIVATION;
    var ref$1 = this.activationState_;
    var hasDeactivationUXRun = ref$1.hasDeactivationUXRun;
    var isActivated = ref$1.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        this$1.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };

  /** @private */
  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function rmBoundedActivationClasses_ () {
    var ref = MDCRippleFoundation.cssClasses;
    var BG_ACTIVE_FILL = ref.BG_ACTIVE_FILL;
    var FG_ACTIVATION = ref.FG_ACTIVATION;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  /**
   * @param {Event} e
   * @private
   */
  MDCRippleFoundation.prototype.deactivate_ = function deactivate_ (e) {
    var this$1 = this;

    var ref = this;
    var activationState = ref.activationState_;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      var evtObject = null;
      var state$1 = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
      requestAnimationFrame(function () { return this$1.animateDeactivation_(evtObject, state$1); });
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    var expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    var needsDeactivationUX = actualActivationType === expectedActivationType;
    var needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    var state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
    requestAnimationFrame(function () {
      if (needsDeactivationUX) {
        this$1.activationState_.hasDeactivationUXRun = true;
        this$1.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this$1.activationState_ = this$1.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.deactivate = function deactivate () {
    this.deactivate_(null);
  };

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  MDCRippleFoundation.prototype.animateDeactivation_ = function animateDeactivation_ (e, ref) {
    var wasActivatedByPointer = ref.wasActivatedByPointer;
    var wasElementMadeActive = ref.wasElementMadeActive;

    var ref$1 = MDCRippleFoundation.cssClasses;
    var BG_FOCUSED = ref$1.BG_FOCUSED;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.destroy = function destroy () {
    var this$1 = this;

    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    var ref = MDCRippleFoundation.cssClasses;
    var ROOT = ref.ROOT;
    var UNBOUNDED = ref.UNBOUNDED;
    requestAnimationFrame(function () {
      this$1.adapter_.removeClass(ROOT);
      this$1.adapter_.removeClass(UNBOUNDED);
      this$1.removeCssVars_();
    });
  };

  /** @private */
  MDCRippleFoundation.prototype.removeEventListeners_ = function removeEventListeners_ () {
    var this$1 = this;

    this.listenerInfos_.forEach(function (info) {
      Object.keys(info).forEach(function (k) {
        this$1.adapter_.deregisterInteractionHandler(info[k], this$1.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  };

  /** @private */
  MDCRippleFoundation.prototype.removeCssVars_ = function removeCssVars_ () {
    var this$1 = this;

    var strings = MDCRippleFoundation.strings;
    Object.keys(strings).forEach(function (k) {
      if (k.indexOf('VAR_') === 0) {
        this$1.adapter_.updateCssVariable(strings[k], null);
      }
    });
  };

  MDCRippleFoundation.prototype.layout = function layout () {
    var this$1 = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(function () {
      this$1.layoutInternal_();
      this$1.layoutFrame_ = 0;
    });
  };

  /** @private */
  MDCRippleFoundation.prototype.layoutInternal_ = function layoutInternal_ () {
    this.frame_ = this.adapter_.computeBoundingRect();

    var maxDim = Math.max(this.frame_.height, this.frame_.width);
    var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  };

  /** @private */
  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function updateLayoutCssVars_ () {
    var ref = MDCRippleFoundation.strings;
    var VAR_SURFACE_WIDTH = ref.VAR_SURFACE_WIDTH;
    var VAR_SURFACE_HEIGHT = ref.VAR_SURFACE_HEIGHT;
    var VAR_FG_SIZE = ref.VAR_FG_SIZE;
    var VAR_LEFT = ref.VAR_LEFT;
    var VAR_TOP = ref.VAR_TOP;
    var VAR_FG_SCALE = ref.VAR_FG_SCALE;

    this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, ((this.frame_.width) + "px"));
    this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, ((this.frame_.height) + "px"));
    this.adapter_.updateCssVariable(VAR_FG_SIZE, ((this.initialSize_) + "px"));
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, ((this.unboundedCoords_.left) + "px"));
      this.adapter_.updateCssVariable(VAR_TOP, ((this.unboundedCoords_.top) + "px"));
    }
  };

  Object.defineProperties( MDCRippleFoundation.prototype, prototypeAccessors );
  Object.defineProperties( MDCRippleFoundation, staticAccessors );

  return MDCRippleFoundation;
}(MDCFoundation));

var surfaceClass = 'mdc-ripple-surface';

var MATCHES;
function createAdapter (el) {
  MATCHES = MATCHES || getMatchesProperty(HTMLElement.prototype);
  return {
    browserSupportsCssVars: function () { return supportsCssVariables(window); },
    isSurfaceActive: /* istanbul ignore next */ function () { return el[MATCHES](':active'); },
    addClass: function (className) { return el.classList.add(className); },
    removeClass: function (className) { return el.classList.remove(className); },
    registerInteractionHandler: function (evtType, handler) { return el.addEventListener(evtType, handler); },
    deregisterInteractionHandler: function (evtType, handler) { return el.removeEventListener(evtType, handler); },
    registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
    deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
    updateCssVariable: function (varName, value) { return el.style.setProperty(varName, value); },
    computeBoundingRect: function () { return el.getBoundingClientRect(); },
    getWindowPageOffset: /* istanbul ignore next */ function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
  }
}

var ripple = {
  bind: function bind (el, binding) {
    if (!binding.modifiers.custom) {
      el.classList.add(surfaceClass);
    }
    var unbounded = binding.modifiers.unbounded;
    el.mdcRipple_ = new MDCRippleFoundation(
      Object.assign(createAdapter(el), {
        isUnbounded: function () { return unbounded; },
      })
    );
    el.mdcRipple_.init();
  },

  inserted: function inserted (el, binding, ref) {
    var componentInstance = ref.componentInstance;

    // TODO add test case
    // I have been unable to reproduce the bug outside
    // of vue-mdc docs, so it may have to deal with SSR
    if (componentInstance) {
      componentInstance.$on('hook:updated', function () {
        el.mdcRipple_.destroy();
        binding.def.bind(el, binding);
      });
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode, oldVnode) {
    // Always recreate for functional components
    if (vnode.functionalContext) {
      el.mdcRipple_.destroy();
      binding.def.bind(el, binding);
    }
  },

  unbind: function unbind (el, binding) {
    // istanbul ignore else
    if (el.mdcRipple_) {
      el.mdcRipple_.destroy();
      el.classList.remove(surfaceClass);
      delete el.mdcRipple_;
    }
  },
};

var Dialog = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"mdc-dialog",attrs:{"id":_vm.id,"role":"alertdialog","aria-labelledby":_vm.labelId,"aria-describedby":_vm.descriptionId}},[_c('div',{ref:"surface",staticClass:"mdc-dialog__surface"},[_c('header',{staticClass:"mdc-dialog__header"},[_vm._t("header",[_c('h2',{staticClass:"mdc-dialog__header__title",attrs:{"id":_vm.labelId}},[_vm._v(_vm._s(_vm.title))])])],2),_vm._v(" "),_c('section',{staticClass:"mdc-dialog__body",class:_vm.bodyClasses,attrs:{"id":_vm.descriptionId}},[_vm._t("default")],2),_vm._v(" "),_c('footer',{staticClass:"mdc-dialog__footer"},[_vm._t("footer",[(_vm.cancelText)?_c('MdcButton',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"mdc-dialog__footer__button mdc-dialog__footer__button--cancel"},[_vm._v(_vm._s(_vm.cancelText))]):_vm._e(),_vm._v(" "),_c('MdcButton',{directives:[{name:"ripple",rawName:"v-ripple"}],ref:"accept",staticClass:"mdc-dialog__footer__button mdc-dialog__footer__button--accept"},[_vm._v(_vm._s(_vm.acceptText || 'OK'))])])],2)]),_vm._v(" "),_c('div',{staticClass:"mdc-dialog__backdrop"})])},staticRenderFns: [],
  props: {
    scrollable: [Boolean, String],
    title: String,
    acceptText: String,
    cancelText: String,
    id: [String, Boolean],
  },

  computed: {
    bodyClasses: function bodyClasses () {
      return {
        'mdc-dialog__body--scrollable': this.scrollable,
      }
    },
    labelId: function labelId () {
      return this.id ? ((this.id) + "__label") : false
    },
    descriptionId: function descriptionId () {
      return this.id ? ((this.id) + "__description") : false
    },
  },

  mounted: function mounted () {
    var this$1 = this;

    this.focusTrap_ = createFocusTrapInstance(this.$refs.surface, this.$refs.accept);
    this.foundation = new MDCDialogFoundation({
      addClass: function (className) { return this$1.$el.classList.add(className); },
      removeClass: function (className) { return this$1.$el.classList.remove(className); },
      addBodyClass: function (className) { return document.body.classList.add(className); },
      removeBodyClass: function (className) { return document.body.classList.remove(className); },
      eventTargetHasClass: function (target, className) { return target.classList.contains(className); },
      registerInteractionHandler: function (evt, handler) { return this$1.$el.addEventListener(evt, handler); },
      deregisterInteractionHandler: function (evt, handler) { return this$1.$el.removeEventListener(evt, handler); },
      registerSurfaceInteractionHandler: function (evt, handler) { return this$1.$refs.surface.addEventListener(evt, handler); },
      deregisterSurfaceInteractionHandler: function (evt, handler) { return this$1.$refs.surface.removeEventListener(evt, handler); },
      registerDocumentKeydownHandler: function (handler) { return document.addEventListener('keydown', handler); },
      deregisterDocumentKeydownHandler: function (handler) { return document.removeEventListener('keydown', handler); },
      registerTransitionEndHandler: function (handler) { return this$1.$refs.surface.addEventListener('transitionend', handler); },
      deregisterTransitionEndHandler: function (handler) { return this$1.$refs.surface.removeEventListener('transitionend', handler); },
      notifyAccept: function () { return this$1.$emit('accepted'); },
      notifyCancel: function () { return this$1.$emit('canceled'); },
      isDialog: function (el) { return el === this$1.$refs.surface; },
      trapFocusOnSurface: function () { return this$1.focusTrap_.activate(); },
      untrapFocusOnSurface: function () { return this$1.focusTrap_.deactivate(); },
    });

    this.foundation.init();
  },

  beforeDestroy: function beforeDestroy () {
    this.foundation.destroy();
  },

  methods: {
    open: function open () {
      this.foundation.open();
    },
    close: function close () {
      this.foundation.close();
    },
  },

  components: { MdcButton: MdcButton },
  directives: { ripple: ripple },
};

var DialogHeaderTitle = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;

    var staticClass = 'mdc-dialog__header__title';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('h2', Object.assign({}, data), children)
  },
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FOCUSABLE_ELEMENTS$1 =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
  'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCSlidableDrawerFoundation = (function (MDCFoundation$$1) {
  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    var this$1 = this;

    MDCFoundation$$1.call(this, Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter));

    this.rootCssClass_ = rootCssClass;
    this.animatingCssClass_ = animatingCssClass;
    this.openCssClass_ = openCssClass;

    this.transitionEndHandler_ = function (evt) { return this$1.handleTransitionEnd_(evt); };

    this.inert_ = false;

    this.drawerClickHandler_ = function (evt) { return evt.stopPropagation(); };
    this.componentTouchStartHandler_ = function (evt) { return this$1.handleTouchStart_(evt); };
    this.componentTouchMoveHandler_ = function (evt) { return this$1.handleTouchMove_(evt); };
    this.componentTouchEndHandler_ = function (evt) { return this$1.handleTouchEnd_(evt); };
    this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this$1.close();
      }
    };
  }

  if ( MDCFoundation$$1 ) MDCSlidableDrawerFoundation.__proto__ = MDCFoundation$$1;
  MDCSlidableDrawerFoundation.prototype = Object.create( MDCFoundation$$1 && MDCFoundation$$1.prototype );
  MDCSlidableDrawerFoundation.prototype.constructor = MDCSlidableDrawerFoundation;

  var prototypeAccessors = { newPosition_: { configurable: true } };
  var staticAccessors = { defaultAdapter: { configurable: true } };

  staticAccessors.defaultAdapter.get = function () {
    return {
      addClass: function (/* className: string */) {},
      removeClass: function (/* className: string */) {},
      hasClass: function (/* className: string */) {},
      hasNecessaryDom: function () { return false; },
      registerInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      deregisterInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      registerDrawerInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      deregisterDrawerInteractionHandler: function (/* evt: string, handler: EventListener */) {},
      registerTransitionEndHandler: function (/* handler: EventListener */) {},
      deregisterTransitionEndHandler: function (/* handler: EventListener */) {},
      registerDocumentKeydownHandler: function (/* handler: EventListener */) {},
      deregisterDocumentKeydownHandler: function (/* handler: EventListener */) {},
      setTranslateX: function (/* value: number | null */) {},
      getFocusableElements: function () {},
      saveElementTabState: function (/* el: Element */) {},
      restoreElementTabState: function (/* el: Element */) {},
      makeElementUntabbable: function (/* el: Element */) {},
      notifyOpen: function () {},
      notifyClose: function () {},
      isRtl: function () { return false; },
      getDrawerWidth: function () { return 0; },
    };
  };

  MDCSlidableDrawerFoundation.prototype.init = function init () {
    var ROOT = this.rootCssClass_;
    var OPEN = this.openCssClass_;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error((ROOT + " class required in root element."));
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(("Required DOM nodes missing in " + ROOT + " component."));
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    } else {
      this.detabinate_();
      this.isOpen_ = false;
    }

    this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
  };

  MDCSlidableDrawerFoundation.prototype.destroy = function destroy () {
    this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  };

  MDCSlidableDrawerFoundation.prototype.open = function open () {
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.addClass(this.openCssClass_);
    this.retabinate_();
    // Debounce multiple calls
    if (!this.isOpen_) {
      this.adapter_.notifyOpen();
    }
    this.isOpen_ = true;
  };

  MDCSlidableDrawerFoundation.prototype.close = function close () {
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.removeClass(this.openCssClass_);
    this.detabinate_();
    // Debounce multiple calls
    if (this.isOpen_) {
      this.adapter_.notifyClose();
    }
    this.isOpen_ = false;
  };

  MDCSlidableDrawerFoundation.prototype.isOpen = function isOpen () {
    return this.isOpen_;
  };

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  MDCSlidableDrawerFoundation.prototype.detabinate_ = function detabinate_ () {
    var this$1 = this;

    if (this.inert_) {
      return;
    }

    var elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        this$1.adapter_.saveElementTabState(elements[i]);
        this$1.adapter_.makeElementUntabbable(elements[i]);
      }
    }

    this.inert_ = true;
  };

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  MDCSlidableDrawerFoundation.prototype.retabinate_ = function retabinate_ () {
    var this$1 = this;

    if (!this.inert_) {
      return;
    }

    var elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        this$1.adapter_.restoreElementTabState(elements[i]);
      }
    }

    this.inert_ = false;
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchStart_ = function handleTouchStart_ (evt) {
    if (!this.adapter_.hasClass(this.openCssClass_)) {
      return;
    }
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.direction_ = this.adapter_.isRtl() ? -1 : 1;
    this.drawerWidth_ = this.adapter_.getDrawerWidth();
    this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    this.currentX_ = this.startX_;

    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchMove_ = function handleTouchMove_ (evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  };

  MDCSlidableDrawerFoundation.prototype.handleTouchEnd_ = function handleTouchEnd_ (evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.prepareForTouchEnd_();

    // Did the user close the drawer by more than 50%?
    if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
      this.close();
    } else {
      // Triggering an open here means we'll get a nice animation back to the fully open state.
      this.open();
    }
  };

  MDCSlidableDrawerFoundation.prototype.prepareForTouchEnd_ = function prepareForTouchEnd_ () {
    cancelAnimationFrame(this.updateRaf_);
    this.adapter_.setTranslateX(null);
  };

  MDCSlidableDrawerFoundation.prototype.updateDrawer_ = function updateDrawer_ () {
    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  };

  prototypeAccessors.newPosition_.get = function () {
    var newPos = null;

    if (this.direction_ === 1) {
      newPos = Math.min(0, this.currentX_ - this.startX_);
    } else {
      newPos = Math.max(0, this.currentX_ - this.startX_);
    }

    return newPos;
  };

  MDCSlidableDrawerFoundation.prototype.isRootTransitioningEventTarget_ = function isRootTransitioningEventTarget_ () {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  };

  MDCSlidableDrawerFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_ (evt) {
    if (this.isRootTransitioningEventTarget_(evt.target)) {
      this.adapter_.removeClass(this.animatingCssClass_);
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
    }
  };

  Object.defineProperties( MDCSlidableDrawerFoundation.prototype, prototypeAccessors );
  Object.defineProperties( MDCSlidableDrawerFoundation, staticAccessors );

  return MDCSlidableDrawerFoundation;
}(MDCFoundation));

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses$2 = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock',
};

var strings$2 = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: FOCUSABLE_ELEMENTS$1,
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close',
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCTemporaryDrawerFoundation = (function (MDCSlidableDrawerFoundation) {
  function MDCTemporaryDrawerFoundation(adapter) {
    var this$1 = this;

    MDCSlidableDrawerFoundation.call(
      this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter),
      MDCTemporaryDrawerFoundation.cssClasses.ROOT,
      MDCTemporaryDrawerFoundation.cssClasses.ANIMATING,
      MDCTemporaryDrawerFoundation.cssClasses.OPEN);

    this.componentClickHandler_ = function () { return this$1.close(); };
  }

  if ( MDCSlidableDrawerFoundation ) MDCTemporaryDrawerFoundation.__proto__ = MDCSlidableDrawerFoundation;
  MDCTemporaryDrawerFoundation.prototype = Object.create( MDCSlidableDrawerFoundation && MDCSlidableDrawerFoundation.prototype );
  MDCTemporaryDrawerFoundation.prototype.constructor = MDCTemporaryDrawerFoundation;

  var staticAccessors = { cssClasses: { configurable: true },strings: { configurable: true },defaultAdapter: { configurable: true } };

  staticAccessors.cssClasses.get = function () {
    return cssClasses$2;
  };

  staticAccessors.strings.get = function () {
    return strings$2;
  };

  staticAccessors.defaultAdapter.get = function () {
    return Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, {
      addBodyClass: function (/* className: string */) {},
      removeBodyClass: function (/* className: string */) {},
      isDrawer: function () { return false; },
      updateCssVariable: function (/* value: string */) {},
    });
  };

  MDCTemporaryDrawerFoundation.prototype.init = function init () {
    MDCSlidableDrawerFoundation.prototype.init.call(this);

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  };

  MDCTemporaryDrawerFoundation.prototype.destroy = function destroy () {
    MDCSlidableDrawerFoundation.prototype.destroy.call(this);

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.enableScroll_();
  };

  MDCTemporaryDrawerFoundation.prototype.open = function open () {
    this.disableScroll_();
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    MDCSlidableDrawerFoundation.prototype.open.call(this);
  };

  MDCTemporaryDrawerFoundation.prototype.close = function close () {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    MDCSlidableDrawerFoundation.prototype.close.call(this);
  };

  MDCTemporaryDrawerFoundation.prototype.prepareForTouchEnd_ = function prepareForTouchEnd_ () {
    MDCSlidableDrawerFoundation.prototype.prepareForTouchEnd_.call(this);

    this.adapter_.updateCssVariable('');
  };

  MDCTemporaryDrawerFoundation.prototype.updateDrawer_ = function updateDrawer_ () {
    MDCSlidableDrawerFoundation.prototype.updateDrawer_.call(this);

    var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  };

  MDCTemporaryDrawerFoundation.prototype.isRootTransitioningEventTarget_ = function isRootTransitioningEventTarget_ (el) {
    return this.adapter_.isDrawer(el);
  };

  MDCTemporaryDrawerFoundation.prototype.handleTransitionEnd_ = function handleTransitionEnd_ (evt) {
    MDCSlidableDrawerFoundation.prototype.handleTransitionEnd_.call(this, evt);
    if (!this.isOpen_) {
      this.enableScroll_();
    }
  };

  MDCTemporaryDrawerFoundation.prototype.disableScroll_ = function disableScroll_ () {
    this.adapter_.addBodyClass(cssClasses$2.SCROLL_LOCK);
  };

  MDCTemporaryDrawerFoundation.prototype.enableScroll_ = function enableScroll_ () {
    this.adapter_.removeBodyClass(cssClasses$2.SCROLL_LOCK);
  };

  Object.defineProperties( MDCTemporaryDrawerFoundation, staticAccessors );

  return MDCTemporaryDrawerFoundation;
}(MDCSlidableDrawerFoundation));

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_;
var supportsPassive_$1;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName, globalObj) {
  if ( globalObj === void 0 ) globalObj = window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
    case 'touchstart':
      return 'pointerdown';
    case 'touchmove':
      return 'pointermove';
    case 'touchend':
      return 'pointerup';
    default:
      return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj, forceRefresh) {
  if ( globalObj === void 0 ) globalObj = window;
  if ( forceRefresh === void 0 ) forceRefresh = false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = ('transform' in el.style ? 'transform' : '-webkit-transform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties(globalObj) {
  if ( globalObj === void 0 ) globalObj = window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive$1(globalObj, forceRefresh) {
  if ( globalObj === void 0 ) globalObj = window;
  if ( forceRefresh === void 0 ) forceRefresh = false;

  if (supportsPassive_$1 === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_$1 = isSupported;
  }

  return supportsPassive_$1 ? {passive: true} : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

var scrollBlock = 'mdc-dialog-scroll-lock';
var ref = MDCTemporaryDrawerFoundation.strings;
var FOCUSABLE_ELEMENTS = ref.FOCUSABLE_ELEMENTS;
var OPACITY_VAR_NAME = ref.OPACITY_VAR_NAME;

var Drawer = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.mode === 'temporary')?_c('aside',{class:_vm.baseClass},[_c('nav',{ref:"drawer",staticClass:"mdc-temporary-drawer__drawer"},[_vm._t("header"),_vm._v(" "),_c('div',{staticClass:"mdc-list-group mdc-temporary-drawer__content"},[_vm._t("default")],2)],2)]):_c('nav',{class:_vm.baseClass},[_vm._v(" Not yet supported ")])},staticRenderFns: [],
  props: {
    mode: {
      type: String,
      default: 'temporary',
    },
  },

  provide: function provide () {
    return {
      mode: this.mode,
    }
  },

  computed: {
    baseClass: function baseClass () {
      return ("mdc-" + (this.mode) + "-drawer")
    },
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.mode === 'temporary') {
      this.foundation = new MDCTemporaryDrawerFoundation({
        addClass: function (className) { return this$1.$el.classList.add(className); },
        removeClass: function (className) { return this$1.$el.classList.remove(className); },
        hasClass: function (className) { return this$1.$el.classList.contains(className); },
        hasNecessaryDom: function () { return Boolean(this$1.$refs.drawer); },
        registerInteractionHandler: function (evt, handler) { return this$1.$el.addEventListener(remapEvent(evt), handler, applyPassive$1()); },
        deregisterInteractionHandler: function (evt, handler) { return this$1.$el.removeEventListener(remapEvent(evt), handler, applyPassive$1()); },
        registerDrawerInteractionHandler: function (evt, handler) { return this$1.$refs.drawer.addEventListener(remapEvent(evt), handler); },
        deregisterDrawerInteractionHandler: function (evt, handler) { return this$1.$refs.drawer.removeEventListener(remapEvent(evt), handler); },
        registerTransitionEndHandler: function (handler) { return this$1.$refs.drawer.addEventListener('transitionend', handler); },
        deregisterTransitionEndHandler: /* istanbul ignore next */ function (handler) { return this$1.$refs.drawer.removeEventListener('transitionend', handler); },
        registerDocumentKeydownHandler: function (handler) { return document.addEventListener('keydown', handler); },
        deregisterDocumentKeydownHandler: function (handler) { return document.removeEventListener('keydown', handler); },
        getDrawerWidth: /* istanbul ignore next */ function () { return this$1.$refs.drawer.offsetWidth; },
        setTranslateX: /* istanbul ignore next */ function (value) { return this$1.$refs.drawer.style.setProperty(
            getTransformPropertyName(),
            value === null ? null : ("translateX(" + value + "px)")
          ); },
        updateCssVariable: function (value) {
          // istanbul ignore else
          if (supportsCssCustomProperties()) {
            this$1.$el.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function () { return this$1.$refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS); },
        saveElementTabState: function (el) { return saveElementTabState(el); },
        restoreElementTabState: /* istanbul ignore next */ function (el) { return restoreElementTabState(el); },
        makeElementUntabbable: function (el) { return el.setAttribute('tabindex', -1); },
        notifyOpen: function () { return this$1.$emit('opened'); },
        notifyClose: function () { return this$1.$emit('closed'); },
        isRtl: /* istanbul ignore next */ function () { return window.getComputedStyle(this$1.$el).getPropertyValue('direction') === 'rtl'; },
        isDrawer: /* istanbul ignore next */ function (el) { return el === this$1.$refs.drawer; },
      });
      this.foundation.init();
    }
  },

  beforeDestroy: function beforeDestroy () {
    this.foundation.destroy();
    window.document.body.classList.remove(scrollBlock);
  },

  methods: {
    open: function open () {
      this.foundation.open();
      window.document.body.classList.add(scrollBlock);
    },
    close: function close () {
      this.foundation.close();
      window.document.body.classList.remove(scrollBlock);
    },
  },
};

var DrawerHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{class:_vm.headerClass},[_c('div',{class:_vm.contentClass},[_vm._t("default")],2)])},staticRenderFns: [],
  // can be functional in next Vue release
  // but it's not a big deal since this component
  // should be only used once

  inject: ['mode'],

  computed: {
    headerClass: function headerClass () {
      return ("mdc-" + (this.mode) + "-drawer__header")
    },
    contentClass: function contentClass () {
      return ("mdc-" + (this.mode) + "-drawer__header-content")
    },
  },
};

var List = {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'ul',
    },
    dense: Boolean,
    twoLines: Boolean,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var props = ref.props;

    var tag = props.tag;
    delete props.tag;
    var staticClass = propsToClasses('mdc-list', props);
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h(tag, Object.assign({}, data), children)
  },
};

var DrawerNav = {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'nav',
    },
  },

  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;
    var props = ref.props;

    return h(List, Object.assign({}, data,
      {props: props}), children)
  },
};

var ListItem = {
  functional: true,

  props: {
    tag: {
      type: String,
      default: 'li',
    },
  },

  render: function render (h, ref) {
    var data = ref.data;
    var children = ref.children;
    var tag = ref.props.tag;

    var staticClass = 'mdc-list-item';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h(tag, Object.assign({}, data), children)
  },
};

var DrawerNavItem = {
  props: {
    selected: Boolean,
    tag: {
      type: String,
      default: 'a',
    },
  },

  inject: ['mode'],

  // transform into functional once inject works
  // Actually it doesn't work yet because since it's used in
  // a slot, therefore its parent it's the container, not the Drawer
  render: function render (h) {
    var data = {
      'class': ( obj = {}, obj[("mdc-" + (this.mode) + "-drawer--selected")] = this.selected, obj ),
    };
    var obj;
    return h(ListItem, Object.assign({}, data,
      {props: {
        tag: this.tag,
      }}), this.$slots.default)
  },

  components: { ListItem: ListItem },
};

var Fab = {
  functional: true,

  props: {
    mini: Boolean,
    plain: Boolean,
    icon: String,
  },

  render: function render (h, ref) {
    var data = ref.data;
    var ref_props = ref.props;
    var mini = ref_props.mini;
    var plain = ref_props.plain;
    var icon = ref_props.icon;
    var children = ref.children;

    var staticClass = propsToClasses('mdc-fab', { mini: mini, plain: plain });
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;

    if (icon) {
      data.staticClass += ' material-icons';
      children.unshift(h('span', {
        staticClass: 'mdc-fab__icon',
      }, [icon]));
    }

    return h('button', Object.assign({}, data), children)
  },
};

var ListDivider = {
  functional: true,

  render: function render (h, ref) {
    var data = ref.data;

    var staticClass = 'mdc-list-divider';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('hr', Object.assign({}, data))
  },
};

var ToolbarSection = {
  functional: true,

  props: {
    align: {
      default: 'start',
    },
    shrink: Boolean,
  },

  render: function render (h, ref) {
    var children = ref.children;
    var ref_props = ref.props;
    var align = ref_props.align;
    var shrink = ref_props.shrink;
    var data = ref.data;

    var staticClass = 'mdc-toolbar__section';
    if (align !== 'center') {
      staticClass += " mdc-toolbar__section--align-" + align;
    }
    if (shrink) { staticClass += ' mdc-toolbar__section--shrink-to-fit'; }
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('section', Object.assign({}, data), children)
  },
};

var ToolbarRow = {
  functional: true,

  render: function render (h, ref) {
    var children = ref.children;
    var data = ref.data;

    var staticClass = 'mdc-toolbar__row';
    data.staticClass = data.staticClass
      ? ((data.staticClass) + " " + staticClass)
      : staticClass;
    return h('div', Object.assign({}, data), children)
  },
};

var Toolbar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"mdc-toolbar"},[_c('ToolbarRow',[_c('ToolbarSection',{attrs:{"align":"start"}},[_c('a',{staticClass:"material-icons mdc-toolbar__menu",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.$emit('menu');}}},[_vm._v(_vm._s(_vm.icon))]),_vm._v(" "),_c('span',{staticClass:"mdc-toolbar__title"},[_vm._v(_vm._s(_vm.title))])])],1)],1)},staticRenderFns: [],
  props: {
    title: String,
    icon: {
      type: String,
      default: 'menu',
    },
  },

  components: { ToolbarRow: ToolbarRow, ToolbarSection: ToolbarSection },
};

var components = {
  Button: MdcButton,

  Card: Card,
  CardActions: CardActions,
  CardHorizontalBlock: CardHorizontalBlock,
  CardMedia: CardMedia,
  CardPrimary: CardPrimary,
  CardSubtitle: CardSubtitle,
  CardSupportingText: CardSupportingText,
  CardTitle: CardTitle,

  Checkbox: Checkbox,

  Dialog: Dialog,
  DialogHeaderTitle: DialogHeaderTitle,

  Drawer: Drawer,
  DrawerHeader: DrawerHeader,
  DrawerNav: DrawerNav,
  DrawerNavItem: DrawerNavItem,

  Fab: Fab,

  List: List,
  ListDivider: ListDivider,
  ListItem: ListItem,

  Toolbar: Toolbar,
  ToolbarRow: ToolbarRow,
  ToolbarSection: ToolbarSection,
};

function plugin (Vue, opts) {
  if ( opts === void 0 ) opts = { prefix: 'Mdc' };

  var prefix = opts.prefix;
  var compNames = Object.keys(components);
  for (var i = 0; i < compNames.length; i++) {
    var name = compNames[i];
    Vue.component(("" + prefix + name), components[name]);
  }
  Vue.directive('ripple', ripple);
}

// Export all components too
var version = '0.0.10';

exports['default'] = plugin;
exports.version = version;
exports.Button = MdcButton;
exports.Card = Card;
exports.CardActions = CardActions;
exports.CardHorizontalBlock = CardHorizontalBlock;
exports.CardMedia = CardMedia;
exports.CardPrimary = CardPrimary;
exports.CardSubtitle = CardSubtitle;
exports.CardSupportingText = CardSupportingText;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Dialog = Dialog;
exports.DialogHeaderTitle = DialogHeaderTitle;
exports.Drawer = Drawer;
exports.DrawerHeader = DrawerHeader;
exports.DrawerNav = DrawerNav;
exports.DrawerNavItem = DrawerNavItem;
exports.Fab = Fab;
exports.List = List;
exports.ListDivider = ListDivider;
exports.ListItem = ListItem;
exports.Toolbar = Toolbar;
exports.ToolbarRow = ToolbarRow;
exports.ToolbarSection = ToolbarSection;
exports.ripple = ripple;

Object.defineProperty(exports, '__esModule', { value: true });

})));
