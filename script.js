console.log("lets write a js")
let turn = "x";
let isgameover=false;

//function to change a turn 
const changeturn = () => {
    return turn === "x" ? "0" : "x";
}

//function to check for a win
const checkwin = () => {
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        let wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        
        wins.forEach(e => {
            if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML === boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            document.querySelector(".info").innerHTML="won "+boxes[e[0]].innerHTML;
            boxes[e[0]].style.backgroundColor="green"
            boxes[e[1]].style.backgroundColor="green"
            boxes[e[2]].style.backgroundColor="green"
            isgameover=true
            document.getElementsByTagName("img")[0].style.width="200"+"px"
            }
        }

        )
    })
}
  
//to restart a game
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(e=>{
        e.innerHTML="";
        turn="x"
        document.querySelector(".info").innerHTML = "Turn for " + turn;
        document.getElementsByTagName("img")[0].style.width="0"+"px"
        Array.from(boxes).forEach(e=>{
            e.style.backgroundColor="white"
        })
    })
})

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        //console.log(element)
        if(boxtext.innerHTML === '') {
            boxtext.innerHTML = turn;
            checkwin();
            turn = changeturn();
            if(!isgameover){

                document.querySelector(".info").innerHTML = "Turn for " + turn;
            }
        }
    })
})