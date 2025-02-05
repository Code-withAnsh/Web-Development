// object -- it is collection of values 
// format -- key : value //
const student = {
    fullName : "Rahul kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};
student["age"] = student["age"] + 1; // maan lo tumhe object me aage chalkar kuch 
//add karna hai to aise kar skte hai yaha age 1 year se badh jayegi ab
student["age"] = "rahul sharma"; // iisse naam hi change ho jayega 
console.log(student, typeof student);
console.log(student["fullName"]);//isse agar hume sirf name print karna hai ya koi ek hi speceific 
//data ko print kara skte hai
