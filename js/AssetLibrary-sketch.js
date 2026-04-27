let img, img2;

let imagePaths = [
  "imgs/fish.png",
  "imgs/collage1.png",
  "imgs/collage2.png",
  "imgs/collage47.png",
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
  "imgs/collage22.png",
  "imgs/collage23.png",
  "imgs/collage24.png",
  "imgs/collage25.png",
  "imgs/collage26.png",
  "imgs/collage27.png",
  "imgs/collage28.png",
  "imgs/collage29.png",
  "imgs/collage30.png",
  "imgs/collage31.png",
  "imgs/collage32.png",
  "imgs/collage33.png",
  "imgs/collage34.png",
  "imgs/collage35.png",
  "imgs/collage36.png",
  "imgs/collage37.png",
  "imgs/collage38.png",
  "imgs/collage39.png",
  "imgs/collage40.png",
  "imgs/collage41.png",
  "imgs/collage42.png",
  "imgs/collage43.png",
  "imgs/collage44.png",
  "imgs/collage45.png",
  "imgs/collage46.png",
 "imgs/collage48.png",
"imgs/collage49.png",
"imgs/collage50.png",
"imgs/collage51.png",
"imgs/collage52.png",
"imgs/collage53.png",
"imgs/collage54.png",
"imgs/collage55.png",
"imgs/collage56.png",
"imgs/collage57.png",
"imgs/collage58.png",
"imgs/collage59.png",
"imgs/collage60.png",
"imgs/collage61.png",
"imgs/collage62.png",
"imgs/collage63.png",
"imgs/collage64.png",
"imgs/collage65.png",
"imgs/collage66.png",
"imgs/collage67.png",
"imgs/collage68.png",
"imgs/collage69.png",
"imgs/collage70.png",
"imgs/collage71.png",
"imgs/collage72.png",
"imgs/collage73.png",
"imgs/collage74.png",
"imgs/collage75.png",
"imgs/collage76.png",
"imgs/collage77.png",
"imgs/collage78.png",
"imgs/collage79.png",
"imgs/collage80.png",
"imgs/collage81.png",
"imgs/collage82.png",
"imgs/collage83.png",
"imgs/collage84.png",
"imgs/collage85.png",
"imgs/collage86.png",
"imgs/collage87.png",
"imgs/collage88.png",
"imgs/collage89.png",
"imgs/collage90.png",
"imgs/collage91.png",
"imgs/collage92.png",
"imgs/collage93.png",
"imgs/collage94.png",
"imgs/collage95.png",
"imgs/collage96.png",
"imgs/collage97.png",
"imgs/collage98.png",
"imgs/collage99.png",
"imgs/collage100.png",
"imgs/collage101.png",
"imgs/collage102.png",
"imgs/collage103.png",
"imgs/collage104.png"
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