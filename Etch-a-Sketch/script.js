const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let content = document.createElement("div");
    
    content.classList.add("row");
    container.appendChild(content);
}

let rows = document.querySelectorAll(".row");

rows.forEach((item) => {
    for (let j = 0; j < 16; j++) {
        let content = document.createElement("div");
        content.classList.add("column");
        item.appendChild(content);
    }
});