let todo = [];
let req = prompt("please enter your request");
while(true){
if (req == "quit"){
    console.log("quitting the app");
    break;
}else if(req == "list"){
    console.log("___________");
    for(let i = 0; i<todo.length; i++){
        console.log(i , todo[i]);
    }console.log("________");
}else if(req == "add"){
    let task = prompt("please add the task");
    todo.push(task);
    console.log("task added ");

    
}else if( req == "delete"){
let idx = prompt("please enter the index");
todo.splice(idx,1);
console.log("task deleted");

}else {
    console.log("wrong input");
}

    
    
req = prompt("please enter your request")
}
