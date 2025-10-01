function show(num){
    document.querySelector("#result").innerHTML +=num
}

function solve(){
    let res = document.querySelector("#result").innerHTML
    document.querySelector("#result").innerHTML = eval(res)
}

const cleanscreen = ()=>{
    document.querySelector("#result").innerHTML = ""
}

const cleanlastentry= ()=>{
    let res = document.querySelector("#result").innerHTML//1234
    document.querySelector("#result").innerHTML = res.slice(0,-1)

}

// let a = [1,2,3,4,5]
// a.slice(2,4)//3,4

let st = "wel"
        //0123456
//come
let x = st.slice(0,-1)
console.log(x)



