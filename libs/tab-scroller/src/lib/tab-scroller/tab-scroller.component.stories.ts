import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TabScrollerComponent } from './tab-scroller.component';

export default {
  title: 'Tab Scroller/TabScrollerComponent',
  component: TabScrollerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TabScrollerComponent>;

const Template: Story<TabScrollerComponent> = (args: TabScrollerComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  running: false,
  tick: 1,
  bpm: 60,
  beat: 1,
  tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
};
