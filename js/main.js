// class Itec{
//     constructor(){
//         this.tgl = ["Senin, 09 September 2019","Rabu, 11 September 2019", "Kamis, 12 September 2019", "Sabtu, 14 September 2019"],
//         this.waktuPelaksaan = ["19.30", "15.30","14.00","14.00"],
//         this.materi = ["Review HTML dan CSS, ==> Perkenalan, Memahami cara kerja dan cara penulisan, syntax dengan Java Script", "Mengenali variable, tipe data operator, integer & string pada Java Script", "Percabangan pada Java Script", "Perulangan pada Java Script"],
//         this.trainer = ["Muhammad Iqbal", "Karis Maulana", "Muhammad Iqbal", "Subhanizar"]
//         this.config = [{
//             document: ["div", "h1", "h2", "h3", "style", "css", "table", "thead", "tbody", "tfoot", "tr" , "th", "td", "input", "textarea", "select", "option"],
//             context : ["Tanggal Pelaksaan", "Pertemuan", "Waktu Pelaksaan", "Materi", "Jam", "Tainer","Jadwal Pelaksaan Kursus JavaScript Basic 01"]
//         }]
//     }
//     head(){
//         let createParent = document.querySelector(this.config[0].document[0])
//         let headerCreate = document.createElement(this.config[0].document[2])
//         let textHeaderCreate = document.createTextNode(this.config[0].context[6])
//         headerCreate.append(textHeaderCreate)
//         createParent.append(headerCreate)
//         createParent = document.querySelector(this.config[0].document[2])
//         createParent.setAttribute(this.config[0].document[4],"text-align: center")
//         console.log(this.config)
//     }
//     table(){
//         let parent = document.querySelectorAll(this.config[0].document[7])
//         let child = document.createElement(this.config[0].document[10])
//         let textChild,trLenght;
//         parent[0].appendChild(child)
//         for (let index = 0; index < 6; index++) {
//             parent = document.querySelector(this.config[0].document[10])
//             child = document.createElement(this.config[0].document[11])
//             let textChild = document.createTextNode(this.config[0].context[index])
//             child.appendChild(textChild)
//             parent.appendChild(child)
//         }
//         trLenght = document.querySelectorAll(this.config[0].document[10]).length
//         console.log(trLenght)
//         for (let x = 0; x < this.tgl.length; x++) {
//             parent = document.querySelector(this.config[0].document[8])
//             child = document.createElement(this.config[0].document[10])
//             parent.appendChild(child)
//             for (let index = 0; index < 6; index++) {
//                 parent = document.querySelectorAll(this.config[0].document[10])
//                 child = document.createElement(this.config[0].document[12])
//                 if(index == 0)textChild = document.createTextNode(this.tgl[x])
//                 else if(index == 1)textChild = document.createTextNode(`Pertemuan ${x+1}`)
//                 else if(index == 2)textChild = document.createTextNode(`${this.waktuPelaksaan[x]}-Selesai`)
//                 else if(index == 3)textChild = document.createTextNode(this.materi[x])
//                 else if(index == 4)textChild = document.createTextNode("3 Jam")
//                 else if(index == 5)textChild = document.createTextNode(this.trainer[x])
//                 child.appendChild(textChild)
//                 parent[trLenght+x].appendChild(child)
//             }
//         }
//     }

//     add(){
//         let parent = document.querySelector(this.config[0].document[9])
//         let child = document.createElement(this.config[0].document[10])
//         let fInput,sInput,rInput,pInput;
//         parent.appendChild(child)
//         let trLenght = document.querySelectorAll(this.config[0].document[10]).length
//         console.log(trLenght)
//         for (let index = 0; index < 6; index++) {
//             parent = document.querySelectorAll(this.config[0].document[10])
//             // if(index == 5){
//             //     child = document.createElement(this.config[0].document[12])
//             //     fInput = document.createElement(this.config[0].document[15])
//             //     for (let x = 0; x < this.trainer.length; x++) {
//             //         rInput = document.createElement(this.config[0].document[16])
//             //         pInput = document.createTextNode(this.trainer[x])
//             //         rInput.appendChild(pInput)
//             //         fInput.appendChild(rInput)
//             //     }
//             //     child.appendChild(fInput)
//             //     parent[trLenght-1].appendChild(child)
//             // } else if(index==3){
//             //     child = document.createElement(this.config[0].document[12])
//             //     fInput = document.createElement(this.config[0].document[14])
//             //     child.appendChild(fInput)
//             //     parent[trLenght-1].appendChild(child)
//             // } else {
//                 child = document.createElement(this.config[0].document[12])
//                 fInput = document.createElement(this.config[0].document[13])
//                 sInput = document.createAttribute("type")
//                 sInput.value = "text"
//                 fInput.setAttributeNode(sInput)
//                 sInput = document.createAttribute("placeholder")
//                 sInput.value = this.config[0].context[index]
//                 fInput.setAttributeNode(sInput)
//                 sInput = document.createAttribute("css")
//                 sInput.value = ""
//                 fInput.setAttributeNode(sInput)
//                 child.appendChild(fInput)
//                 parent[trLenght-1].appendChild(child)
//            // }
//         }
//     }

//     button(){
//         let createParent = document.querySelectorAll(this.config[0].document[0])
//         let headerCreate = document.createElement("button")
//         let textHeaderCreate = document.createTextNode("Add")
//         headerCreate.append(textHeaderCreate)
//         createParent[1].append(headerCreate)
//         createParent = document.querySelector("button")
//         createParent.setAttribute("class","w3-btn w3-blue")
//         createParent.addEventListener("click", function(){
//             if(document.querySelector("button").innerHTML == "Add") {
//                 itec.add();
//                 document.querySelector("button").innerHTML = "Enter"
//             } else if(document.querySelector("button").innerHTML == "Enter") {
//                 let textChild, inputTable = document.getElementsByTagName("input")
//                 let trLenght = document.querySelectorAll(itec.config[0].document[10]).length
//                 console.log(trLenght)
//                     createParent = document.querySelector(itec.config[0].document[8])
//                     headerCreate = document.createElement(itec.config[0].document[10])
//                     createParent.appendChild(headerCreate)
//                     for (let index = 0; index < 6; index++) {
//                         createParent = document.querySelectorAll("tr")
//                         headerCreate = document.createElement(itec.config[0].document[12])
//                         textChild = document.createTextNode(inputTable[index].value)
//                         headerCreate.appendChild(textChild)
//                         createParent[trLenght-1].appendChild(headerCreate)
//                     }
                
//             } 
//         })
//         console.log(this.config)
//     }
// }
// let itec = new Itec()
// itec.head()
// itec.table()
// itec.button()
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
        console.log(this.parentElement.childNodes[0].textContent)
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
        console.log(this.parentElement.childNodes[0].textContent)
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
