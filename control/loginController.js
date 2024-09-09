
let nome = "";
let username = "";
let email = "";
let senha = "";

document.getElementById('buttonHome').addEventListener('click', function() {


    location.replace('../index.php');
    
    
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    username = formData.get('username');
    senha = formData.get('senha');

    fetchDados();
    
});


async function fetchDados(){
    var dataUrl = '/Scriptgame/model/php/read.php';

    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {

            if (item.username == username && item.senha == senha) {
                
                const userJson = JSON.stringify(item);
                localStorage.setItem('user', userJson);

                const userObj = JSON.parse(userJson);
                
                location.replace('../index.php');

            }else{
                document.getElementById("erroLogin").textContent = "Usuário ou senha incorretos, tente novamente."

                
            }
        });
       
        

    } catch (error) {
        console.error('Error:', error);
    }
}

window.onload = function() {
    try {
        fetch('../model/php/getMensagem.php')
        .then(response => response.json())
        .then(data => {
            if(data.mensagem != "Default"){
                document.getElementById("logarTexto").textContent = data.mensagem;
                document.getElementById("logarTexto").style.color = "#008000";
            }
            
        })
        .catch(error => console.error('Error:', error));
    } catch (error) {
        
    }
   
};