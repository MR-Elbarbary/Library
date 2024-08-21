let library = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

function addBookToLibrary(book){
    library.push(book)
    console.log(library)
    return library.length - 1
}

function createBookDiv(book, index){
    let bookDiv = document.createElement("div");

    bookDiv.classList.add("book");
    bookDiv.setAttribute('data-index', index);
    if(book.isRead){
        bookDiv.classList.add("read")
    }
    else{
        bookDiv.classList.add("notRead")
    }
    let bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement("h3");
    bookAuthor.textContent = book.author;
    let bookPages = document.createElement("h3");
    bookPages.textContent = book.pages + " Pages";
    let deleteBtn = document.createElement("button");
    let btnDiv = document.createElement("div");
    deleteBtn.classList.add("delete")
    deleteBtn.textContent = "Delete"
    let read = document.createElement("button");
    read.textContent = "Read"

    read.addEventListener("click",() =>{
        let bookIndex = bookDiv.getAttribute("data-index")
        if(library[bookIndex].isRead){
            library[bookIndex].isRead = false
            bookDiv.classList.remove("read");
            bookDiv.classList.add("notRead");
        }
        else{
            bookDiv.classList.remove("notRead");
            bookDiv.classList.add("read");
            library[bookIndex].isRead = true
        }
    })

    deleteBtn.addEventListener("click",() =>{
        let books = document.querySelector(".books")
        let bookIndex = bookDiv.getAttribute("data-index");
        library.splice(bookIndex, 1);
        books.removeChild(bookDiv);
        updateBookDisplay()
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    btnDiv.appendChild(deleteBtn);
    btnDiv.appendChild(read);
    bookDiv.appendChild(btnDiv);
    return bookDiv
}

document.addEventListener("DOMContentLoaded", () => {
    let formBook = document.querySelector("#Form");
    let createBookBtn = document.querySelector("#Create");
    let close = document.querySelector("#close");
    let submit = document.querySelector("#submit");
    let books = document.querySelector(".books")


    createBookBtn.addEventListener("click", () =>{
        formBook.showModal()
    });

    submit.addEventListener("click", (event) =>{
        event.preventDefault
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let isRead = document.getElementById("isRead").checked;
        let book = new Book(title, author, pages, isRead)
        let index = addBookToLibrary(book)
        books.appendChild(createBookDiv(book, index))
    });

    close.addEventListener("click", () =>{
        formBook.close()
    });

});

function updateBookDisplay(){
    let books = document.querySelector(".books")
    books.innerHTML = ''
    library.forEach((book) =>{
        let bookDiv = createBookDiv(book);
        books.appendChild(bookDiv);
    })
}