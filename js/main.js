let firstName, password, email, phone, message, fd

// This function collects the data from the form
// after that it popultes an object with the data that you have collected
function collectFormData(){

    firstName = document.getElementById('fname').value
    password = document.getElementById('passwd').value
    email = document.getElementById('email').value
    phone = document.getElementById('phone').value  

    let obj = {
        name: firstName,
        password: password,
        email: email,
        phone: phone
    }
    
    printFromData(obj)
    console.log(obj);
}

// fd = { "firstName":firstName, "password":password, "email":email, "phone":phone}
function printFromData(obj){
    let fd = new FormData()
    fd.append('fname', obj.firstName) // obj.key
    fd.append('password', obj.password) // obj.key
    fd.append('email', obj.email) // obj.key
    fd.append('phone', obj.phone) // obj.key
}


let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( buttons => {
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error!"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
