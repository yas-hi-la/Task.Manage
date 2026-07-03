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
var Body = document.querySelector("body")

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

var bg = null
function highlight(target){
    buttons.forEach(button => {
        button.classList.remove("selected")
    })
    if(Body.classList.contains("dark")){
        target.classList.add("dark")
    }
    target.classList.add("selected")
    bg = getComputedStyle(target).backgroundColor
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
    if(Body.classList.contains("dark")){
        dv.classList.add("dark")
    }
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

var ChangeMode = document.getElementById("mode")
ChangeMode.addEventListener("click",function(){
    if(ChangeMode.innerHTML == `<img src="Moon.png">`){
        ChangeMode.innerHTML = `<img src="solar_sun-bold.png">`
    }
    else{
        ChangeMode.innerHTML = `<img src="Moon.png">`
    }
    
    Body.classList.toggle("dark")

    var NavBar = document.querySelector(".navbar")
    NavBar.classList.toggle("dark")

    AddTaskButton.classList.toggle("dark")
    
    var PlusImg = document.getElementById("plusimg")
    if(Body.classList.contains("dark")){
        PlusImg.src = "ic_round-plus-2.png"
    }
    else{
        PlusImg.src = "ic_round-plus.png"
    }

    var HR = document.querySelector("hr")
    HR.classList.toggle("dark")

    var DarkTodo = document.querySelector(".todo")
    DarkTodo.classList.toggle("dark")
    var DarkProg = document.querySelector(".progress")
    DarkProg.classList.toggle("dark")
    var DarkDone = document.querySelector(".done")
    DarkDone.classList.toggle("dark")

    BlackScreen.classList.toggle("dark")

    AddCard.classList.toggle("dark")

    Add.classList.toggle("dark")

    Cancel.classList.toggle("dark")

    var Button1 = document.getElementById("btn1")
    var Button2 = document.getElementById("btn2")
    var Button3 = document.getElementById("btn3")
    Button1.classList.toggle("dark")
    Button2.classList.toggle("dark")
    Button3.classList.toggle("dark")

    var Cards = document.querySelectorAll(".cards")
    Cards.forEach(card => {
        card.classList.toggle("dark")
        if(getComputedStyle(card).backgroundColor == "rgb(230, 240, 250)"){
            card.style.backgroundColor = "#4BB8FA"
        }
        else if(getComputedStyle(card).backgroundColor == "rgb(191, 221, 240)"){
            card.style.backgroundColor = "#1591DC"
        }
        else if(getComputedStyle(card).backgroundColor == "rgb(140, 192, 235)"){
            card.style.backgroundColor = "#2C5EAD"
        }

        else if(getComputedStyle(card).backgroundColor == "rgb(75, 184, 250)"){
            card.style.backgroundColor = "#E6F0FA"
        }
        else if(getComputedStyle(card).backgroundColor == "rgb(21, 145, 220)"){
            card.style.backgroundColor = "#BFDDF0"
        }
        else if(getComputedStyle(card).backgroundColor == "rgb(44, 94, 173)"){
            card.style.backgroundColor = "#8CC0EB"
        }
    }) 
    
    var Edits = document.querySelectorAll(".edit img")
    Edits.forEach(Edit => {
        if(Body.classList.contains("dark")){
            Edit.src = "Group.png"
        }
        else{
            Edit.src = "edit.png"
        }
    })

    Delitems = document.querySelectorAll(".del img")
    Delitems.forEach(Delete =>{
        if(Body.classList.contains("dark")){
            Delete.src = "Vectorcopy.png"
        }
        else{
            Delete.src = "del.png"
        }
    })
})

