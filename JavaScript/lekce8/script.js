// const obj = { a: 1 };
// obj = { b: 2 };
// console.log(obj); // TypeError
// obj.b = 2;
// delete obj.a;
// console.log(obj); // {b: 2}

// const obj = { a: 1 };
// const obj2 = obj;
// obj2.a = 2;
// console.log(obj.a); // 2

// console.log(typeof null); // object

// function test() {
//   return
//   {
//       message: "Hello"
//     };
// }
// console.log(test()); // underfined

// console.log(document.getElementById("myDiv")) // null

// document.getElementById("nope").innerHTML = "Hello"; // TypeError

// fun();
// // function fun (){
// //     console.log("Hello!");   // Hello
// // }
// const fun = () => {
//     console.log("Hello!");   // Error
// }

// const arr = [1, 2, 3];
// arr.length = 4;    // (4) [1, 2, 3, empty]
// console.log(arr);
// arr.length = 1; // [1]

// // let a = 5;
// function test() {
//   console.log(a);
//   let a = 5;
// }
// test(); // undefined

// const argum = [1, 2, 4]
// const greet = () => argum[0];
// console.log(greet("Hello"));

// const btn = document.querySelector("#btn");
// // // function handler() {console.log("Pressed button")};
// // const handler = () => console.log("Pressed button");
// // btn.addEventListener("click", handler);

// const changeTitle = () => {
//   const title = document.querySelector("#title");

//   if (title.textContent === "Hello event listener!") {
//   title.textContent = "We chenged the title!";
//   } else {
//     title.textContent = "Hello event listener!";
//   }
// };

// btn.addEventListener("click", changeTitle);

// const buttons = document.querySelectorAll(".btn-smiley");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         buttons.forEach(b => {
//             b.classList.remove("btn-smiley--selected");
//         })
//         button.classList.toggle("btn-smiley--selected");
//     })
// })

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function hendler(){
//     console.log("Press only one!");
//     btn.removeEventListener("click", hendler)
// })

// let intervalBg = null;

// const randomColor = () => {return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`}
// console.log(randomColor());

// const btn = document.querySelector("#btn");
// const stop = document.querySelector("#stop");

// const changeBg = () => {
//     intervalBg = setInterval(() => {
//         document.body.style.backgroundColor = randomColor()
//         btn.disabled = true;
//         stop.disabled = false;
//     }, 1000)
//     }

// const stopChange = () => {
//     clearInterval(intervalBg);
//     intervalBg = null;
//     document.body.style.backgroundColor = "";
//     btn.disabled = false;
//     stop.disabled = true;
// };

// btn.addEventListener("click", changeBg);
// stop.addEventListener("click", stopChange);

// document.addEventListener("click", (event) => {
// // console.log(event.key);
// console.log(event);
// });

// document.addEventListener("keydown", (event) => {
// if (event.code === "Space") {
// document.body.innerHTML = "presed space";
// }
// });

// const container = document.querySelector("#btnContainer");

// // container.addEventListener("click", (e)=>{
// //     console.log(e.target.textContent);
// //     console.log(e.currentTarget);
// // })

// const handle = (event) => {
//     if(event.target.classList.contains("btn-smiley")){
//         const buttons = document.querySelectorAll(".btn-smiley");
//         buttons.forEach(button => {
//             button.classList.remove("btn-smiley--selected");
//         })
//         event.target.classList.add("btn-smiley--selected")
//     }
// }

// container.addEventListener("click", handle);
// const curretTime = new Date();
// const clock = document.querySelector("#time");

// const time = () => {
//   setInterval(() => {
//   clock.textContent = `${curretTime.getHours()}:${curretTime.getMinutes()}:${curretTime.getSeconds()}`;
// }, 1000);}

// time(set);

