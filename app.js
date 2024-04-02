//Tasks

// 1. mehsullarin ucuzdan bahaya siralanmasi

// let products = [
//     {
//       id: 1,
//       name: "Iphone 14",
//       price: 900,
//     },
//     {
//       id: 2,
//       name: "Samsung A70",
//       price: 500,
//     },
//     {
//       id: 3,
//       name: "BMW",
//       price: 50000,
//       pet: ["cat", "dog"],
//     },
//     {
//       id: 4,
//       name: "Iphone 15 Pro Max",
//       price: 2000,
//     },
//   ];

// const productList = products.map((product)=>product.price);
// productSort = productList.sort((a,b)=>a-b);
// console.log(productSort);

// 2. Beş random eded yaradib arraya yigin, sonda ise onlarin cemini gosterin


let general = []
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))
general.push(Math.floor(Math.random() * 100))

const sum = general.reduce((a, b) => a + b, 0)

console.log(`Array: ${general.join(' + ')} =>  ${sum} : sum of these beauties`)








// Qeyd:Map funksiyası ve set() istifade ederek de bir araya toplamaq olurdu da sonrasi getmedi muellime))))