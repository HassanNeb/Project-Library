const myLibrary = [];

// constructor to create the object book
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//function to toggle read
Book.prototype.toggleRead = function () {
    this.read = !this.read;
};

function toggleRead(index) {
    myLibrary[index].toggleRead();
    displayBooks();
}

// function to add Books to the Library
function addBookToLibrary() {
    let name = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    const newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

//function to display Books on the Page
function displayBooks() {
    const bookContainer = document.querySelector(".main");
    bookContainer.innerHTML = "";
    myLibrary.forEach((element, i) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        bookCard.innerHTML = `
        <h3> Title : ${element.name}</h3>
        <p>  Author : ${element.author}</p>
        <p>  Pages : ${element.pages}</p>
     <button class="btn" id="toggle-${i}">
            ${element.read ? "Read" : "Not Read"}
        </button>  
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button> 
        <button class=" btn toggle-read" onclick="toggleRead(${i})">${
            element.read ? "Mark as Not Read" : "Mark as Read"
        }</button>
        `;

        bookContainer.appendChild(bookCard);
    });
}

//function to remove the cards
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

let book2 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

myLibrary.push(book2);

const addButton = document.querySelector(".mainbtn");
addButton.addEventListener("click", () => {
    const dialog = document.querySelector(".dialog-box");
    dialog.showModal();
});

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    const dialog = document.querySelector(".dialog-box");
    dialog.close();
});

const btnform = document.querySelector("#form");
btnform.addEventListener("submit", (event) => {
    event.preventDefault();
    addBookToLibrary();
});
