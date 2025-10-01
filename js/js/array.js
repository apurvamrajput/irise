// let ar = [10,20,45,38,4,65]
// //reverse -[65,4,38,45,20,10]
// console.log("before:",ar)
// ar.reverse()
// console.log("after:",ar)

// //join -- array element convert into string
// let ar1 = ["hi","how","are","you","?"] //array
// let s = ar1.join("")
// console.log(s)


// //falt(nested array)
// let ar2 = [10,20,[30,[40,50],60]]
// //[10,20,30,40,50,60]
// console.log("before:",ar2)
// let r = ar2.flat(Infinity)
// console.log("after:",r)

// //slice(start-index,end-index)
// let ar3 = [10,20,30,40,50,60]
// //30,40

// let a1 = ar3.slice(2,4)
// console.log(a1)//new array
// console.log(ar3)//original array

// //10,20,30
// let s2 = ar3.slice(0,3)
// console.log(s2)

// //splice(startindex position,delete count,new-ele,.....)
// //remove
// let ar4 = [10,20,30,40,50,60]
// //20,30
// // ar4.splice(1,2)
// console.log(ar4)

// //10,20,21,22,23,30,40,50,60
// //add element
// //delete count =1 it remove 30 
// //delete count  = 0 means no element deleted
// ar4.splice(2,1,21,22,23)
// console.log(ar4)

// //sort
// //string
// let ar6 = ["x","r","a","p","m","d"]
// console.log(ar6)
// //number
// let ar5 = [11,45,23,87,4,34]
// //4,11,23,34,45,87
// ar5.sort((a,b)=>{
//     return b-a
// })
// console.log(ar5)

// //map
// let ar7 = [1,2,3,4,5,6]
// //1,4,9,14,25,36
// //+5 [6,7,8,9,10,11]
// console.log(ar7)
// let x = ar7.map((i)=>{
//     return i**2
// })
// console.log(x)

// //filter()
// //even number
// let x1 = ar7.filter((i)=>{
//     return i%2==0

// })

// console.log(x1)


//foreach
// let arr = [1,3,4,2,6,8]
// arr.forEach((ele,i,ar)=>{
//     console.log("element:",ele,"index:",i,"array:",ar)
// })

// //square
// arr.forEach((e,i,a)=>{
//     a[i]=e**2

// })
// console.log(arr);

// let x = ar7.map((i)=>{
//     return i**2
// })

//reduce()
// let a1 = [1,2,3,4,5]
// let s = a1.reduce((acc,ele)=>{
//     return acc+ele
// },0)
// console.log(s)

//object literal

let emp = {"ename":"xyz","age":25,"sal":30000}
console.log(emp)
//access
console.log("name:",emp["ename"])
console.log("age:",emp["age"])
console.log("salary:",emp["sal"])

//update salary ->40000
emp.sal = 40000
console.log(emp)





//using new keyword 

let per = new Object()
per.name = "abc"
per.city = "pune"
per.age = 34
per.gender = "M"

console.log(per)


//constructor
class Person{
    constructor(nm,age,city,gender){
        this.name=nm;
        this.age=age;
        this.city = city;
        this.gender = gender

    }
    m1(){
        console.log("m1 method called")
    }
}

//create object
let per1 = new Person("abc",23,"pune","F")
let per2 = new Person("mno",26,"mumbai","M")
//objects
console.log(per1)
console.log(per2)

per1.age=45
console.log(per1)

//method calling
per1.m1()






































