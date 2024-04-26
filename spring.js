class Spring {

  constructor(a, b, len, k) {
    this.a = a;
    this.b = b;
    this.restLength = len;
    this.k = k;
  }
    
  update() {
    // Vector pointing from anchor to bob location
    let force = p5.Vector.sub(this.a.position, this.b.position);
    // What is distance
    let d = force.mag();
    // Stretch is difference between current distance and rest length
    let stretch = d - this.restLength;

    // Calculate force according to Hooke's Law
    // F = k * stretch
    force.normalize();
    force.mult(-1 * this.k * stretch);
    this.a.applyForce(force);
    this.b.applyForce(force.copy().mult(-1));
  }

  // Constrain the distance between bob and anchor between min and max
  constrainLength(minLength, maxLength) {
    let dir = p5.Vector.sub(b.position, this.anchor);
    let d = dir.mag();
    // Is it too short?
    if (d < minLength) {
      dir.normalize();
      dir.mult(minLength);
      // Reset location and stop from moving (not realistic physics)
      b.position = p5.Vector.add(this.anchor, dir);
      b.velocity.mult(0);
      // Is it too long?
    } else if (d > maxLength) {
      dir.normalize();
      dir.mult(maxLength);
      // Reset location and stop from moving (not realistic physics)
      b.position = p5.Vector.add(this.anchor, dir);
      b.velocity.mult(0);
    }
  }

  // Constrain the distance between bob and anchor between min and max
  constrainLength2(minlen, maxlen) {
    let dir = p5.Vector.sub(this.a.position, this.b.position);
    let d = dir.mag();
    // Is it too short?
    if (d < minlen) {
      dir.normalize();
      dir.mult(minlen);
      // Reset position and stop from moving (not realistic physics)
      bob.position = p5.Vector.add(anchor, dir);
      bob.velocity.mult(0);
      // Is it too long?
    } else if (d > maxlen) {
      dir.normalize();
      dir.mult(maxlen);
      // Reset position and stop from moving (not realistic physics)
      bob.position = p5.Vector.add(this.anchor, dir);
      bob.velocity.mult(0);
    }
  }

  // display() {
  //   stroke(255);
  //   fill(127);
  //   strokeWeight(2);
  //   rectMode(CENTER);
  //   rect(this.anchor.x, this.anchor.y, 10, 10);
  // }

  display() {
    strokeWeight(2);
    stroke(255);
    line(this.b.position.x, this.b.position.y, this.a.position.x, this.a.position.y);
  }
}