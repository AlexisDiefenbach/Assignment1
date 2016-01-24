function setup() {
  createCanvas (600 , 600);
}

function draw() {
 background(0);

for (var x = 0; x < 51; x++){
  console.log(x)
  if((x%3)) {
    console.log('Flap')
  } else if ((x%5)) {
      console.log('jacks')
  }
  
 }
}

//Can't figure this out.