let img1;
let img2;
let img3;

function preload() {
  img1 = loadImage('img/wolke1.jpg');
  img2 = loadImage('img/wolke2.jpg');
  img3 = loadImage('img/wolke3.jpg');
}

function setup() {
  createCanvas(3814, 1463);

  image(img1, 12 , 12);
  tint(255, 35, 35)
  image(img1, 12 , 920);

  noTint();
  image(img2, 1727, 12);
  tint(0, 150, 60)
  image(img2, 1727, 920);

  noTint();
  image(img3, 3442, 12);
  tint(80, 80, 255)
  image(img3, 3442, 920);
}

function mouseClicked() {
  filter(INVERT);
  return false;
}