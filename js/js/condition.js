//if block
let x =16;
if (x>=10){
    console.log("x is greater than 10");
    
}

//greatest of 2 num
// let a =10;
// let b = 20;
// if (a>b){
//     console.log("a is greater");
    
// }
// else{
//     console.log("b is greater");
// }

// let x1 =100;
// let y =200;
// (x1>y) ? console.log("a is greater") : console.log("b is greater");


let a =10;
let b = 10;
if (a>b){
    console.log("a is greater");
    
}
else if(b>a){
    console.log("b is greater");
    

}
else{
    console.log("both are equal");
}

//ternary operator
(a>b) ? console.log("a") : (b>a) ? console.log("b") : console.log("both are equal");


//wap to print 1 to 10 number:
//for loop
console.log("for")
for(let i=1;i<=10;i++){
    console.log(i);
    
}
console.log("while")
//while loop

let j = 1;
while (j<=10){
    console.log(j);
    j++;
    
}
console.log("do=while")
//do while loop
let k =1;
do{
    console.log(k);
    k++
    
}
while(k>=10)

// wap to print even number range between 20 to 1.
for(let b=20;b>=1;b--){
    if(b%2==0){
        console.log(b);
        
    }
}

//for in -->object
let emp = {
    name:"abc",
    age:25,
    salary:45000
}

console.log(emp["age"]);

for(let k in emp){
    console.log(k,emp[k]);
    
}

let ar = [10,20,30,"hi",true]
for(let ele of ar){
    console.log(ele);
    
}