let elementos = [];

document.getElementById('buttonHome').addEventListener('click', function() {


    location.replace('../index.php');
    
    
});



document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    
    if (!validateForm()) {
        event.preventDefault();
    }else{
        
    }
    
});



function validateForm() {
    
    // Get form elements
    const nome = document.querySelector('input[name="nome"]');
    const username = document.querySelector('input[name="username"]');
    const email = document.querySelector('input[name="email"]');
    const senha = document.querySelector('input[name="senha"]');
    elementos = [nome, username, email, senha];
   
    let isValid = true;
    
    if (nome.value.length > 50 ) {
        document.getElementById("nomeInput").placeholder = "Nome deve ter no máximo 25 caracteres."; 
        document.getElementById("nomeInput").value = "";
        isValid = false;
    }

   
    if (username.value.length > 15) {
        document.getElementById("usernameInput").placeholder = "Usuário deve ter no máximo 15 caracteres.";
        document.getElementById("usernameInput").value = "";
        isValid = false;
    }

   
    if (email.value.length > 50) {
       document.getElementById("emailInput").placeholder = "E-mail deve ter no máximo 50 caracteres.";
       document.getElementById("emailInput").value = "";
        isValid = false;
    }

   
    if (senha.value.length > 10) {
        document.getElementById("senhaInput").placeholder = "Senha deve ter no máximo 10 caracteres.";
        document.getElementById("senhaInput").value = "";
        isValid = false;
    }

    if (senha.value.length < 6 && senha.value.length > 0) {
        document.getElementById("senhaInput").placeholder = "Senha muito curta";
        document.getElementById("senhaInput").value = "";

        isValid = false;
    }


    for (const element of elementos) {
        if(element.value.length == 0){
            
            document.getElementById("erroGeral").textContent = "Os campos com * não devem estar em branco!";
            isValid = false;
           
        }

    }

    return isValid;
    
}

