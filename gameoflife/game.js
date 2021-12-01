let w;
let columns;
let rows;
let board;
let next;
let rectX = 0;

let fr = 5 ; //starting FPS
let clr;
let slider;
let s=2;
let r=3;
let playing = false;

function setup() {
  createCanvas(720, 400);
  background(200);
  frameRate(fr);
  slider = createSlider(0, 255, 5);
  slider.position(20, 100);
  slider.style('width', '80px');

  w = 20;
  // Calculate columns and rows
  columns = floor(width / w);
  rows = floor(height / w);
  // Wacky way to make a 2D array is JS
  board = new Array(columns);
  for (let i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  // Going to use multiple 2D arrays and swap them
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  
}

var cont = document.getElementById("continue");
cont.onclick=function(){
    frameRate(fr)
}
var start = document.getElementById("start");
start.onclick=function(){
    init()
}
var pause = document.getElementById("pause");
pause.onclick=function(){
    frameRate(0)
}

function draw() {
    let val = slider.value();
    frameRate (val)
    background(200);

  
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) fill(0);
      else fill(255);
      stroke(0);
      rect(i * w, j * w, w-1, w-1);
    }
  
  }
 

}




// Fill board randomly
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      // Lining the edges with 0s
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      // Filling the rest randomly
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

// The process of creating the new generation
function generate() {
    const s=document.querySelector('#survival').value;
    const r=document.querySelector('#reproduction').value;

  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if      ((board[x][y] == 1) && (neighbors <  s)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  r)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == r)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap!
  let temp = board;
  board = next;
  next = temp;
}