import { addons } from '@storybook/addons';
import theme from './theme';

// Option defaults.
addons.setConfig({
  options: {
    theme: theme,
  },
});
