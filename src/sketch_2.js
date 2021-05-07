
const RESOLUTION = 5;
const COLOR_BLACK = 0;
const COLOR_WHITE = 255;
const COLOR_GRAY = 127;

let cols, rows;
let baseField;

// noise configuration
const NOISE_INCREMENT = 0.01;

let xoff, yoff = 0.0;

function initField(cols, rows) {
  const field = new Array(cols);
  for (let col = 0; col < cols; col++) {
    field[col] = new Array(rows);
  }
  return field;
}

function drawPoints(field) {
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      stroke(field[row][col] * 255);
      strokeWeight(1);
      point(row * RESOLUTION, col * RESOLUTION);

      // debugging
      fill(COLOR_WHITE);
      textSize(7);
      text(round(field[row][col], 2), row * RESOLUTION, col * RESOLUTION);
    }
  }
}

function calculateCurrentConfiguration(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}

function drawLineBetweenVectors(a, b, row, col) {
  const elevation = map(baseField[row][col], 0, 1, 0, 600) - 200;
  line(a.x, a.y, elevation, b.x, b.y, elevation);
}

function drawConfiguration(config, a, b, c, d, row, col) {
  switch (config) {
    case 1:
      drawLineBetweenVectors(c, d, row, col);
      break;
    case 2:
      drawLineBetweenVectors(b, c, row, col);
      break;
    case 3:
      drawLineBetweenVectors(b, d, row, col);
      break;
    case 4:
      drawLineBetweenVectors(a, b, row, col);
      break;
    case 5:
      drawLineBetweenVectors(a, d, row, col);
      drawLineBetweenVectors(b, c, row, col);
      break;
    case 6:
      drawLineBetweenVectors(a, c, row, col);
      break;
    case 7:
      drawLineBetweenVectors(a, d, row, col);
      break;
    case 8:
      drawLineBetweenVectors(a, d, row, col);
      break;
    case 9:
      drawLineBetweenVectors(a, c, row, col);
      break;
    case 10:
      drawLineBetweenVectors(a, b, row, col);
      drawLineBetweenVectors(c, d, row, col);
      break;
    case 11:
      drawLineBetweenVectors(a, b, row, col);
      break;
    case 12:
      drawLineBetweenVectors(b, d, row, col);
      break;
    case 13:
      drawLineBetweenVectors(b, c, row, col);
      break;
    case 14:
      drawLineBetweenVectors(c, d, row, col);
      break;
  }
}

function drawIsoLines(field) {
  for (let col = 0; col < cols-1; col++) {
    for (let row = 0; row < rows-1; row++) {
      let x = row * RESOLUTION;
      let y = col * RESOLUTION;

      let a = createVector(x + RESOLUTION/2, y);
      let b = createVector(x + RESOLUTION, y + RESOLUTION/2);
      let c = createVector(x + RESOLUTION/2, y + RESOLUTION);
      let d = createVector(x, y + RESOLUTION/2);

      let currentConfig = calculateCurrentConfiguration(
        round(field[row][col]),
        round(field[row+1][col]),
        round(field[row+1][col+1]),
        round(field[row][col+1]));
      drawConfiguration(currentConfig, a, b, c, d, row, col);
    }
  }
}

function calculateFieldValues(field) {
  xoff = 0;
  for (let col = 0; col < cols; col++) {
    xoff += NOISE_INCREMENT;
    yoff = 0;
    for (let row = 0; row < rows; row++) {
      field[row][col] = noise(xoff, yoff);
      yoff += NOISE_INCREMENT;
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background('#202020');
  translate(windowWidth/2, windowHeight/2);
  rotateX(PI/3);
  translate(-windowWidth, -windowHeight);

  cols = 1 + floor(windowWidth / RESOLUTION);
  rows = 1 + floor(windowHeight / RESOLUTION);
  baseField = initField(rows, cols);
  calculateFieldValues(baseField);

  const numberOfPlains = 60;

  for (let currentPlainIdx = 0; currentPlainIdx < numberOfPlains; currentPlainIdx++) {
    const currentPlain = initField(rows, cols);
    const plainBoundary = map(currentPlainIdx, 0, numberOfPlains, 0, 1);

    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        currentPlain[row][col] = baseField[row][col];
        const currentValue = currentPlain[row][col];
        if (currentValue < plainBoundary || currentValue > plainBoundary + 1) {
          currentPlain[row][col] = 0;
        } else {
          currentPlain[row][col] = 0.5;
        }
      }
    }

    // every 5th elevation contour should be bolder and darker
    if (currentPlainIdx % 5 == 0) {
      strokeWeight(2);
    } else {
      strokeWeight(1);
    }
    const strokeColor = map(currentPlainIdx, 0, 60, 100, 200);
    let blue = color('#09B9E2');
    let red = color('#B25958');
    let gradient = lerpColor(red, blue, currentPlainIdx / numberOfPlains);
    stroke(gradient);

    drawIsoLines(currentPlain);
  }
}

function draw() {

}