import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FretComponent } from './fret.component';

export default {
  title: 'Tab Scroller/FretComponent',
  component: FretComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FretComponent>;

const Template: Story<FretComponent> = (args: FretComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  notes: [],
};
