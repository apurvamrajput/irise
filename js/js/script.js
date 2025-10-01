//var 
//redeclare and reassign
// var x = 10
// var x = 20
// console.log(x)

//scope (functional scope and global scope)
// if(true){
//     var y = 101
//     console.log(y);
    
// }
// console.log(y);

// functional scope
// function fun(){
//     const z = 1
//     console.log("inside:",z);
    
// }
//  console.log("outside:",z);


//hoisting

// console.log(a)
// let a =10;





//let
// reassign
// let x1 = 11
// x1 = 22
//  console.log(x1);

// let x2 = 200
// {
//     let x2 = 300
// }

// //scope(block scope)
// if(true){
//     let y1 = 101
//     console.log(y1);
    
// }
// console.log(y1);
 






//const
//not possible redeclare and reassign
// let x3 = 101

//scope(block scope)
// if(true){
//     const y1 = 101
//     console.log(y1);
    
// }
// console.log(y1);


//stack
let m = 100
let n = m //100
m = 200
console.log(m);//200
console.log(n);//100


let obj1 = {
    name:"abc",
    age:23
}
console.log(obj1);

let obj2 = obj1;
obj2.age=30//obj2 modify
console.log(obj1);



















