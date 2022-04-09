let index = 0;

const Img = document.querySelector("img");
const next = document.getElementById("front-btn");
const back = document.getElementById("back-btn");

const imgArray = [
    "img/atari.gif",
    "img/carspeed.gif",
    "img/crystaline.gif",
    "img/rainbridge.gif",
    "img/rainpud.gif",
    "img/rooffight.gif",
];

//Event Listeners

// Img.addEventListener("click", imageNext);
// Img.addEventListener("click", imagePrevious);
// Img.addEventListener("Keydown", (event) => {
//     if (event.key === " " || event.key === "Enter") {
//             imageNext();
//     }
// });

next.addEventListener("click", imageNext);
back.addEventListener("click", imagePrevious);

function imageNext(){
    index++;
    //
    Img.src = imgArray[index % imgArray.length];
    console.log(index % imgArray.length);
}


function imagePrevious() {
    index--;
    //
    if (index < 0){
        index = imgArray.length - 1;
    }

    Img.src = imgArray[index % imgArray.length];
    console.log(index % imgArray.length);
}

 