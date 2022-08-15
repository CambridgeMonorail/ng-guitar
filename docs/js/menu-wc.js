'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-guitar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/EtudeModule.html" data-type="entity-link" >EtudeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' : 'data-target="#xs-components-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' :
                                            'id="xs-components-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' }>
                                            <li class="link">
                                                <a href="components/EtudeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EtudeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' : 'data-target="#xs-injectables-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' :
                                        'id="xs-injectables-links-module-EtudeModule-3f39c7fa22a8b3d96f3abc0ec20a6b8acc1b23cb61eab7e94cf4fdb04a7398b52b6c9ab991c1d596337e87c0c0a03bdb0daffd2233411894e2e6ea3e7753baf3"' }>
                                        <li class="link">
                                            <a href="injectables/ProgressionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FretboardModule.html" data-type="entity-link" >FretboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' : 'data-target="#xs-components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' :
                                            'id="xs-components-links-module-FretboardModule-576fd77bfa10b04448f9a36c174714bbe3075bcaaf39ce5837981c118a04347f2626402eed338c762ae5c302b5bff48ddda39063866472014649701aed0e0817"' }>
                                            <li class="link">
                                                <a href="components/FretboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FretboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedStorybookModule.html" data-type="entity-link" >SharedStorybookModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedUiModule.html" data-type="entity-link" >SharedUiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabScrollerModule.html" data-type="entity-link" >TabScrollerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' : 'data-target="#xs-components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' :
                                            'id="xs-components-links-module-TabScrollerModule-cded776bc8eb174a9e5a50119dacd2100a53af9989ed7bd5d03e0dfc56e1701b2a2e8bb1339f94ac5d11b16068d97dae9ae928b0b9b630e1cf20d4fa214634a7"' }>
                                            <li class="link">
                                                <a href="components/FretComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FretComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabScrollerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabScrollerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TheoryModule.html" data-type="entity-link" >TheoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' : 'data-target="#xs-injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' :
                                        'id="xs-injectables-links-module-TheoryModule-40104181d31205223c04418b6cf13c492921e8afc91f036ccb7637fdd1bb187edf87e7cb4ab635909baafa4a8899c58d9d14c4ce7f15c097b67d03ea53d6f3fd"' }>
                                        <li class="link">
                                            <a href="injectables/FretboardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FretboardService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MusicNote.html" data-type="entity-link" >MusicNote</a>
                            </li>
                            <li class="link">
                                <a href="classes/MusicString.html" data-type="entity-link" >MusicString</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Fretboard.html" data-type="entity-link" >Fretboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FretboardNote.html" data-type="entity-link" >FretboardNote</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FretboardString.html" data-type="entity-link" >FretboardString</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Measure.html" data-type="entity-link" >Measure</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notes.html" data-type="entity-link" >Notes</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});