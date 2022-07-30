import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FretboardComponent } from './fretboard.component';

export default {
  title: 'Fretboard/FretboardComponent',
  component: FretboardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FretboardComponent>;

const Template: Story<FretboardComponent> = (args: FretboardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
