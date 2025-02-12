let msg = '    hello      ';
msg = msg.trim();  // Now 'msg' will contain 'hello'
console.log(msg);  // Output: 'hello'
// middle wale spces nhi hatega start aur end ka hi hatega

// hum uss code ko aise bhi likh skte hai thoda sort bana kar
/*let msgg = '    hello      ';
console.log(msgg.trim()); */

// middle wale spc

// 
 let password = prompt("set you password");
 let newPass = password.trim();
 console.log(newPass);
 // ab isse kya hoga agar user password me spaces dena chaahegaa
 // to wo hatt jayega
 // isko html se link karke karna prompt laga hai na
 // ek aur chiz trim humare purane string se spaces nhi hatata
 // balki wo ek nayi string create karta hai spaces hatakar
 // agar phir se strig print karayenge to space ke saath ayega
 // exampl

 let str = "   ansh   ";
 console.log(str.trim());
 // ab isne nayi string create kar si space hatakar
 // lekin ab str hi print karate hai
 console.log(str)
 // dekha ab ye space ke saath aya yaani wo spaces purani string se 
 // nhi hatata balki ek nayi str create kar deta hai]
 // space hatakar
 //thats why strings are immutable in js
 // abahi ye code run na karega jabtak password
 // wla comment out na kar doge
