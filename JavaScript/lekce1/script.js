// let a = 5; // 78, 45.2, 478544785.478554487 number
// const name = "Alex"; // stringa - text "" - prazny
// let boolean = true; // true nebo false
// let x; // underfined
// null 
// typeof

// let text = "let's";

// let a = 8;
// let b = 2;
// let obvod = (a + b) * 2;
// let obsah = a * b;
// console.log(obvod);
// console.log(obsah);

// document.body.innerHTML += '<h1 class="hlavni-text"> Odvod obdelnika ravna se: ' + obvod + 'cm.</h1>';
// document.body.innerHTML += '<div class="text"> Odsah obdelnika ravna se: ' + obsah + 'cm2.</h1>';


// let student = "Alex";
// let welcome = "Hello";
// console.log(welcome + ", " + student + "!")
// document.body.innerHTML += "<div>" + welcome + ", " + student + "!</div>";
// console.log("Hodnote student ma typ " + typeof student);

// // console.log(student * 5);
// let nahodneCislo = Math.random() * 10;
// let celeCislo = Math.round(nahodneCislo);
// console.log("Nahodne cislo od 1 do 10: " + celeCislo);
// // console.log(Math.floor(4.7)) // dole
// // console.log(Math.ceil(4.1)) // na hory
// let student = "Alex";
// student = "Andre";
// console.log(student);

// let k = null;
// console.log(k)
// let hodinovka = 320;
// let prijemMesic = hodinovka * 7 * 21;
// document.body.innerHTML += '<div> měsíční příjem: '+ prijemMesic + ' kč </div>'

// let dan = (prijemMesic * 0.4) * 0.15;
// document.body.innerHTML += "<div> Dan: " + Math.floor(dan) + " kč </div>"
// document.body.innerHTML += "<div> Cistej prijem: " + (prijemMesic - Math.floor(dan)) + " kč </div>"


// document.body.innerHTML += "<div> Delka filmu: Pán prstenů trva " + Math.floor(223 / 60) + " hod " + (223 % 60) + " min </div>"
// let Alex = 45;
// let kresneJmeno = "Alex";
// let prijmeni = "Shevchenko";
// document.body.innerHTML = "<div>" + kresneJmeno + "." + prijmeni + "@gmail.com </div>"

// console.log(Math.floor(Math.random()*100))

// let jmeno = "Anna";
// let age = 30;
// console.log("Jmenuji se " + jmeno + "a je mi " + age + " let");
// console.log("Typ jména: " + typeof jmeno);
// console.log("Typ věku: " + typeof age);
let mesicnyPrijem = 12 * 174 * 15;
let ceneStudent = 12 * 0.65;
let pocetStudente = Math.floor(174 * 0.4);
mesicnyPrijem = ((pocetStudente * ceneStudent) + (12 * (174 - pocetStudente)))*15;
// console.log(pocetStudente)
document.body.innerHTML += "<div> měsíční příjem: " + mesicnyPrijem + " kč </div>"
