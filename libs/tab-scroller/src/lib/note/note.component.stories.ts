import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NoteComponent } from './note.component';

export default {
  title: 'Tab Scroller/NoteComponent',
  component: NoteComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<NoteComponent>;

const Template: Story<NoteComponent> = (args: NoteComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  note: 'C',
};
