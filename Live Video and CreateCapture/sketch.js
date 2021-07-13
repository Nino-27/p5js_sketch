let video;
let button;
let snapshots = [];

function setup() {
  createCanvas(800, 240);
  background(51)
  video = createCapture(VIDEO);
  video.size(width, height);
  //video.hide();
  button = createButton('Snap');
  button.mousePressed(takesnap);
}

function takesnap() {
     snapshots.push(video.get());
     //image(video, 0, 0);
}

function draw() {
    // tint(255, 0, 150);
    // image(video, 0, 0);
     let w = 80;
     let h = 60;
     let x = 0;
     let y = 0;
    for (let i = 0; i < snapshots.length; i ++) {
          image(snapshots[i], x, y, w, h);
          x = x + w+10;
          if (x > width) {
               x = 0;
               y = y + h;
          }
    }
}



