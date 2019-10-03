let materi = ["Review HTML dan CSS, ==> Perkenalan, Memahami cara kerja dan cara penulisan, syntax dengan Java Script", "Mengenali variable, tipe data operator, integer & string pada Java Script", "Percabangan pada Java Script", "Perulangan pada Java Script"],
    todoList = document.getElementById("ToDoList"),
    input = document.querySelector("input"),
    createParent = document.querySelector("ul"), createChild, elementChildText, createTextChild, button, createTextButtonChild, addClassButtonEdit;
for (let index = 0; index < materi.length; index++) {
    createChild = document.createElement("li"),
    elementChildText = document.createElement("a")
    createTextChild = document.createTextNode(materi[index])
    elementChildText.appendChild(createTextChild)
    createChild.appendChild(elementChildText)
    createParent.appendChild(createChild)
    elementChildText.addEventListener("click", function () {
        this.setAttribute("style", "text-decoration: line-through; cursor: pointer;")
    })
    elementChildText.appendChild(createTextChild)
    createChild.appendChild(elementChildText)
    createParent.appendChild(createChild)
    //================ create button delete & add text button
    button = document.createElement("button")
    createTextButtonChild = document.createTextNode("Delete")
    button.appendChild(createTextButtonChild)
    createChild.appendChild(button)
    //================ add class button delete & Function Delete List
    let addClassButtonDelete = document.createAttribute("class")
    addClassButtonDelete.value = "btnDelete"
    button.addEventListener("click", function () {
        let conf = confirm("Anda Yakin Ingin Menghapus ?")
        if (conf) return this.parentNode.parentNode.removeChild(this.parentNode)
    })
    button.setAttributeNode(addClassButtonDelete)
    //================ create button edit & add text button
    button = document.createElement("button")
    createTextButtonChild = document.createTextNode("Edit")
    button.appendChild(createTextButtonChild)
    createChild.appendChild(button)
    //================ add class button edit & Function edit List
    addClassButtonEdit = document.createAttribute("class")
    addClassButtonEdit.value = "btnEdit"
    button.addEventListener("click", function () {
        let conf = confirm("Anda Yakin Ingin MengEdit ?")
        if (conf && conf !== null) {
            conf = prompt("Masukan Nama Siswa :")
            conf = (conf !== "" && conf !== null) ? conf : alert("Data Tidak Di Simpan.")
            if(conf !== undefined){
                this.parentElement.childNodes[0].textContent = conf
            }
        }
    })
    button.setAttributeNode(addClassButtonEdit)
}

input.value = input.value !== "" ? input.value : ""
todoList.onclick = () => {
    createParent = document.querySelector("ul")
    createChild = document.createElement("li")
    elementChildText = document.createElement("a")
    createTextChild = document.createTextNode(input.value)
    elementChildText.addEventListener("click", function () {
        this.setAttribute("style", "text-decoration: line-through; cursor: pointer;")
    })
    elementChildText.appendChild(createTextChild)
    createChild.appendChild(elementChildText)
    createParent.appendChild(createChild)
    //================ create button delete & add text button
    button = document.createElement("button")
    createTextButtonChild = document.createTextNode("Delete")
    button.appendChild(createTextButtonChild)
    createChild.appendChild(button)
    //================ add class button delete & Function Delete List
    let addClassButtonDelete = document.createAttribute("class")
    addClassButtonDelete.value = "btnDelete"
    button.addEventListener("click", function () {
        let conf = confirm("Anda Yakin Ingin Menghapus ?")
        if (conf) return this.parentNode.parentNode.removeChild(this.parentNode)
    })
    button.setAttributeNode(addClassButtonDelete)
    //================ create button edit & add text button
    button = document.createElement("button")
    createTextButtonChild = document.createTextNode("Edit")
    button.appendChild(createTextButtonChild)
    createChild.appendChild(button)
    //================ add class button edit & Function edit List
    addClassButtonEdit = document.createAttribute("class")
    addClassButtonEdit.value = "btnEdit"
    button.addEventListener("click", function () {
        let conf = confirm("Anda Yakin Ingin MengEdit ?")
        if (conf && conf !== null) {
            conf = prompt("Masukan Nama Siswa :")
            conf = (conf !== "" && conf !== null) ? conf : alert("Data Tidak Di Simpan.")
            if(conf !== undefined){
                this.parentElement.childNodes[0].textContent = conf
            }
        }
    })
    button.setAttributeNode(addClassButtonEdit)
}
