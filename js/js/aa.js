let x = 10
let y = x
y = 50

console.log(x)
console.log(y)

let obj1 = {
    name : 'A',
    age : 30
}

let obj2 = obj1

obj2.age = 40
console.log(obj1)


let maxnumber = Math.floor(1000+Math.random()*9000)
console.log(maxnumber);



const t = new Date().toLocaleTimeString()
console.log(t);

const id = Symbol("id");

const user = {
  name: "Alice",
  [id]: 123 // Symbol-keyed property
};

console.log(typeof id);          // { name: 'Alice', [Symbol(id)]: 123 }
console.log(user[id]);      // 123
console.log(Object.keys(user)); //
  
let x1 = null;
console.log(typeof x1);


if(true){
    let x2 =10
    console.log(x2);
    
}
// console.log(x2)



const emp = {

id : 'EMP101',
name : 'Virat Kohli', 
age : 36,
contact : 7744771100

}

for(let m in emp){
  console.log(m,emp[m]);
  
}
