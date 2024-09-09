<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../model/styles/menuMain.css">
    <link rel="stylesheet" href="../model/styles/game.css">
</head>

<body>
        
    <img id="playerSheet" src="../model/src/Sprites.png" alt="" class="hidden">
    <img id="espinho" src="../model/src/espinhoSheet.png" alt="" class="hidden">
    <img id="map1" src="../model/src/mapaScriptGamef01.png" alt="" class="hidden">
    <img id="map2" src="../model/src/mapaScriptGamef02.png" alt="" class="hidden">
    <img id="map3" src="../model/src/mapaScriptGamef03.png" alt="" class="hidden">
    <img id="map4" src="../model/src/mapaScriptGamef04.png" alt="" class="hidden">
    <img id="map5" src="../model/src/mapaScriptGamef05.png" alt="" class="hidden">
    <img id="map6" src="../model/src/mapaScriptGamef06.png" alt="" class="hidden">
    <img id="map7" src="../model/src/mapaScriptGamef07.png" alt="" class="hidden">
    <img id="map8" src="../model/src/mapaScriptGamef08.png" alt="" class="hidden">
    <img id="map9" src="../model/src/mapaScriptGamef09.png" alt="" class="hidden">
    <img id="map10" src="../model/src/mapaScriptGamef10.png" alt="" class="hidden">
    <img id="map11" src="../model/src/mapaScriptGamef11.png" alt="" class="hidden">
    <img id="map12" src="../model/src/mapaScriptGamef12.png" alt="" class="hidden">
    <img id="map13" src="../model/src/mapaScriptGamef13.png" alt="" class="hidden">

    <header>
        <div id="mainHeader">
            <img id="logo" src="../model/src/logoGrande.png" alt="">
            <button id="buttonForum" class="buttonsHeader"> Avaliações</button>
            <button id="buttonPerfil" class="buttonsHeader"> Perfil </button>
            <button id="buttonHome" class="buttonsHeader">Home</button>
  
        </div>
    </header>


    <div id="modal" class="hidden">
        <div id="modalContent">
            <span id="modalSpan"></span>
        </div>
    </div>

    <main id="main">

    <div id="fullGameDiv">

            <div id="loading-screen">
                <img src="../model/src/logoLoad.png" alt="Logo" id="logoLoad">
                <div id="progress-bar-container">
                    <div id="progress-bar"></div>
                </div>
            </div>

            <div id="finalFase" class="hidden">
                    
                    <img src="../model/src/fundoFimFase.png" alt="FundoFim" id="fundoFim">
                    <div id="telaMeio">
                        <span id="spanFim1" class="spamFim">FASE CONCLUÍDA!</span>
                        <img id="avatarImgFeliz" src="../model/src/playerAvatarFeliz.png" alt="">
                        <span id="spanFim2" class="spamFim">O que achou da fase?</span>
                        <button id="buttonLike" class="buttonVote">
                            <img src="../model/src/like.png" alt="">
                        </button>
                        <button id="buttonDislike" class="buttonVote">
                            <img src="../model/src/dislike.png" alt="">
                        </button>
                        <span id="spanFim3" class="spamFim">Quão dificil foi?</span>
                        <div id="radioDif">
                            <input type="radio" id="option1" name="options" value="1">
                            <label for="option1">Muito Fácil</label>
                            
                            <input type="radio" id="option2" name="options" value="2">
                            <label for="option2">Fácil</label><br>
                            
                            <input type="radio" id="option3" name="options" value="3">
                            <label for="option3">Médio</label><br>

                            <input type="radio" id="option4" name="options" value="4">
                            <label for="option2">Difícil</label><br>
                            
                            <input type="radio" id="option5" name="options" value="5">
                            <label for="option3">Muito Difícil</label><br>
                        </div>
                        <button id="buttonContinuarFimFase" class="buttonsHeader">Continuar</button>

                    </div>
                    
            </div>

            <div id="gameHeader">

            </div>
            <div id="optionsMenuMapa">
                
            </div>
            <div id = "optionsMenu">
                <div id="radioSpeed" class="hidden">
                    <p>&nbsp;&nbsp;&nbsp;Velocidade do personagem:</p>
                    <input type="radio" id="option1" name="options" value="2" class="velRadio">
                    <label for="option1">Lento</label><br>
                    
                    <input type="radio" id="option2" name="options" value="4" class="velRadio" checked>
                    <label for="option2">Normal</label><br>
                    
                    <input type="radio" id="option3" name="options" value="8" class="velRadio">
                    <label for="option3">Rápido</label><br>
                </div>
    
                
                
                
                
                <div id="statsDiv" class="hidden">
                    <span id="mapaAtualDisplay">Sala atual: </span>

                    <span id="nomeJogador">Jogador: </span>

                    <img id="avatarImg" src="../model/src/playerAvatar.png" alt="">
                    
                    <div id="vidaBar">

                        <img id="coracao1" src="../model/src/coracao.png" alt="" class="vida">
                        &nbsp;
                        <img id="coracao2" src="../model/src/coracao.png" alt="" class="vida">
                        &nbsp;
                        <img id="coracao3" src="../model/src/coracao.png" alt="" class="vida">
                    </div>

                    <div id="hpBar">
                        <img id="hp1" src="../model/src/hp.png" alt="" class="hp">
                        
                        <img id="hp2" src="../model/src/hp.png" alt="" class="hp">
                        
                        <img id="hp3" src="../model/src/hp.png" alt="" class="hp">
                        
                        <img id="hp4" src="../model/src/hp.png" alt="" class="hp">
                    </div>

                    <button id="buttonShowSpeed">Velocidade🏃‍♂️▼</button>
                    
                </div>

                <div id="funcDiv" class="hidden">
                    <span id="blocosDisponiveisDisplay">Blocos disponiveis: </span>
                    <button id="buttonCancelCompile">x</button>
                    <button id="buttonPlay" class="buttonCompile">Compilar</button>
                    <button id="buttonStep" class="buttonCompile">Step</button>
                    <button id="buttonPause" class="buttonCompile">Pause</button>
                    <button id="buttonContinue" class="buttonCompile">Executar ►</button>
                </div>

                <div id="opDiv" class="hidden">
                    <button id="buttonCod" class="hidden">Ver Código</button>
                    <button id="buttonMapa">◄ Retornar à seleção de fase</button>
                </div>
    
    
            </div>

            <div id="aval" class="hidden">
                <h1 id="avalH1">Avaliações</h1>
                <button id="voltarAval" class="buttonsHeader">Voltar</button>
                <table id="avalTable">
                    <thead>
                        <tr>
                            <th>Mundo</th>
                            <th>Fase</th>
                            <th>Likes</th>
                            <th>Dislikes</th>
                            <th>Dificuldade</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="13">Castle Escape</td>
                            <td>Fase 1</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 3</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 4</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 5</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 6</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 7</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 8</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 9</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 10</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 11</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 12</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                        <tr>
                            <td>Fase 13</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            
                        </tr>
                    </tbody>
                </table>

            </div>
           
            <div id="perfil" class="hidden">
                
                <div id="perfilPanel">
                    <span id="nomeJogadorAlt"class="perfilText">Jogador: </span>
                    <span id="e-mail" class="perfilText">E-mail:</span>
                    <span id="e-mailText"class="perfilText"></span>
                    <span id="userName"class="perfilText">Usuário: </span>
                    <span id="userNameText"class="perfilText"></span>
                    <span id="senha"class="perfilText">Senha: </span>
                    <span id="senhaText"class="perfilText"></span>
                    
                </div>
            </div>

            <img id="mundo01Logo"src="../model/src/mundo01Logo.png" alt="">
            <span id="mapaAtualDisplay2"></span>
            
            <div id="mapa" >
                <!-- <img id="fullMap1" src="../model/src/fullMapAlt.png" alt=""> -->
                <!-- <img id="fullMap2" src="../model/src/fullMap02.png" alt=""> -->
                
                <img id="checkOff11" src="../model/src/checkOff.png" alt="" >
                <img id="checkOff12" src="../model/src/checkOff.png" alt="" >
                <img id="checkOff13" src="../model/src/checkOff.png" alt="" >
            

                <button id="bf1" class="botaoFase">01</button>
                <button id="bf2" class = "botaoFase">02</button>
                <button id="bf3" class = "botaoFase">03</button>
                <button id="bf4" class = "botaoFase">04</button>
                <button id="bf5" class = "botaoFase">05</button>
                <button id="bf6" class = "botaoFase">06</button>
                <button id="bf7" class = "botaoFase">07</button>
                <button id="bf8" class = "botaoFase">08</button>
                <button id="bf9" class = "botaoFase">09</button>
                <button id="bf10" class = "botaoFase">10</button>
                <button id="bf11" class = "botaoFase">11</button>
                <button id="bf12" class = "botaoFase">12</button>
                <button id="bf13" class = "botaoFase">13</button>
    
            </div>
            <div class="gameScreen">
                
                <canvas id="canvas1" class="hidden"></canvas>
               
            </div>
    
            <div id="blocklyDiv" class="hidden"></div>
            <div id="blocklyDivLock" class="hidden"></div>
            <div id="terminal" class="hidden"></div>
            
            <div id="tutorial" class="hidden">
                <img id="tutorial_fundo1" src="../model/src/tutorial_fundo1.png">
                <img id="tutorial_fundo1_anim" src="../model/src/tutorial_fundo1_anim.gif">
                <img id="tutorial_fundo2" src="../model/src/tutorial_fundo2.png" class="hidden">
                <img id="tutorial_fundo2_anim1" src="../model/src/tutorial_fundo2_anim1.gif" class="hidden">
                <img id="tutorial_fundo2_anim2" src="../model/src/tutorial_fundo2_anim2.gif" class="hidden">
                <div id="tutDiv">
                    <button id="buttonPrevTut" class="buttonTut">◄</button>
                    <button id="buttonCancelTut" class="buttonTut">Pular</button>
                    <button id="buttonNextTut" class="buttonTut">►</button>
                   
                </div>
                
            </div>
                

        </div>

        
        
        
    </main>

    <script type="module" src="../control/gameController.js"></script>
    <script type="module" src="../control/avalController.js"></script>
    <script src="https://unpkg.com/blockly/blockly.min.js"></script>
    <script src="../model/blockly/blocks.js"></script>
    <script src="../model/ace/ace.js"></script>
    <script src="../model/ace/ext-language_tools.js"></script>
    <script src="../control/codeController.js"></script>


</body>