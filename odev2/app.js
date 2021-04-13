let ulDOM = document.getElementById("list")
let inputDOM = document.querySelector("#task")
let liDOM = document.getElementsByClassName("todo-list-item")
let todos

ulDOM.addEventListener("click", deleteElement)
ulDOM.addEventListener("click", completedElement)


function getTodos() {
    if (!localStorage.getItem("todos")) {
        todos = []
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

function onloadFunc() {
    getTodos()
    let localStorageData = JSON.parse(localStorage.getItem("todos"))
    localStorageData.forEach(data => {
        let newItem = document.createElement("li")
        newItem.className = "todo-list-item"
        newItem.textContent = data
        ulDOM.appendChild(newItem)
        let closeIcon = document.createElement("i")
        closeIcon.className = "fas fa-times close"
        newItem.appendChild(closeIcon)
    });
}

function newElement() {
    let newItem = document.createElement("li")
    newItem.className = "todo-list-item"
    newItem.innerHTML = inputDOM.value.trim()
    if (newItem.innerHTML == "") {
        $('#liveToastError').toast('show')
    }
    else {
        ulDOM.appendChild(newItem)
        let closeIcon = document.createElement("i")
        closeIcon.className = "fas fa-times close"
        newItem.appendChild(closeIcon)
        $('#liveToastSuccess').toast('show')
        todos.push(newItem.textContent)
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    inputDOM.value = ""
}

function deleteElement(e) {
    if (e.target.className == "fas fa-times close") {
        e.target.parentElement.remove()
        $('#liveToastDelete').toast('show')
        let todosItems = getTodos()
        todosItems.forEach((item, index) => {
            if (e.target.parentElement.textContent == item) {
                todosItems.splice(index, 1)
            }
        });
        localStorage.setItem("todos", JSON.stringify(todos))
    }
}

function completedElement(e) {
    if (e.target.className == "todo-list-item") {
        e.target.classList.add("checked")
    }
    else {
        e.target.className = "todo-list-item"
    }
}
