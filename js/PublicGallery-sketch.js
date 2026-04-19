let database;
let fileInput;

function preload() {
  
  // bg image 
  img=loadImage('imgs/Background.JPG');
  img2=loadImage('imgs/Sniptlogoo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

let gallery = createDiv('');
gallery.id('gallery');
gallery.position(100, 200);

  database = firebase.database();

  fileInput = createFileInput(handleFile);
  fileInput.position(20, 20);

  loadGallery();
}

function handleFile(file) {
  if (file.type === 'image') {

    let reader = new FileReader();

    reader.onload = function (e) {
      database.ref('drawings').push({
        img: e.target.result
      });

      console.log("uploaded correctly");
    };

    reader.readAsDataURL(file.file);
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

function loadGallery() {
  let ref = database.ref('drawings');

  ref.once('value', (data) => {
    let drawings = data.val();

    console.log("RAW FIREBASE DATA:", drawings);

    if (!drawings) {
      console.log("NO DATA FOUND");
      return;
    }

    for (let id in drawings) {
      let item = drawings[id];

      if (!item || !item.img) continue;
      
let imgEl = createImg(item.img);
imgEl.parent('gallery');

imgEl.size(162, 242);

imgEl.style('margin', '15px');
imgEl.style('border', '3px solid #65012b');
imgEl.style('border-radius', '8px');
imgEl.style('display', 'inline-block');
    }
  });
}