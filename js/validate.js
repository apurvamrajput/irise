const validate = () =>{

    document.querySelectorAll('.error').forEach((element)=> element.textContent = '')

    // declared the variable for input field and use value attribute

    const fullname = document.querySelector('#fullname').value.trim()
    const email = document.querySelector('#email').value.trim()
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()
    const contact = document.querySelector('#contact').value.trim()

    //Above entered data have to be validate first for that w use regEx

    const fullnamePattern = /^[A-Za-z\s]+$/
    //Only Letters are allowed.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Enter Proper email format
    const usernamePattern = /^[A-Z][A-Za-z\d#$%]{6,10}$/
    //First Letter is Uppercase and (#,$,%) use any special character and 6 - 10 character long
    const passwordPattern = /^(?=.*[A-Z])(?=.*[@#$%&*])(?=.*[\d])[A-Za-z\d@#$%&*]{6,10}$/
    //At least one uppercase, at least one special character(@,#,$,%,&,*), at least one number and 6 - 10 character long
    //At least one uppercase - (?=.*[A-Z])
    //at least one number - (?=.*[\d])
    const contactPattern= /^[6-9]{1}[0-9]{9}$/


    let isValid = true

    //check patterns 

    if(!fullname || !fullnamePattern.test(fullname)){
        document.querySelector('#fullnameError').textContent = ' Fullname is Required - Only Letters are alloweds'
        isValid = false
    }

    if(!email || !emailPattern.test(email)){
        document.querySelector('#emailError').textContent = 'Email is Required - Enter Valid Email Address'
        isValid = false
    }

    if(!username || !usernamePattern.test(username)){
        document.querySelector('#usernameError').textContent = 'First Letter is Uppercase and (#,$,%) use any special character and 6 - 10 character long'
        isValid = false
    }

    if(!password || !passwordPattern.test(password)){
        document.querySelector('#passwordError').textContent = 'At least one uppercase, at least one special character(@,#,$,%,&,*), at least one number and 6 - 10 character long'
        isValid = false
    }

    if(!contact || !contactPattern.test(contact)){
        document.querySelector('#contactError').textContent = 'Enter 10 digit mobile number - Only Numbers Allowed '
        isValid = false
    }


    if(isValid){
        console.log(fullname)
        console.log(email)
        console.log(username)
        console.log(password)
        console.log(contact)

        document.querySelector('#userForm').reset()
    }
       
   
}