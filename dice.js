var ran1=Math.floor(Math.random()*6) + 1;
var ranimg="dice"+ran1+".png";
document.querySelector(".dice-box1 img").setAttribute("src",ranimg);
var ran2=Math.floor(Math.random()*6) + 1;
var ranimg="dice"+ran2+".png";
document.querySelector(".dice-box2 img").setAttribute("src",ranimg);
if(ran2>ran1){
    document.querySelector(".block-one h1").innerHTML="Player 2 wins!";
}else if(ran1>ran2){
    document.querySelector(".block-one h1").innerHTML="Player 1 wins!";
}else{
    document.querySelector(".block-one h1").innerHTML="Its a Draw.";
}