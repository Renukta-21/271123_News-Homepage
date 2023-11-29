const form = document.querySelector('.form');
const successMsg = document.querySelector('.succes-message');
const submitSubscribtion = document.querySelector('.submit');
const emailField = document.getElementById('emailField');
const userEmail = document.getElementById('userEmail');
const dismiss = document.querySelector('.dismissMsg');

let userEmailValue;
const validateEmail = function(){
    
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    if(expReg.test(emailField.value)){
        successMsg.classList.remove('hidden');
        form.classList.add('hidden');
        userEmailValue = emailField.value
        userEmail.innerText = userEmailValue;
        dismiss.addEventListener('click', function(){
            form.classList.remove('hidden');
            successMsg.classList.add('hidden');
        })
    }else{
        const inputLabel = document.getElementById('lbl');
        let span = document.createElement('span');
        span.style.float = 'right';
        span.style.color = 'hsl(4, 100%, 67%)';
        span.innerHTML = 'Valid email required';
        emailField.style.backgroundColor = 'hsla(4, 100%, 67%, 0.1)';
        emailField.style.border = '1px solid hsl(4, 100%, 67%)';
        inputLabel.append(span);
    }
}

submitSubscribtion.addEventListener('click',validateEmail);

