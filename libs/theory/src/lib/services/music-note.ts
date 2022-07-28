const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export class MusicNote {
  note: string;

  constructor(note: string) {
    if (typeof note !== 'string') {
      throw new Error('No note provided.');
    }
    this.note = MusicNote.resolve(note);
  }

  static get notes() {
    return NOTES;
  }

  static resolve(note: string) {
    let resolved = note.toUpperCase();
    // fix flats
    if (note[1] === 'b') {
      const index = NOTES.indexOf(resolved[0]);
      if (index === 0) {
        resolved = 'G#';
      } else {
        resolved = NOTES[index - 1];
      }
    }
    if (NOTES.indexOf(resolved) < 0) {
      throw new Error(`Unrecognized note ${resolved}.`);
    }
    return resolved;
  }

  /**
   * Returns the pitch value of a note that is steps half-steps away.
   *
   * @static
   * @param {string} note
   * @param {number} steps
   * @return {*}  {string}
   * @memberof MusicNote
   */
  static tuned(note: string, steps: number): string {
    let out = note;
    if (steps > 0) {
      out = MusicNote.up(note, steps);
    } else if (steps < 0) {
      out = MusicNote.down(note, -1 * steps);
    }
    return out;
  }

  /**
   * Returns the pitch value of a note that is steps half-steps higher.
   *
   * @static
   * @param {string} note
   * @param {number} [num]
   * @return {*}  {string}
   * @memberof MusicNote
   */
  static up(note: string, num?: number): string {
    if (typeof num === 'undefined') {
      num = 1;
    }
    if (num < 0) {
      return MusicNote.down(note, -1 * num);
    }
    const steps = num % 12;
    const resolved = MusicNote.resolve(note);
    const index = NOTES.indexOf(resolved);
    if (index + steps > 11) {
      return NOTES[index - 12 + steps];
    }
    return NOTES[index + steps];
  }

  /**
   * Returns the pitch value of a note that is steps half-steps lower.
   *
   * @static
   * @param {string} note
   * @param {number} [num]
   * @return {*}  {string}
   * @memberof MusicNote
   */
  static down(note: string, num?: number): string {
    if (typeof num === 'undefined') {
      num = 1;
    }
    if (num < 0) {
      return MusicNote.up(note, -1 * num);
    }
    const steps = num % 12;
    const resolved = MusicNote.resolve(note);
    const index = NOTES.indexOf(resolved);
    if (index - steps < 0) {
      return NOTES[index + 12 - steps];
    }
    return NOTES[index - steps];
  }

  /**
   * Returns the pitch value of the note one half-step lower the note.
   *
   * @static
   * @param {string} note
   * @return {*}
   * @memberof MusicNote
   */
  static flat(note: string) {
    return MusicNote.down(note);
  }

  static sharp(note: string) {
    return MusicNote.up(note);
  }

  /**
   * Returns the number of half-steps between the current note and a given one. This is always positive, assuming the current note is lower in pitch.
   *
   * @static
   * @param {string} one
   * @param {string} two
   * @return {*}  {number}
   * @memberof MusicNote
   */
  static diff(one: string, two: string): number {
    const c1 = MusicNote.resolve(one);
    const c2 = MusicNote.resolve(two);
    const delta = NOTES.indexOf(c2) - NOTES.indexOf(c1);
    if (delta >= 0) {
      return delta;
    }
    return delta + 12;
  }

  diff(note: string) {
    return MusicNote.diff(this.note, note);
  }

  /**
   * Returns the pitch value of a note that is steps half-steps away.
   *
   * @param {number} steps
   * @return {*}  {string}
   * @memberof MusicNote
   */
  tuned(steps: number): string {
    if (steps > 0) {
      return MusicNote.up(this.note, steps);
    } else if (steps < 0) {
      return MusicNote.down(this.note, -1 * steps);
    }

    return this.note;
  }

  /**
   * Returns the pitch value of a note that is steps half-steps higher.
   *
   * @param {number} steps
   * @return {*}
   * @memberof MusicNote
   */
  up(steps: number) {
    return this.tuned(steps);
  }

  /**
   * Returns the pitch value of a note that is steps half-steps lower.
   *
   * @param {number} steps
   * @return {*}
   * @memberof MusicNote
   */
  down(steps: number) {
    return this.tuned(-1 * steps);
  }

  /**
   * Returns the pitch value of the note one half-step lower the note.
   *
   * @return {*}
   * @memberof MusicNote
   */
  flat() {
    return MusicNote.down(this.note);
  }

  /**
   * Returns the pitch value of the note one half-step higher the note.
   *
   * @return {*}
   * @memberof MusicNote
   */
  sharp() {
    return MusicNote.up(this.note);
  }
}
