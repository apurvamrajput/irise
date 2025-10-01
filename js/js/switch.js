// let n1 = 100;
// let n2 = 20;
// let op = "*"
// switch (op){
//     case "+":
//         console.log(`${n1}+${n2}=${n1+n2}`);
//         break;
//     case "-":
//        console.log(`${n1}-${n2}=${n1-n2}`);
//         break;  
//     case "*":
//          console.log(`${n1}*${n2}=${n1*n2}`);
        
// }

// let s = 95;
// switch(true){
//     case s>=90 && s<=100:
//         console.log("A Grade");
//         break;
        
// }


// if (op==="+"){

// }
// else if(op==="-"){

// }

let ar = [10,20,[4.5,[5,[34],3],4]]


//true
console.log(ar)



//4.5
// console.log(ar[-1]);
//length
console.log(ar.length);

//push
console.log("before:",ar);

ar.push("hello",20,3)
console.log("after:",ar);

//pop
console.log("before:",ar);
console.log(ar.pop())
console.log("after:",ar);

//unshift
console.log("before:",ar);
console.log(ar.unshift(1000))
console.log("after:",ar);


//shift
console.log("before:",ar);
ar.shift()
console.log("after:",ar);

for(let i=0;i<ar.length;i++){
    console.log(ar[i]);
    
}


