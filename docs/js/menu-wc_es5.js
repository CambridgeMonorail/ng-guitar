'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ng-guitar documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/EtudeModule.html\" data-type=\"entity-link\" >EtudeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"' : 'data-target="#xs-components-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"' : 'id="xs-components-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/EtudeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EtudeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"' : 'data-target="#xs-injectables-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"' : 'id="xs-injectables-links-module-EtudeModule-e5737cda92355a158201f29cb856ad19cb17c17bdb524a03797b9ff76780e1ffe098f0baaa13428af8c7d596d0f7ee7f9951ac0b882744b92976358b2a15b315"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ProgressionService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProgressionService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FretboardModule.html\" data-type=\"entity-link\" >FretboardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' : 'data-target="#xs-components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' : 'id="xs-components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FretboardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FretboardComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedStorybookModule.html\" data-type=\"entity-link\" >SharedStorybookModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedUiModule.html\" data-type=\"entity-link\" >SharedUiModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TabScrollerModule.html\" data-type=\"entity-link\" >TabScrollerModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' : 'data-target="#xs-components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' : 'id="xs-components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FretComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FretComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NoteComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NoteComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TabScrollerComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TabScrollerComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TheoryModule.html\" data-type=\"entity-link\" >TheoryModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' : 'data-target="#xs-injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' : 'id="xs-injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/FretboardService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FretboardService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/MusicNote.html\" data-type=\"entity-link\" >MusicNote</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/MusicString.html\" data-type=\"entity-link\" >MusicString</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Fretboard.html\" data-type=\"entity-link\" >Fretboard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FretboardNote.html\" data-type=\"entity-link\" >FretboardNote</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FretboardString.html\" data-type=\"entity-link\" >FretboardString</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Measure.html\" data-type=\"entity-link\" >Measure</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Notes.html\" data-type=\"entity-link\" >Notes</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));