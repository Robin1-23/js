//  stack (Primitive)     
// heap (Non-Primitive)

// jab bhi koi variable stack main declare hoti hai toh uski copy milti hai 
// jab bhi koi value heaqp main declare hoti hai uss ka reference milta hai


// let name="Robin"      // stack mamin implement hoga

// let anothername=name;
// anothername="jain"


// console.log(name);
// console.log(anothername);



const obj1={
    email:"robin@gmail.com",
    age:20
}


const obj2=obj1;

obj2.age=30;

console.log(obj1);
console.log(obj2);


