import { addons } from '@storybook/addons';
import MyTheme from './ng-guitar-theme';

// Option defaults.
addons.setConfig({
  options: {
    theme: MyTheme,
  },
});
