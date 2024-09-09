import { startDocLoader } from "../model/game/startDocLoader.js";
import { User } from "../model/game/user.js";


const elements = new startDocLoader();
const userJson = localStorage.getItem('user');
let userObj = '';   
let user = new User("","","");

let checouMensagem = false;

elements.gameLogo.addEventListener('click', function() {
    window.location.href = 'index.php';
    
});
elements.buttonHome.addEventListener('click', function() {
    window.location.href = 'index.php';
    
});

elements.buttonLogin.addEventListener('click', function(){
    window.location.href = './view/login.php';
      
});
elements.buttonCadastro.addEventListener('click', function(){
    window.location.href = './view/cadastro.php';
      
})
elements.mostrarNotas.addEventListener('click', function() {

    elements.modalContent.textContent = "Para melhor visualização, recomenda-se ajustar o zoom do navegador até a exibição completa do ambiente";

    elements.modal.classList.remove('hidden');
    checouMensagem = true;
    
    
});
// window.onbeforeunload = function() { return "Your work will be lost."; };
window.onclick = function(event) {
    if (event.target == elements.modal) {
        elements.modal.classList.add('hidden');
        checouMensagem = true;
    }
}
elements.modalArea.addEventListener('click', function() {
    elements.modal.classList.toggle('hidden');
    
});

elements.buttonJogar.addEventListener('click', function() {

    if (confirm("Tem certeza que deseja iniciar um novo jogo? ESTA AÇÃO É IRREVERSÍVEL!")) {

        if (confirm("Para melhor visualização, recomenda-se ajustar o zoom do navegador até a exibição completa do ambiente")) {
           
            userObj = JSON.parse(userJson);
    
            var dataUpdateUrl = '/Scriptgame/model/php/update.php';
    
            const data = {
        
                usrId: userObj.usrId,
                nome: userObj.nome, 
                username: userObj.username, 
                email: userObj.email, 
                senha: userObj.senha, 
                faseAtual: 1,
                hpAtual: 4,
                vidaAtual:  3,
                checkpoint: 0
            };
        
            fetch(dataUpdateUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error);
            });
        
            location.replace('/Scriptgame/view/game.php');
            
        } else {
            
            
        }
        
        
    } else {
       
       
    }
    
});

elements.buttonContinue.addEventListener('click', function() {
   
    location.replace('/Scriptgame/view/game.php');
        
     
});

window.addEventListener('load', function(){

    let string = "";
    const elementos = [1,2,3,4,5,6];

    for (const elemento of elementos) {

        let numero_para_string = elemento.toString() + " ";
        string = string + numero_para_string; 
    }

   

   

    if (userJson) {

        userObj = JSON.parse(userJson);
       
    
        
        user = new User(userObj.username, userObj.nome, userObj.email);
        
        
        elements.usuarioLogado.textContent+=user.nome;
    }

    
    checkarLogin();
});

elements.buttonVisitante.addEventListener('click', function() {
   
    if (userJson) {
        
        alert("usuario logado: "+user.nome );
    }
    
});

elements.buttonDeslogar.addEventListener('click', function() {
    console.log("ward");
    if (userJson) {
        
        localStorage.removeItem('user');
        location.reload();


    }
    
});

function checkarLogin(){

    if(userJson){
        userObj = JSON.parse(userJson);
        
        if(userObj.faseAtual == "1"){
            
            elements.buttonContinue.classList.add('disabled-button');
        }

        if(userObj.faseAtual != "1"){
            
            elements.buttonContinue.classList.remove('disabled-button');
        }

        elements.telaDeslogado.classList.add('hidden');
        elements.telaLogado.classList.remove('hidden');
        elements.telaLogado.classList.add('welcome-box');

        elements.buttonCadastro.classList.add('hidden');
        elements.buttonLogin.classList.add('hidden');
    
    }else{
        elements.telaDeslogado.classList.remove('hidden');
        elements.telaDeslogado.classList.add('welcome-box');
        elements.telaLogado.classList.add('hidden');

        elements.buttonCadastro.classList.remove('hidden');
        elements.buttonLogin.classList.remove('hidden');

        elements.buttonVisitante.classList.add('disabled-button');
    }
}

