<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../model/styles/menuMain.css">
    <link rel="stylesheet" href="../model/styles/cadastro.css">
</head>

<body>

    <header>
        <div id="mainHeader" class="hidden">
            <img id="logo" src="../model/src/scriptGameLogo.png" alt="">
            
            
        </div>
    </header>

    <main>

          
        <div id="menuDiv">
            
            <div id="notaDiv" class="hidden">
        
            </div>

            <div id="modal" class="hidden">
                <div id="modalContent">
                    <span id="modalSpan"></span>
                </div>
            </div>

            <div id="menuDiv_buttons">

                <form action="../model/php/create.php"  method="post" class="formPrincipal" id="cadastroForm">
                    <h2>Criar conta:</h2>
                    <span id="erroGeral" class="cadastroInput"></span>
                    <div class="formElementos">
                        <label for="nome">* Nome Completo: </label>
                        <input type="nome" name="nome" id="nomeInput" class="cadastroInput"><br>
                    </div>
                    <div class="formElementos">
                        <label for="userName">* Usuário: </label>
                        <input type="userName" name="username" id="usernameInput" class="cadastroInput"><br>
                    </div>
                    <div class="formElementos">
                        <label for="email">* E-mail: </label>
                        <input type="email" name="email" id="emailInput" class="cadastroInput"><br>
                    </div>
                    <div class="formElementos">
                        <label for="password">* Senha: </label>
                        <input type="password" name="senha" id="senhaInput" class="cadastroInput"><br>
                    </div>

                    <input type="submit" value="Registrar" class="buttonCadastro">

                    <button id="buttonHome" class="buttonCadastro">Voltar</button>
                </form>
                
                


                
                <div id="divBarra"></div>
                <img id="logoGrande" src="../model/src/logoGrande.png" alt="">

            </div>

          
        </div>



        
    </main>


    <script type="module" src="../control/cadastroController.js"></script>
   
</body>