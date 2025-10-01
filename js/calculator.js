
//const data = document.getElementById('result')

const show = (num) =>{
    document.querySelector('#result').textContent += num
}

//dont use clear keyword
const clearScreen = () =>{
    document.querySelector('#result').textContent= ''
}

//Solve the expression
const solveExpression = () =>{
    const myExpression = document.querySelector('#result').textContent

    document.querySelector('#result').textContent = eval(myExpression)
}

//Create function for clearLastEntry

const clearLastEntry = () =>{
    const myExpression = document.querySelector('#result').textContent

    document.querySelector('#result').textContent = myExpression.slice(0,-1)

}

//slice

/* const greet = 'Welcome'
//                0123456
console.log(greet)
console.log(greet.slice(0,3))
console.log(greet.slice(0,5))
console.log(greet.slice(0,6))
console.log(greet.slice(0,-1))
console.log(greet.slice(0,-2))
console.log(greet.slice(0,-3))
console.log(greet.slice(0,-4))
console.log(greet.slice(0,-5)) */