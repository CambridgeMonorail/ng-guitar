import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../../../documentation.json';
import '!style-loader!css-loader!sass-loader!../../../apps/demo/src/styles.scss';

setCompodocJson(docJson);

addParameters({ docs: { iframeHeight: 400 } });
