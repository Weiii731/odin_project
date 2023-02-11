const container = document.querySelector("#container");

let content = document.createElement('p');
content.textContent = "Hey I'm red!";
content.setAttribute("style", "color: red;");
container.appendChild(content);

content = document.createElement("h3");
content.textContent = "I'm a blue h3!";
content.setAttribute("style", "color: blue;");
container.appendChild(content);

content = document.createElement("div");
content.setAttribute("style", "border-color: black; border: solid; background-color: pink; padding: 10px;")
let h1Element = document.createElement("h1");
h1Element.textContent = "I'm in a div";
let pElement = document.createElement("p");
pElement.textContent = "ME TOO!";
content.appendChild(h1Element);
content.appendChild(pElement);
container.appendChild(content);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");