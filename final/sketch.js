let bgImage;

function setup() {
  createCanvas(800, 500);

  loadImage("pink.png", function (img) {
    bgImage = img;
  });
}

function draw() {
  background(220);

  if (bgImage) {
    image(bgImage, 0, 0, width, height);
  }
}
