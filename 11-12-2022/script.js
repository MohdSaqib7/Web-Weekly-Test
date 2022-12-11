const inp_field = {
    name: /^[a-zA-Z]{5,20}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[#\w@_-]{7,20}$/,
    confirm_password: /^[#\w@_-]{7,20}$/
}
  
const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}
  
let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
'keyup', e => {
    validate(e.target, inp_field[e.target.attributes.name.value])
}
));


// ------------------------------------------------------------------------------------------------

function fun(){  
    const table = document.getElementById('add');
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const msg = document.getElementById('msg');
    msg.innerHTML = "";
    if(pass1!==pass2){
        msg.innerHTML = "password is not match";
        return;
    }else{
        const td1 = document.createElement('td');
        td1.innerHTML = document.getElementById('userName').value;

        const td2 = document.createElement('td');
        td2.innerHTML = document.getElementById('userEmail').value;

        const td3 = document.createElement('td');
        td3.innerHTML = document.getElementById('pass1').value;

        const tr = document.createElement('tr');
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr); 
    }
}