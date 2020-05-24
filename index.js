var canvas = document.getElementById("canvas"),
  c = canvas.getContext("2d");
canvas.addEventListener("click", handleClick);

function drawBox() {
  c.beginPath();
  c.fillStyle = "white";
  c.lineWidth = 2;
  c.strokeStyle = "lightblue";
  for (var row = 0; row < 10; row++) {
    for (var column = 0; column < 10; column++) {
      var x = column * 40;
      var y = row * 40;
      c.rect(x, y, 40, 40);
      c.fill();
      c.stroke();
    }
  }
  c.closePath();
}
// object class
const SingleBox = class SingleBox {
  constructor(x, y) {
    (this.x = x), (this.y = y), (this.isClicked = true);
  }
};

// setting up colors for our boxes
const toWhite = (e) => {
  c.lineWidth = 2;
  c.strokeStyle = "lightblue";
  c.fillStyle = "white";
  c.fillRect(
    Math.floor(e.offsetX / 40) * 40,
    Math.floor(e.offsetY / 40) * 40,
    40,
    40
  );
  c.stroke();
};

const toGray = (e) => {
  c.lineWidth = 2;
  c.strokeStyle = "lightblue";
  c.fillStyle = "gray";
  c.fillRect(
    Math.floor(e.offsetX / 40) * 40,
    Math.floor(e.offsetY / 40) * 40,
    40,
    40
  );
  c.stroke();
};

// array for storing object
let array = [];

function handleClick(e) {
  // get column and row
  var col = Math.floor(e.offsetX / 40) + 1;
  var row = Math.floor(e.offsetY / 40) + 1;

  // scan the array for existing entries i there are change the object isclicked to false
  // if not create new object and append to arrat

  // function for checking if there is in array
  const check = (object, index) => {
    if (object.x == col && object.y == row) {
      return true;
    }
  };
  //if it exist make it white and change its properyty
  if (array.find(check)) {
    //if it was found but you need to change its colour
    if (array.find(check).isClicked) {
      toWhite(e);

      array.find(check).isClicked = !array.find(check).isClicked;
    } else {
      toGray(e);

      array.find(check).isClicked = !array.find(check).isClicked;
    }

    //display the array
    console.log(array);
  }
  // if it doesnt exist create a object and append it to an array
  else {
      // creating new object
    let box = new SingleBox(col, row);
    array.push(box);
    //styling
    toGray(e);
    //display the array
    console.log(array);
  }

  



















  
}

// function for alarming when the boxes are nearby
    // prototypr:
            /* try thinkins of something else 
            testing branching
            
            
            
            */

drawBox();
