let acessEmailInput = document.getElementById('acessEmail');
let acessPassInput = document.getElementById('acessPass');

let usuarioLogin

function Entrar(){

    usuarioLogin = JSON.parse(localStorage.getItem('cadastroFormulario'));


    for(i = 0; i < usuarioLogin.length; i++){

        if(acessEmailInput.value == usuarioLogin[i].email && acessPassInput.value == usuarioLogin[i].senha){

            alert("Login Efetuado")
        }

        if(acessEmailInput.value != usuarioLogin[i].email && acessPassInput.value != usuarioLogin[i].senha){

            alert("Login não Efetuado")
        }
        

        
    }

}