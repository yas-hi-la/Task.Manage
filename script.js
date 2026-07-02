var AddTaskButton = document.getElementById("addtask")
var AddCard = document.getElementById("addcard")
var BlackScreen = document.getElementById("blackscreen")

var taskname = document.getElementById("TaskName")
var time = document.getElementById("Deadline")
var buttons = document.querySelectorAll("#buttons button")
var editingcard = null

var progresscontainer = document.getElementById("second")
var donecontainer = document.getElementById("third")
var selected = null

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
    if(editingcard){
        editingcard.querySelector("h1").textContent = taskname.value
        editingcard.querySelector("h2").textContent = time.value
        editingcard.style.backgroundColor = bg
        editingcard = null
        Add.querySelector("p").textContent = "ADD"
    }
    else{
    var dv = document.createElement("div")
    dv.classList.add("cards")
    dv.draggable = true
    dv.addEventListener("dragstart", function(){
        selected = this
    })
    dv.innerHTML = `<h1>${taskname.value}</h1>
                    <h2>${time.value}</h2>
                    <button class="edit" onclick="edit(this)" draggable = "false"><img src="edit.png"></button>
                    <button class="del" onclick="del(this)" draggable = "false"><img src="del.png"></button>`
    dv.style.backgroundColor = bg
    todocontainer.append(dv)
    
    
    }
    taskname.value = ""
    time.value = ""
    buttons.forEach(button => {
    button.classList.remove("selected")
    })
    AddCard.style.display = "none"
    BlackScreen.style.display = "none"

})

function del(target){
    target.parentElement.remove()
}

function edit(target){
    AddCard.style.display = "block"
    BlackScreen.style.display = "block"

    editingcard = target.parentElement
    taskname.value = editingcard.querySelector("h1").textContent
    time.value = editingcard.querySelector("h2").textContent
    bg = editingcard.style.backgroundColor
    buttons.forEach(button => {
        button.classList.remove("selected")

        if(button.style.backgroundColor == bg){
            button.classList.add("selected")
        }
    })

    Add.querySelector("p").textContent = "SAVE"
}

    var containers = [todocontainer,progresscontainer,donecontainer]

    containers.forEach(container => {
        container.addEventListener("dragover", function(e){
        e.preventDefault()
    })
    container.addEventListener("drop", function(e){
        e.preventDefault()
        container.appendChild(selected)
    })
    })
    
