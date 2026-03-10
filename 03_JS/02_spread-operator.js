const fruits = ["사과", "바나나", "수박"];
console.log(fruits);
console.log(...fruits);
// console.log("사과", "바나나", "수박");
function conLog(a, b, c) {
  console.log(a, b, c);
}
conLog(fruits[0], fruits[1], fruits[2]);
conLog(...fruits);

const newFruits = ["딸기", ...fruits];
console.log(newFruits);
