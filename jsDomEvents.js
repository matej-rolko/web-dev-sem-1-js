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
  async function duckExplain(){
    const newDuckInput = document.getElementById("duck-input").value;
    const newExplain = document.createElement("p");
    const date = new Date().toLocaleString();
    
    newExplain.textContent = username + ": " + newDuckInput;
    newExplain.title = date;
    document.getElementById("duck-list").appendChild(newExplain);

    setTimeout(async function () {

        const jokeObject = await fetchJoke();
        console.log(jokeObject)
        const joke = document.createElement("p");
        const date = new Date().toLocaleString();
        joke.textContent = "> Mr. Duck: " + jokeObject.joke
        joke.title = date;
        document.getElementById("duck-list").appendChild(joke);
    
    }, 2000);
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

// Mr. Duck welcome on load
window.addEventListener("load", (event) => {
    username = prompt("Hello, what is your name?")
    document.getElementById("duck-name").textContent = "Hey, " + username + "! Tell me about you problem."
    const newDuckInput = document.getElementById("duck-input").value;
});

async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const jokeObject = await response.json();
    return jokeObject;
}