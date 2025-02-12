let name = "rohit";

name[0] = "m";
console.log(name)
// humare pass rohit hi ayega koi change nhi ayega 
// becouse ye string hai

let fruits = ["mango","banana","orange"];
fruits[0] = "apple";
console.log(fruits);
// yaha change ho jayega becouse ye array hai
fruits[2] = "grapes";
console.log(fruits)
// hum chahe to ek naya fruits add kar skte hai
// bina kisi ko hataye
fruits[10] = "papaya"; // bich me 7 empty items create
//ho jayega hum 10 ki jagah aur bhi kuch chate to le skte hai
 
console.log(fruits);
console.log(fruits.length)