document.addEventListener("DOMContentLoaded", () => {
    let formBook = document.querySelector("#Form");
    let createBookBtn = document.querySelector("#Create");
    let close = document.querySelector("#close");
    let submit = document.querySelector("#submit");

    createBookBtn.addEventListener("click", () =>{
        formBook.showModal()
    });

    submit.addEventListener("click", () =>{
        // After submitting
    });

    close.addEventListener("click", () =>{
        formBook.close()
    });

});