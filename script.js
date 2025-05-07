// ====== VARIABLES ======
let userName = "Goutham";
const year = 2025;
var isLoggedIn = true;

// ====== DATA TYPES & OUTPUT ======
console.log("Name:", userName);
console.log("Year:", year);
console.log("Logged In:", isLoggedIn);

// ====== FUNCTIONS ======
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript Basics.`;
}

console.log(greet(userName));

// ====== CONDITIONALS ======
let age = 21;
if (age >= 18) {
    console.log("You're an adult.");
} else {
    console.log("You're a minor.");
}

// Ternary operator
let loginStatus = isLoggedIn ? "User is logged in" : "User is logged out";
console.log(loginStatus);

// ====== ARRAYS ======
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange");
console.log("Fruits:", fruits);

// Looping through array
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

// ====== OBJECTS ======
let user = {
    name: "Goutham",
    email: "goutham@example.com",
    active: true
};

console.log(`User Name: ${user.name}`);
console.log(`User Email: ${user.email}`);

// ====== EVENTS & DOM MANIPULATION ======
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h1");
    const button = document.getElementById("changeColorBtn");
    const form = document.getElementById("contactForm");

    // Change heading color
    button.addEventListener("click", () => {
        heading.style.color = heading.style.color === "blue" ? "black" : "blue";
    });

    // Form submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Thank you ${name}! We will reach out to you at ${email}`);
        form.reset();
    });
});
