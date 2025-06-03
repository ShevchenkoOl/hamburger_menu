// Co vypíše
// console.log("JavaScript"[4]);
// console.log(toUpperCase())
// console.log(5 + 3 * 2)
// console.log(Math.floor(4.9))
// console.log((" ")) // "123"
// String(123) //"123"
// Number() //promt
// Boolean

// 0 = false;
// // 1 = true;
// let a; // 5, {} []
// // console.log(Boolean(a))
// console.log("a".length); //

// console.log(typeof NaN); //
// console.log(5 === 5)      
// console.log(NaN === NaN)

// const user = "Opletaloa 32, 110 00 Praha, Shevchenko Oleksii, 775919635"

const address = {
    ulice: "Opletalova",
    "cislo baraku": 32,    // cislo_baraku cisloBaraku
    psc: "110 00",
    mesto: "Praha",
   user: { 
    prijmeni: "Shevchenko",
    jmeno: "Oleksii",
    tel: 775919635,
    dostupnost: true,
    dodatecniUdaji: {
        cisloManzela: 88547854,
        jinyCisloBytu: 15
    }
}
}

// let street = address.ulice
// let city = address.mesto

// let {ulice, mesto} = address;
// console.log(ulice, mesto)

// console.log(user)
// document.body.innerHTML += `<div style="font-weight:600">Ulice adresara je: ${address.ulice} </div></br>`;
// user.ulice = "Wilsonova";
// // console.log(window)
// document.body.innerHTML += `Adressar zmenil ulicu na: ${user.ulice}`;
// user.byt = 5;
// console.log(user.psc)
// console.log(Number(user.psc))
// document.body.innerHTML += address.user.tel;
// document.body.innerHTML += address.user.dodatecniUdaji.cisloManzela
// console.log(Object.keys(address));
// console.log(Object.keys(address.user));
// console.log(Object.values(address));
// console.log(Object.entries(address));
// console.log(address.hasOwnProperty("mesto"));

// delete address.user.dodatecniUdaji;
// console.log(address);


// const addr = {
//     ulice: "Opletalova",
//     "cislo baraku": 32,
//     psc: "110 00",
//     mesto: "Praha"
// }

// const newAddress = {...addr, ulice:"Seifortova", "cislo baraku": 78, jmeno:"Alex"};
// console.log(newAddress);

// const user = { 
//     prijmeni: "Shevchenko",
//     jmeno: "Oleksii",
//     tel: 775919635,
//     dostupnost: true,
// }

// // const address3 = {...addr, ...user};
// // console.log(address3)
// const adress2 = {...addr, ...newAddress, ...user};
// console.log(adress2)

// console.log(window.navigator.language)
// console.log(window.innerHeight, window.innerWidth)

const array1 = ["jabko", {jmeno:"Alex", age:25}, 65, ["car", "bus", "aero"], true];
//                 0               1              2             3             4 
// console.log(array1[3][1])
// console.log(Object.keys(array1[1]));
// array1.push("Novy prvek");
// console.log(array1)
console.log(array1.pop())
console.log(array1)
array1.shift()
console.log(array1)
array1.unshift(452)
console.log(array1)
console.log(array1.includes(5))

const newArr = [45, 78, 85, 54]
newArr.forEach((i) => console.log(i * 10))
// console.log(newArr)

let arr2 = newArr.map((i) => i * 5);
console.log(arr2)

let arr3 = newArr.filter((i) => i > 5);
console.log(arr3)