
var counter = 0


function CrossItem() {
    for (var i = 0; i <= counter; i++)
    {
        var cb = document.getElementById(i + "+" + "CB")
        var listitem = document.getElementById(i)
        if(cb.checked == true)
        {
        listitem.style.color="red"
        }
        else
        listitem.style.color="darkslateblue"
    }
}

function RemoveTask(taskNum) {

    var task = document.getElementById(taskNum)
    task.style.visibility = "hidden"
}

function RemoveCrossedTasks() {

    for (var i = 0; i <= counter; i++)
    {
        var cb = document.getElementById(i + "+" + "CB")
        if(cb.checked == true)
        {
        var listitem = document.getElementById(i)
        listitem.style.display="none"
        }
    }

    
    }



function AddProNode() {

    var toDoList = document.getElementById("toDoList")
    var newTask = document.getElementById("newTask")
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.value = 1
    checkbox.id = counter + "+" + "CB"
    checkbox.onclick= function() {
        CrossItem()
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


function AddNewNode() {
    var toDoList = document.getElementById("toDoList")
    var newTask = document.getElementById("newTask")
    //var checkbox = document.createElement('input')
    //    checkbox.type = "checkbox"
    //   checkbox.value = 1
    //    checkbox.id = counter+"+"+"CB"
    let li = document.createElement("li")
    //li.appendChild(checkbox)
    li.appendChild(document.createTextNode(newTask.value))
    li.id = counter
    counter++
    li.classList.add("myListLine")
    toDoList.appendChild(li)
}

function clearALL() {
    var toDoList = document.getElementById("toDoList")
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }



}