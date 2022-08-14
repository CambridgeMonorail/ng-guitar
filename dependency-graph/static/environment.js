window.exclude = [];
window.watch = false;
window.environment = 'release';
window.localMode = 'build';

window.appConfig = {
  showDebugger: false,
  showExperimentalFeatures: false,
  projectGraphs: [
    {
      id: 'local',
      label: 'local',
      url: 'projectGraph.json',
    },
  ],
  defaultProjectGraph: 'local',
};
window.projectGraphResponse = {
  hash: '5d4ebbb81dde60c36a1c5ebd6ede901c306c45a7b8c5b80e985635d5eaf1a34f',
  projects: [
    {
      name: 'shared-storybook-e2e',
      type: 'e2e',
      data: {
        tags: [],
        root: 'apps/shared-storybook-e2e',
        files: [
          {
            file: 'apps/shared-storybook-e2e/.eslintrc.json',
            hash: '696cb8b12127425419f6d2809c5f15a5963d86de',
          },
          {
            file: 'apps/shared-storybook-e2e/cypress.json',
            hash: 'df50facae1d6b6f3df03bdade0b2ddbdf6e315af',
          },
          {
            file: 'apps/shared-storybook-e2e/project.json',
            hash: '158d92c919191a755ba6b84b83157188fa92bedf',
          },
          {
            file: 'apps/shared-storybook-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/shared-storybook-e2e/src/support/commands.ts',
            hash: '1445319147ee7bd302746c08e3475c07c8820ffa',
          },
          {
            file: 'apps/shared-storybook-e2e/src/support/index.ts',
            hash: '459189af2288e5902e12bf1b1bf307fb779295a5',
          },
          {
            file: 'apps/shared-storybook-e2e/tsconfig.json',
            hash: 'c4f818ecd40fbce82c3e08bf25cde3043970f8f3',
          },
        ],
      },
    },
    {
      name: 'shared-storybook',
      type: 'lib',
      data: {
        tags: [],
        root: 'libs/shared-storybook',
        files: [
          {
            file: 'libs/shared-storybook/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'libs/shared-storybook/.storybook/1.Getting Started.stories.mdx',
            hash: '170f96b87f30a48021963e17997d37d354b2fa2e',
          },
          {
            file: 'libs/shared-storybook/.storybook/assets/img/favicon.ico',
            hash: '23625480fca06498235ec27407438a6948b5b928',
          },
          {
            file: 'libs/shared-storybook/.storybook/assets/img/logo.png',
            hash: '2858231c3e0325bd7bc9e189759435507560edc7',
          },
          {
            file: 'libs/shared-storybook/.storybook/CustomTheme.js',
            hash: '081ad7ec852a8ef79df2cb2ca4e850db6d2c94b6',
            deps: ['npm:@storybook/theming'],
          },
          {
            file: 'libs/shared-storybook/.storybook/dev-docs/images/logo-152x152.png',
            hash: 'dd0c40cfb1b25946ebf95596d0ebf709cfd232ca',
          },
          {
            file: 'libs/shared-storybook/.storybook/dev-docs/images/screenshot.png',
            hash: 'd63e5f68b88cf4a3c54a325c218388cfe5f14d93',
          },
          {
            file: 'libs/shared-storybook/.storybook/main.js',
            hash: 'f815dfa923351d02954d211bb63dc29520c6a9a7',
          },
          {
            file: 'libs/shared-storybook/.storybook/manager-head.html',
            hash: '4468cbfe0ec072687897f06dc8cfa6eb6a5769a9',
          },
          {
            file: 'libs/shared-storybook/.storybook/manager.js',
            hash: 'ac1e9db1af4a2fcf6650c138446fb5c1b6cd0e5a',
            deps: ['npm:@storybook/addons'],
          },
          {
            file: 'libs/shared-storybook/.storybook/preview-head.html',
            hash: 'fa658bef91947b89ad1f42f64eca077225530b39',
          },
          {
            file: 'libs/shared-storybook/.storybook/preview.js',
            hash: '2e5c669cc9b4287d4217b49f2c9d62ad24a31e6a',
            deps: ['npm:@storybook/angular', 'npm:@storybook/addon-docs'],
          },
          {
            file: 'libs/shared-storybook/.storybook/tsconfig.json',
            hash: '270781844ce15c5eb4e76040d9b243d513355e1f',
          },
          {
            file: 'libs/shared-storybook/jest.config.ts',
            hash: '9195ba658a142c608a5430fc0e0ea90c8d4e59ca',
          },
          {
            file: 'libs/shared-storybook/ng-package.json',
            hash: '9fc92939bd532e099df446f064829c4c3e965321',
          },
          {
            file: 'libs/shared-storybook/package.json',
            hash: '4f011e86896fc63dbe78e6ff6fa1dbe1d1e9e420',
            deps: ['npm:tslib', 'npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/shared-storybook/project.json',
            hash: 'd5214d6f3d0c65723a510fe334e2972027e3dd51',
          },
          {
            file: 'libs/shared-storybook/README.md',
            hash: 'de6b8252b69dc3b3fef164aba0a52d31595b2f3c',
          },
          {
            file: 'libs/shared-storybook/src/index.ts',
            hash: '173f40b0e76c910436218c48296674a5b2b57803',
          },
          {
            file: 'libs/shared-storybook/src/lib/shared-storybook.module.ts',
            hash: '2345c06142cc800af357ab4fd0c54aa1b2db0e43',
            deps: ['npm:@angular/core', 'npm:@angular/common'],
          },
          {
            file: 'libs/shared-storybook/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/shared-storybook/tsconfig.json',
            hash: '3816910f16f6cec2870f897eb39f81984fe45e24',
          },
          {
            file: 'libs/shared-storybook/tsconfig.lib.json',
            hash: '82abe4d9461d057d9c882dba20da801117920dc4',
          },
          {
            file: 'libs/shared-storybook/tsconfig.lib.prod.json',
            hash: '61b523783f299f511f27248a42f86e5f9c29512f',
          },
          {
            file: 'libs/shared-storybook/tsconfig.spec.json',
            hash: 'c5db02778f96a2a200d787c0a7b376fe0d6c36f7',
          },
        ],
      },
    },
    {
      name: 'tab-scroller-e2e',
      type: 'e2e',
      data: {
        tags: [],
        root: 'apps/tab-scroller-e2e',
        files: [
          {
            file: 'apps/tab-scroller-e2e/.eslintrc.json',
            hash: '696cb8b12127425419f6d2809c5f15a5963d86de',
          },
          {
            file: 'apps/tab-scroller-e2e/cypress.json',
            hash: '2430c0a05acf28b567992add9bfbd247ecba52b6',
          },
          {
            file: 'apps/tab-scroller-e2e/project.json',
            hash: '9ab5d8ca89ecb526872461861aa4f1fa907a5737',
          },
          {
            file: 'apps/tab-scroller-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/tab-scroller-e2e/src/integration/fret/fret.component.spec.ts',
            hash: '9b6ffcb343b57bf36212f67f6db2201ca2152c2b',
          },
          {
            file: 'apps/tab-scroller-e2e/src/integration/note/note.component.spec.ts',
            hash: 'a634746ce2261e12ac5319c8e23f8f5c2525e6f7',
          },
          {
            file: 'apps/tab-scroller-e2e/src/integration/tab-scroller/tab-scroller.component.spec.ts',
            hash: 'c58822d3d2c60cb9d8dad37a1521e8440da50b76',
          },
          {
            file: 'apps/tab-scroller-e2e/src/support/commands.ts',
            hash: '1445319147ee7bd302746c08e3475c07c8820ffa',
          },
          {
            file: 'apps/tab-scroller-e2e/src/support/index.ts',
            hash: '459189af2288e5902e12bf1b1bf307fb779295a5',
          },
          {
            file: 'apps/tab-scroller-e2e/tsconfig.json',
            hash: 'c4f818ecd40fbce82c3e08bf25cde3043970f8f3',
          },
        ],
      },
    },
    {
      name: 'fretboard-e2e',
      type: 'e2e',
      data: {
        tags: [],
        root: 'apps/fretboard-e2e',
        files: [
          {
            file: 'apps/fretboard-e2e/.eslintrc.json',
            hash: '696cb8b12127425419f6d2809c5f15a5963d86de',
          },
          {
            file: 'apps/fretboard-e2e/cypress.json',
            hash: '7f90098b456412944d1502af12cf88610bfe8cd5',
          },
          {
            file: 'apps/fretboard-e2e/project.json',
            hash: '07f3ab63a5204afc17056720beb44b57dd03c3bf',
          },
          {
            file: 'apps/fretboard-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/fretboard-e2e/src/integration/fretboard/fretboard.component.spec.ts',
            hash: 'b17846971232edbf94a1bf4dd5eedaf341db4985',
          },
          {
            file: 'apps/fretboard-e2e/src/support/commands.ts',
            hash: '1445319147ee7bd302746c08e3475c07c8820ffa',
          },
          {
            file: 'apps/fretboard-e2e/src/support/index.ts',
            hash: '459189af2288e5902e12bf1b1bf307fb779295a5',
          },
          {
            file: 'apps/fretboard-e2e/tsconfig.json',
            hash: 'c4f818ecd40fbce82c3e08bf25cde3043970f8f3',
          },
        ],
      },
    },
    {
      name: 'tab-scroller',
      type: 'lib',
      data: {
        tags: ['ui'],
        root: 'libs/tab-scroller',
        files: [
          {
            file: 'libs/tab-scroller/.browserslistrc',
            hash: '4f9ac26980c156a3d525267010d5f78144b43519',
          },
          {
            file: 'libs/tab-scroller/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'libs/tab-scroller/.storybook/main.js',
            hash: '32f910334a2721c2584f498eb31fbdedeac01608',
          },
          {
            file: 'libs/tab-scroller/.storybook/preview.js',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'libs/tab-scroller/.storybook/tsconfig.json',
            hash: '6ef26c4729bbe632830ed60c9d7e71d1bf4cfcb4',
          },
          {
            file: 'libs/tab-scroller/jest.config.ts',
            hash: '6c8aeb7cb4403e29f77f7e610153ed754a6072cc',
          },
          {
            file: 'libs/tab-scroller/ng-package.json',
            hash: '4fe0d72feb8a9eb68ec9dbd2f9e24c9ed7375849',
          },
          {
            file: 'libs/tab-scroller/package.json',
            hash: '8d099b282d7fa7837c1b3be89c77ef2f9d22461e',
            deps: ['npm:tslib', 'npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/project.json',
            hash: '11223cc07f85eb91793dbd507e3c6a2a3806f93d',
          },
          {
            file: 'libs/tab-scroller/README.md',
            hash: '8429755b5185d13e2023d4c742ea0bc9499dd7cf',
          },
          {
            file: 'libs/tab-scroller/src/index.ts',
            hash: '62333fb2e47a857c3e6c71114542c534df501e13',
          },
          {
            file: 'libs/tab-scroller/src/lib/fret/fret.component.html',
            hash: 'a0024bdebffd377769e4e6f979171a6f22834071',
          },
          {
            file: 'libs/tab-scroller/src/lib/fret/fret.component.scss',
            hash: 'ac7e25557605f3914502348fc58ad82ddbaf7996',
          },
          {
            file: 'libs/tab-scroller/src/lib/fret/fret.component.spec.ts',
            hash: 'e1a7816b65003f43a67e1ce9771cd5c910fa8737',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/lib/fret/fret.component.stories.ts',
            hash: 'f285ea8692c549f64b3a7d80392fa7740ef75ae6',
            deps: ['npm:@storybook/angular'],
          },
          {
            file: 'libs/tab-scroller/src/lib/fret/fret.component.ts',
            hash: 'ebee2c31a60a5f20634012a7c5c0ff6e5042303c',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/lib/model/measure.ts',
            hash: 'ee63ac55c3e125d2ef73435db66e3860e06b1a38',
          },
          {
            file: 'libs/tab-scroller/src/lib/model/notes.ts',
            hash: 'd64a972a4cf0ff715f089db89e0781b9b9411c0f',
          },
          {
            file: 'libs/tab-scroller/src/lib/note/note.component.html',
            hash: 'b698b7ac89a85138801b76f88fb7d964d5286e7d',
          },
          {
            file: 'libs/tab-scroller/src/lib/note/note.component.scss',
            hash: 'e21718f426caae0b1a9635b11c07b518b10d57d6',
          },
          {
            file: 'libs/tab-scroller/src/lib/note/note.component.spec.ts',
            hash: '7f035ec3ec10eb740e13be913c4639f5e8ed0c56',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/lib/note/note.component.stories.ts',
            hash: '19540ad35002d02d39e61694af87a4fc67c7ae31',
            deps: ['npm:@storybook/angular'],
          },
          {
            file: 'libs/tab-scroller/src/lib/note/note.component.ts',
            hash: 'c75a8089166c60b44f2a63bee7074c6f2445efdc',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller.module.spec.ts',
            hash: '747cd3c8a49817614c1bb35ef3ee06e78be50fbd',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller.module.ts',
            hash: 'ee9eeebe05c52491bd81f14f89a4aae11280f57c',
            deps: ['npm:@angular/core', 'npm:@angular/common'],
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller/tab-scroller.component.html',
            hash: '570fedfabc98405edb5ec73e312273d7fae8a990',
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller/tab-scroller.component.scss',
            hash: '903d761fca89b13aaa3f0028c2155d269e63bc79',
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller/tab-scroller.component.stories.ts',
            hash: 'ee7b38b440ddc9be3166fd7dcbddf08e7b382a5d',
            deps: ['npm:@angular/common', 'npm:@storybook/angular'],
          },
          {
            file: 'libs/tab-scroller/src/lib/tab-scroller/tab-scroller.component.ts',
            hash: 'a111bc3b3c73e239cdada712518b8dcb32a007ca',
            deps: ['npm:@angular/animations', 'npm:@angular/core'],
          },
          {
            file: 'libs/tab-scroller/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/tab-scroller/tsconfig.json',
            hash: 'f091b896e26534a3b64f88e892cd254fda2ec4bf',
          },
          {
            file: 'libs/tab-scroller/tsconfig.lib.json',
            hash: '82abe4d9461d057d9c882dba20da801117920dc4',
          },
          {
            file: 'libs/tab-scroller/tsconfig.lib.prod.json',
            hash: '2a2faa884cf3a054c72288f62b9a9f9560ca4996',
          },
          {
            file: 'libs/tab-scroller/tsconfig.spec.json',
            hash: 'c5db02778f96a2a200d787c0a7b376fe0d6c36f7',
          },
        ],
      },
    },
    {
      name: 'fretboard',
      type: 'lib',
      data: {
        tags: ['ui'],
        root: 'libs/fretboard',
        files: [
          {
            file: 'libs/fretboard/.browserslistrc',
            hash: '4f9ac26980c156a3d525267010d5f78144b43519',
          },
          {
            file: 'libs/fretboard/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'libs/fretboard/.storybook/main.js',
            hash: '32f910334a2721c2584f498eb31fbdedeac01608',
          },
          {
            file: 'libs/fretboard/.storybook/previewjs',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'libs/fretboard/.storybook/tsconfig.json',
            hash: 'ba50e9de89bee3700443da883d974f199c2e5691',
          },
          {
            file: 'libs/fretboard/jest.config.ts',
            hash: 'bea32a97ce030496930a85edf0449a037651c373',
          },
          {
            file: 'libs/fretboard/ng-package.json',
            hash: '644521361162611ed6dbb7e230eab5fdb584c1da',
          },
          {
            file: 'libs/fretboard/package.json',
            hash: '8bd816ea02bc87394b47de55114ab8f522ef7ddd',
            deps: ['npm:tslib', 'npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/fretboard/project.json',
            hash: 'ff7567136757d65e6812349b8e362fd003c5fc44',
          },
          {
            file: 'libs/fretboard/README.md',
            hash: '1c88d978ad5d82e09fc3fc0517645367052a9908',
          },
          {
            file: 'libs/fretboard/src/index.ts',
            hash: 'ba4f53c3b9d1260a8077ffcbdb2693b903f600f4',
          },
          {
            file: 'libs/fretboard/src/lib/fretboard.module.spec.ts',
            hash: '3b7f7318324852d177ef9fdc4db8b5784b22dd07',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/fretboard/src/lib/fretboard.module.ts',
            hash: '1d19ffc5d11325d21f0fa205b0a90c1d8db10efd',
            deps: ['npm:@angular/core', 'npm:@angular/common'],
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/fretboard.component.html',
            hash: '61fd08e389fbe959f3f103b5c2755ae7439bfd44',
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/fretboard.component.scss',
            hash: '192939599d16cc9205f4232596fb05dc3d14e54d',
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/fretboard.component.spec.ts',
            hash: 'dcf51bad1daf3595ef883d20ca24a49e1dce3df4',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/fretboard.component.stories.ts',
            hash: 'db6c22040686fce638b6cba6d5137b3adc217d2e',
            deps: [
              'npm:@angular/common',
              'npm:@angular/platform-browser',
              'npm:@storybook/angular',
            ],
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/fretboard.component.ts',
            hash: 'cf3e567d0e9bc475be949791e2d99fff24422b1b',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/models/fretboard-note.interface.ts',
            hash: 'caca73bbf04da823302f2daf329850d7928659ea',
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/models/fretboard-string.interface.ts',
            hash: '0206ca1d0bb5ff513b0a456dacbfa1e9b1b07a0a',
          },
          {
            file: 'libs/fretboard/src/lib/fretboard/models/fretboard.interface.ts',
            hash: 'c4ac2a544f198578d9233b7aa0d4cab187786f55',
          },
          {
            file: 'libs/fretboard/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/fretboard/tsconfig.json',
            hash: 'f091b896e26534a3b64f88e892cd254fda2ec4bf',
          },
          {
            file: 'libs/fretboard/tsconfig.lib.json',
            hash: '82abe4d9461d057d9c882dba20da801117920dc4',
          },
          {
            file: 'libs/fretboard/tsconfig.lib.prod.json',
            hash: '2a2faa884cf3a054c72288f62b9a9f9560ca4996',
          },
          {
            file: 'libs/fretboard/tsconfig.spec.json',
            hash: 'c5db02778f96a2a200d787c0a7b376fe0d6c36f7',
          },
        ],
      },
    },
    {
      name: 'shared-ui',
      type: 'lib',
      data: {
        tags: ['ui'],
        root: 'libs/shared/ui',
        files: [
          {
            file: 'libs/shared/ui/.eslintrc.json',
            hash: '10f97df1346a6bd61f687c09f51e438bf0d52248',
          },
          {
            file: 'libs/shared/ui/jest.config.ts',
            hash: '2a205a0d199b3633c751e2c8dc5f35fe43f5e283',
          },
          {
            file: 'libs/shared/ui/project.json',
            hash: '56ecfaae52629ff8a4f85baaff1d2784206ec3f7',
          },
          {
            file: 'libs/shared/ui/README.md',
            hash: '66b29647458bb8282e68f05db0c6d721b31842bc',
          },
          {
            file: 'libs/shared/ui/src/index.ts',
            hash: 'b370a754c6d5c5bea2062dea892cf4516f051cbc',
          },
          {
            file: 'libs/shared/ui/src/lib/shared-ui.module.spec.ts',
            hash: '342ea1a47d77bb83305053cb09f38c9dcc71ffa2',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/shared/ui/src/lib/shared-ui.module.ts',
            hash: '823d1d96a12c87b0d3e7f7e4bfc20c92790e45ba',
            deps: ['npm:@angular/core', 'npm:@angular/common'],
          },
          {
            file: 'libs/shared/ui/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/shared/ui/tsconfig.json',
            hash: '7504c346eae6aaf4917b7dbeb4f36072d602dd20',
          },
          {
            file: 'libs/shared/ui/tsconfig.lib.json',
            hash: 'f9941fa47e7e0d149399e1450815ad0929e8a3bc',
          },
          {
            file: 'libs/shared/ui/tsconfig.spec.json',
            hash: '27b43ffd6699c05e8b03d1f756cdce22a72f5f7d',
          },
        ],
      },
    },
    {
      name: 'demo-e2e',
      type: 'e2e',
      data: {
        tags: [],
        root: 'apps/demo-e2e',
        files: [
          {
            file: 'apps/demo-e2e/.eslintrc.json',
            hash: '4c5989b23b5aa8cc7aba2a07d1ae7daee19c1555',
          },
          {
            file: 'apps/demo-e2e/cypress.json',
            hash: 'f5d8e7a8f5afbdfbf02865186c23ff8f8cb79eb4',
          },
          {
            file: 'apps/demo-e2e/project.json',
            hash: 'e4887b5bbc883562b96754c799da99647e4290a9',
          },
          {
            file: 'apps/demo-e2e/src/fixtures/example.json',
            hash: '294cbed6ce9e0b948b787452e8676aee486cb3be',
          },
          {
            file: 'apps/demo-e2e/src/integration/app.spec.ts',
            hash: '92972cff6454f5811e24d41a9a8ab9b4029a307e',
          },
          {
            file: 'apps/demo-e2e/src/support/app.po.ts',
            hash: '32934246969c2ecb827ac05677785933a707a54d',
          },
          {
            file: 'apps/demo-e2e/src/support/commands.ts',
            hash: '1445319147ee7bd302746c08e3475c07c8820ffa',
          },
          {
            file: 'apps/demo-e2e/src/support/index.ts',
            hash: '3d469a6b6cf31eb66117d73e278bcf74f398f1db',
          },
          {
            file: 'apps/demo-e2e/tsconfig.json',
            hash: 'e326af64830afa10581f5021b17c39f891b35fb4',
          },
        ],
      },
    },
    {
      name: 'theory',
      type: 'lib',
      data: {
        tags: [],
        root: 'libs/theory',
        files: [
          {
            file: 'libs/theory/.browserslistrc',
            hash: '4f9ac26980c156a3d525267010d5f78144b43519',
          },
          {
            file: 'libs/theory/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'libs/theory/jest.config.ts',
            hash: 'f0b8e59f97732069c82221eccd6771e7dee915e3',
          },
          {
            file: 'libs/theory/ng-package.json',
            hash: 'a836e248019ded2cfd3fb4c91b2c7328831275ba',
          },
          {
            file: 'libs/theory/package.json',
            hash: 'cef4535e6b38876d66c8ada1b4efc9352fbe8622',
            deps: ['npm:tslib', 'npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/theory/project.json',
            hash: '2e629576ada7d3df60d588d511f88d896ff46b51',
          },
          {
            file: 'libs/theory/README.md',
            hash: '984924057947c54b021e0d7c87ffc488b5176954',
          },
          {
            file: 'libs/theory/src/index.ts',
            hash: '22952e0677bf8a8a931fb17972bb3ca35b8411e4',
          },
          {
            file: 'libs/theory/src/lib/models/fretboard-key.enum.ts',
            hash: '533127350fa22928446a61366259c2477e291833',
          },
          {
            file: 'libs/theory/src/lib/services/fretboard.service.spec.ts',
            hash: '349d38d8780090d891a8e4dbf66ba46f6a6b6cf2',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/theory/src/lib/services/fretboard.service.ts',
            hash: '739eaa1e42af651bf0ac42de5cc8f7a139b26e02',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/theory/src/lib/services/music-note.spec.ts',
            hash: 'cd65ebc15594eb236341d2d735339668f3689d48',
          },
          {
            file: 'libs/theory/src/lib/services/music-note.ts',
            hash: 'f33fcf20a921e30e288581888bd0ff01050e1c0f',
          },
          {
            file: 'libs/theory/src/lib/services/music-string.spec.ts',
            hash: '6100c98f2878633cfb7ccbc5fd3bc5fa48f56aad',
          },
          {
            file: 'libs/theory/src/lib/services/music-string.ts',
            hash: '812ac50511a0928ceab08611142ade1398b1e79e',
          },
          {
            file: 'libs/theory/src/lib/theory.module.spec.ts',
            hash: 'aa2b2f5ced9dc73b9b75f1bc37e880d6ddf54185',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/theory/src/lib/theory.module.ts',
            hash: '3c19c1552e03734f26f973798c41b3514aff7d91',
            deps: ['npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/theory/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/theory/tsconfig.json',
            hash: '1c995b83bf3715a370457c4296b1a11f40572cff',
          },
          {
            file: 'libs/theory/tsconfig.lib.json',
            hash: '898e5e6227d4dfbec7f11b58509f9c19787223ec',
          },
          {
            file: 'libs/theory/tsconfig.lib.prod.json',
            hash: '61b523783f299f511f27248a42f86e5f9c29512f',
          },
          {
            file: 'libs/theory/tsconfig.spec.json',
            hash: 'c5db02778f96a2a200d787c0a7b376fe0d6c36f7',
          },
        ],
      },
    },
    {
      name: 'etude',
      type: 'lib',
      data: {
        tags: [],
        root: 'libs/etude',
        files: [
          {
            file: 'libs/etude/.browserslistrc',
            hash: '4f9ac26980c156a3d525267010d5f78144b43519',
          },
          {
            file: 'libs/etude/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'libs/etude/jest.config.ts',
            hash: '9769c3fecde6d32f9f3592faf00ba687153e8950',
          },
          {
            file: 'libs/etude/ng-package.json',
            hash: 'ae51912bee1ba89e9fd879de00ecb661094fedf0',
          },
          {
            file: 'libs/etude/package.json',
            hash: 'e9e9f8e65ec26a2e42587204d6f3bef4e43524d3',
            deps: ['npm:tslib', 'npm:@angular/common', 'npm:@angular/core'],
          },
          {
            file: 'libs/etude/project.json',
            hash: '239949bcb22a266f0e7e09f371987a95e2fec336',
          },
          {
            file: 'libs/etude/README.md',
            hash: 'ad83f8cd925abbc579ece4cd1d5dc77fb862e139',
          },
          {
            file: 'libs/etude/src/index.ts',
            hash: '72a33cff5152cb7049ae6ccc16fb70f2f961628b',
          },
          {
            file: 'libs/etude/src/lib/etude.module.spec.ts',
            hash: 'c7445a7cad9172bbffea5d440362d36e13455185',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/etude/src/lib/etude.module.ts',
            hash: '4bfa9f746426cd64b7dc4ccb675bc018032bf4b4',
            deps: ['npm:@angular/core', 'npm:@angular/common'],
          },
          {
            file: 'libs/etude/src/lib/etude/etude.component.html',
            hash: 'b4fea5d988b8c7ae416873120557feba7b6a884a',
          },
          {
            file: 'libs/etude/src/lib/etude/etude.component.scss',
            hash: '5d4e87f30f6362b8597dbe54a44aadaffa915763',
          },
          {
            file: 'libs/etude/src/lib/etude/etude.component.spec.ts',
            hash: '7f68691d99743aff2810ddab42d268f7d83bf77b',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/etude/src/lib/etude/etude.component.ts',
            hash: '890a8042fd287eec72dc12113c113645b457de96',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/etude/src/lib/etude/models/scale.ts',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'libs/etude/src/lib/etude/utils/progression.service.spec.ts',
            hash: 'df1d7b392eb22f43ca97c094858101530f565f1c',
            deps: ['npm:@angular/core'],
          },
          {
            file: 'libs/etude/src/lib/etude/utils/progression.service.ts',
            hash: '5e16fa2e13641eb53e6148efe9f6bf9cf09e120c',
            deps: ['npm:@angular/core', 'fretboard', 'tab-scroller'],
          },
          {
            file: 'libs/etude/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'libs/etude/tsconfig.json',
            hash: 'de18880da97ba947e6e2e07cae09919483984212',
          },
          {
            file: 'libs/etude/tsconfig.lib.json',
            hash: '898e5e6227d4dfbec7f11b58509f9c19787223ec',
          },
          {
            file: 'libs/etude/tsconfig.lib.prod.json',
            hash: '2a2faa884cf3a054c72288f62b9a9f9560ca4996',
          },
          {
            file: 'libs/etude/tsconfig.spec.json',
            hash: 'c5db02778f96a2a200d787c0a7b376fe0d6c36f7',
          },
        ],
      },
    },
    {
      name: 'demo',
      type: 'app',
      data: {
        tags: [],
        root: 'apps/demo',
        files: [
          {
            file: 'apps/demo/.browserslistrc',
            hash: '4f9ac26980c156a3d525267010d5f78144b43519',
          },
          {
            file: 'apps/demo/.eslintrc.json',
            hash: '88976de36aec46d3d8c8f37e376fc0ab39f8266d',
          },
          {
            file: 'apps/demo/jest.config.ts',
            hash: '4a0c347f7ba9278b26ddd20da41019bd61718943',
          },
          {
            file: 'apps/demo/project.json',
            hash: '5cd72558bc00a25c16acdfd6094aa3663ce66bed',
          },
          {
            file: 'apps/demo/src/app/app.component.html',
            hash: 'dfc85dd2b781c85ebfc4b14e500d55a17c865289',
          },
          {
            file: 'apps/demo/src/app/app.component.scss',
            hash: 'e7e0b8e240826fde21fec4eab008492f59d95f40',
          },
          {
            file: 'apps/demo/src/app/app.component.ts',
            hash: 'edf334fe4f7dd74eef91818b790bd4a548cba17c',
            deps: [
              'npm:@angular/core',
              'npm:@angular/material',
              'npm:@angular/platform-browser',
            ],
          },
          {
            file: 'apps/demo/src/app/app.module.ts',
            hash: '014f4fee28b9befce6bc3bc6660c524ef08ae42f',
            deps: [
              'theory',
              'npm:@angular/cdk',
              'npm:@angular/common',
              'npm:@angular/core',
              'npm:@angular/flex-layout',
              'npm:@angular/forms',
              'npm:@angular/material',
              'npm:@angular/platform-browser',
              'etude',
              'fretboard',
              'tab-scroller',
              'npm:angular-audio-context',
              'npm:angular-material-rail-drawer',
            ],
          },
          {
            file: 'apps/demo/src/app/metrenome.worker.ts',
            hash: 'da03c206ad622e521d34514e5c8da5ccba05e0af',
          },
          {
            file: 'apps/demo/src/app/metronome/metronome.component.html',
            hash: '966d50b98ca73120ab2839a6b7122db78de8ec87',
          },
          {
            file: 'apps/demo/src/app/metronome/metronome.component.scss',
            hash: '7b442c272343aeb8ab7d308ff1f23eccef8f59bd',
          },
          {
            file: 'apps/demo/src/app/metronome/metronome.component.ts',
            hash: '1d7808d6fcc2ae1a4367b7d62a3f337f2fd6e583',
            deps: ['npm:@angular/core', 'npm:angular-audio-context'],
          },
          {
            file: 'apps/demo/src/app/metronome/metronome.service.ts',
            hash: 'c78ee0e1c0f01a9d774c1db39558fa1d35359598',
            deps: ['npm:@angular/core', 'npm:angular-audio-context'],
          },
          {
            file: 'apps/demo/src/app/metronome/metronome.ts',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'apps/demo/src/app/models/form-controls.type.ts',
            hash: 'aa83827669f4f10b9e4da499fb7b640daa777ae8',
            deps: ['npm:@angular/forms'],
          },
          {
            file: 'apps/demo/src/app/models/mentronome-form.type.ts',
            hash: 'dff95dbebc06c7bdbfb8646bec0d0c761611a326',
          },
          {
            file: 'apps/demo/src/app/models/metronome-sample.ts',
            hash: 'eb604fc236435cb5e234d72b8434a6cc5c419ab9',
          },
          {
            file: 'apps/demo/src/app/models/note-resolution.interface.ts',
            hash: '4c75f1c87871fc584c7c0827cc94bc4225149415',
          },
          {
            file: 'apps/demo/src/app/models/queued-note.interface.ts',
            hash: '312432a2b09c0427fce3a492cdd982809fe80e48',
          },
          {
            file: 'apps/demo/src/app/models/tForm.type.ts',
            hash: '0ed83a192a261a44cde0567528c9bec8ed443f3a',
            deps: ['npm:@angular/forms'],
          },
          {
            file: 'apps/demo/src/app/shell/shell.component.html',
            hash: '8d012d6a58e30efbebacb97eaced2e869b673ec2',
          },
          {
            file: 'apps/demo/src/app/shell/shell.component.scss',
            hash: '7c7c9386495df7cb270c9e3dc890cd0fe5312103',
          },
          {
            file: 'apps/demo/src/app/shell/shell.component.ts',
            hash: '205ce01d49c3d0812b4f7e1c3863db33393d9a51',
            deps: [
              'tab-scroller',
              'npm:@angular/cdk',
              'npm:@angular/core',
              'etude',
              'fretboard',
              'theory',
              'npm:rxjs',
            ],
          },
          {
            file: 'apps/demo/src/assets/.gitkeep',
            hash: 'e69de29bb2d1d6434b8b29ae775ad8c2e48c5391',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-114x114.png',
            hash: 'ced566f3403a178b74522db4d7c6ee9706c89be8',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-120x120.png',
            hash: '447f264515c5d4b9cea636225296b9907c21ae54',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-144x144.png',
            hash: '78362bbb45cd47f1c33958fa10365a1039798fc7',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-57x57.png',
            hash: 'd86630aec5bbecbe44354abbe300b35ad7e3fc40',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-60x60.png',
            hash: 'd79c43f553527449b3aeeb3d5d21f1861ebd6630',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-72x72.png',
            hash: '51aac4f096bf1aad2cd264acc4dcc83a3dad0593',
          },
          {
            file: 'apps/demo/src/assets/favicon/apple-touch-icon-76x76.png',
            hash: 'c93dcd284d1ec6948ec661e40ad1da74d4049132',
          },
          {
            file: 'apps/demo/src/assets/favicon/code.txt',
            hash: '9940c02e33b0c949c2a2ca387630494a6c828fa2',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon-128.png',
            hash: 'eada9dba2de31141d25dcf489ac3b2d319e02c81',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon-16x16.png',
            hash: '7ef1f03ba6dddaaea2624c0f2b17c66b49985ce3',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon-196x196.png',
            hash: '9135038e7b91b7e94c9555272568d87b1713cb17',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon-32x32.png',
            hash: '93a44b2f529cd8daea493f32f7de53807e455bc6',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon-96x96.png',
            hash: '9b83d4bab9f42a5848aabb9aac4a3a14a17f11c2',
          },
          {
            file: 'apps/demo/src/assets/favicon/favicon.ico',
            hash: '23625480fca06498235ec27407438a6948b5b928',
          },
          {
            file: 'apps/demo/src/assets/favicon/mstile-144x144.png',
            hash: '78362bbb45cd47f1c33958fa10365a1039798fc7',
          },
          {
            file: 'apps/demo/src/assets/favicon/mstile-150x150.png',
            hash: '053738b0351ea52c357a7962461b5e09684e2f6a',
          },
          {
            file: 'apps/demo/src/assets/favicon/mstile-310x150.png',
            hash: '79ae90a3bbd3b5cfb5e2997e60836e99adcb1ed7',
          },
          {
            file: 'apps/demo/src/assets/favicon/mstile-310x310.png',
            hash: '451e0039ed8c199e8ba3bb6c7bce929778a3519c',
          },
          {
            file: 'apps/demo/src/assets/favicon/mstile-70x70.png',
            hash: 'eada9dba2de31141d25dcf489ac3b2d319e02c81',
          },
          {
            file: 'apps/demo/src/assets/fonts/Amplify_PersonalUseOnly.ttf',
            hash: '134b3043a4ea4878175080845109281a720a4768',
          },
          {
            file: 'apps/demo/src/assets/fonts/magneto.ttf',
            hash: '8d960829b64e203cb9d68c3093329e299dbd4c1b',
          },
          {
            file: 'apps/demo/src/assets/icons/github.svg',
            hash: '7db6b9303bfb98d18bb212c0cb035df0ac00b8bd',
          },
          {
            file: 'apps/demo/src/assets/images/grid.png',
            hash: '989e46ed5637afaffdceeaa7bc44717c81ad9ecd',
          },
          {
            file: 'apps/demo/src/assets/images/grid.svg',
            hash: 'c5be271ca0f0100448b8843366971548e339d0ca',
          },
          {
            file: 'apps/demo/src/assets/images/logo.png',
            hash: '4805ae1bca791df7674aeb4be6aceefdacae6776',
          },
          {
            file: 'apps/demo/src/assets/images/logo.svg',
            hash: '3600c4309a48a219c9a8a244f36bc1371df464c1',
          },
          {
            file: 'apps/demo/src/environments/environment.prod.ts',
            hash: '4ac2700af1fa1708109b1e504209450e6d2777e8',
          },
          {
            file: 'apps/demo/src/environments/environment.ts',
            hash: 'c33624dab63b4187647de3bf6f8816015c4bbcb3',
          },
          {
            file: 'apps/demo/src/index.html',
            hash: '6c40b3f2cd9b8901efcf64bf0152eca051a73e91',
          },
          {
            file: 'apps/demo/src/main.ts',
            hash: 'd9a2e7e4a582e265db779363bd8b2492c43c141b',
            deps: [
              'npm:@angular/core',
              'npm:@angular/platform-browser-dynamic',
            ],
          },
          {
            file: 'apps/demo/src/polyfills.ts',
            hash: 'e4555ed11fa2f217b8e4c744d564da4f7388b4c4',
            deps: ['npm:zone.js'],
          },
          {
            file: 'apps/demo/src/styles.scss',
            hash: '8aeebf1686cb63f88a8f6990794f34382b6751ff',
          },
          {
            file: 'apps/demo/src/test-setup.ts',
            hash: '1100b3e8a6ed08f4b5c27a96471846d57023c320',
            deps: ['npm:jest-preset-angular'],
          },
          {
            file: 'apps/demo/tsconfig.app.json',
            hash: 'e14da03a2b5f777242ffe2183091c9845ce21517',
          },
          {
            file: 'apps/demo/tsconfig.editor.json',
            hash: '20c4afdbf437457984afcb236d4b5e588aec858a',
          },
          {
            file: 'apps/demo/tsconfig.json',
            hash: '59af1b5ea84152af8cf1098291e392c11aa599ed',
          },
          {
            file: 'apps/demo/tsconfig.spec.json',
            hash: '86431c4350c0760edd6cac80a3707a2c5d107de0',
          },
          {
            file: 'apps/demo/tsconfig.worker.json',
            hash: '486353f70f90d04fc1960e989bba49263193a938',
          },
        ],
      },
    },
  ],
  dependencies: {
    'shared-storybook-e2e': [
      {
        source: 'shared-storybook-e2e',
        target: 'shared-storybook',
        type: 'implicit',
      },
    ],
    'shared-storybook': [],
    'tab-scroller-e2e': [
      { source: 'tab-scroller-e2e', target: 'tab-scroller', type: 'implicit' },
    ],
    'fretboard-e2e': [
      { source: 'fretboard-e2e', target: 'fretboard', type: 'implicit' },
    ],
    'tab-scroller': [],
    fretboard: [],
    'shared-ui': [],
    'demo-e2e': [{ source: 'demo-e2e', target: 'demo', type: 'implicit' }],
    theory: [],
    etude: [
      { source: 'etude', target: 'fretboard', type: 'static' },
      { source: 'etude', target: 'tab-scroller', type: 'static' },
    ],
    demo: [
      { source: 'demo', target: 'theory', type: 'static' },
      { source: 'demo', target: 'etude', type: 'static' },
      { source: 'demo', target: 'fretboard', type: 'static' },
      { source: 'demo', target: 'tab-scroller', type: 'static' },
    ],
  },
  layout: { appsDir: 'apps', libsDir: 'libs' },
  affected: [],
  focus: null,
  groupByFolder: false,
  exclude: [],
};
