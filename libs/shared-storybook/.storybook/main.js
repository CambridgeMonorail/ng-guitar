const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    './*.stories.mdx',
    '../src/lib/**/*.stories.mdx',
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['assets'],
  addons: [...(rootMain.addons || [])],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
