let form  = document.getElementById('empForm'); 
let id = document.getElementById('idEmployee');
let name = document.getElementById('fullName');
let ext = document.getElementById('digExt');
let email = document.getElementById('email');
let department = document.getElementById('department');


window.addEventListener('load', init, false)
   function init(){
       "use strict";
   form.addEventListener("submit", () => {
        console.log('Employee id: '+  idEmployee.value);
        console.log('Full name: ' + fullName.value);
        console.log('Ext: '+ digExt.value);
        console.log('Email: ' + email.value);
        console.log('Department: ' +department.value);
        event.preventDefault();  
});
}
