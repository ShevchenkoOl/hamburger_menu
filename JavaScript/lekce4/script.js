// const person = {
//     name: "Alex",
//     address:{
//         ulice: "Wilsonova",
//         cislo: "25"
//     }
// }

// let noveCislo = 65;
// person.address.cislo = noveCislo;

// console.log(person)

// let age = 35;

// if (age > 65){
//     document.body.innerHTML += "<h1>Gratuluji! Jste senior!</>"
// } else if (age >= 22){
//     document.body.innerHTML += "<h1>Dospely</>"
// } else if (age <= 18){
//     document.body.innerHTML += "<h1>Dite</>"
// }

// let age = 35;

// if (age >= 22){
//     if (username === "alex2025") {
//  document.body.innerHTML += "<h1>Muzes jit!</>"
//     } else {
//         document.body.innerHTML += "<h1>Zadal jsi spatne login</>"
//     }}
// else {
//     document.body.innerHTML += "<h1>Zkus to pozdeji!</>"
// }


// console.log(5 == "5"); //true
// console.log(5 === "5"); //false

// console.log(5 != "5"); //false
// console.log(5 !== "5"); //true


// 0 euro pro návštěvníky mladší 6 let,
// 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
// 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
// 50 % ze základní ceny pro ostatní (senior)

// const age = Number(prompt("Ahoj, prosim zadej svuji vek"));
// const plnaCena = 12;
// let cena;

// if (age < 6){
//     cena = 0
//     document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je zdarma`
// } else if (age <= 26){
//     cena = Math.round(plnaCena * 0.65);
//     document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
// } else if (age < 64) {
//     cena = plnaCena;
//     document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
// } else {
//     cena = plnaCena / 2;
//     document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
// }

// let age = 25;
// let username = "alex2025";

// if (age >= 22 && username === "alex2025"){
//  document.body.innerHTML += "<h1>Muzes jit!</>"
// } else {
//     document.body.innerHTML += "<h1>Tvuji vek nebo login neni spravny!</>"
// }




// let age = 18;
// let username = "alex2025";

// if (age >= 22 || username === "alex2025"){
//  document.body.innerHTML += "<h1>Muzes jit!</>"
// } else {
//     document.body.innerHTML += "<h1>Tvuji vek nebo login neni spravny!</>"
// }


// let age = 18;
// let username = "alex2025";

// age >= 22 || username === "alex2025" ? document.body.innerHTML += "<h1>Muzes jit!</>" : document.body.innerHTML += "<h1>Tvuji vek nebo login neni spravny!</>"



const age = Number(prompt("Ahoj, prosim zadej svuji vek"));
const plnaCena = 12;
let cena;

if (age < 6){
    cena = 0
    document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je zdarma`
} else if (age >= 6 && age <= 26){
    cena = Math.round(plnaCena * 0.65);
    document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
} else if (age >= 27 && age < 65) {
    cena = plnaCena;
    document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
} else {
    cena = plnaCena / 2;
    document.body.innerHTML = `<h1>Tvuji vek ${age} let, cena vstupenky je ${cena} cze`
}