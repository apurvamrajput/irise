function light(color){
            // let x = document.getElementById("l")
            // x.style.color = "powderblue"
            // console.log(x)
            document.body.style.backgroundColor = color
        }
     


function addstyle(){
    let x = document.getElementsByTagName("h1")[0]
    x.style.color="orange"
    x.style.textAlign = "center"
    x.innerHTML = "modify js"
    x.style.fontSize = "60px"
    console.log("add")
}

function rstyle(){
    let x = document.getElementsByTagName("h1")[0]
    x.style.color=""
    x.style.textAlign="left"
    x.innerHTML="mouse event"
    x.style.fontSize=""
    console.log("remove")


}

function add(){
    let y = document.getElementsByTagName("p")[0]
    y.style.backgroundColor="pink"
}

function remove(){
    let y1 = document.getElementsByTagName("p")[0]
    y1.style.backgroundColor=""
}

function f(){
    console.log("mouse moved!!!")
}

function press(){
    let k = document.getElementById("nm").value
    console.log(k);
    

}

