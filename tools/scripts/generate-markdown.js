const markdownMagic = require('markdown-magic'); /* CLI markdown.config.js file example */

const config = {
  matchWord: 'AUTO-GENERATED-CONTENT',
  transforms: {
    PKGJSON: require('markdown-magic-package-json'),
  },
  callback: function () {
    console.log('markdown processing done');
  },
};

markdownMagic('readme.md', config);
