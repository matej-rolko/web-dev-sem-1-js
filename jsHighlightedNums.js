const container = document.getElementById("number-list")

// Loop through numbers from 1 to 20
for (let i = 1; i < 21; i++) {
    
    // Create a new div element for each number
    var newDiv = document.createElement("div")
    newDiv.textContent = i;
    newDiv.classList.add("number")

    // Check if the number is even or odd and apply the appropriate class
    if(i%2 == 0) {
        //even
        newDiv.classList.add("even")
    } else {
        //oddd
        newDiv.classList.add("odd")
    }

    // Add an event listener to highlight the number when clicked
    // Remove highlight from all numbers and Add highlight to the clicked number
    newDiv.addEventListener("click", function() {
        if(this.classList.contains("highlight")) {
            this.classList.remove("highlight")
        } else {
            this.classList.add("highlight")
        }
    })
    // Append the new div to the container    
    container.appendChild(newDiv);
    
}
    
    