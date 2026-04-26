let img, img2;

let imagePaths = [
  "imgs/fish.png",
  "imgs/collage1.png",
  "imgs/collage2.png",
  "imgs/collage3.png",
  "imgs/collage4.png",
  "imgs/collage5.png",
  "imgs/collage6.png",
  "imgs/collage7.png",
  "imgs/collage8.png",
  "imgs/collage9.png",
  "imgs/collage10.png",
  "imgs/collage11.png",
  "imgs/collage12.png",
  "imgs/collage13.png",
  "imgs/collage14.png",
  "imgs/collage15.png",
  "imgs/collage16.png",
  "imgs/collage17.png",
  "imgs/collage18.png",
  "imgs/collage19.png",
  "imgs/collage20.png",
  "imgs/collage21.png",
  "imgs/collage22.png"
];

function preload() {
  
  // bg image 
  img=loadImage('imgs/Background.JPG');
  img2=loadImage('imgs/Sniptlogoo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let panel = createDiv();
  panel.position(50, 120);
  panel.size(windowWidth - 100, windowHeight - 150);

  panel.style("overflow-y", "scroll");
  panel.style("background", "#FFF0F3");
  panel.style("padding", "15px");

  panel.style("display", "grid");
  panel.style("grid-template-columns", "repeat(auto-fill, 140px)");
  panel.style("gap", "15px");

  for (let i = 0; i < imagePaths.length; i++) {
    let imgEl = createImg(imagePaths[i]);
    imgEl.parent(panel);

    imgEl.style('width', '140px');
    imgEl.style('height', 'auto');
    imgEl.style('border-radius', '10px');
    imgEl.style('cursor', 'pointer');
  }
}

function draw() {
  imageMode(CORNER);
  image(img, 1, 0, width, height);

  rectMode(CORNER);
  fill('#FFF0F3');
  noStroke();
  rect(0, 0, width, 100); 
}