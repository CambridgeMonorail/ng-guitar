import { TForm } from './tForm.type';
import { AbstractControl, FormArray } from '@angular/forms';

export type FormControls<T> = {
  [key in keyof T]: T[key] extends TForm<unknown> | FormArray // If control value has type of TForm (nested form) or FormArray
    ? T[key] // Use type that we define in our FormModel
    : Omit<AbstractControl, 'value'> & { value: T[key] }; // Or use custom AbstractControl with typed value
};
