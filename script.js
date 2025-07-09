const notesContainer = document.querySelector(".notes-container");
const notesBtn = document.querySelector(".btn");

notesBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    img.className = "delete-icon";
    img.alt = "Delete";
    img.style.width = "16px"; // Optional: to keep delete icon small
    img.style.cursor = "pointer"; // Optional: change cursor to pointer

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});
