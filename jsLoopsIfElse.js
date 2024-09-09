// array foreach
let sum = 0;
const n = [55, 37, 105, -7, 2]

n.forEach(sumFunction)

function sumFunction(i) {
    sum += i;
}

console.log("The sum of the numbers array is " + sum)

// typeof
const arr = ["Matej", 10, "Marianne", 55, true, "Hello", -5]

arr.forEach(x =>
    console.log(x + " is a " + typeof(x))
)

// book exercise
document.addEventListener("DOMContentLoaded", () => {
    class Book {
        constructor(title, author) {
            this.title = title,
            this.author = author
        }
    }

    const books = [ new Book("Harry Potter", "J.K.Rowling"), new Book("The Great Gatsby", "F. Scott Fitzgerald"), 
        new Book("The Catcher in the Rye", "J. D. Salinger"), new Book("Lolita", "Vladimir Nabokov"), new Book("Wuthering Heights", "Emily Brontë")]

        books.forEach(b => {
        const list = document.getElementById("book-list");
        let node = document.createElement("li");
        node.textContent = b.author + ": " + b.title;
        list.appendChild(node);
    })

})

// findLargest, that takes 4 numbers as 4 parameters and returns the largest of the 4 numbers.

var randomNum = [-5, 6, 2, 99, 5.4, 0]

function findLargest(list) {
    var largest = 0;
    list.forEach(x => {
        if(x > largest) {
            largest = x
        }
    })
    return largest;
}

console.log(findLargest(randomNum))

// Create a function that takes 3 numbers as 3 parameters. 
// The first parameter is the number to check. The 2nd and 3rd parameter is a range (from and to). 
// If within the range return true, else false.

function withinRange(num1, num2, num3) {
    if(num1 > num2 && num1 < num3) {
        return true;
    } else {
        return false;
    }
}

console.log("Is 5 within the range of 3 and 99? " + withinRange(5, 3, 99))
console.log("Is -5 within the range of 0 and 99? " + withinRange(-5, 0, 99))
console.log("Is 33 within the range of 33 and 99? " + withinRange(33, 33, 99))