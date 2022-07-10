import { FormGroup } from '@angular/forms';
import { FormControls } from './form-controls.type';

export type TForm<T> = FormGroup & {
  controls: FormControls<T>;
};
