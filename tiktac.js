// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = () =>{
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = ()=> {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event)=> {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Endmodaljs------------------



//Mode Js
let ModeBtn = document.querySelector("#mode");
let docBody = document.querySelector("body");

let ModeColor = "white";
ModeBtn.addEventListener("click",()=>{
  if(ModeColor=="white"){
    docBody.classList.add("dark");
    docBody.classList.remove("light");
    docBody.style.color="white";
    ModeColor="black";
    winAudio.pause();
   
  }else{
    docBody.classList.add("light");
    docBody.classList.remove("dark");
    docBody.style.color="black";
    ModeColor="white";
 
  }
//   console.log(ModeColor);
});

// Game Event--------------------------------
let winAudio = new Audio('./imageMusic/win.mp3');
let BapAudio = new Audio('./imageMusic/bap.mp3');
let BetaAudio = new Audio('./imageMusic/beta.mp3');
let ErrorAudio = new Audio('./imageMusic/error.mp3');
// winAudio.play();
let boxes = document.querySelectorAll(".box");
let h1tag = document.querySelector("h1");
let winDiv = document.querySelector(".result");
let winDiv2 = document.querySelector(".winner");
let winDiv3 = document.querySelector(".winnerGIF");

let restBtn = document.querySelector("#resetBtn");
let newGme = document.querySelector("#NewGame");

let trunO = true; // O
 let count = 0;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8],
];

const disbleBox = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
  };
  const enbleBox = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText= "";
  }
  };


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      if(trunO){
        box.innerText="বাপ";
        box.classList.add("trunX");
        box.classList.remove("trunO");
        trunO = false;
        BapAudio.play();
     
      }else{
        box.innerText="বেটা";
        box.classList.remove("trunX");
        box.classList.add("trunO");
        trunO = true;
        BetaAudio.play();
      }
      box.disabled = true;
      count++
        // box.innerText= "X";
       let isWinner = checkWinner();
       if(count === 9 && !isWinner){
        winDiv3.classList.add("draw");
        winDiv3.classList.remove("winner");
        winDiv.innerHTML= `<h4>কেউ জিতেনি</h4>`;
        winAudio.pause();
        ErrorAudio.play();
        
       }
      
    });
    let bx = 0;
    ModeBtn.addEventListener("click",()=>{
    if(bx==0){
        box.classList.add("box2");
        box.classList.remove("box");
        h1tag.style.color= "yellow"
        bx = 1;
    }else{
        box.classList.add("box");
        box.classList.remove("box2");
        h1tag.style.color= "red"
        bx = 0;
    }
    });
    
});

const checkWinner= ()=>{
  for(let pattern of winPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 !="" && pos3 != ""){
        if(pos1===pos2 && pos2===pos3){
          winDiv3.classList.add("winner");
          winDiv3.classList.remove("draw");
          winDiv.innerHTML= `<h4> ${pos1} জিতেছে! </h4>`;
          winAudio.play();
          disbleBox ();
      }
    }
  }
};

restBtn.addEventListener("click",()=>{
  window.location.reload();
});