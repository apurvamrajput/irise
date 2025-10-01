console.log("operator");

console.log("arithmatic")

let x = 10;
let y = 20;
console.log(x+y);
//addition of 10 and 20 is 30
console.log("addition of",x,"add",y,"is",x+y);
console.log(`addition of ${x} and ${y} is ${x+y}`);

console.log(`substraction of ${x} and ${y} is ${x-y}`);

let a = 11; //11 is assign to the var a
let b = 2;
console.log(`mod of ${a} and ${b} is ${a%b}`);

console.log(`pow of ${a} and ${b} is ${a**b}`);


//assignment
let p = 10//10
// p = p + 5//15
// console.log(p);//15

p += 5//15+5=20
console.log(p);

//relational
let m = 10//num
let n = '10'//string
console.log(m+n);
//==  and  ===
console.log(m==n);//true
console.log(m===n);//false

//function

//addition of 2 number using function
//non -para
function add(){
    let c = 100;
    let d = 200;
    console.log(c+d);
    
}
add()



//para
function add1(n1,n2){
    console.log(n1+n2);

}
add1(11,22)


//arrow function with no parameter(=>)
    let f1 = ()=>{
        console.log("hi")
    }

    f1()


//arrow function with parameter(=>)

    let f2 = (x1,y1)=>{
        console.log(x1+y1);
        
    }

    f2(10,20)


//arrow function with single parameter(=>)

    let f3 = x1=>{
        console.log(x1);
        
    }

    f3(101)

//annonymous
console.log(1);
console.log(2);
setTimeout(()=>{
console.log(3);
},2000)

console.log(4);
console.log(5);

//nameless function with the help of function keyword
let fun1 = function (){
    console.log("fun1 function");
    
}
fun1()

//nameless function with the help of arroe function
let fun2 = ()=>{
    console.log("arrow fun");
    
}
fun2()

//return keyword

let fun3 = ()=>{
    console.log("function.....");
    return 10;
    return 20;
    
}
console.log(fun3());










