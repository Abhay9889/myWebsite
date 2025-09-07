// Variables example
function showVarExample() {
  let name = "Krishna";
  const pi = 3.14;
  var age = 22;
  document.getElementById("varOutput").innerText =
    "Name: " + name + ", Pi: " + pi + ", Age: " + age;
}

// Functions example
function showFuncExample() {
  function greet(name) {
    return "Hello, " + name + "!";
  }
  document.getElementById("funcOutput").innerText = greet("Radha");
}

// DOM example
function changeText() {
  document.getElementById("demo").innerText = "Text changed by JavaScript!";
}

// Object example
function showObject() {
  let student = { name: "Radha", age: 20, course: "Web Development" };
  document.getElementById("objOutput").innerText =
    "Name: " + student.name + ", Age: " + student.age + ", Course: " + student.course;
}
