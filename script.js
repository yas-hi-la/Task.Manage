var AddTaskButton = document.getElementById("addtask")
var AddCard = document.getElementById("addcard")
var BlackScreen = document.getElementById("blackscreen")
AddTaskButton.addEventListener("click",function(){
    AddCard.style.display = "block"
    BlackScreen.style.display = "block"
})

var Cancel = document.getElementById("cancel")
Cancel.addEventListener("click",function(){
    AddCard.style.display = "none"
    BlackScreen.style.display = "none"
})

function highlight(target){
    target.style.border = "2px solid #161DA3"
}