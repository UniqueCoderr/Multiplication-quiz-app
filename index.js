const s = document.getElementById("score")
const q = document.getElementById("quest")
const userInput = document.getElementById("input")
const form1 = document.getElementById("form")

const n1= Math.ceil( Math.random()*10)
const n2= Math.ceil( Math.random()*10)
const corectAns= n1*n2;

q.innerText=`What is ${n1} mutiple by ${n2}?`

let score =JSON.parse( localStorage.getItem("score"));
if(score<0){
    score=0;
}

form1.addEventListener("submit",()=>{
    const userAns= +userInput.value 
    if(userAns==corectAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
if(score<0){
    score=0;
}
s.innerText= `Score:${score}`