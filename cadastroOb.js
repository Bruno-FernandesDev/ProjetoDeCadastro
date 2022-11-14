let nameInput = document.getElementById('username');
let fistnameInput = document.getElementById('fistname');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('tel');
let passwordInput = document.getElementById('password');

let forms = []

function Enviar() {

    forms = JSON.parse(localStorage.getItem('cadastroFormulario'));

    if (forms == null) {

        forms = []
        CadastrarPessoas()

    } else {
        
        CadastrarPessoas()

    }

}

function CadastrarPessoas() {

    let objPessoas = {

        nome: '',
        sobrenome: '',
        email: '',
        tel: '',
        senha: ''
    }

    objPessoas.nome = nameInput.value
    objPessoas.sobrenome = fistnameInput.value
    objPessoas.email = emailInput.value
    objPessoas.tel = phoneInput.value
    objPessoas.senha = passwordInput.value

    forms.push(objPessoas)

    localStorage.setItem('cadastroFormulario', JSON.stringify(forms))

    alert("Cadastro Efetuado")
}
