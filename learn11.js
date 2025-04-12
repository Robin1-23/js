
// object literals

const sym=Symbol("key1");

const jsUser={
    name:"John",
    age:30,
    occupation:"Software Engineer",
    address:{
        street:"123 Main St",
        city:"Anytown",
        state:"CA",
        zip:"12345"
        },
    "email":"robinjain@gmail.com",
    [sym]:"key2"    
}


// console.log(jsUser.address.city);
// console.log(jsUser["name"]);
// console.log(jsUser["email"]);      // we can access email with . notation
// console.log( jsUser[sym]);

jsUser.email="robin@gmail.com"

// console.log(jsUser.email);

// Object.freeze(jsUser)

// jsUser.email="robin@gmail.commm"
// console.log(jsUser.email);


// console.log(jsUser);


// jsUser.greet=function(){
//     console.log(`hello ${this.name}`)
// }

// console.log(jsUser.greet());



const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}


const obj3={...obj1,...obj2}
console.log(obj3);


const obj4={...obj1,...obj2,5:"e",6:"f"}
console.log(obj4);

const obj5=Object.assign({},obj1,obj2)
console.log(obj5);

