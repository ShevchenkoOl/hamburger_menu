// const newTag = document.createElement("h1");

// newTag.textContent = "Hello, I am the new tag, on the last space!";
// newTag.classList.add("zahlavi");

// // console.log(newTag);

// const section = document.querySelector("#section");
// // console.log(section);
// section.append(newTag);

// const newTag2 = document.createElement("p");
// newTag2.textContent = "Jsem prvni";

// section.prepend(newTag2);

// const before = document.createElement("span");
// before.textContent = "Jsem pred druhe prvku div";

// const druhe = section.querySelector("div:nth-child(3)")
// // console.log(druhe);
// druhe.before(before);

// const after = document.createElement("p");
// after.textContent = "Jsem po druhe prvku div";

// // druhe.after(after);

// druhe.replaceWith(after);

// // section.remove();

const section = document.createElement("section");

// section.innerHTML += `
//                     <h2 class="zahlavi">Hlavni nadpis</h2>
//                     <p>Tohle je <strong>dulezity</strong>text</p>
//                     `;
const info = document.querySelector(".info");
// info.append(section);

import { dataNews } from "./data.js";

dataNews.forEach(news => {
section.innerHTML += `
                    <h1 class="zahlavi">Dnesni noviny ${news.date}</h2>
                    <h2>${news.title}</h2>
                    <p>${news.obsah}</p>
                    `;
 info.append(section);                   
})


// section.innerHTML += `
//                     <h1 class="zahlavi">Dnesni noviny ${dataNews.date}</h2>
//                     <h2>${dataNews.title}</h2>
//                     <p>${dataNews.obsah}</p>
//                     `;
// info.append(section);