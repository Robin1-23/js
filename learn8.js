// Arrays




// const arr=["Robin","prince","sachin","nitin"];



// // console.log(arr);
// // console.log(arr[0]);



// //Array methods


// arr.push(25);
// console.log(arr);

//  arr.pop();
//  console.log(arr);

//  arr.unshift(9)
// console.log(arr);

// arr.shift(10)
// console.log(arr);


// console.log(arr.includes("Robin"));

// console.log(arr.indexOf("Robin"));



// const newarr=arr.join();    // join () method is used to convert array elements into a string

// console.log(newarr);
// console.log(arr);



// // slice or splice

// console.log("A",arr);

// const myn1=arr.slice(1,3)
// console.log("B",arr);
// console.log(myn1);


// const myn2=arr.splice(1,3);
// console.log("C",arr);
// console.log(myn2);






const h1=["robin","prionce","sachin"]
const h2=["nitin","annu","mohit"]


// h1.push(h2)

// console.log(h1);
//  console.log(h1[3]);

//  const h3=h1.concat(h2);
//  console.log(h3);


const h4=[...h1,...h2];
console.log(h4);


const h5=[1,2,3,[4,5,6,[7,8,9]]];

const h6=h5.flat(Infinity)
console.log(h6);

console.log(Array.isArray("Robin"));
console.log(Array.from("Robin"));

console.log(Array.from({name:"Robin"})); // interesting



let s1=100;
let s2=200;
let s3=300;


console.log(Array.of(s1,s2,s3));






