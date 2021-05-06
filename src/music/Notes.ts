/**
 * Duration notation: 4n: quarter note, 8n eighth note
 * Time notation: <bar>:<quarterNote>:<sixteenthNote>
 */
const getAccompanimentStartingAtBar = (startBar: number) => {
  return [
    {note: 'F#3', duration: '8n', time: `${startBar}:0`},
    {note: 'A3', duration: '8n', time: `${startBar}:0.5`},
    {note: 'C#4', duration: '8n', time: `${startBar}:1`},
    {note: 'A3', duration: '8n', time: `${startBar}:1.5`},
    {note: 'F#3', duration: '8n', time: `${startBar}:2`},

    {note: 'B2', duration: '8n', time: `${startBar + 1}:0`},
    {note: 'B3', duration: '8n', time: `${startBar + 1}:0.5`},
    {note: 'F#4', duration: '8n', time: `${startBar + 1}:1`},
    {note: 'D4', duration: '8n', time: `${startBar + 1}:1.5`},
    {note: 'B3', duration: '8n', time: `${startBar + 1}:2`},

    {note: 'B3', duration: '8n', time: `${startBar + 2}:0`},
    {note: 'D4', duration: '8n', time: `${startBar + 2}:0.5`},
    {note: 'F#4', duration: '8n', time: `${startBar + 2}:1`},
    {note: 'D4', duration: '8n', time: `${startBar + 2}:1.5`},
    {note: 'B3', duration: '8n', time: `${startBar + 2}:2`},

    {note: 'E3', duration: '8n', time: `${startBar + 3}:0`},
    {note: 'G#3', duration: '8n', time: `${startBar + 3}:0.5`},
    {note: 'B3', duration: '8n', time: `${startBar + 3}:1`},
    {note: 'G#3', duration: '8n', time: `${startBar + 3}:1.5`},
    {note: 'E3', duration: '8n', time: `${startBar + 3}:2`},

    {note: 'F#3', duration: '8n', time: `${startBar + 4}:0`},
    {note: 'A3', duration: '8n', time: `${startBar + 4}:0.5`},
    {note: 'C#4', duration: '8n', time: `${startBar + 4}:1`},
    {note: 'A3', duration: '8n', time: `${startBar + 4}:1.5`},
    {note: 'F#3', duration: '8n', time: `${startBar + 4}:2`},

    {note: 'B2', duration: '8n', time: `${startBar + 5}:0`},
    {note: 'B3', duration: '8n', time: `${startBar + 5}:0.5`},
    {note: 'F#4', duration: '8n', time: `${startBar + 5}:1`},
    {note: 'D4', duration: '8n', time: `${startBar + 5}:1.5`},
    {note: 'B3', duration: '8n', time: `${startBar + 5}:2`},

    {note: 'B3', duration: '8n', time: `${startBar + 6}:0`},
    {note: 'D4', duration: '8n', time: `${startBar + 6}:0.5`},
    {note: 'F#4', duration: '8n', time: `${startBar + 6}:1`},
    {note: 'D4', duration: '8n', time: `${startBar + 6}:1.5`},
    {note: 'B3', duration: '8n', time: `${startBar + 6}:2`},

    {note: 'C#3', duration: '8n', time: `${startBar + 7}:0`},
    {note: 'F4', duration: '8n', time: `${startBar + 7}:0.5`},
    {note: 'G#4', duration: '8n', time: `${startBar + 7}:1`},
    {note: 'F4', duration: '8n', time: `${startBar + 7}:1.5`},
    {note: 'C#4', duration: '8n', time: `${startBar + 7}:2`},
  ];
};

const leadMelodyPart1 = [
  {note: 'F#4', duration: '8n', time: '0:0'},
  {note: 'C#5', duration: '8n', time: '0:0.5'},
  {note: 'F#4', duration: '8n', time: '0:1.5'},
  {note: 'C#5', duration: '8n', time: '0:2'},

  {note: 'G#4', duration: '8n', time: '1:0'},
  {note: 'B4', duration: '8n', time: '1:0.5'},
  {note: 'G#4', duration: '8n', time: '1:1.5'},
  {note: 'B4', duration: '8n', time: '1:2'},

  {note: 'G#4', duration: '8n', time: '2:0'},
  {note: 'D5', duration: '8n', time: '2:0.5'},
  {note: 'G#4', duration: '8n', time: '2:1.5'},
  {note: 'D5', duration: '8n', time: '2:2'},

  {note: 'A4', duration: '8n', time: '3:0'},
  {note: 'C#5', duration: '8n', time: '3:0.5'},
  {note: 'A4', duration: '8n', time: '3:1.5'},
  {note: 'C#5', duration: '8n', time: '3:2'},

  {note: 'A4', duration: '8n', time: '4:0'},
  {note: 'E5', duration: '8n', time: '4:0.5'},
  {note: 'A4', duration: '8n', time: '4:1.5'},
  {note: 'E5', duration: '8n', time: '4:2'},

  {note: 'B4', duration: '8n', time: '5:0'},
  {note: 'D5', duration: '8n', time: '5:0.5'},
  {note: 'B4', duration: '8n', time: '5:1.5'},
  {note: 'D5', duration: '8n', time: '5:2'},

  {note: 'B4', duration: '8n', time: '6:0'},
  {note: 'F#5', duration: '8n', time: '6:0.5'},
  {note: 'B4', duration: '8n', time: '6:1.5'},
  {note: 'F#5', duration: '8n', time: '6:2'},

  {note: 'C#5', duration: '8n', time: '7:0'},
  {note: 'F5', duration: '8n', time: '7:0.5'},
  {note: 'C#5', duration: '8n', time: '7:1.5'},
  {note: 'F5', duration: '8n', time: '7:2'},
];

const leadMelodyPart2 = [
  {note: 'C#5', duration: '8n', time: '8:0'},
  {note: 'G#5', duration: '8n', time: '8:0.5'},
  {note: 'C#5', duration: '8n', time: '8:1.5'},
  {note: 'G#5', duration: '8n', time: '8:2'},

  {note: 'C#5', duration: '8n', time: '9:0'},
  {note: 'F#5', duration: '8n', time: '9:0.5'},
  {note: 'C#5', duration: '8n', time: '9:1.5'},
  {note: 'F#5', duration: '8n', time: '9:2'},

  {note: 'C#5', duration: '8n', time: '10:0'},
  {note: 'F#5', duration: '8n', time: '10:0.5'},
  {note: 'C#5', duration: '8n', time: '10:1.5'},
  {note: 'F#5', duration: '8n', time: '10:2'},

  {note: 'C#5', duration: '8n', time: '11:0'},
  {note: 'E5', duration: '8n', time: '11:0.5'},
  {note: 'C#5', duration: '8n', time: '11:1.5'},
  {note: 'E5', duration: '8n', time: '11:2'},

  {note: 'C#5', duration: '8n', time: '12:0'},
  {note: 'E5', duration: '8n', time: '12:0.5'},
  {note: 'C#5', duration: '8n', time: '12:1.5'},
  {note: 'E5', duration: '8n', time: '12:2'},

  {note: 'B4', duration: '8n', time: '13:0'},
  {note: 'D5', duration: '8n', time: '13:0.5'},
  {note: 'B4', duration: '8n', time: '13:1.5'},
  {note: 'D5', duration: '8n', time: '13:2'},

  {note: 'A4', duration: '8n', time: '14:0'},
  {note: 'C#5', duration: '8n', time: '14:0.5'},
  {note: 'A4', duration: '8n', time: '14:1.5'},
  {note: 'C#5', duration: '8n', time: '14:2'},

  {note: 'G#4', duration: '8n', time: '15:0'},
  {note: 'B4', duration: '8n', time: '15:0.5'},
  {note: 'G#4', duration: '8n', time: '15:1.5'},
  {note: 'B4', duration: '8n', time: '15:2'},
];

const leadMelodyEnding = [
  {note: 'F#5', duration: '8n', time: '16:0'},
  {note: 'F5', duration: '8n', time: '16:1'},
  {note: 'C#6', duration: '4n', time: '16:2'},
]

export const accompanimentNotes = [
  ...getAccompanimentStartingAtBar(0),
  ...getAccompanimentStartingAtBar(8),
];
export const leadMelodyNotes = [...leadMelodyPart1, ...leadMelodyPart2, ...leadMelodyEnding];