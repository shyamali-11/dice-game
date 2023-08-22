var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var imag1="./images/dice"+random1+".png";
var imag2="./images/dice"+random2+".png";
document.querySelector(".img1").setAttribute("src",imag1);
document.querySelector(".img2").setAttribute("src",imag2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 wins! ";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw ";
}