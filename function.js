// Named Function
function greet() {
    console.log("Hello!");
  }
  greet();
  
  // Anonymous Function
  const sum = function(a, b) {
    return a + b;
  };
  console.log(sum(5, 3));
  
  // Arrow Function
  const multiply = (x, y) => x * y;
  console.log(multiply(4, 2));
  
  // IIFE
  (function() {
    console.log("IIFE runs immediately");
  })();
  
  // Constructor Function
  function Person(name) {
    this.name = name;
  }
  const p1 = new Person("John");
  console.log(p1.name);
  
  // Callback Function
  function display(callback) {
    callback();
  }
  display(() => console.log("Callback called"));
  