// searches a value in the string & returns a n ew string a new string
// with the value replaced
let str = "IloveCoding";
console.log(str.replace("love","do"));
// ek chiz aur hum ye str.replace wala console ke andar karne ke jaga
// ek naya variabke bana kar skte hai aur usse console me prtin kara skte hai
// example is below
// aise hi piche ke bhi codes me kar skte hai

let mssg = "iLoveCoding";
let newMssg = mssg.replace("Coding","web development");
console.log(newMssg);

//repeat method
let strr ="Mango\n";//mango ke saath \n laga doge to her baar new line me hi repeat hoga

console.log(strr.repeat(5));