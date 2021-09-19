function crossCheckedItems() {
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