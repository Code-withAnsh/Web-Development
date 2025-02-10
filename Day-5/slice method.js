// see notes
let str = "IloveCoding";
console.log(str.slice(5));
console.log(str.slice(1,3));
// hum slice jab lagate hai to limit laga kar kiya karoo
// like (x,y) otherwise wo pura string print kar deta hai given insixing
// se last tak agar wha slice(1) hi karoge to pura ilovecoding ho jayega
console.log(str.slice(2, str.length)); // ab particular indexing se last tak ka print hoga
// same as 2nd line of code


// negative
console.log(str.slice(-1)); //total length-1 ==> 9th number indexing i.e. g
