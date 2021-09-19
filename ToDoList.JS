
var counter = 0


function crossItem(cb) {
    var listLine = cb.parentElement
    if (cb.checked == true) {
        listLine.classList.remove("myRegLine");
        listLine.classList.add("myCrossedLine")
    }
    else {
        listLine.classList.remove("myCrossedLine");
        listLine.classList.add("myRegLine")
    }
}


function removeCrossedTasks() {
    if (counter > 0) {
        for (var i = 0; i < counter; i++) {
            var cb = document.getElementById(i + "+" + "CB")
            var listitem = document.getElementById(i)
            if (cb.checked == true && listitem.style.display != "none") {
                listitem.style.display = "none"
            }
        }
    }
}


function addNewTask() {
    var toDoList = document.getElementById("toDoList")
    var newTask = document.getElementById("newTask")
    if (newTask.value != "") {
        var checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.value = 1
        checkbox.id = counter + "+" + "CB"
        checkbox.onclick = function () {
            crossItem(checkbox)
        }
        let li = document.createElement("li")
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(newTask.value))
        li.id = counter
        counter++
        li.classList.add("myRegLine")
        toDoList.appendChild(li)
        newTask.value = ""
    }
}


function clearALL() {
    var toDoList = document.getElementById("toDoList")
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    counter = 0
}



