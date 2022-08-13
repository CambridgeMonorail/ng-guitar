import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FretboardComponent } from './fretboard.component';
import { Fretboard } from './models/fretboard.interface';

export default {
  title: 'Fretboard/FretboardComponent',
  component: FretboardComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule],
    }),
  ],
} as Meta<FretboardComponent>;

const fretboard: Fretboard = {
  key: 'C',
  tuning: ['E', 'B', 'G', 'D', 'A', 'E'],
  strings: [
    {
      note: 'E',
      notes: [
        { note: 'E', fret: 0, active: true, inKey: true },
        { note: 'F', fret: 0, active: true, inKey: true },
        { note: 'F#', fret: 0, active: true, inKey: false },
        { note: 'G', fret: 0, active: true, inKey: true },
        { note: 'G#', fret: 0, active: true, inKey: false },
        { note: 'A', fret: 0, active: true, inKey: true },
        { note: 'A#', fret: 0, active: true, inKey: false },
        { note: 'B', fret: 0, active: true, inKey: true },
        { note: 'C', fret: 0, active: true, inKey: true },
        { note: 'C#', fret: 0, active: true, inKey: false },
        { note: 'D', fret: 0, active: true, inKey: true },
        { note: 'D#', fret: 0, active: true, inKey: false },
        { note: 'E', fret: 0, active: true, inKey: true },
        { note: 'F', fret: 0, active: true, inKey: true },
        { note: 'F#', fret: 0, active: true, inKey: false },
        { note: 'G', fret: 0, active: true, inKey: true },
        { note: 'G#', fret: 0, active: true, inKey: false },
        { note: 'A', fret: 0, active: true, inKey: true },
        { note: 'A#', fret: 0, active: true, inKey: false },
        { note: 'B', fret: 0, active: true, inKey: true },
        { note: 'C', fret: 0, active: true, inKey: true },
        { note: 'C#', fret: 0, active: true, inKey: false },
      ],
    },
  ],
};

const Template: Story<FretboardComponent> = (args: FretboardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  fretboard: fretboard,
};
