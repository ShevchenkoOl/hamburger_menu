const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
const limit = 10;

const section = document.querySelector('#section');
const btn = document.querySelector('#next');
const sentinel = document.querySelector('#sentinel');
const loading = document.querySelector('#loader');

const loadData = async() => {
    try {
        loading.classList.remove("hidden");
        const responce = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);

        if(!responce.ok){
            throw new Error ("Chba v HTTP: " + responce.status) // 400, 500 
        }
        const data = await responce.json();
        // console.log(data.results);

        const pokemons = data.results;
        for (const pokemon of pokemons) {
            const detailRes = await fetch(pokemon.url);
            const detailData = await detailRes.json();
            // console.log(detailData);

            const div = document.createElement('div');
            div.classList.add("card");
            div.innerHTML = `
            <h2>${detailData.name}</h2>
            <img src="${detailData.sprites.front_default}" alt="${detailData.name}" >
            <button class="btn">Vic info</button>
            <div class="details hidden"></div>
            `
            section.append(div);

            const infoBtns = document.querySelectorAll(".btn");
       
        infoBtns.forEach(infoBtn => {

                infoBtn.addEventListener("click", () => {
                const divDetail = div.querySelector(".details");
                console.log(divDetail);

                if(!divDetail.classList.contains('hidden')){
                    divDetail.classList.add('hidden');
                    infoBtn.textContent = "Vic info"
                } else {
                    const type = detailData.types.map(t => t.type.name).join(", ");
                    const abilites = detailData.abilities.map(a => a.ability.name).join(", ");

                    divDetail.innerHTML = `
                    <p>Type: ${type}</p>
                    <p>Schopnost: ${abilites}</p>
                    <p>Vaha: ${detailData.weight}</p>
                    <p>Vyska: ${detailData.height}</p>
                    `;
                    divDetail.classList.remove('hidden');
                    infoBtn.textContent = "Men info"
                }

            });
        })
            
        }


    } catch (error) {
        console.error(error)
    } finally {
        loading.classList.add("hidden");
    }
}

btn.addEventListener('click', ()=>{
    offset += limit;
    loadData();

})

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             offset += limit;
//             loadData()
//         }
//     });
// }, {
//     rootMargin: '200px'
// })
// observer.observe(sentinel);

loadData();