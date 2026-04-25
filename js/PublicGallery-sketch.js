let database;
let fileInput;

function preload() {
  
  // bg image 
  img=loadImage('imgs/Background.JPG');
  img2=loadImage('imgs/Sniptlogoo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

//made gallery into Div to help with placement and prevent issues with other elements on page
let gallery = createDiv('');
//allows for reference later in let imgEl
gallery.id('gallery');
gallery.position(100, 200);

//connects to firebase database
  database = firebase.database();

  //creates upload button that when pressed opens files and allows the user to choose one to upload to be displayed on canvas
  fileInput = createFileInput(handleFile);
  fileInput.position(20, 20);

  //creates load gallery function
  loadGallery();
}

//function tells computer what to do with the file after user uploaded it 
function handleFile(file) {
  if (file.type === 'image') {

    let reader = new FileReader();
//pushes images to firebase
    reader.onload = function (e) {
      database.ref('drawings').push({
        img: e.target.result
      });
      
//tells me if it worked and 
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
//displays the images
function loadGallery() {
  let ref = database.ref('drawings');

  ref.once('value', (data) => {
    let drawings = data.val();

    for (let id in drawings) {
      let item = drawings[id];

      if (!item || !item.img) continue;

 //creates the images   
let imgEl = createImg(item.img);
//puts images in div so that it does not mess with my pink header
imgEl.parent('gallery');

//attributes of images/collage artwork saved into gallery
imgEl.size(162, 242);

imgEl.style('margin', '15px');
imgEl.style('border', '3px solid #65012b');
imgEl.style('border-radius', '8px');
imgEl.style('display', 'inline-block');
    }
  });
}