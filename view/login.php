<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../model/styles/menuMain.css">
    <link rel="stylesheet" href="../model/styles/login.css">
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
                

                <form method="post" class= "formPrincipal" id="loginForm">
                    <h2 id="logarTexto">Logar:</h2>
                        
                        <div class="formElementos">
                            <label for="userName">Usuário: </label>
                            <input type="userName" name="username" id="username"><br>
                        </div>
                        
                        <div class="formElementos">
                            <label for="password">Senha: </label>
                            <input type="password" name="senha" id="senha"><br>
                        </div>
                        <span id="erroLogin"></span>

                        <input type="submit" value="Login" class="buttonLogin" login="buttonLogin">


                        <button id="buttonHome" class="buttonLogin">Home</button>
                
                </form>

                <div id="divBarra"></div>
                <img id="logoGrande" src="../model/src/logoGrande.png" alt="">

            </div>

          
        </div>



        
    </main>


    <script type="module" src="../control/loginController.js"></script>
   
</body>