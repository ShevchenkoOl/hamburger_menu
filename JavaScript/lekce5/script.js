//  let jmeno = "Eva";
//  console.log(jmeno.length); //3

// [1, 2, 3].includes(2); //true

// array.push("nový prvek");

// let osoba = { jmeno: "Karel", vek: 30 };
// console.log(osoba.jmeno);  // Karel

// Jaký je správný tvar podmínky if?
    // a) if x > 10 then { ... }
    // b) if (x > 10) { ... }  //True
    // c) if x > 10: { ... }
    // d) if (x > 10) then { ... }

// let x = 5;
// let vysledek = x > 3 ? "Větší" : "Menší"; // "Větší"

// Kdy se použije && a ||

// const day = Number(prompt("Zadej cislo dne"))
// const body = 45;

// switch(day) {
// case 1:
// console.log("Pondeli")
// break;

// case 2:
// console.log("Utery")
// break;

// case 3:
// console.log("Streda")
// break;

// case 4:
// console.log("Ctvrtek")
// break;

// case 5:
// console.log("Patek")
// break;

// default:
// console.log("Vikend");
// }


// const odstavec = document.querySelector(".box");
// const odstavec = document.querySelectorAll(".box");
// // const odstavec = document.querySelector('div');
// const boxes = document.querySelectorAll('div');
// console.log(odstavec);
// console.log(boxes.length);

// const box1 = document.querySelector("#welcome");
// console.log(box1);

// const box2 = document.getElementById("first");
// console.log(box2);

// // const box3 = document.getElementsByClassName("third");
// const box3 = document.querySelector(".third");
// console.log(box3);
// console.log(box3.innerHTML);


// const box4 = document.querySelector("#second");
// // console.log(box4);
// // const odstavec1 = box4.querySelector(".odstavec");
// // console.log(odstavec1);
// // const boxik = box4.querySelector("div");
// // console.log(boxik);
// console.log(box4.innerHTML);
// console.log(box4.textContent);
// box4.textContent = "Novy text";
// box4.style.color = "red";
// box4.style.fontSize = "36px";
// box4.style.backgroundColor = "blue";
// box4.style.fontWeight = 800;

// const container = document.querySelector("#container");
// console.log(container);
// container.textContent = "Ten text pridal pres JS!";
// container.style.border = "2px solid rgb(0, 255, 0)";
// container.style.color = "red";
// container.style.backgroundColor = "rgb(109, 109, 220)"
// container.style.padding = "20px";
// container.style.width = "300px";
// container.style.margin = "0 auto";
// container.style.textAlign = "center";
// console.log(container.textContent);
// console.log(container.innerHTML);

// const section = document.querySelector(".section");
// // const section = document.getElementsByClassName("section");
// // console.log(section);

// section.classList.add("box");
// // section.classList.remove("section");
// section.classList.toggle("section");

const img = document.querySelector("#img");

img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg";
img.alt = "dog";
img.width = 100;
const btn = document.querySelector("button[type='submit']");
console.log(btn);