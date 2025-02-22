const myLibrary = [];

// constructor to create the object book
function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = this.isRead;
}
// function to add Books to the Library
function addBookToLibrary(name, author, pages, isRead) {
    const newBook = new Book((name, author, pages, isRead));
    myLibrary.push(newBook);
}

//function to display Books on the Page

function displayBooks() {
    const bookContainer = document.querySelector(".main");

    myLibrary.forEach((element) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        bookCard.innerHTML = `
        <h3> Title : ${element.title}</h3>
        <p>  Author : ${element.author}</p>
        <p>  Pages : ${element.pages}</p>
        <button class="btn"> ${
            element.isRead ? "Read" : "Not Read"
        }</button>        
        `;

        bookContainer.appendChild(bookCard);
    });
}

let book1 = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 464,
    isRead: true,
};

let book2 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    isRead: false,
};

myLibrary.push(book1);
myLibrary.push(book2);
console.log(myLibrary);
displayBooks();

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
