// .filetr



const nums=[1,2,3,5,6,0,5,8];


// let newNums=nums.filter((nums)=>nums>2)    

// let newNums2=nums.filter((nums)=>nums>2&&nums<5)

// let newNums3=nums.filter((nums)=>{
//     return nums>4

// })


// console.log(newNums)
// console.log(newNums2)
// console.log(newNums3)


// --------------map---------------------



// let newnum= nums.map((num)=>{
//     // console.log(num*2)
//     return num+10;
// })


// let newnum=nums.map((num)=>num-2);

// console.log(newnum);



let newnum=nums.map(
    (num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>40)

    console.log(newnum);
    
