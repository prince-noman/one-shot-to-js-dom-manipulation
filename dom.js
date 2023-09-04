// console.log(typeof document);
// console.log(document);
// console.dir(document);
// console.log(document.title);
// document.title = "Task App";
// console.log(document.title);
// console.log(document.all);

//GET ELEMENT BY ID
// console.log(document.getElementById("header"));
// let header = document.getElementById("header");
// header.innerText = "JavaScript";
// header.textContent = "PHP";
// console.log(header.innerHTML);
// header.innerHTML = "PHP";
// header.style.color = "red";
// header.style.fontSize = "40px";

//GET ELEMENTS BY CLASSNAME
// console.log(document.getElementsByClassName("item"));
// let itemUl = document.getElementById("items");
// let items = itemUl.getElementsByClassName("item");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

//GET ELEMENTS BY TagName
// console.log(document.getElementsByTagName("h1"));

//QUERYSELECTOR
// console.log(document.querySelector(".item"));
// console.log(document.querySelector(".item:last-child"));
// let lastChild = document.querySelector(".item:last-child");
// lastChild.style.color = "red";
// console.log(document.querySelector(".item:nth-child(2)"));
// const middleLi = document.querySelector(".item:nth-child(2)");
// middleLi.style.color = "red";

//QuerySelectorALL
// console.log(document.querySelectorAll(".item"));
// let lastChilds = document.querySelectorAll(".item:last-child");
// for (let lastChild of lastChilds) {
//   lastChild.style.color = "red";
// }

// if (x <= 5) {
//   console.log(x);
// }

// ul->li
// let li = document.querySelector("#items").querySelector(".item:last-child");
// console.log(li.innerText);

//Descendant (Top to Bottom Access)
// const parent = document.querySelector("#items");
// const children = parent.children;
// console.log(children);
// const grandParent = document.querySelector(".todo-list");
// const parent = grandParent.children;
// const children = parent[1].children;
// console.log(children);

// Ancistor (Bottom to Top Access)
// const child = document.querySelector("#items");
// const p = child.parentElement;
// const p = child.closest(".todo-list");
// console.log(p);

//Creating an Element
// const divELement = document.createElement("div");
// console.log(divELement);
// divELement.className = "box";
// divELement.setAttribute("id", "box");
// console.log(divELement);

//Insert Element to Last
// const container = document.querySelector(".todo-list");
// const divELement = document.createElement("div");
// container.appendChild(divELement);
// container.append(divELement);
// container.append(divELement, "HI", "Bye");
// container.appendChild(divELement, "HI", "Bye");

//Event Listeners
// console.log(document.getElementById("header"));
// const header = document.getElementById("header");

// header.addEventListener("click", function (event) {
//   console.log(event);
// });

// header.addEventListener("dblclick", (event) => {
//   console.log(event);
// });
// header.addEventListener("mouseover", (event) => {
//   console.log(event);
// });
// addEventListener("click", function (click) {

// });
// const input = document.getElementById("new-task");
// input.addEventListener("keyup", function (a) {
//   console.log(a);
// });

// * I have updated this topic for your better understanding
// Arrow Function Syntax
// Before Arrow:
// const myFunc = function (x, y) {
//   console.log(x * y);
// };
// myFunc(5, 6);

// With Arrow Function:
// const myFunc = (x, y) => {
//   console.log(x * y);
// };
// myFunc(5, 6);

// input.addEventListener("keydown", (event) => {
//   console.log(event);
// });

// input.addEventListener("focus", (event) => {
//   console.log(event);
// });

// input.addEventListener("blur", (event) => {
//   console.log(event);
// });
// input.addEventListener("copy", (event) => {
//   console.log(event);
// });

// input.addEventListener("cut", (event) => {
//   console.log(event);
// });

// input.addEventListener("paste", (event) => {
//   console.log(event);
// });

// Form Event
// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(input.value);
// });
