const favMovie= "avatar";

prompt("What is your favorite movie?");

while( ( guess != favMovie) && (guess !="quit")){
  guess = prompt("Try again! What is your favorite movie?");
}

if(guess == favMovie){
  alert("You got it right!");
}