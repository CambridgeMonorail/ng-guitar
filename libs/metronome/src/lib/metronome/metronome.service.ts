import { Injectable } from '@angular/core';
import { AudioContext } from 'angular-audio-context';

@Injectable({
  providedIn: 'root',
})
export class MetronomeService {
  constructor(private _audioContext: AudioContext) {
    // if we wanted to load audio files, etc., this is where we should do it.
  }
}
