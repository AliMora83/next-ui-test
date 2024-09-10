export interface Track {
  id: string;
  name: string;
  audioSrc: string;
}

export const tracks: Track[] = [
  {
    id: "track1",
    name: "Track 1 - Clicks",
    audioSrc:
      "https://firebasestorage.googleapis.com/v0/b/nama-language.appspot.com/o/track1.mp3?alt=media&token=08328573-9921-4abd-ac33-28b68bb73d9a",
  },
  {
    id: "track2",
    name: "Track 2 - Vowels",
    audioSrc:
      "https://firebasestorage.googleapis.com/v0/b/nama-language.appspot.com/o/track2.mp3?alt=media&token=67f89649-e052-41e7-add4-6bb86ff02a5f",
  },
  {
    id: "track3",
    name: "Track 3 - Alphabet",
    audioSrc:
      "https://firebasestorage.googleapis.com/v0/b/nama-language.appspot.com/o/track3.mp3?alt=media&token=f94c8f6f-d751-42a0-9866-1369773dfbf0",
  },
  {
    id: "track4",
    name: "Track 4 - Nouns",
    audioSrc:
      "https://firebasestorage.googleapis.com/v0/b/nama-language.appspot.com/o/track4.mp3?alt=media&token=4245b34f-85aa-40ad-8bf9-189fdfd6c99e",
  },
];
