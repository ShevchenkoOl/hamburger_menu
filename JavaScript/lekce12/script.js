// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// // let arr2 = [1, 2, 3];  // false

// console.log(arr1 == arr2); // true


// const arr = [1,2,3];
// arr.push(4); 
// console.log(arr)     // [1,2,3,4]


// const [a, b, c] = [1, 2];
// console.log(a, b, c);      // 1, 2, underfined


// let x = 1;
// function test() {
//   console.log(x);
//   let x = 2;      // error 
//   console.log(x)
// }
// test();

let todos = [];
const input = document.querySelector("#todoInput");
const btn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");
const deleteAll = document.querySelector("#deleteAll");

btn.addEventListener("click", () => {
      const text = input.value.trim();
      if(text === "") return;

      const todo = {
        id: Date.now(),
        text: text
      };

      todos.push(todo);
      input.value = "";
      renderTodos();
      saveTools();

})

function renderTodos () {
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;

        // btn delete
        const btnDel = document.createElement("button");
        btnDel.textContent = "Smazat";
        btnDel.style.marginLeft = "10px";

        // btn update
        const btnUpdate = document.createElement("button");
        btnUpdate.textContent = "Upravit";
        btnUpdate.style.marginLeft = "10px";

        
        btnUpdate.addEventListener("click", () => {
            const inputUpdate = document.createElement("input");
            inputUpdate.type = "text";
            inputUpdate.value = todo.text;
            li.append(inputUpdate);
            btnUpdate.style.display = "none";

            const saveBtn = document.createElement("button");
            saveBtn.textContent  = "Uložit";
            saveBtn.style.marginLeft = "10px";
            li.append(saveBtn, btnDel);

            saveBtn.addEventListener("click", () => {
                const newText = inputUpdate.value.trim();
                if(newText === "") return;

                todo.text = newText;
                saveTools();
                renderTodos();
            })

        })

        btnDel.addEventListener("click", () => {
            deleteTools(todo.id);
            
        })

        list.appendChild(li);
        li.appendChild(btnDel);
        li.appendChild(btnUpdate);
        
    })
}

function deleteTools(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTools();
    renderTodos();
}

function saveTools () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTools () {
    const data = localStorage.getItem("todos");
    todos = data ? JSON.parse(data) : [];

}

deleteAll.addEventListener("click", () => {
localStorage.removeItem("todos");
todos = [];
renderTodos();
});

loadTools();
renderTodos();