//notes are important for thiss
let fvrt = "Avtaar";
let guess = prompt("Guess my fvrt movie");
while((guess!=fvrt)&&(guess!="quit")){
    console.log("wrong");
    guess=prompt("wrong guess please try again");
}
if(guess == fvrt){
    console.log("congrats you wins");
}
else{
    console.log("loose");
}