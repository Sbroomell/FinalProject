var mode = 0;
var Guitar1
var Guitar2
var ChillChords
var ContrailsGuitar
var RuralGuitar
var LowE

// Mover object
let particles = [];
let springs = [];

//audio variable
let audioStarted = false;


function preload() {
  Guitar1 = loadSound("AcousticGuitar1 - 4:29:24, 2.12 PM.mp3");
  Guitar2 = loadSound ("AcousticGuitar2 - 4:29:24, 2.13 PM.mp3");
  ChillChords = loadSound ("ChillChords.mp3");
  ContrailsGuitar = loadSound ("ContrailsGuitar.mp3");
  RuralGuitar = loadSound ("RuralGuitar.mp3");
  LowE = loadSound ("LowEGuitar.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
 let offset = width/2;
  let total = width / offset;
  
  let prev = null;
 for (let i = 0; i < total + 1; i++) {
    particles[i] = new Particle(i * offset, height / 2);
    if (prev) {
      let s = new Spring(prev, particles[i], offset * 0.1, 1);
      springs.push(s);
    }

    prev = particles[i];
}
  particles[0].lock();
  particles[particles.length - 1].lock();

  // Constrain spring distance between min and max
  // spring.constrainLength(bob, 30, 200);
}


function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();

    // your code here
    background (255)
    fill(255);
    noStroke();
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
    
    //guitar body
    fill (161, 102, 47)
    circle (width-30,height/2,400)
    
    //soundhole
    fill ('#1D191B')
    circle (width-50,height/2,110)
    
    //fretboard
      fill('#1D191B')
  rect(0, height/4, width-165, height/2.2)
    

    
    // Apply a gravity force to the bob
  // var gravity = createVector(0, 2);
  //bob.applyForce(gravity);
  //anchor.applyForce(gravity);

  for (let p of particles) {
    p.update();
    if (mouseIsPressed) {
      p.display();
    }
    p.handleDrag(mouseX, mouseY);
  }

  for (let s of springs) {
    s.update();
    s.display();
    //s.constrainLength2(1);
  }

    //buttons
    let button1 = createButton('Strum Pattern 1 - Press A');
    button1.position(width-150, height/2-150);
    
     let button2 = createButton('Strum Pattern 2 - Press B');
     button2.position(width-150, height/2-100);
    
     let button3 = createButton('Chill Vibes - Press C');
     button3.position(width-150, height-275);
    
     let button4 = createButton('Trailing Guitar - Press D');
     button4.position(width-150, height-240);
    
     let button5 = createButton('Country Guitar - Press E');
     button5.position(width-150, height-200);
  }

       if(mouseX > width/2-2 
        && mouseX < width/2+2
        && mouseY < height/2+2
        && mouseY > height/2-2)
       {LowE.play();
  console.log ('yes') 
       }
}
  

function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
          
    }  
}

function mousePressed() {
  for (let p of particles) {
    p.handleClick(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let p of particles) {
    p.stopDragging();
  }

 }
function keyPressed() {
 if (key === 'a') {
  Guitar1.play();
 }

 if (key === 'b') {
  Guitar2.play();
}

 if (key === 'c') {
  ChillChords.play();
 }

 if (key === 'd') {
  ContrailsGuitar.play();
}
 if (key === 'e') {
  RuralGuitar.play();
 }
}