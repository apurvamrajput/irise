const passwordInput = document.getElementById('password')

const passwordCheckbox = document.getElementById('showpassword')

passwordCheckbox.addEventListener('click',()=>{
    passwordInput.type = passwordCheckbox.checked ? 'text' : 'password'
                            //condition           ?  true  :  false
                            //checked - true - input type="text"
                            //unchecked - false - input type="password"
})

//on prefix - omit
//onclick ----- click
//onblur  ----- blur
//onsubmit ---- submit
//onchange  --- change