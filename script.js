let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizepasswordd = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*"
let novaSenha = "";

sizepasswordd.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizepasswordd.innerHTML = this.value;
}

function generatePass(){
    

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    };

    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){

    navigator.clipboard.writeText(novaSenha).then(() => alert("Senha copiada com sucesso!"));
    
}
