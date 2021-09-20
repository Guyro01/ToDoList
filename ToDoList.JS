
var counter = 0
window.localStorage.setItem(0, "FINISH")

function expeVis() {

    experimental = document.getElementById("experimental")
    expediv = document.getElementById("expeDiv")
    if (experimental.checked == true) {
        expediv.classList.remove("myHiddenBox");
        expediv.classList.add("mySmallerBox")
    }
    else {
        expediv.classList.remove("mySmallerBox");
        expediv.classList.add("myHiddenBox")
    }
}




function saveList() {
    var newID = 0
    window.localStorage.clear();
    if (counter != 0) {
        for (var i = 0; i < counter; i++) {
            var line = document.getElementById(i)
            if (line.style.display != "none") {
                var record = ""
                var cb = document.getElementById(i + "+" + "CB")
                var stringVal = line.innerText
                if (cb.checked == true)
                    record = stringVal + "+" + "TRUE"
                else
                    record = stringVal + "+" + "FALSE"
                window.localStorage.setItem(newID, record)
                newID++
                
            }
        }
    }
    window.localStorage.setItem(newID, "FINISH!")
}

function loadList() {
    var i = 0
    var flag = true
    var list = []
    while (flag) {
        var istr = i.toString()
        var newString = window.localStorage.getItem(istr);
        list.push(newString)
        i++
        if (newString == "FINISH!")
            flag = false
    }

    clearALL()
    buildNewList(list, i - 1)
    

}

function buildNewList(newList, amount) {
    counter = 0
    for (var i = 0; i < amount; i++) {
        addNewTaskTM(newList[i])
    }
}





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
        if (newTask.value.length >= 65) {
            var tdlHolder = document.getElementById("listHolder")
            tdlHolder.style.width = "100%"
        }
        newTask.value = ""
    }
}


function addNewTaskTM(value) {
    if (value != "") {
        var indexOfPlus = 0;
        var checkBoxFlag = false
        indexOfPlus = value.indexOf("+")
        var pureText = value.substring(0, indexOfPlus)
        var cbStatus = value.substring(indexOfPlus+1, value.length)
        if ( cbStatus== "TRUE")
            checkBoxFlag = true
        var toDoList = document.getElementById("toDoList")
        var checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.value = 1
        checkbox.id = counter + "+" + "CB"
        checkbox.onclick = function () {
            crossItem(checkbox)
        }
        let li = document.createElement("li")
        if(checkBoxFlag==true)
        checkbox.checked = "true"
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(pureText))
        li.id = counter
        counter++
        if(checkBoxFlag!=true)
        li.classList.add("myRegLine")
        else
        li.classList.add("myCrossedLine")
        toDoList.appendChild(li)
        if (pureText.length >= 65) {
            var tdlHolder = document.getElementById("listHolder")
            tdlHolder.style.width = "100%"
        }
    }
}


function clearALL() {
    var toDoList = document.getElementById("toDoList")
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
    counter = 0
}



