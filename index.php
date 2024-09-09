<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="model/styles/menuMain.css">
    <link rel="stylesheet" href="model/styles/index.css">
</head>
<body>

    <header class="hidden">
        <div id="mainHeader">
            <img id="logo" src="./model/src/scriptGameLogo.png" alt="">
            
            <button id="buttonHome" class="buttonsHeader">Home</button>
            <button id="" class="buttonsHeader">Cadastro</button>
            <button id="" class="buttonsHeader">Login</button>
            
        </div>
    </header>
    
    <div id="modal" class="hidden">
        <div id="modalContent">
            <span id="modalSpan"></span>
        </div>
    </div>
    <main id="main">
        
        <div id="menuDiv">
        <img id="imgNota" src="./model/src/warn.png" alt="" title="ATENÇÃO: NOTA SOBRE COMPATIBILIDADE! (CLIQUE AQUI)">
            
            <div id="menuDiv_buttons">
                
                <div class="hidden" id="telaDeslogado">
                    <p>Bem vindo ao ScriptGame! crie uma conta:</p>
                    <br>
                    <button id="buttonCadastro" class="buttonsMenu">Cadastro</button>
                    <br>
                    <br>
                    <br>
                    <p>Já possui uma conta? </p>
                    <br>
                    <button id="buttonLogin" class="buttonsMenu">Login</button>
                    <p class="hidden" >Ou se preferir, jogue como visitante (sem salvamento de dados)</p>
                    <br>
                    <a id="buttonVisitante" class="hidden" >VISITANTE</a>
                </div>

                <div class="welcome-box" id="telaLogado">
                    <p>Bem Vindo</p>
                    <p id="usuarioLogado">Usuário logado: </p>
                    <br>
                    <button id="buttonContinuarSave" class="buttonsMenu">CONTINUAR</button>
                    <br>
                    <button id="buttonJogar" class="buttonsMenu">NOVO JOGO</button>
                    <br>
                    <button id="buttonDeslogar" class="buttonsMenu">DESLOGAR</button>
                    <br>
                    <br>
                    <br>
                    <br>
                    
                </div>

                <div id="divBarra"></div>
                <img id="logoGrande" src="./model/src/logoGrande.png" alt="">

            </div>
            <div id="notaDiv" class="hidden">
            </div>
        </div>
        


    </main>

   
    <script type="module" src="./control/startController.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

</body>



</html>