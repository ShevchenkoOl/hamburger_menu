// let a = "5";
// let b = 3;
// console.log(a + b); // 53
// console.log(a - b); // 2
// console.log(b * a); // 15


// console.log(Math.floor(4.9));  // 4
// console.log(Math.ceil(4.1));   // 5
// console.log(Math.round(4.5));  // 5
// console.log(Math.round(5.5));  // 6

// let str = "Hello World";
// console.log(str.charAt(20)); // ""
// console.log(str[20]); // undefined

// let arr = [1, 2, 3];
// let obj = {length: 3, 0: 1, 1: 2, 2: 3};
// console.log(arr.length); // 3
// console.log(obj.length); // 3
// console.log(Array.isArray(arr)); // true
// console.log(Array.isArray(obj)); // false

// let x = 0;
// if (x = 1) {
//     console.log("A"); // A
// } else {
//     console.log("B");
// }
// console.log(x); // 1

// let result = false ? "yes" : true ? "maybe" : "no";
// console.log(result);  // maybe

// let arr = [1, "2", 3, "4"];
// let sum = 0;
// arr.forEach(item => {
//     sum += item;
// });
// console.log(sum);        // "1234"
// console.log(typeof sum); // string

// console.log(1 + "2") // 12

// function obsah(par1, par2){
//     let obsah = par1 * par2;
//     console.log(obsah);
//     // return obsah;
// }

// obsah(4, 5);
// console.log(`Obsah odelnika ravna se: ${obsah(4, 5)} cm2`);
// document.body.innerHTML = `Obsah odelnika ravna se: ${obsah(4, 5)} cm2`;


// const obsah = (par1, par2) => {
//     let obsah = par1 * par2;
//     console.log(obsah);
// }

// import { obsah } from "./script2.js"

// obsah(4, 5);

// Napište funkci ellipseArea, která spočítá (vrátí) plochu elipsu dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI. Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.​

// Funkci ellipseArea otestujte (např. pomocí document.body.innerHTML += vypište výsledek volání pro různé hodnoty do stránky).​


// function ellipseArea (w, h){
//     let result = ((w/2) * (h/2)) * Math.PI;
//     return document.body.innerHTML = `Plocha elipsu se sirka: ${w}, vyska: ${h} ravna se: ${result} cm2`;
// }

// document.body.innerHTML = `Plocha elipsu ravna se: ${ellipseArea(4, 5)} cm2`;

// const ellipseArea = (w, h) => {
//     let result = ((w/2) * (h/2)) * Math.PI;
//     return document.body.innerHTML = `Plocha elipsu se sirka: ${w}, vyska: ${h} ravna se: ${result} cm2`;
// }

// ellipseArea(4, 5);

// const maxOf2 = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3){
//         return document.body.innerHTML = "Prvni cislo vetsi"
//     } else if (num2 > num1 && num2 > num3){
//         return document.body.innerHTML = "Druhe cislo vetsi"
//     } else {
//         return document.body.innerHTML = "Treti cislo vetsi"}
// }

// maxOf2(54, 85, 74);


// setTimeout(() => console.log("Ahoj!"), 2000);

// setTimeout(() => {
//     const section = document.querySelector("#test");
//     const zahlavi = document.createElement("h1");
//     zahlavi.textContent = "Ahoj!";
//     section.style.backgroundColor = "blue";
//     section.append(zahlavi);
// }, 3000)

// setInterval(() => {
//     const section = document.querySelector("#test");
//     const zahlavi = document.createElement("div");
//     zahlavi.textContent = "Ahoj!";
//     section.style.backgroundColor = "blue";
//     section.append(zahlavi);
// }, 2000); 

// const colors = ["yellow", "red", "pink", "blue", "green", "brown", "black"];
// let i = 0;
// setInterval(()=>{
//     const body = document.querySelector("body");
//     body.style.backgroundColor = colors[i];
//     document.body.innerHTML = `<h1>${colors[i]}</h1>`
//     i += 1; // i = i +1
//     console.log(i);
//     if(i >= colors.length){
//         i = 0;
//     }
// }, 1000)

// console.log(new Date());
// const hour = new Date().getHours();
// console.log(new Date().getMinutes());

// ${hour}:${minute}:${second}

// Pomocí cyklu for spočítej součet všech čísel od 1 do 100 a vypiš výsledek do konzole.

// function spocetCisel(num1, num2) {
//     for (let i = num1; i <= num2; i++){
//     let result = i + i;
//     console.log(result)
// };
// }

// const num1 = Number(prompt("Prosim zadej prvni cislo"));
// const num2 = Number(prompt("Prosim zadej druhe cislo"));
// spocetCisel(num1, num2);

// let i = 1;
// while(i <= 10){
//     let result = i ++;
//     console.log(result);
//     i++;
// }

// Pomocí cyklu for…of vypiš každé ovoce ze seznamu 
// const ovoce = ["jabko","banan", "melon"];

// for(const element of ovoce ){
//     console.log(element);
// }


// const osoba = {
//     jméno: "Anna",
//     věk: 25
// };

// for(const key in osoba){
//     console.log(key);
//     console.log(osoba[key]);
// }

// Pomocí cyklu for vypiš do konzole všechna sudá čísla od 0 do 20.

function sude(num1, num2){
    let sudePole = [];
    for(let i = num1; i <= num2; i++){
    if(i % 2 == 0){
        sudePole.push(i);
    }
}
console.log(sudePole);
}

const num1 = Number(prompt("Prosim zadej prvni cislo"));
const num2 = Number(prompt("Prosim zadej druhe cislo"));
sude(num1, num2);

// const word = "JavaScript";
// // console.log(word.length);
// for(let i = 0; i <= word.length-1; i++){
//     console.log(word[i]);
// }