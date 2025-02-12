//var : Variable can be re-declared & updated. A global scope variable.
//let : Variable cannot be re-declared but can be updated. A block scope variable.
//const : Variable cannot be re-declared or updated. A block scope variable//
// we use let instead of var , var is old model. becovc use var can re declared can cause difficulty to understand
// example//
var age = 24;
var age = 59;
console.log(age);
// yaha 2 baar use ho ja rha hai let me ek hi baar define hoga age//
// isse dikkat na hoga var me hota hai
// now constant ka concept
const PI = 34;
console.log(PI);
// var ko khaali chor skte hai like var A; output me undefined aa jayega
// const ko khaali nhi chor skte whaa error ho jayga 
// Curly bracket called block ek block ke andar agatr hum kuch likhte hai to wha define kiya gya
// variable usse ke liye hoga for eXAMPLE
{
    let a = 5;
    console.log(a);
    // yaha a jo hai wo ab dubara define iss block ke andar nhi ho skta iske liye dubara block banana padega a ko define karne ke liye

}
{
    let a = 7;
    console.log(a);
    // ye a uss a se realted nhi hai ye a is block ka hai wo a uss block ka hai
    // print karne per 5 and 7 dono print hoga //
}




