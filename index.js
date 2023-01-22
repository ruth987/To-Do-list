let todoContainer = ["do ip proj", "do the lab report", "do some physical exe"]




function addToDo(){
    todoContainer.push(document.getElementById("input".value))
    // document.getElementById("input".value)= ""
    display()
}
function deleteAll(){
    todoContainer.splice()
}
function deleteOneTodo(){

}

let list = document.getElementById("the-List");
let startIndex = 0
function display(){
    for(let i = startIndex; i < todoContainer.length;i++){
        let li = document.createElement("li");
        li.innerText = todoContainer[i];
        list.appendChild(li);
        startIndex = i
      }
 }


