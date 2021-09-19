
var counter = 0


function CrossCheckedItems() {
    for (var i = 0; i <= counter; i++) {
        var cb = document.getElementById(i + "+" + "CB")
        var listitem = document.getElementById(i)
        if (cb.checked == true) {
            listitem.style.color = "red"
        }
        else
            listitem.style.color = "darkslateblue"
    }
}

function CrossItem(cb) {

    var listLine = cb.parentElement
    if (cb.checked == true)
        listLine.style.color = "red"
    else
        listLine.style.color = "darkslateblue"

}


function RemoveCrossedTasks() {

    for (var i = 0; i < counter; i++) {
        var cb = document.getElementById(i + "+" + "CB")
        if (cb.checked == true) {
            var listitem = document.getElementById(i)
            listitem.style.display = "none"
        }
    }


}

function AddNewTask() {

    var toDoList = document.getElementById("toDoList")
    var newTask = document.getElementById("newTask")
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.value = 1
    checkbox.id = counter + "+" + "CB"
    checkbox.onclick = function () {
        CrossItem(checkbox)
    }
    let li = document.createElement("li")
    li.appendChild(checkbox)
    li.appendChild(document.createTextNode(newTask.value))
    li.id = counter
    counter++
    li.classList.add("myListLine")
    toDoList.appendChild(li)
    newTask.value = ""
}

function clearALL() {
    var toDoList = document.getElementById("toDoList")
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }


}



