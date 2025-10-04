function valid(){
    // fetch or access record
    let nm = document.getElementById("nm").value
    let mail = document.getElementById("mail").value
    let pwd = document.getElementById("pwd").value
    let num = document.getElementById("num").value

  

    // regex
    //name --> only letter with space are allow 
    let nmvaild = /^[A-za-z\s]+$/

    // mail -->abc@gmail.com 
    let mailvaild = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //pwd -->more then 6charcter
            // at least one uppercase(?=.*[A-z])
            // at least one lowercase
            // at least one special Symbol
            // at least one digit
    // {} -->for limit

    let pwdvaild = /^(?=.*[A-z])(?=.*[a-z])(?=.*[!@#$%^&*()+?])(?=.*[\d])[A-za-z\d!@#$%^&*()+?]{6,15}$/

    //nm --> only 10 digits allow
    // 8765546754
    let numvaild = /^[6-9]{1}[\d]{9}$/




    // condition
    if(!nm || !nmvaild.test(nm)){
        document.getElementById("nmError").textContent = "only letters are allowed!!!"
    }
    // mail!=mailvaild -->error throw
    // !mail --> user not enter any input
    if(!mail || !mailvaild.test(mail)){
        document.getElementById("mailError").textContent = "plz enter vaild mail id!!!"
    }

    //pwd
    if(!pwd || !pwdvaild.test(pwd)){
        document.getElementById("pwdError").textContent = "plz enter strong password with at least six char"
    }

    if(!num || !numvaild.test(num)){
        document.getElementById("numError").textContent = "enter only 10 digits number"
    }

    else{
          console.log({nm,mail,pwd,num});
          document.getElementById("vform").reset()
          alert("form submitted successfullt!! ")
    }
    

}