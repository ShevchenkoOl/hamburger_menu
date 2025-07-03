// let objectUser = {
//     "name": "Alex",
//     "age": 13
// }
// console.log(Object.keys(objectUser));



// json-server а Apidroid

// 🟩 Krok 1 – Instalace json-server

// npm install -g json-server
// json-server --version

// 🟩 Krok 2 – Vytvoříme soubor db.json


// JSON znamená JavaScript Object Notation
// Je to formát pro ukládání a přenos dat, podobný objektům v JavaScriptu
// Často se používá v API a ve webových aplikacích
// JSON je formát, ve kterém se často ukládají informace na serveru nebo přenášejí data mezi klientem a serverem.

// {
//   "contacts": [
//     {
//       "id": 1,
//       "name": "Anna Nováková",
//       "phone": "123456789"
//     },
//     {
//       "id": 2,
//       "name": "Petr Svoboda",
//       "phone": "987654321"
//     }
//   ]
// }

// 🟩 Krok 3 – Spuštění serveru
// json-server --watch db.json --port 3001
// http://localhost:3001/contacts

// const laodPosts = async () => {
//     try {
//         const res = await fetch("http://localhost:3001/posts");
//    {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       author: author,
//       content: content,
//       likes: 0
//     })
//   });
//         if(!res.ok){
//             throw new Error("Chyba v protokolu HTTP: " + res.status)
//         }
//         const data = await res.json();
//         console.log(data);
        
//     } catch (error) {
//         console.error(error);
//     }
// }

const postList = document.querySelector('#postList');
const btnSubmit = document.querySelector('#submitPost');
const input = document.querySelector('#author');
const content = document.querySelector('#content');

let editId = null;

const laodPosts = async () => {
    try {
        const res = await axios.get("http://localhost:3001/posts");
        const data = res.data;
        console.log(data);
        
        postList.innerHTML="";
        data.forEach(post => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>${post.username}</strong>: ${post.post}
            <br>Líbí se mi: ${post.like}
            `

            const btnDel = document.createElement("button");
            btnDel.textContent = "🗑️ Smazat";
            btnDel.style.backgroundColor = "#f39f8d";
            btnDel.addEventListener("click", () => deletePost(post.id))

            const btnLike = document.createElement("button");
            btnLike.textContent = "👍 Like";
            btnLike.style.backgroundColor = "#a4eb58";
            btnLike.style.marginLeft = "20px";
            btnLike.addEventListener("click", () => likePost(post));

            const btnUpdate = document.createElement("button");
            btnUpdate.textContent = "✏️ Upravit";
            btnUpdate.style.backgroundColor = "#eb58c3";
            btnUpdate.style.marginLeft = "20px";
            btnUpdate.addEventListener("click", () => openUpdate(post) );

            postList.appendChild(li);
            li.appendChild(btnDel);
            li.appendChild(btnLike);
            li.appendChild(btnUpdate);

        });

    } catch (error) {
        console.error(error);
    }
}


btnSubmit.addEventListener("click", async () => {
    const username = input.value.trim();
    const post = content.value.trim();

    try {
        if(editId === null){
            await axios.post("http://localhost:3001/posts",  {
            username,
            post,
            like: 0
        });
       }
        else {
            await axios.put(`http://localhost:3001/posts/${editId}`, {
            username,
            post,
            like: 0
            });

            editId = null;
            btnSubmit.textContent = "Přidat příspěvek";
        }
       
        input.value = "";
        content.value = "";

        laodPosts();

    } catch (error) {
         console.error(error);
    }

})


const deletePost = async(id) => {
try {
    await axios.delete(`http://localhost:3001/posts/${id}`);
    laodPosts();
} catch (error) {
    console.error(error);
}
}



const likePost = async(post) => {
    try {
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            like: post.like += 1
        });
        
        laodPosts();
    } catch (error) {
        console.error(error);
    }
}


const openUpdate = (post) => {
  input.value = post.username;
  content.value = post.post;
  btnSubmit.textContent = "Ulozit zmeny";
  editId = post.id;
}


laodPosts();