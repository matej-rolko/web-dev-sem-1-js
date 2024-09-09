//hover button
const button = document.getElementById("hover-button");
const div = document.getElementById("secret-div");

// mouseover to show the message
button.addEventListener("mouseover", () => {
    div.classList.remove("hidden");
    div.classList.add("visible");
});

// mouseout to hide the message
button.addEventListener("mouseout", () => {
    div.classList.remove("visible");
    div.classList.add("hidden");
});

// todo list
function createTodo(){
    const newTodoText = document.getElementById("newTodoText").value;
    const newLi = document.createElement("li");
    newLi.textContent = newTodoText;
    
    document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("newTodoText").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        createTodo();
    }
})

document.getElementById("addTodo").addEventListener("click", function() {
  createTodo();
})

document.getElementById("clearTodo").addEventListener("click", function() {
    document.getElementById("todoList").replaceChildren()
})

//duck exercise
  function duckExplain(){
    const newDuckInput = document.getElementById("duck-input").value;
    const newExplain = document.createElement("p");
    newExplain.textContent = newDuckInput;
    
    document.getElementById("duck-list").appendChild(newExplain);
}

document.getElementById("duck-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        duckExplain();
    }
})

document.getElementById("explain-button").addEventListener("click", function() {
    duckExplain();
})

document.getElementById("duck-img").addEventListener("mouseover", function() {
    console.log("quack")
})

