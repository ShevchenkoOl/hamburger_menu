// let text = "JavaScript";
// console.log(text.slice(-6)); // Script [6:]
// console.log(text.substr(6, 8)); // ript


// let pole1 = [1, 2, 3];
// let pole2 = pole1;
// pole2.push(4);
// console.log(pole1);  // [1, 2, 3, 4]

// let x = 0; // false
// let y = ""; // false
// let z = null; // false
// console.log(x || y || z || "default"); // default



// let elementy = document.querySelectorAll('.box');
// console.log(elementy);
// // elementy.style.color = "red";
// // elementy.classList.add("red");


// Jaký je rozdíl mezi těmito dvěma způsoby přidání elementu?
// javascript// Způsob 1
// parent.innerHTML += '<div>Nový obsah</div>';

// // // Způsob 2
// let div = document.createElement('div');
// div.textContent = 'Nový obsah';
// parent.append(div);



// document.querySelector('.parent').addEventListener('click', (e) => {
//     console.log('Target:', e.target.className);
//     console.log('CurrentTarget:', e.currentTarget.className);
// });


// let obj = { a: 1, b: 2, c: 3 };
// let arr = Object.keys(obj);
// delete obj.b;
// console.log(Object.keys(obj)); // ['a', 'c']
// console.log(arr);             // ["a", "b", "c"]




// https://rickandmortyapi.com/documentation/#rest
const section = document.querySelector("#section");
// fetch('https://rickandmortyapi.com/api/character') // Promis 
//     .then(responce => {
//         if(!responce.ok){
//             throw new Error("Chyba siti");
//         }
//         return responce.json()})
//     .then(data => {
//         data.results.forEach(el => {
//             console.log(el)
//             const div = document.createElement('div');
//             div.innerHTML = `
//             <img src="${el.image}">
//             <h3>${el.name}</h3>
//             <p>${el.status}</p>
//             <p>${el.type}</p>
//             `;
//             section.append(div);
//         })
//     })
//     .catch(err => console.error("Doslo k chybe:", err))

// async/await

// async function loadData() {
//     try{
//      const responce = await fetch('https://rickandmortyapi.com/api/character') // Promis 
//         if(!responce.ok){
//             throw new Error("Chyba siti");
//         }
//      const data = await responce.json()
//         data.results.forEach(el => {
//             console.log(el)
//             const div = document.createElement('div');
//             div.innerHTML = `
//             <img src="${el.image}">
//             <h3>${el.name}</h3>
//             <p>${el.status}</p>
//             <p>${el.type}</p>
//             `;
//             section.append(div);
//         })
//     }
//   catch(err) {console.error("Doslo k chybe:", err)}
// }

// loadData()


// async function(){
//     try{
//     }
//     catch{
        
//     }
// }


const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const input = document.querySelector("#cityInput")
const city = "Prague";
const API_KEY = "6625860d1ff9072a31a44a52133e59cb";

fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&lang=cz`)
    .then(res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        return res.json()
    })
    .then( data => { console.log(data);
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>Pocasi ve ${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Rychlost vetru: ${data.wind.speed}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].icon}">
        `;
        section.append(div);
    }
    )

    .catch(error => console.error(error))
