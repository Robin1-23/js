// for of



// const arr=[1,2,3,4,5];


// for(let nums of arr){
//     console.log(nums);
// }



// const names=["Robin","nitin","prince"]


// for(let name of names){
//     console.log(name);
// }


// const myName="Robin-Jain"

// for(let chars of myName){
//     if(chars=="-"){
//         continue;
//     }
//     console.log(`each char of my name is ${chars}`);
// }




// Maps   =>storres unique key,value pair


// const map=new Map();

// map.set("IN","india")
// map.set("pak","pakistan")
// map.set("aus","australia")
// map.set("eng","england")
// map.set("SA","south africa")
// map.set("IN","india")


// console.log(map)



// for(let [key,value] of map){
//     console.log(`key is ${key} and value is ${value}`);
//     }


    //  objects are not iterable in for of loop

    // const myObj={
    //     name:"robin",
    //     age:25,
    // }


    // for(let [key,val] of myObj){
    //     console.log(key,val);
    // }






    // -------------for in loop-------------------



    const myobj={
        name:"robin",
        age:25,
        address:{
            city:"delhi",
            state:"delhi",
            country:"india"
            }
    }


    for(let key in myobj){
        console.log(key,myobj[key]);
    }



    // const arr=["robin","prince"]

    // for(let key in arr){
    //     console.log(key,arr[key]);
    //     }
    

 // maps are not iterable using for in loop


//  ---------------------for each---------------------------------

const arr=["robin","prince","sachin","nitin"];


// arr.forEach((val)=>{
//     console.log(val);
// })


// arr.forEach(function(val){
//     console.log(val);
// })


function printme(item){
    console.log(item);
}


arr.forEach(printme);



arr.forEach((val,index,arr)=>{
    console.log(val,index,arr);
})



const objArr=[
    {name:"robin",age:25},
    {name:"prince",age:26},
    {name:"sachin",age:27},
    {name:"nitin",age:28}

]



objArr.forEach((item)=>{
    console.log(item.name);
    console.log(item.age);
})