import { addons } from '@storybook/addons';
import customTheme from './CustomTheme';

// Option defaults.
addons.setConfig({
  options: {
    theme: customTheme,
  },
});
