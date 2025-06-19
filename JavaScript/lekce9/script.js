// const form  = document.getElementById("reg");

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const input = document.getElementById("firstName");
//     if (input.value === ''){
//         input.style.border = "2px solid red";
//         alert("Prosim, vplni vsechni pole!")
//     } else {
//         input.style.border = "2px solid black";
//         alert(`${input.value}, dekuji za registrace!`)
//     }
//     // input.value = '';
//     form.reset();
// };

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const checkBox = document.querySelector('#checkbox');
//     if(!checkBox.checked){
//      alert("Prosim, dej svuji souhlas!")
//     }
//     // console.log(checkBox.value);
//     alert(`dekuji za registrace!`);
//     form.reset();
// };



// const handleSubmit = (event) => {
//     event.preventDefault();
//     const seznam = document.getElementById('seznam');
//     // if(!seznam.value) {
//     //     alert("Prosim, zvolte socialni sit")
//     // }
//     alert(`dekuji za registrace!`);
//     console.log(seznam.value);
//     form.reset();
// };


// form.addEventListener("submit", handleSubmit);


// const input = document.querySelector("#firstName");

// // input.addEventListener("input", () => {
// //  console.log(input.value);
// // });

// input.addEventListener("change", () => {
//  console.log(input.value);
// });



// Ukol 1:
// Napište skript, který po kliknutí na tlačítko přepíná třídu dark-theme na <body>. Pokud je aktivní tmavý režim, zobrazte text „Tmavý režim zapnut“, jinak „Světlý režim zapnut“.

// const btn = document.querySelector('#theme-toggle');

// const changeTheme = () => {
// document.body.classList.toggle('dark-theme');
// const text = document.querySelector("#theme-status");
// document.body.classList.contains('dark-theme') ? text.textContent = "Tmavý režim zapnut" : text.textContent = "Světlý režim zapnut";
// };

// btn.addEventListener("click", changeTheme);



// Ukol2 Vypsání délky textu
// Vytvořte vstupní pole a element <p>, do kterého se bude zapisovat počet znaků, které uživatel napsal. Po dosažení 100 znaků změňte barvu textu na červenou.
// const input = document.querySelector("#message");
// const counter = document.querySelector("#char-count");

// input.addEventListener("input", () => {
//    counter.textContent = input.value.length;
//    counter.textContent >= 10 ? input.style.color = "red" : input.style.color = "black";
// })


// ukol 4
const input = document.querySelector("#user-name");
const btn = document.querySelector("#submit-btn");

input.addEventListener("input", () => {
    input.value.length >= 3 ? btn.disabled = false : btn.disabled = true;
})