// logical AND
let a = 5;
let b = 3;

let cond1 = a>b;
let cond2 = a === 5;
console.log("cond1 && cond2 =", cond1 && cond2);
// if any of them become false the output will false


// logical OR
//  yaha koi ek bhi cindition true ho gyi to output will true
 let c = 6;
 let d = 5;
 console.log("cond1 || cond2 =", c<d || c === 6);

 //logical NOT
 // if any expression give value true then it makes it false  and vice versa

 let e = 6;
 let f = 5;
 console.log("!(6<5)", !(e < f))