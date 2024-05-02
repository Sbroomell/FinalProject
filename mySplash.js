class Splash {

 constructor() {
   
  this.splashBorder = 100;
  fill(255);
  stroke(255, 0, 0)
  rect(this.splashBorder, this.splashBorder, windowWidth-this.splashBorder*2, windowHeight-this.splashBorder*2);
  // draw a rectangle like this in a 3D enviornment
  // rect(this.splashBorder-(windowWidth/2), this.splashBorder-(windowHeight/2), windowWidth-this.splashBorder*2, windowHeight-this.splashBorder*2);
  fill(0, 0, 222);
  strokeWeight(3)
   
  line(windowWidth-this.splashBorder-40, this.splashBorder+20,windowWidth-this.splashBorder-20, this.splashBorder+40)
   line(windowWidth-this.splashBorder-20, this.splashBorder+20,windowWidth-this.splashBorder-40, this.splashBorder+40)
   
  this.title = createDiv("<b>Play-Me Guitar<b>");
  this.title.style('font-family: Arial, Helvetica, sans-serif');
  this.title.position(this.splashBorder+20, this.splashBorder+20);
  
  this.name = createDiv("Sam Broomell");
  this.name.position(this.splashBorder+20, this.splashBorder+60);
  
 this.info = createDiv("Enjoy playing the greatest one-string guitar you have ever seen virtually! You can play the string individually, as well as choose from a variety of chord pattern loops from the keys listed below. Rock on! <p> <p> <b>Press 'A' for Strum Pattern 1 <p> Press 'B' for Strum Pattern 2 <p> Press 'C' for Chill Guitar <p> Press 'D' for Contrails Guitar <p> Press 'E' for Country Guitar <b> <p> <a href=https://editor.p5js.org/Sbroomell/sketches/1DLWVhRIU>view code</a>");
  
  
  this.info.position(this.splashBorder+20, this.splashBorder+100);
  this.info.size(windowWidth-this.splashBorder*2-50, windowHeight-this.splashBorder*2-50)
   
  
}
  
  update(){
       if(mouseX > windowWidth-this.splashBorder-40 && 
          mouseX < windowWidth-this.splashBorder-20 
          && mouseY < this.splashBorder+40 
          && mouseY > this.splashBorder+20
     ){
      //console.log('hello')
     return true
   }
  }
 
  hide(){
    this.title.remove()
    this.name.remove()
    this.info.remove()
  }
}


