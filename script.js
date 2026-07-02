var AddTaskButton = document.getElementById("addtask")
var AddCard = document.getElementById("addcard")
var BlackScreen = document.getElementById("blackscreen")

var taskname = document.getElementById("TaskName")
var time = document.getElementById("Deadline")
var buttons = document.querySelectorAll("#buttons button")


AddTaskButton.addEventListener("click",function(){
    AddCard.style.display = "block"
    BlackScreen.style.display = "block"
})

var Cancel = document.getElementById("cancel")
Cancel.addEventListener("click",function(){
    AddCard.style.display = "none"
    BlackScreen.style.display = "none"

    taskname.value = ""
    time.value = ""
    buttons.forEach(button => {
        button.classList.remove("selected")
    })
})

var bg = ""
function highlight(target){
    buttons.forEach(button => {
        button.classList.remove("selected")
    })
    target.classList.add("selected")
    bg = target.style.backgroundColor
}

var Add = document.getElementById("add")
var todocontainer = document.getElementById("first")
Add.addEventListener("click", function(){
    var dv = document.createElement("div")
    dv.classList.add("cards")
    dv.innerHTML = `<h1>${taskname.value}</h1>
                    <h2>${time.value}</h2>
                    <button class="edit"><img src="edit.png"></button>
                    <button class="del"><img src="del.png"></button>`
    dv.style.backgroundColor = bg
    todocontainer.append(dv)

    AddCard.style.display = "none"
    BlackScreen.style.display = "none"

    taskname.value = ""
    time.value = ""
    buttons.forEach(button => {
        button.classList.remove("selected")
    })
})

var edit = document.querySelectorAll(".edit")
var del = document.querySelectorAll(".del")
