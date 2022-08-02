import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Notes } from '../model/notes';
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

const notes: Notes = { bar: true, notes: ['E', 'B', 'G', 'D', 'A', 'E'] };

const Template: Story<FretComponent> = (args: FretComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  notes: notes,
};
