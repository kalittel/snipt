let database;
let fileInput;

function preload() {
  
  // bg image 
  //img=loadImage('imgs/Background.JPG');
  //img2=loadImage('imgs/Sniptlogoo.png');
  //img2=loadImage('imgs/paper.png');
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
  fileInput.position(1200, 60);

  //references/connects load gallery function
  loadGallery();
}

//function tells computer what to do with the file after user uploaded it 
function handleFile(file) {
  // only allows image files to be selected
  if (file.type === 'image') {

    //reads the files from users computer
    let reader = new FileReader();
//pushes images to firebase - e - event object
    reader.onload = function (e) {
      //stores the file in the drawings folder in my firebase realtime database 
      database.ref('drawings').push({
        //stores image as text/url
        img: e.target.result
      });
      
//tells me if it worked and 
      console.log("uploaded correctly");
    };
//reads the image url
    reader.readAsDataURL(file.file);
  }
}

function draw() {
  //imageMode(CORNER);
  //image(img, 1, 0, width, height);

 // image(img2, 0, 150, width, 5000);

  //rectMode(CORNER);
 // fill('#FFF0F3');
 // noStroke();
 // rect(0, 0, width, 100); 
}

//displays the images
function loadGallery() {
  //references data stored in drawings folder in firebase
  let ref = database.ref('drawings');

  //not just reads, but grabs the data only once from firebase
  ref.once('value', (data) => {
    //turns the firebase data into a p5 object
    let drawings = data.val();
//loops through all data in drawings
    for (let id in drawings) {
  //created image id
      let item = drawings[id];
// filters out bad data - ! = item null - does not exist 
      if (!item || !item.img) continue;

 //creates the images   
let imgEl = createImg(item.img);
//puts images in div so that it does not mess with my pink header
imgEl.parent('gallery');

//attributes of images/collage artwork saved into gallery
imgEl.size(162, 242);

imgEl.style('margin', '15px');
imgEl.style('border', '3px solid #fd6f89');
imgEl.style('border-radius', '8px');
imgEl.style('display', 'inline-block');
    }
  });
}