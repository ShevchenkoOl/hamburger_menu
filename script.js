const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.list');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});


const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open"); 
});