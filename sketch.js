var mode = 0;

// Mover object
let particles = [];
let springs = [];

//audio variable
let audioStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();


  let offset =width/2;
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
    circle (width-30,height/2,100)
    
    //fretboard
      fill('#1D191B')
  rect(0, height/4, width-100, height/2.2)
    
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


