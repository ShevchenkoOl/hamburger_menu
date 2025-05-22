// let a = 5;
// a = a + 2; // a+=2 a + 1 = a++ 
// b = "7"
// a = Number(b) + a; //14 String()
// console.log(a); //57
// let a = 5;
// console.log(a++) // a + 1
// console.log(a)
// console.log(a--) // a - 1
// console.log(a)
// console.log("Hello" + "Alex")


// let jmeno = "Anna";
// let vek = 25;
// let zprava = jmeno + " má " + vek + 5 + " let"; // 255
// let zprava2 = jmeno + " má " + (vek + 5) + " let"; // 30
// jmeno = "Olga"
// console.log(zprava);
// console.log(zprava2);
// console.log(jmeno)

// const jmeno = "Alex";
// jmeno = "Olga"; // Error
// console.log(jmeno);

// const student = "Miša";
// // student = "Alex"
// console.log("Hello, " + student) // error

// let jmeno = "Lukas";
// jmeno = 5;
// console.log(jmeno)
// jmeno = "Anna";
// let vek = 25;
// console.log(jmeno, vek)
// jmeno = "Alex";
// vek += 3;
// let zprava = jmeno + " má " + vek + " let";
// console.log(zprava); // Alex ma 28 let
//                      // Alex ma 3 

// let jmeno = "Olga";
// let age = 30;
// // console.log("Student " + jmeno + " ma " + age + " let")
// console.log(`Student ${jmeno} ma ${age} let`) // Šablonový řadék
// document.body.innerHTML = `<div>Student ${jmeno} ma ${age} let</div>`;
//         12345
let str = "Here is some random text Here is some random text";
       //  01234
// console.log(str.length); // 24
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes('w')); //false
// console.log(str.indexOf('h')); // -1
// console.log(str.indexOf('e')); // 0
// console.log(str.slice(0, 4)); //Here
// console.log(str.slice(str.indexOf('text'))); //text
// console.log(str.slice(str.length-4)); // text
// let jmeno = "   Alex  ";
// console.log(jmeno.length)
// console.log(str.trim())
// console.log(str.replace("Here is", "This is"))
// console.log(str.replaceAll("Here is", "This is"))
// let seznam = "jabko banan, kokos voda";
// console.log(seznam.split(",")); // ["jabko", "banan", "kokos", "voda"]
// console.log(str.charAt(str.length-1)) // r
// let a = "Ahoj!";
// console.log(a.repeat(5));

// let name1 = "jan"
// console.log(name1.charAt(0).toUpperCase() + name1.slice(1));
// console.log(name1.slice(0, 1).toUpperCase() + name1.slice(1));

// let nazev = "Uvod do JavaScriptu"  //JavaScript
// console.log(nazev.slice(nazev.indexOf("J"), nazev.length-1));

// let ukol = "   JavaScript ";
// console.log(ukol.length)
// console.log(ukol.trim().length);
// let jmeno = prompt("Jake tvoje jmeno"); //string
// let vek = Number(prompt("Zadej svoji vek"));
// console.log(typeof jmeno);
// console.log(typeof vek);

// alert(`Tvoje jmeno je ${jmeno}`)

// let jmeno = prompt("Zadej svoje jmeno");
// let vek = Number(prompt("Zadej svoji vek"));
// let email = prompt("Zadej svoji email");

// document.body.innerHTML = `<h1>Hello, ${jmeno}! You are ${vek} years old and your email address is ${email}</h1>`;

// let den = Number(prompt("Zadej den"));
// let mesic = prompt("Zadej nazev nesice");
// let rok = Number(prompt("Zadej rok"));

// document.body.innerHTML = `<h1>Dneska je, ${den} ${mesic} ${rok}</h1>`;

// let faringet = Number(prompt("Zadej kolik stupni po Farengetu"));
// let celsia = Math.round((5 * (faringet - 32))/9);
// document.body.innerHTML = `<div><h1>${faringet} stupni po Farengetu ravna se ${celsia} stupni Celsia</h1><img src="https://blog.certifiedmtp.com/wp-content/uploads/2020/01/shutterstock_121478143.jpg" /></div>`;


// let cenaZakKus = Number(prompt("Zadej cenu za kus"));
// let pocetLusu = Number(prompt("Zadej pocet kusu"));
// let celkovaCena = cenaZakKus * pocetLusu + (0.21 * (cenaZakKus * pocetLusu));
// alert(`Cena za ${pocetLusu} kusu s DPH ravna se ${celkovaCena} kc`)