
function setup() {
  createCanvas(600, 600);
  setAttributes('antialias', true);
}
function draw() {

  background(50);

  beginShape(POINTS);
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
  endShape();
  // orbitControl();
  // strokeWeight(4);
  // stroke(255);
  //
  // point(-25, 25);
  // point(-25, 25);
  // point(-25, -25);
  // point(25, -25);
  // point(25, 25);
  // point(25, 25);
  //
  // strokeWeight(1);
  // noFill();
  //
  // beginShape();
  // curveVertex(-25, 25);
  // curveVertex(-25, 25);
  // curveVertex(-25, -25);
  // curveVertex(25, -25);
  // curveVertex(25, 25);
  // curveVertex(25, 25);
  // beginContour();
  // curveVertex(-25, 25, 20);
  // curveVertex(-25, 25, 20);
  // curveVertex(-25, -25, 20);
  // curveVertex(25, -25, 20);
  // curveVertex(25, 25, 20);
  // curveVertex(25, 25, 20);
  // endContour();
  //
  // endShape();


}


// function setup() {
//   createCanvas(600, 600, WEBGL);
//   setAttributes('antialias', true);
// }
// function draw() {
//
//   orbitControl();
//   background(50);
//   strokeWeight(4);
//   stroke(255);
//
//   point(-35, -35);
//   point(35, -35);
//   point(0, 0);
//   point(-35, 35);
//   point(35, 35);
//   point(35, 10);
//
//   strokeWeight(1);
//   noFill();
//
//   beginShape();
//   vertex(-35, -35);
//   quadraticVertex(35, -35, 0, 0);
//   quadraticVertex(-35, 35, 35, 35);
//   vertex(35, 10);
//   vertex(-35, -35, 20);
//
//   quadraticVertex(35, -35, 20, 0, 0, 20);
//   quadraticVertex(-35, 35, 20, 35, 35, 20);
//   vertex(35, 10, 20);
//
//   endShape();

  // orbitControl();
  // background(50);
  // strokeWeight(4);
  // stroke(255);
  // point(-25, 30);
  // point(25, 30);
  // point(25, -30);
  // point(-25, -30);
  //
  // strokeWeight(1);
  // noFill();
  //
  // beginShape();
  // vertex(-25, 30);
  // bezierVertex(25, 30, 25, -30, -25, -30);
  // endShape();


// }

// function setup() {
//   // put setup code here
//   // createCanvas(600, 600);
//   createCanvas(600, 600, WEBGL);
//
// }
//
// function draw() {
//   // background(220);
//
//
//
//
//   // background(240, 240, 240);
//   // fill('#ED225D');
//   //
//   //
//   // // fill(237, 34, 93);
//   // noStroke();
//   // beginShape();
//   // console.log("hm ?? begin");
//   // vertex(0, 35);
//   // vertex(35, 0);
//   // vertex(0, -35);
//   // vertex(-35, 0);
//   // endShape();
//   // console.log("hm ?? end");
//
//   // strokeWeight(5);
//   // point(84, 91);
//   // point(68, 19);
//   // point(21, 17);
//   // point(32, 91);
//   // strokeWeight(1);
//   //
//   // curveVertex - small bug ? (proof of concept too)
//   // noFill();
//   // beginShape();
//   // curveVertex(84, 91);
//   // curveVertex(84, 91);
//   // curveVertex(68, 19);
//   // curveVertex(21, 17);
//   // curveVertex(32, 91);
//   // curveVertex(32, 91);
//   // endShape();
//
//
//   // strokeWeight(5);
//   // point(20, 20);
//   // point(80, 20);
//   // point(50, 50);
//   //
//   // noFill();
//   // strokeWeight(1);
//   // beginShape();
//   // vertex(20, 20);
//   // quadraticVertex(80, 20, 50, 50);
//   // endShape();
//
//   // implement addToCanvas to make this work
//   // beginShape();
//   // vertex(30, 20);
//   // bezierVertex(80, 0, 80, 75, 30, 75);
//   // bezierVertex(50, 80, 60, 25, 30, 20);
//   // endShape();
//
//
//   // translate(50, 50);
//   // stroke(255, 0, 0);
//   // beginShape();
//   // // Exterior part of shape, clockwise winding
//   // vertex(-40, -40);
//   // vertex(40, -40);
//   // vertex(40, 40);
//   // vertex(-40, 40);
//   // // Interior part of shape, counter-clockwise winding
//   // beginContour();
//   // vertex(-20, -20);
//   // vertex(-20, 20);
//   // vertex(20, 20);
//   // vertex(20, -20);
//   // endContour();
//   // endShape(CLOSE);
//
//   // beginShape();
//   // vertex(30, 20);
//   // vertex(85, 20);
//   // vertex(85, 75);
//   // vertex(30, 75);
//   // endShape(CLOSE);
//
//
//   // beginShape();
//   // vertex(30, 20);
//   // vertex(85, 20);
//   // vertex(30, 75);
//   // vertex(85, 75);
//   // endShape(CLOSE);
//
//
//   // beginShape();
//   // vertex(200, 100);
//   // vertex(200, 200);
//   // quadraticVertex(300, 250, 200, 300);
//   // vertex(200, 350);
//   // bezierVertex(150, 375, 100, 375, 50, 350);
//   // curveVertex(25, 375);
//   // curveVertex(50, 350);
//   // curveVertex(100, 325);
//   // curveVertex(100, 300);
//   // curveVertex(75, 275);
//   // curveVertex(50, 250);
//   // endShape();
//   //
//   // push();
//   //
//   // strokeWeight(5);
//   // point(25, 375);
//   // point(50, 350);
//   // point(100, 325);
//   // point(100, 300);
//   // point(75, 275);
//   // point(50, 250);
//   // pop();
//
//   // translate(100, 100);
//   // stroke(255, 0, 0);
//   // beginShape();
//   // // Exterior part of shape, clockwise winding
//   // vertex(-40, -40);
//   // vertex(40, -40);
//   // vertex(40, 40);
//   // vertex(-40, 40);
//   // // Interior part of shape, counter-clockwise winding
//   // beginContour();
//   // vertex(-20, -20);
//   // vertex(-20, 20);
//   // vertex(20, 20);
//   // vertex(20, -20);
//   // endContour();
//   // endShape(CLOSE);
//
//   // put drawing code here
// }
