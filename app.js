let gamesecc=[];
let usersec=[];
let btns=["pink", "yellow",  "blue","aqua"];
let started=false;
let lavel=0;

let h2= document.querySelector("h2");
// let btn=document.querySelectorAll(".btn");

document.addEventListener("keypress", function(){
if(started== false){

    console.log("game is started");
    started=true;
    lavelup();

}

});


 function btnFlash(btn) {
btn.classList.add("flash");
setTimeout(function() {

btn.classList.remove("flash");

},1000);


}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
    
    btn.classList.remove("userflash");
    
    }, 500);
    
    
    }


function lavelup(){
    usersec=[];
lavel++;
h2.innerText=(`lavel ${lavel}`);
let randIdx=Math.floor(Math.random()*3);
let randcolor=btns[randIdx];
gamesecc.push(randcolor);
console.log(gamesecc);
let randbtn=document.querySelector(`.${randcolor}`);

btnFlash(randbtn);
}

function chackans(indx){

if(gamesecc[indx]===usersec[indx]){
    if(gamesecc.length==usersec.length){
    setTimeout(lavelup,1000);
    }
} else{
    h2.innerHTML=(`game is over!  and your lavel is ${lavel} <br> <b>your score is ${lavel}</b> <br> `);
   
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   
    
}
let max=[0];
if(gamesecc.length> max ){
      max=gamesecc.length;
    h2.innerText=("your maximum score is ", max);
}

}

function btnpress(){
    btn=this;
    
    userFlash(btn);

    usercolor=btn.getAttribute("id");
    usersec.push(usercolor);
    chackans(usersec.length-1);
 
}

let allbtns= document.querySelectorAll(".btn");
for( btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset() {
     started = false;
     gamesecc = [];
     usersec = [];
     lavel = 0;
}