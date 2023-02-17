const container = document.querySelector(".container");
let size = 16;
const width = 320;
const height = 320;


let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    size = prompt("what would you like the size to be ?");
    draw(size);
});

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    draw(size);
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "lightcoral";
}

function draw(size) {
    while (size === null || size == 0) {
        size = prompt("please enter a number between 0 and 64");
    }
    while (size > 64) {
        size = prompt("please enter a size smaller than 64");
    }
    
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let content = document.createElement("div");
        
        content.classList.add("row");
        content.setAttribute("style", `height: ${height / size}px`);
        container.appendChild(content);
    }
    
    let rows = document.querySelectorAll(".row");
    
    rows.forEach((item) => {
        for (let j = 0; j < size; j++) {
            let content = document.createElement("div");
            content.classList.add("column");
            content.setAttribute("style", `width: ${width / size}px; height: ${height / size}px`);
            item.appendChild(content);
        }
    });

    let columns = document.querySelectorAll(".column");
    columns.forEach((item) => {
        item.addEventListener("mouseover", changeColor);
        item.addEventListener("mousedown", changeColor);
    });
}

draw(16);