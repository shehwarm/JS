let todo=[];

let req = prompt("Please enter your request");
console.log(req);

while(true){
  if( req == "quit"){
    console.log("quitting app");
    break;
  }
  
  if( req == "list"){
    console.log("Your tasks are: ");
    for(let i=0; i<todo.length; i++){
      console.log(i, todo[i]);
    }
  }  else if(req == "add"){
    let task = prompt("Please enter your task");
    todo.push(task);
    console.log("task added successfully");
  }
   req= prompt("Please enter your request");
}