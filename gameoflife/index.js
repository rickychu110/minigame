let cnv;//, d, g;
let slider;

//Initialization - run only once at loading
function setup(){
    cnv = createCanvas(100, 100);//Width 100px Height 100px
    
    //Example: mouseClicked
    // cnv.mouseClicked(changeGray); 
    // d = 10;
    //g = 100;
    slider = createSlider(0, 255, 100);
    slider.position(10, 10);
    slider.style('width', '80px');
}

//Called at specified FPS (frame per second) 30 fps
function draw(){
    //background(g);
    // ellipse(width / 2, height / 2, d, d);
    // fill(255, 204, 0);
    // stroke(255, 204, 0);
    // rect(30, 20, 55, 55);
    let val = slider.value();
    background(val);
    //HW : change frame rate
}

//p5.js call this!
// function mouseClicked() {
//     d = d + 10;
// }

// function changeGray() {
//     g = random(0, 255);
// }
