import { Player } from "../model/game/player.js";
import { mapaCol } from "./logica_mapas/mapaCol.js";
import { mapa01 } from "./logica_mapas/mapa01.js";
import { mapa02 } from "./logica_mapas/mapa02.js";
import { mapa03 } from "./logica_mapas/mapa03.js";
import { mapa04 } from "./logica_mapas/mapa04.js";
import { mapa05 } from "./logica_mapas/mapa05.js";
import { mapa06 } from "./logica_mapas/mapa06.js";
import { mapa07 } from "./logica_mapas/mapa07.js";
import { mapa08 } from "./logica_mapas/mapa08.js";
import { mapa09 } from "./logica_mapas/mapa09.js";
import { mapa10 } from "./logica_mapas/mapa10.js";
import { mapa11 } from "./logica_mapas/mapa11.js";
import { mapa12 } from "./logica_mapas/mapa12.js";
import { mapa13 } from "./logica_mapas/mapa13.js";
import { blocklyToolbox } from "../model/blockly/blocklyToolbox.js";
import { Toolboxes } from "../model/blockly/toolboxes.js";
import { gameDocLoader } from "../model/game/gameDocLoader.js";
import { Espinho } from "../model/game/espinho.js";
import { aceEditor} from "./codeController.js";
import { User } from "../model/game/user.js";

const userJson = localStorage.getItem('user');
let userObj = '';   
let user = new User("","","");

const elements = new gameDocLoader();
const toolboxes = new Toolboxes();
const toolbox = new blocklyToolbox(toolboxes.toolBox_mapa01);
elements.canvas.width = 640;
elements.canvas.height = 896;
let movimento = 4;
let mapaAtual = 1;
let mapaAnterior = 1;
let attplayerPos = false;
let firstLoad = false;
let blocosNoWorkspace = [];
let blocosParaCod = [];
let blocosNoRepita = [];
let blocosRestantes = 0;
let blockHlCounter = 0;
let blockHlCheck = false;
let repitaFimAt = [];


const player = new Player(elements.canvas.width, elements.canvas.height);
const espinho = new Espinho(elements.canvas.width, elements.canvas.height);
let playerPosInicialX = 0;
let playerPosInicialY = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;
let andando = false;
let posAtualFila = 0;
let esperou = false;
let espinhoShow = false;
let espinhoAnim = true;
let espinhoTempo = 0;
let vidasRestantes = 0;
let hpRestante = 0;
let passos = 0;
let stepCheck = false;
let bateuEspinho = false;

elements.stepButton.classList.toggle('disabled-button');
elements.pauseButton.classList.toggle('disabled-button');
elements.continueButton.classList.toggle('disabled-button');
elements.cancelCompileButton.classList.toggle('disabled-button');
elements.stepButton.disabled = true;
elements.pauseButton.disabled = true;
elements.continueButton.disabled = true;
elements.cancelCompileButton.disabled = true;
let pausou = false;


const colisoes = new mapaCol();
const mapa01Logic = new mapa01();
const mapa02Logic = new mapa02();
const mapa03Logic = new mapa03();
const mapa04Logic = new mapa04();
const mapa05Logic = new mapa05();
const mapa06Logic = new mapa06();
const mapa07Logic = new mapa07();
const mapa08Logic = new mapa08();
const mapa09Logic = new mapa09();
const mapa10Logic = new mapa10();
const mapa11Logic = new mapa11();
const mapa12Logic = new mapa12();
const mapa13Logic = new mapa13();
let fases= [elements.bf1, elements.bf2, elements.bf3,
     elements.bf4, elements.bf5, elements.bf6, elements.bf7, elements.bf8, elements.bf9, elements.bf10, elements.bf11, elements.bf12, elements.bf13];

let update = false;
let currentCheckpoint = 0;
let usrAtual = "";
let usrAtualID = 0;
let nome = "";
let currentEmail = "";
let currentSenha = "";
let currentMapa = 0;
let morreu = false;
let podeMorrer = false;

let votou = "";
let dificuldade = 0;
let continuouFimFase = false;
let mudouMapa = false;

const terminal = new aceEditor();

const mapaLogics = [
    mapa01Logic, mapa02Logic, mapa03Logic, mapa04Logic, mapa05Logic,
    mapa06Logic, mapa07Logic, mapa08Logic, mapa09Logic, mapa10Logic,
    mapa11Logic, mapa12Logic, mapa13Logic
];

function montarMapa(){
    switch (mapaAtual) {
        case 1:
            elements.ctx.drawImage(elements.map1, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64;
                player.y = 380;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "dir";
                toolbox.maxBlocks = 4;
                blocosRestantes =  toolbox.maxBlocks;
                try {
                    Blockly.getMainWorkspace().dispose();
                } catch (error) {
                    
                }
                toolbox.injetar(toolbox.toolbox);
                
            }
            break;
        case 2:
            elements.ctx.drawImage(elements.map2, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 0;
                player.y = 380;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "dir";
                toolbox.maxBlocks = 7;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa02);
            }
            break;
        case 3:
            elements.ctx.drawImage(elements.map3, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 384;
                player.y = 832;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "cim";
                toolbox.maxBlocks = 6;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa03);
            }
            break;
        case 4:
            elements.ctx.drawImage(elements.map4, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64;
                player.y = 320;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "dir";
                toolbox.maxBlocks = 5;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa04);
            }
            break;

        case 5:
            elements.ctx.drawImage(elements.map5, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 0;
                player.y = 64*7;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "dir";
                toolbox.maxBlocks = 6;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa04);
            }
            break;
        case 6:
            elements.ctx.drawImage(elements.map6, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*8;
                player.y = 64*2;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "esq";
                toolbox.maxBlocks = 2;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa06);
            }
            break;
        case 7:
            elements.ctx.drawImage(elements.map7, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*8;
                player.y = 64*2;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "esq";
                toolbox.maxBlocks = 2;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa07);
            }
            break;
        case 8:
            elements.ctx.drawImage(elements.map8, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*8;
                player.y = 64*0;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "esq";
                toolbox.maxBlocks = 5;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa08);
            }
            break;
        case 9:
            elements.ctx.drawImage(elements.map9, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*7;
                player.y = 64*8;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "esq";
                toolbox.maxBlocks = 4;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa09);
            }
            break;
        case 10:
            elements.ctx.drawImage(elements.map10, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*5;
                player.y = 64*4;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "esq";
                toolbox.maxBlocks = 4;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa10);
            }
            break;
        case 11:
            elements.ctx.drawImage(elements.map11, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*2;
                player.y = 64*2;
                espinhoShow = false;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "bx";
                toolbox.maxBlocks = 6;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa11);
            }
            break;
        case 12:
            elements.ctx.drawImage(elements.map12, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*4;
                player.y = 64*2;
                espinho.x = 64*7;
                espinho.y = 64*10;
                espinhoShow = true;
                espinho.frameAtualEspinho = 1;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "bx";
                toolbox.maxBlocks = 6;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa12);
            }
            break;
        case 13:
            elements.ctx.drawImage(elements.map13, 0, 0, elements.canvas.width, elements.canvas.height);
            if(attplayerPos == false){
                player.x = 64*1;
                player.y = 64*10;
                espinho.x = 64*5;
                espinho.y = 64*5;
                espinhoShow = true;
                espinho.frameAtualEspinho = 1;
                playerPosInicialX = player.x;
                playerPosInicialY = player.y;
                attplayerPos = true;
                player.direcao = "dir";
                toolbox.maxBlocks = 8;
                blocosRestantes =  toolbox.maxBlocks;
                Blockly.getMainWorkspace().dispose();
                toolbox.injetar(toolboxes.toolBox_mapa13);
            }
            break;
    
        default:
            break;
    }
}
function checkCol(parede){
    if(player.x + 64 >= parede.x && player.x <= parede.x + parede.width && 
        player.y + 64 >= parede.y && player.y <= parede.y + parede.height)
        {
            return true;
    }

    
}
function checkVida(){
    vidasRestantes = parseInt(vidasRestantes);
    switch (vidasRestantes) {
        case 3:
            
            break;
        case 2:
            if (!elements.coracao3.classList.contains('hidden')) {
                elements.coracao3.classList.add('hidden'); 
            }
            ;
           
            break;
        case 1:
            if (!elements.coracao2.classList.contains('hidden')) {
                elements.coracao3.classList.add('hidden'); 
                elements.coracao2.classList.add('hidden'); 
            }
            
            break;
        case 0:
            if (!elements.coracao1.classList.contains('hidden')) {
                elements.coracao3.classList.remove('hidden'); 
                elements.coracao2.classList.remove('hidden'); 
                elements.coracao1.classList.remove('hidden'); 
                
                if(podeMorrer == true){
                    
                    updateDbMorreu();

                }
            }
            
            break;
    
        default:
            break;
    }
}

function checkHp(){
    
    hpRestante = parseInt(hpRestante);
    switch (hpRestante) {
        case 4:
           
            break;
        case 3:
            if (!elements.hp4.classList.contains('hidden')) {
                elements.hp4.classList.add('hidden'); 
            }
            ;
           
            break;
        case 2:
            if (!elements.hp3.classList.contains('hidden')) {
                elements.hp4.classList.add('hidden'); 
                elements.hp3.classList.add('hidden'); 
                
            }
            
            break;
        case 1:
            if (!elements.hp2.classList.contains('hidden')) {
                elements.hp4.classList.add('hidden');
                elements.hp3.classList.add('hidden'); 
                elements.hp2.classList.add('hidden'); 
            }
            
            break;
        case 0:
            if (!elements.hp1.classList.contains('hidden')) {
               
                vidasRestantes--;
                
                elements.hp1.classList.remove('hidden')
                elements.hp2.classList.remove('hidden')
                elements.hp3.classList.remove('hidden')
                elements.hp4.classList.remove('hidden')

                hpRestante = 4;
            }
        
        break;
    
        default:
            break;
    }
}
function toggleElements(){

    if(!elements.telaMapa.classList.contains('hidden')){
        
        elements.canvas.classList.remove('hidden');
        elements.blocklyDiv.classList.remove('hidden');
        // elements.terminal.classList.remove('hidden');
        elements.telaMapa.classList.add('hidden');
        elements.statsDisplay.classList.remove('hidden');
        elements.functionsDisplay.classList.remove('hidden');
        elements.optionsDisplay.classList.remove('hidden');
        elements.hpBar.classList.remove('hidden');
        elements.vidaBar.classList.remove('hidden');
        elements.optionsMenuMapa.classList.add('hidden');
    }
    else{
        elements.canvas.classList.add('hidden');
        elements.blocklyDiv.classList.add('hidden');
        // elements.terminal.classList.add('hidden');
        elements.telaMapa.classList.remove('hidden');
        elements.statsDisplay.classList.add('hidden');
        elements.functionsDisplay.classList.add('hidden');
        elements.optionsDisplay.classList.add('hidden');
        elements.hpBar.classList.add('hidden');
        elements.vidaBar.classList.add('hidden');
        elements.optionsMenuMapa.classList.remove('hidden');
    }
    
    
    if (!elements.cancelCompileButton.classList.contains('disabled-button')) {
        enableCompile();
    }

    terminal.clear();
}

function disableCompile(){
    elements.execButton.classList.toggle('disabled-button');
    elements.stepButton.classList.toggle('disabled-button');
    if (!elements.pauseButton.classList.contains('disabled-button')) {
        elements.pauseButton.classList.toggle('disabled-button');
    }
    elements.continueButton.classList.toggle('disabled-button');
    elements.cancelCompileButton.classList.toggle('disabled-button');

    // elements.codButton.classList.remove('hidden');


    elements.execButton.disabled = true;
    elements.stepButton.disabled = false;
    elements.pauseButton.disabled = true;
    elements.continueButton.disabled = false;
    elements.cancelCompileButton.disabled = false;
};
function enableCompile(){

    terminal.clear();

    elements.blocklyLock.classList.add('hidden');

    elements.stepButton.classList.add('disabled-button');
    elements.stepButton.disabled = true;

    elements.pauseButton.classList.add('disabled-button');
    elements.pauseButton.disabled = true;

    elements.continueButton.classList.add('disabled-button');
    elements.continueButton.disabled = true;


    if (elements.execButton.classList.contains('disabled-button')) {
        elements.execButton.classList.toggle('disabled-button');
    }

    if (!elements.cancelCompileButton.classList.contains('disabled-button')) {
        elements.cancelCompileButton.classList.toggle('disabled-button');
    }

    // elements.codButton.classList.add('hidden');

    elements.execButton.disabled = false;
    elements.cancelCompileButton.disabled = true;
};

elements.gameLogo.addEventListener('click', function() {
    
    
});
elements.buttonPerfil.addEventListener('click', function() {

    elements.telaPerfil.classList.toggle('hidden');


    if(elements.telaPerfil.classList.contains('hidden')){
        elements.buttonPerfil.textContent = "Perfil";
    }else{
        elements.buttonPerfil.textContent = "Jogo";
    }
    
    // if(!elements.buttonPerfil.classList.contains('hidden')){
    //     elements.telaPerfil.classList.remove('hidden');
    // }else{
    //     elements.telaPerfil.classList.add('hidden');
    // }
    
    
});

elements.senhaText.addEventListener('click', function() {

    const backgroundColor = window.getComputedStyle(elements.senhaText).backgroundColor;

    if(backgroundColor === 'rgb(240, 248, 255)'){

        elements.senhaText.style.background = '#757c83'; 
        elements.senhaText.style.color = '#757c83'; 

        

       

    }else{

        elements.senhaText.style.background = '#f0f8ff'; 
        elements.senhaText.style.color = '#333'; 
       
    }

});

elements.buttonHome.addEventListener('click', function() {
    location.replace('../index.php');
    toggleElements();
    
});
elements.buttonForum.addEventListener('click', function() {
    
    updateDificuldade();
    elements.aval.classList.remove('hidden');
    
});


window.onclick = function(event) {
    if (event.target == elements.modal) {
        elements.modal.classList.toggle('hidden');
        
    }
}
elements.modalArea.addEventListener('click', function() {
    elements.modal.classList.toggle('hidden');
    
});

elements.buttonNextTut.addEventListener('click', function() {

   elements.buttonPrevTut.classList.remove('disabled-button');
   elements.buttonPrevTut.disabled = false;
   elements.buttonNextTut.classList.add('disabled-button');
   elements.buttonNextTut.disabled = true;

   elements.tutorial_fundo1.classList.add('hidden');
   elements.tutorial_fundo1_anim.classList.add('hidden');
   elements.tutorial_fundo2.classList.remove('hidden');
   elements.tutorial_fundo2_anim1.classList.remove('hidden');
   elements.tutorial_fundo2_anim2.classList.remove('hidden');
    
});

elements.buttonPrevTut.addEventListener('click', function() {

    elements.buttonPrevTut.classList.add('disabled-button');
    elements.buttonPrevTut.disabled = true;
    elements.buttonNextTut.classList.remove('disabled-button');
    elements.buttonNextTut.disabled = false;
 
    elements.tutorial_fundo2.classList.add('hidden');
    elements.tutorial_fundo2_anim1.classList.add('hidden');
    elements.tutorial_fundo2_anim2.classList.add('hidden');
    elements.tutorial_fundo1.classList.remove('hidden');
    elements.tutorial_fundo1_anim.classList.remove('hidden');
    
     
 });

elements.buttonCancelTut.addEventListener('click', function() {

elements.buttonPrevTut.classList.add('disabled-button');
elements.buttonPrevTut.disabled = true;
elements.buttonNextTut.classList.remove('disabled-button');
elements.buttonNextTut.disabled = false;

elements.tutorial_fundo2.classList.add('hidden');
elements.tutorial_fundo2_anim1.classList.add('hidden');
elements.tutorial_fundo2_anim2.classList.add('hidden');
elements.tutorial_fundo1.classList.remove('hidden');
elements.tutorial_fundo1_anim.classList.remove('hidden');

elements.tutorial.classList.add('hidden');

    
});

elements.cancelCompileButton.addEventListener('click', function() {
    resetMaps();
    enableCompile();
    
});

elements.execButton.addEventListener('click', function() {

    mapaLogics[mapaAtual-1].checarDesafio();
    if(checarToolBox(mapaLogics[mapaAtual-1].linha_comandos)){
        elements.modalContent.textContent = "Os blocos devem estar conectados!";
        elements.modal.classList.toggle('hidden');
    }else if(Blockly.getMainWorkspace().getAllBlocks() == 0){
        elements.modalContent.textContent = "Coloque ao menos 1 bloco antes de compilar";
        elements.modal.classList.toggle('hidden');
    }
    else{
        blocosNoWorkspace = Blockly.getMainWorkspace().getAllBlocks();
        elements.blocklyLock.classList.remove('hidden');
        disableCompile();
    }

    
  
});
elements.stepButton.addEventListener('click', function() {

    andar();
    stepCheck = true;

    if (!elements.continueButton.classList.contains('disabled-button')) {
        elements.continueButton.classList.toggle('disabled-button');
        elements.continueButton.disabled = true;
        }

});
elements.pauseButton.addEventListener('click', function() {


    andando = false;
    
    vxr = 0;
    vxl = 0;
    vy = 0;

    if(pausou == false){
        pausou = true;
        elements.pauseButton.textContent = "Continue";
    }else{
        elements.pauseButton.textContent = "Pause";
        pausou = false;
        andar();
    }

   
    
  
});
elements.continueButton.addEventListener('click', function() {
   andar();

    if (elements.pauseButton.classList.contains('disabled-button')) {
    elements.pauseButton.classList.toggle('disabled-button');
    elements.pauseButton.disabled = false;
    }

    if (!elements.stepButton.classList.contains('disabled-button')) {
        elements.stepButton.classList.toggle('disabled-button');
    }
    


   elements.continueButton.classList.toggle('disabled-button');
   elements.stepButton.disabled = true;

   elements.continueButton.disabled = true;
});

function andar(){
    espinhoAnim = false;
    
    switch (mapaAtual) {
        case 1:
            player.direcao = 'dir';
            mapa01Logic.checarDesafio();
            
            break;

        case 2:
            player.direcao = 'dir';
            mapa02Logic.checarDesafio();
            
            break;

        case 3:
            player.direcao = 'cim';
            mapa03Logic.checarDesafio();
            
            break;
        case 4:
            player.direcao = 'dir';
            mapa04Logic.checarDesafio();
            
            break;
        case 5:
            player.direcao = 'dir';
            mapa05Logic.checarDesafio();
            
            break;
        case 6:
            player.direcao = 'esq';
            mapa06Logic.checarDesafio();
           
            break;
        case 7:
            player.direcao = 'bx';
            mapa07Logic.checarDesafio();
            
            break;
        case 8:
            player.direcao = 'bx';
            mapa08Logic.checarDesafio();
            
            break;
        case 9:
            player.direcao = 'esq';
            mapa09Logic.checarDesafio();
            
            break;
        case 10:
            player.direcao = 'esq';
            mapa10Logic.checarDesafio();
           
            break;
        case 11:
            player.direcao = 'bx';
            mapa11Logic.checarDesafio();
           
            break;
        case 12:
            player.direcao = 'bx';
            mapa12Logic.checarDesafio();
            
            
            espinho.frameAtualEspinho = 0;

            break;
        case 13:
            player.direcao = 'dir';
            mapa13Logic.checarDesafio();
            
            
            espinho.frameAtualEspinho = 0;
            break;
        default:
            break;

        
    }

    andando = true;
}
elements.mapaButton.addEventListener('click', function() {
    location.reload();
    toggleElements();
});

// elements.codButton.addEventListener('click', function() {

    for (const block of blocosNoWorkspace) {
        
        blocosParaCod.push(block.type);
        blocosParaCod.push(block.getFieldValue('VALUE'));

        if(block.type === 'repita'){

            var repitaContent =  block.getInputTargetBlock('fazer');

            do{

                blocosNoRepita.push(repitaContent);
               
                
            }
            while(repitaContent = repitaContent.getNextBlock())
            
            
                

        }

    }

    terminalHandler();


    // attTerminal(blocosParaCod);  
    

// });

function terminalHandler(){

    // var repitaCount = 0;

    // for (let blockIndex = 0; blockIndex < blocosParaCod.length; blockIndex++){

    //     if(blocosParaCod[blockIndex] === 'repita'){

    //         var i = (blockIndex+2)+(repitaFimAt[repitaCount]*2);
    //         console.log(blocosParaCod);
    //         blocosParaCod.splice(i, 0, "fimRepita");
    //         repitaCount++;

    //     }
       
    // }

    
    console.log(repitaFimAt);
    console.log(blocosParaCod);
    
}

elements.buttonVelocidade.addEventListener('click', function() {
    elements.radioSpeed.classList.toggle('hidden');
    elements.buttonVelocidade.classList.toggle('clicked');
    
});

elements.radioSpeed.addEventListener('mouseleave', (e) => {
    elements.radioSpeed.classList.toggle('hidden');
    elements.buttonVelocidade.classList.toggle('clicked');
});

elements.buttonVelocidade.addEventListener('mouseleave', (e) => {

    if (!elements.radioSpeed.classList.contains('hidden')) {
        elements.radioSpeed.classList.toggle('hidden');
        elements.buttonVelocidade.classList.toggle('clicked');

    }
});


function attTerminal(blocos){

    if(blocosNoWorkspace.length > 0){
        
        terminal.clear();
        terminal.setValueComandos(blocos);
        blocosParaCod = [];
    }
}

elements.radioSpeed.addEventListener("click", function() {
    const op = document.querySelector('input[name="options"]:checked');

    movimento = parseInt(op.value);
    
    
});
elements.bf1.addEventListener('click', function() {
    mapaAtual = 1;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();
    elements.tutorial.classList.remove('hidden');
    elements.buttonPrevTut.classList.add('disabled-button');
    elements.buttonPrevTut.disable = true;

});

elements.bf2.addEventListener('click', function() {
    mapaAtual = 2;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf3.addEventListener('click', function() {
    mapaAtual = 3;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf4.addEventListener('click', function() {
    mapaAtual = 4;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf5.addEventListener('click', function() {
    mapaAtual = 5;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf6.addEventListener('click', function() {
    mapaAtual = 6;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf7.addEventListener('click', function() {
    mapaAtual = 7;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf8.addEventListener('click', function() {
    mapaAtual = 8;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf9.addEventListener('click', function() {
    mapaAtual = 9;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf10.addEventListener('click', function() {
    mapaAtual = 10;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf11.addEventListener('click', function() {
    mapaAtual = 11;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf12.addEventListener('click', function() {
    mapaAtual = 12;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});
elements.bf13.addEventListener('click', function() {
    mapaAtual = 13;
    attplayerPos = false;
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    toggleElements();

});

function carregarFinalFase(){

    if(mapaAtual >= currentMapa ){
        if (elements.finalFase.classList.contains('hidden')){
        
            elements.finalFase.classList.remove('hidden');
            elements.optionsHeader.classList.add('hidden');
        }
    }else{
        mudarMapaDados();
    }

  
    

}

elements.buttonLike.addEventListener('click', function(){
    if(!elements.buttonDislike.classList.contains('disabled-button')){
        elements.buttonDislike.classList.add('disabled-button');
        elements.buttonDislike.disabled = true;
        votou = "v";

    }else{
        elements.buttonDislike.classList.remove('disabled-button');
        elements.buttonDislike.disabled = false;
        votou = "";
    }
})

elements.buttonDislike.addEventListener('click', function(){
    if(!elements.buttonLike.classList.contains('disabled-button')){
        elements.buttonLike.classList.add('disabled-button');
        elements.buttonLike.disabled = true;
        votou = "f";

    }else{
        elements.buttonLike.classList.remove('disabled-button');
        elements.buttonLike.disabled = false;
        votou = "";

    }
})

elements.radioDif.addEventListener("click", function() {
    const op = document.querySelector('input[name="options"]:checked');

    dificuldade = parseInt(op.value);
    
    
});

elements.continuarFimFase.addEventListener('click', function(){
    buscarFaseDb();
    buscarUserFaseDb();
    continuouFimFase = true;
    elements.finalFase.classList.add('hidden');

    elements.buttonLike.classList.remove('disabled-button');
    elements.buttonLike.disabled = false;

    elements.buttonDislike.classList.remove('disabled-button');
    elements.buttonDislike.disabled = false;

    const radioButtons = document.getElementsByName('radioDif');
    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    elements.optionsHeader.classList.remove('hidden');
    

    if(!mudouMapa){
        mudarMapaDados();
    }

    location.reload();
    toggleElements();
    
    
})

function mudarMapas(){

    switch (mapaAtual) {
        case 1:
            if(player.x >= mapa01Logic.winPosX){

                carregarFinalFase();
                
            }
            break;
    
        case 2:
            if(mapa02Logic.quantPassosX == 3 && mapa02Logic.quantPassosY == 3){
                carregarFinalFase();
        
            }
            break;
        
        case 3:
            if(mapa03Logic.quantPassosX == 1){
                carregarFinalFase();
        
            }
            break;
        case 4:
            if(mapa04Logic.quantPassosX == 4){
                carregarFinalFase();
        
            }
            break;
        case 5:
            if(mapa05Logic.quantPassosY == 2){
                carregarFinalFase();
                
            }
            break;
        case 6:
            if(mapa06Logic.quantPassosX == 4){
                carregarFinalFase();

            }
            break;
        case 7:
            if(mapa07Logic.quantPassosY == 5){
                carregarFinalFase();

            }
            break;
        case 8:
            if(mapa08Logic.quantPassosY == 4){
                carregarFinalFase();

            }
        case 9:
            if(mapa09Logic.quantPassosY == 2){
                carregarFinalFase();

            }

        case 10:
            if(mapa10Logic.quantPassosY == 4){
                carregarFinalFase();

            }
            break;
        case 11:
            if(mapa11Logic.quantPassosY == 3){
                carregarFinalFase();

            }
            break;
        case 12:
            if(mapa12Logic.quantPassosX == 2){
                carregarFinalFase();

            }
            break;
        case 13:
            if(mapa13Logic.quantPassosX == 4){
                carregarFinalFase();
               
               
            }
            break;
        default:
            break;
    }
}

function mudarMapaDados(){
    mudouMapa = true;
    
    switch (mapaAtual) {
        case 1:

            resetMaps();
            enableCompile();
            mapaAtual = 2;
            attplayerPos = false;
            vxr = 0;
            vxl = 0;
            vy = 0;
            andando = false;
            posAtualFila = 0;
            terminal.clear();
            update = false;
            updateDb();

            break;
    
        case 2:
            
            resetMaps();
            enableCompile();
            mapaAtual = 3;
            attplayerPos = false;
            vxr = 0;
            vxl = 0;
            vy = 0;
            andando = false;
            posAtualFila = 0;
            terminal.clear();
            update = false;
            updateDb();
        
            
            break;
        
        case 3:
        
            resetMaps();
            enableCompile();
            mapaAtual = 4;
            attplayerPos = false;
            vxr = 0;
            vxl = 0;
            vy = 0;
            andando = false;
            posAtualFila = 0;
            terminal.clear();
            update = false;
            updateDb();
            
        
            
            break;
        case 4:
        
            resetMaps();
            enableCompile();
            mapaAtual = 5;
            attplayerPos = false;
            vxr = 0;
            vxl = 0;
            vy = 0;
            andando = false;
            posAtualFila = 0;
            terminal.clear();
            update = false;
            updateDb();
        
            
            break;
        case 5:
            
            resetMaps();
            enableCompile();
            mapaAtual = 6;
            attplayerPos = false;
            vxr = 0;
            vxl = 0;
            vy = 0;
            andando = false;
            posAtualFila = 0;
            update = false;
            updateDb();
                
            
            break;
        case 6:
            
                resetMaps();
                enableCompile();
                mapaAtual = 7;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
            break;
        case 7:
            
                resetMaps();
                enableCompile();
                mapaAtual = 8;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
            break;
        case 8:
            
                resetMaps();
                enableCompile();
                mapaAtual = 9;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

                break;
        case 9:
            
                resetMaps();
                enableCompile();
                mapaAtual = 10;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
                break;
        case 10:
           
                resetMaps();
                enableCompile();
                mapaAtual = 11;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
            break;
        case 11:
           
                resetMaps();
                enableCompile();
                mapaAtual = 12;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
            break;
        case 12:
           
                resetMaps();
                enableCompile();
                mapaAtual = 13;
                attplayerPos = false;
                vxr = 0;
                vxl = 0;
                vy = 0;
                andando = false;
                posAtualFila = 0;
                terminal.clear();
                update = false;
                updateDb();

            
            break;
        case 13:
            
                toggleElements();
                resetMaps();
                update = false;
                updateDb();
               
               
            
            break;
        default:
            break;
    }
} 


function resetMaps(){

    if (elements.continueButton.classList.contains('disabled-button') && elements.stepButton.classList.contains('disabled-button') ) {
        elements.continueButton.classList.toggle('disabled-button');
        elements.pauseButton.classList.toggle('disabled-button');
        elements.stepButton.classList.toggle('disabled-button');
        elements.continueButton.disabled = false;
        elements.pauseButton.disabled = true;
        elements.stepButton.disabled = false;
        stepCheck = false;

    }else if(!elements.stepButton.classList.contains('disabled-button')){
        elements.continueButton.classList.toggle('disabled-button');
        elements.continueButton.disabled = false;
        stepCheck = false;
    }
    
    
    vxr = 0;
    vxl = 0;
    vy = 0;
    andando = false;
    posAtualFila = 0;
    esperou = false;
    espinhoAnim = true;

    passos = 0;

    switch (mapaAtual) {
        case 1:
            
            player.x = 64;
            player.direcao = "dir";
            playerPosInicialX = player.x;
            break;
        case 2:
            
            player.x = 0;
            player.y = 380;
            player.direcao = "dir";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa02Logic.dir = "direita";
            mapa02Logic.quantPassosX = 0;
            mapa02Logic.quantPassosY = 0;
            break;
        case 3:

            player.x = 384;
            player.y = 832;
            player.direcao = "cim";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa03Logic.dir = "cima";
            mapa03Logic.quantPassosX = 0;
            mapa03Logic.quantPassosY = 0;
            break;
        case 4:

            player.x = 64;
            player.y = 320;
            player.direcao = "dir";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa04Logic.dir = "direita";
            mapa04Logic.quantPassosX = 0;
            mapa04Logic.quantPassosY = 0;
            break;
        case 5:

            player.x = 0;
            player.y = 448;
            player.direcao = "dir";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa05Logic.dir = "direita";
            mapa05Logic.quantPassosX = 0;
            mapa05Logic.quantPassosY = 0;
            break;
        case 6:

            player.x = 64*8;
            player.y = 64*2;
            player.direcao = "esq";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa06Logic.dir = "esquerda";
            mapa06Logic.quantPassosX = 0;
            mapa06Logic.quantPassosY = 0;
            
            break;
        case 7:

            player.x = 64*8;
            player.y = 64*2;
            player.direcao = "esq";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa07Logic.dir = "baixo";
            mapa07Logic.quantPassosX = 0;
            mapa07Logic.quantPassosY = 0;
            
            break;
        case 8:

            player.x = 64*8;
            player.y = 64*0;
            player.direcao = "esq";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa08Logic.dir = "baixo";
            mapa08Logic.quantPassosX = 0;
            mapa08Logic.quantPassosY = 0;
           
            break;
        case 9:
            
            player.x = 64*7;
            player.y = 64*8;
            player.direcao = "esq";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa09Logic.dir = "esquerda";
            mapa09Logic.quantPassosX = 0;
            mapa09Logic.quantPassosY = 0;
            break;

        case 10:
        
            player.x = 64*5;
            player.y = 64*4;
            player.direcao = "esq";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa10Logic.dir = "esquerda";
            mapa10Logic.quantPassosX = 0;
            mapa10Logic.quantPassosY = 0;
            
            break;
        case 11:

            player.x = 64*2;
            player.y = 64*2;
            player.direcao = "bx";
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa11Logic.dir = "baixo";
            mapa11Logic.quantPassosX = 0;
            mapa11Logic.quantPassosY = 0;
            
            break;
        case 12:

            player.x = 64*4;
            player.y = 64*2;
            player.direcao = "bx";
            espinho.frameAtualEspinho = 1;
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa12Logic.dir = "baixo";
            mapa12Logic.quantPassosX = 0;
            mapa12Logic.quantPassosY = 0;
            
            break;
        case 13:

            player.x = 64*1;
            player.y = 64*10;
            player.direcao = "dir";
            espinho.frameAtualEspinho = 1;
            playerPosInicialX = player.x;
            playerPosInicialY = player.y;
            mapa13Logic.dir = "direita";
            mapa13Logic.quantPassosX = 0;
            mapa13Logic.quantPassosY = 0;
        default:
            break;
    }
}

function avançar(dir){
    
    switch (dir) {
        case "direita":
            vxr = movimento;
            player.direcao = "dir";
            break;
        case "esquerda":
            vxl = -movimento;
            player.direcao = "esq";
            break;
        case "cima":
            vy = -movimento;
            player.direcao = "cim";
            break;
        case "baixo":
            vy = movimento;
            player.direcao = "bx";
            break;
    
        default:
            break;
    }
}
function avancarMapalDirecao(mapLogic, direcao){

    if(blockHlCheck == false){
        
    }
    switch (direcao) {
        case "direita":
            if(player.x >= playerPosInicialX+128){

                // if(blockHlCounter>0){
                //     blocosNoWorkspace[blockHlCounter-1].unselect();
                // }
                // blocosNoWorkspace[blockHlCounter].addSelect();
                blockHlCounter++;
                playerPosInicialX = player.x;
                mapLogic.quantPassosX += 1;
                posAtualFila++;
                passos++;
                animarEspinho();
                
                
            }
            break;
        case "esquerda":
            if(player.x <= playerPosInicialX-128){
                
                playerPosInicialX = player.x;
                mapLogic.quantPassosX += 1;
                posAtualFila++;
                passos++;
                animarEspinho();
                
            }
            break;
        case "baixo":
            
            if(player.y >= playerPosInicialY+128){
                
                playerPosInicialY = player.y;
                mapLogic.quantPassosY += 1;
                posAtualFila++;
                passos++;
                animarEspinho();

            }
            break;
        case "cima":
        
            if(player.y <= playerPosInicialY-128){

                playerPosInicialY = player.y;
                mapLogic.quantPassosY += 1;
                posAtualFila++;
                passos++;
                animarEspinho();


            }
            break;
        default:
            break;
    } 

    
}
function avancarMapa01(mapLogic){
    
    if(andando == true){
        if(mapLogic.linha_comandos.length > posAtualFila){        
            switch (mapLogic.linha_comandos[posAtualFila]) {                
                case "1":
                    vxr = movimento; 
                    avancarMapalDirecao(mapLogic, "direita")
                    
                    break;
            
                default:
                    break;
            }
        }else{
            resetMaps();
        }

        

    }

}
function avancarMapa02(mapLogic){
    
    if(andando == true){

            avançar(mapLogic.dir);

            if(checkCol(colisoes.p1f2) || checkCol(colisoes.p2f2)){
                resetMaps();
                hpRestante--;
            }else if(checkCol(colisoes.p3f2)){
                resetMaps();
                bateuEspinho = true;
                hpRestante-=2;
                   
            }
            
            
            if(posAtualFila < mapLogic.linha_comandos.length){    
                
                switch (mapLogic.linha_comandos[posAtualFila]) {                
                    case "1":
                        avancarMapalDirecao(mapLogic, mapLogic.dir); 
                        break;
                    case "3":
                            mapLogic.dir = "cima";
                            
                            vxr = 0;
                            vxl = 0;
                            vy = 0;

                            posAtualFila+=1;
                            playerPosInicialY = player.y;

                         
                        break;
                
                    default:
                        break;
                }
            }else{
                resetMaps();
            }
        }

}   
function avancarMapa03(mapLogic){
    
    if(andando == true){
            
            avançar(mapLogic.dir);

            if(checkCol(colisoes.p1f3)){
                resetMaps();
                hpRestante--;
            }else if(checkCol(colisoes.p2f3)){
                resetMaps();
                bateuEspinho = true;
                hpRestante-=2;
            }

            if(posAtualFila < mapLogic.linha_comandos.length){      
                switch (mapLogic.linha_comandos[posAtualFila]) {   
                                
                    case "1":
                        avancarMapalDirecao(mapLogic, mapLogic.dir);   
                        break;
                    case "4":
       
                            vy = 0;
                            mapLogic.dir = "direita";
                            
                            posAtualFila+=1;
                            playerPosInicialY = player.y;
   
                        break;
                
                    default:
                        break;
                }
            }else{
                resetMaps();
            }
        }

}   
function avancarMapa04(mapLogic){

    if(andando == true){
            
        avançar(mapLogic.dir);
            
        if(checkCol(colisoes.p4f4)){
 
            hpRestante--;
            resetMaps();
 
        }
        
        if(checkCol(colisoes.p1f4) || checkCol(colisoes.p2f4) || checkCol(colisoes.p3f4)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;
 
        }

        if(posAtualFila < mapLogic.linha_comandos.length){      
            
            switch (mapLogic.linha_comandos[posAtualFila]) {   
                
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir);   
                    break;
                

                case "3":
                    vxr = 0;
                    vxl = 0;
                    vy = 0;

                    if(mapLogic.dir == "direita"){
                        mapLogic.dir = "cima";
                    }else if(mapLogic.dir == "baixo"){
                        mapLogic.dir = "direita";
                    }
                             
                    posAtualFila+=1;
                    playerPosInicialY = player.y;
                    
                break;
            
                case "4":
                       
                        vxr = 0;
                        vxl = 0;
                        vy = 0; 

                        if(mapLogic.dir == "direita"){
                            mapLogic.dir = "baixo";
                        }else if(mapLogic.dir == "baixo"){
                            mapLogic.dir = "esquerda";
                        }
                                 
                        posAtualFila+=1;
                        playerPosInicialY = player.y;
                        
                    break;
            
                default:
                    break;
            }
            }else{
                resetMaps();
            }
        }

}     
function avancarMapa05(mapLogic){

    if(andando == true){
            
        avançar(mapLogic.dir);
              
        if(checkCol(colisoes.p1f5) || checkCol(colisoes.p2f5)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;
 
        }
        
        if(posAtualFila < mapLogic.linha_comandos.length){      
            
            switch (mapLogic.linha_comandos[posAtualFila]) {   
                
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir);   
                    break;
                case "3":
        
                    vxr = 0;
                    vxl = 0;
                    vy = 0;

                    if(mapLogic.dir == "direita"){
                        mapLogic.dir = "cima";
                    }else if(mapLogic.dir == "baixo"){
                        mapLogic.dir = "direita";
                    }
                   
                    posAtualFila+=1;
                    playerPosInicialY = player.y;
                                
                break;
                case "4":
          
                    vxr = 0;
                    vxl = 0;
                    vy = 0;
                    if(mapLogic.dir == "direita"){
                        mapLogic.dir = "baixo";
                    }else if(mapLogic.dir == "baixo"){
                        mapLogic.dir = "esquerda";
                    }
                        
                    posAtualFila+=1;
                    playerPosInicialY = player.y;
                                        
                    break;
            
                default:
                    break;
            }
            }else{
                resetMaps();
            }
        }

} 
function avancarMapa06(mapLogic){

    if(andando == true){
            
        avançar(mapLogic.dir);

        if(posAtualFila < mapLogic.linha_comandos.length){  
        
            switch (mapLogic.linha_comandos[posAtualFila]) {   
                
                case "1":
                                
                    if(player.x <= playerPosInicialX-128){
                        playerPosInicialX = player.x;
                        mapLogic.quantPassosX += 1;
                        posAtualFila++;

                    }
   
                    break;
                }   
                    
            }
            else{
                resetMaps();
            }
        }
        

}
function avancarMapa07(mapLogic){

    if(andando == true){
        
        avançar(mapLogic.dir);
        
        if(posAtualFila < mapLogic.linha_comandos.length){  
        
            switch (mapLogic.linha_comandos[posAtualFila]) {   
                
                case "1":
                                
                    if(player.y >= playerPosInicialY+128){
                        playerPosInicialY = player.y;
                        mapLogic.quantPassosY += 1;
                        posAtualFila++;
                        
                    
                    }
    
                    break;

                }   
                    
            }
            else{
                resetMaps();
            }
        }
        

}
function avancarMapa08(mapLogic){

    if(andando == true){
      
        avançar(mapLogic.dir);

        if(checkCol(colisoes.p2f8) || checkCol(colisoes.p3f8) || checkCol(colisoes.p4f8) || checkCol(colisoes.p5f8) ||
         checkCol(colisoes.p6f8) || checkCol(colisoes.p7f8) || checkCol(colisoes.p8f8)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;
 
        }else if(checkCol(colisoes.p1f8)){
            resetMaps();
            bateuEspinho = true;
            hpRestante--;
        }

        if(posAtualFila < mapLogic.linha_comandos.length){ 
              
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir); 
                    break;
                case "3":
                        
                        vxl = 0;
                        vxr = 0;
                        vy = 0;
                        if(mapLogic.dir == "cima"){
                            mapLogic.dir = "esquerda";

                        }else if(mapLogic.dir == "baixo"){
                            mapLogic.dir = "direita";

                        }else if(mapLogic.dir == "esquerda"){
                            mapLogic.dir = "baixo";

                        }else if(mapLogic.dir == "direita"){
                            mapLogic.dir = "cima";
                        }

                        posAtualFila++;
                        playerPosInicialY = player.y;

                    break;
                case "4":
             
                        vxl = 0;
                        vxr = 0;
                        vy = 0;
                        if(mapLogic.dir == "cima"){
                            mapLogic.dir = "direita";

                        }else if(mapLogic.dir == "baixo"){
                            mapLogic.dir = "esquerda";

                        }else if(mapLogic.dir == "esquerda"){
                            mapLogic.dir = "cima";

                        }else if(mapLogic.dir == "direita"){
                            mapLogic.dir = "baixo";
                        }
                  
                        posAtualFila++;
                        playerPosInicialY = player.y;
                     
                    break;
        }
            
        }
        else{
            resetMaps();
        }

    }
} 
function avancarMapa09(mapLogic){

    if(andando == true){

        avançar(mapLogic.dir);

       

        if(checkCol(colisoes.p1f9) || checkCol(colisoes.p2f9)){
            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;

       }
        
        if(posAtualFila < mapLogic.linha_comandos.length){ 
    
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir); 
                    break;
                case "3":
                    if(checkCol(colisoes.o1f9)){

                        if(mapLogic.cores_encontradas[0] == "v"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "baixo";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "cima";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                   
                    break;
                case "4":
                    if(checkCol(colisoes.o1f9)){
                        
                        if(mapLogic.cores_encontradas[0] == "v"){
                           
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "cima";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "baixo";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }  
             
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                    break;
                case "b":
                case "v":
                case "a":
                   
                    if(mapLogic.quantPassosX == 2){
                        posAtualFila+=1;
                        
                    }else{
                        resetMaps();
                    }
                    break;
        }
            
        }
        else{
            resetMaps();
        }

    }
} 
function avancarMapa10(mapLogic){

    if(andando == true){

        avançar(mapLogic.dir);

        if(checkCol(colisoes.p1f10) || checkCol(colisoes.p2f10)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;

        }

        if(posAtualFila < mapLogic.linha_comandos.length){ 
    
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir); 
                    break;
                case "3":
                    if(checkCol(colisoes.o1f10)){

                        if(mapLogic.cores_encontradas[0] == "a"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "baixo";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "cima";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                   
                    break;
                case "4":
                    if(checkCol(colisoes.o1f10)){
                        
                        if(mapLogic.cores_encontradas[0] == "a"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "cima";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "baixo";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }  
             
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                    break;
                case "b":
                case "v":
                case "a":
                    if(mapLogic.quantPassosX == 2){
                        posAtualFila+=1;
                        
                    }else{
                        resetMaps();
                    }
                    break;
        }
            
        }
        else{
            resetMaps();
        }

    }
} 
function avancarMapa11(mapLogic){

    if(andando == true){

        avançar(mapLogic.dir);

        if(checkCol(colisoes.p1f11) || checkCol(colisoes.p2f11) || checkCol(colisoes.p3f11) || checkCol(colisoes.p4f11)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;

        }
        
        if(posAtualFila < mapLogic.linha_comandos.length){ 
    
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    avancarMapalDirecao(mapLogic, mapLogic.dir); 
                    break;
                case "3":
                    if(checkCol(colisoes.o1f11)){
                        
                        if(mapLogic.cores_encontradas[0] == "v"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "baixo";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "cima";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }

                    }else if(checkCol(colisoes.o2f11)){

                        if(mapLogic.cores_encontradas[1] == "b"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "baixo";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "cima";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                   
                    break;
                case "4":
                    if(checkCol(colisoes.o1f11)){
                        
                        if(mapLogic.cores_encontradas[0] == "v"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "cima";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "baixo";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }  
             
                    }else if(checkCol(colisoes.o2f11)){
                        
                        if(mapLogic.cores_encontradas[1] == "b"){
                            
                            vy = 0;
                            vxl = 0;
                            vxr = 0;
                            if(mapLogic.dir == "cima"){
                                mapLogic.dir = "esquerda";
    
                            }else if(mapLogic.dir == "baixo"){
                                mapLogic.dir = "direita";
    
                            }else if(mapLogic.dir == "esquerda"){
                                mapLogic.dir = "cima";
    
                            }else if(mapLogic.dir == "direita"){
                                mapLogic.dir = "baixo";
                            }
                          
                            posAtualFila+=1;
                            playerPosInicialY = player.y;   
                        }  
             
                    }else{
                        posAtualFila+=1;
                        playerPosInicialY = player.y; 
                    }
                    break;
                case "b":
                    if(mapLogic.quantPassosX == 1){
                        posAtualFila+=1;
                        
                    }else{
                        posAtualFila+=2;
                    }
 
                    break;
                case "v":
                    if(mapLogic.quantPassosY == 1){
                        if(mapLogic.quantPassosX == 1){
                            posAtualFila+=2;
                        }else{
                            posAtualFila+=1;
                        }         
                    }else{
                        posAtualFila+=2;
                    }
                    break;
                case "a":
                    break;
                   
        }
            
        }
        else{
            resetMaps();
        }

    }
} 
function avancarMapa12(mapLogic){

    if(andando == true){

        avançar(mapLogic.dir);

        if(checkCol(colisoes.p1f12)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;

        }else if(checkCol(colisoes.p2f12)){
           
            hpRestante--;
            resetMaps();
        }
        if(checkCol(colisoes.o2f12)){

            if(mapLogic.vaiEsperar == false){
                resetMaps();
            }
            

         }

        if(posAtualFila < mapLogic.linha_comandos.length){ 
    
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    esperou = false;
                    avancarMapalDirecao(mapLogic, mapLogic.dir); break;   
                    case "3":
                        
                        if(checkCol(colisoes.o1f12)){
                      
                            if(mapLogic.cores_encontradas[0] == "a"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
                           
                                mapLogic.dir = "direita";

                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }
                        }else{
                            
                            posAtualFila+=1;
                            playerPosInicialY = player.y; 
                        }
                       
                    break;
                    case "4":
                        if(checkCol(colisoes.o1f12)){
                       
                            if(mapLogic.cores_encontradas[0] == "a"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
          
                                mapLogic.dir = "esquerda";
                                
                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }
                        }else{
                            
                            posAtualFila+=1;
                            playerPosInicialY = player.y; 
                        }
                    break;
                    case "b":
                    case "v":
                    case "a":
                        
                        if(mapLogic.quantPassosY == 4){
                            posAtualFila+=1;
                            
                        }else{
                            posAtualFila+=2;
                        }
                    break; 
                    case "e":

                        let posFila = posAtualFila;
                        posFila+=1;

                        if(mapLogic.linha_comandos[posFila+=1] == "6"){
                            if(mapLogic.quantPassosX == 1){
                                posAtualFila+=1;
                            }
                            posAtualFila+=2;
                            
                        }else{
                            if(mapLogic.quantPassosX == 1){
                                posAtualFila+=1;
                            }else{
                                posAtualFila+=2;
                            }
                            
                        }

                    break;   
                    case "6":
                        
                        vy = 0;
                        vxl = 0;
                        vxr = 0;

                        if(esperou == false){
                            setTimeout(() => {posAtualFila+=1}, 1000);
                            esperou = true;
                        }
                        

                    break;      
            }
            
        }
        else{
            
            resetMaps();
        }

    }
} 
function avancarMapa13(mapLogic){

    if(andando == true){

        avançar(mapLogic.dir);

        if(checkCol(colisoes.p1f13) || checkCol(colisoes.p3f13)){

            resetMaps();
            bateuEspinho = true;
            hpRestante-=2;


        }else if(checkCol(colisoes.p2f13) || checkCol(colisoes.p4f13)){
         
            hpRestante--;
            resetMaps();
        }
        if(checkCol(colisoes.o2f13)){

            if(mapLogic.vaiEsperar == false){
                resetMaps();
            }
            

         }

        
         
        if(posAtualFila < mapLogic.linha_comandos.length){ 
    
            switch (mapLogic.linha_comandos[posAtualFila]) {  
                case "1":
                    esperou = false;
                    
                    avancarMapalDirecao(mapLogic, mapLogic.dir); 
                    break;   
                    case "3":
                        
                        if(checkCol(colisoes.o1f13)){
                            
                            if(mapLogic.cores_encontradas[0] == "b"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
                           
                                mapLogic.dir = "cima";

                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }
                        }else if(checkCol(colisoes.o3f13)){

                            if(mapLogic.cores_encontradas[1] == "a"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
                           
                                mapLogic.dir = "esquerda";

                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }


                        }else{
                            
                            posAtualFila+=1;
                            playerPosInicialY = player.y; 
                        }
                       
                    break;
                    case "4":
                        if(checkCol(colisoes.o1f13)){
                       
                            if(mapLogic.cores_encontradas[0] == "b"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
          
                                mapLogic.dir = "baixo";
                                
                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }
                        }else if(checkCol(colisoes.o3f13)){

                            if(mapLogic.cores_encontradas[1] == "a"){
                            
                                vy = 0;
                                vxl = 0;
                                vxr = 0;
                           
                                mapLogic.dir = "direita";

                              
                                posAtualFila+=1;
                                playerPosInicialY = player.y;   
                            }


                        }else{
                            
                            posAtualFila+=1;
                            playerPosInicialY = player.y; 
                        }
                    break;
                    case "b":
                        
                        if(mapLogic.quantPassosX == 2){
                            posAtualFila+=1;
                            
                        }else{
                            posAtualFila+=2;
                        }
                    break; 
                    case "v":
                        posAtualFila+=2;
                        break; 
                    case "a":
                        console.log(mapLogic.quantPassosY);
                        if(mapLogic.quantPassosY == 4){
                            posAtualFila+=1;
                            
                        }else{
                            posAtualFila+=2;
                        }
                    break; 

                    case "e":

                        let posFila = posAtualFila;
                        posFila+=1;

                        if(mapLogic.linha_comandos[posFila+=1] == "6"){
                            if(mapLogic.quantPassosY == 2){
                                posAtualFila+=1;
                            }
                            posAtualFila+=2;
                            
                        }else{
                            if(mapLogic.quantPassosY == 2){
                                posAtualFila+=1;
                            }else{
                                posAtualFila+=2;
                            }
                            
                        }

                    break;   
                    case "6":
                        
                        vy = 0;
                        vxl = 0;
                        vxr = 0;

                        if(esperou == false){
                            espinho.frameAtualEspinho = 1;
                            setTimeout(() => {posAtualFila+=1}, 1000);
                            esperou = true;
                        }
                        

                    break;      
            }
            
        }
        else{
            
            resetMaps();
        }

    }
} 


function animarEspinho(){
    if(espinho.frameAtualEspinho == 0){
        espinho.frameAtualEspinho = 1;
    }else if(espinho.frameAtualEspinho == 1){
        espinho.frameAtualEspinho = 0;
    }
}

function animarEspinhoComeco(){
    if(espinhoAnim == true){
        
        if(espinhoTempo < 50){
            espinhoTempo++;
        }else if(espinhoTempo >= 50){
            animarEspinho();
            espinhoTempo = 0;
        }
        
    }
}
function checarToolBox(lista){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === "\n") {
          return true;
        }
      }
}

function mapaAtualMovimento(){
    switch (mapaAtual) {
        
        case 1:
            if(!checarToolBox(mapa01Logic.linha_comandos)){
                avancarMapa01(mapa01Logic); 
            }
            break;
        case 2:
            if(!checarToolBox(mapa02Logic.linha_comandos)){
                avancarMapa02(mapa02Logic);
            }
            break;
        case 3:
            if(!checarToolBox(mapa03Logic.linha_comandos)){
                avancarMapa03(mapa03Logic);
            }
            break;
        case 4:
            if(!checarToolBox(mapa04Logic.linha_comandos)){
                avancarMapa04(mapa04Logic);
            }
            break;
        case 5:
            if(!checarToolBox(mapa05Logic.linha_comandos)){
                avancarMapa05(mapa05Logic);
            }
            break;
        case 6:
            if(!checarToolBox(mapa06Logic.linha_comandos)){
                avancarMapa06(mapa06Logic);
            }
            break; 
        case 7:
            if(!checarToolBox(mapa07Logic.linha_comandos)){
                avancarMapa07(mapa07Logic);
            }
            break; 
        case 8:
            if(!checarToolBox(mapa08Logic.linha_comandos)){
                avancarMapa08(mapa08Logic);
            }
            break;
        case 9:
            if(!checarToolBox(mapa09Logic.linha_comandos)){
                avancarMapa09(mapa09Logic);
            }
            break;   
        case 10:
            if(!checarToolBox(mapa10Logic.linha_comandos)){
                avancarMapa10(mapa10Logic);
            }
            break;
        case 11:
            if(!checarToolBox(mapa11Logic.linha_comandos)){
                avancarMapa11(mapa11Logic);
            }
            break;
        case 12:
            if(!checarToolBox(mapa12Logic.linha_comandos)){
                avancarMapa12(mapa12Logic);
            }
            break;
        case 13:
            if(!checarToolBox(mapa13Logic.linha_comandos)){
                avancarMapa13(mapa13Logic);
            }
            break;
        default:
            break;
    }
}

function animar(){
    
    
    elements.ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
    montarMapa();
    
    mapaAtualMovimento();
    mudarMapas();

    animarEspinhoComeco();

    elements.blocosDisplay.textContent = "Blocos disponiveis:"+Blockly.getMainWorkspace().remainingCapacity();
    elements.mapaAtualDisplay.textContent = "Sala atual: "+mapaAtual.toString()+" / 13";
    elements.mapaAtualDisplay2.textContent = currentMapa.toString()+" / 13";

        
    checkVida();
    checkHp();

    player.x += vxl;
    player.x += vxr;
    player.y += vy;
    
    if(stepCheck == true && passos == 1){
        
        andando = false;
        stepCheck = false;
        passos = 0;
        vxr = 0;
        vxl = 0;
        vy = 0;

    }

    player.draw(elements.ctx);

    if(espinhoShow == true){
        espinho.draw(elements.ctx);
    }
    // elements.ctx.fillStyle = 'black';
    // let fase = colisoes.p1f13;
    // let fase2 = colisoes.p2f13;
    // let fase3 = colisoes.p3f13;
    // let fase4 = colisoes.p4f13;
    // let fase5 = colisoes.p5f8;
    // let fase6 = colisoes.p6f8;
    // let fase7 = colisoes.p7f8;
    // let fase8 = colisoes.p8f8;
    // let obj = colisoes.o1f13;
    // let obj2 = colisoes.o2f13;
    // let obj3 = colisoes.o3f13;
    // elements.ctx.fillRect(fase.x, fase.y, 64, 64);
    // elements.ctx.fillRect(fase2.x, fase2.y, 64, 64);
    // elements.ctx.fillRect(fase3.x, fase3.y, 64, 64);
    // elements.ctx.fillRect(fase4.x, fase4.y, 64, 64);
    // elements.ctx.fillRect(fase5.x, fase5.y, 64, 64);
    // elements.ctx.fillRect(fase6.x, fase6.y, 64, 64);
    // elements.ctx.fillRect(fase7.x, fase7.y, 64, 64);
    // elements.ctx.fillRect(fase8.x, fase8.y, 64, 64);
    // elements.ctx.fillStyle = 'purple';
    // elements.ctx.fillRect(obj.x, obj.y, 64, 64);
    // elements.ctx.fillStyle = 'white';
    // elements.ctx.fillRect(obj2.x, obj2.y, 64, 64);
    // elements.ctx.fillStyle = 'blue';
    // elements.ctx.fillRect(obj3.x, obj3.y, 64, 64);
  
    if(vxl != 0 || vxr != 0 || vy != 0){
        player.update();
    }else{
        player.direcao = 'bx';
        player.frameAtualPlayer = 0;
    }

    if(votou != "" && dificuldade > 0){
        elements.continuarFimFase.classList.remove('disabled-button');
        elements.continuarFimFase.disabled = false;
    }
    
    requestAnimationFrame(animar);

}

function carregarFases(fase){
    
    fase = parseInt(fase);

    elements.bf1.innerHTML = '<img src="../model/src/mapaScriptGamef01.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf2.innerHTML = '<img src="../model/src/mapaScriptGamef02.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf3.innerHTML = '<img src="../model/src/mapaScriptGamef03.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf4.innerHTML = '<img src="../model/src/mapaScriptGamef04.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf5.innerHTML = '<img src="../model/src/mapaScriptGamef05.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf6.innerHTML = '<img src="../model/src/mapaScriptGamef06.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf7.innerHTML = '<img src="../model/src/mapaScriptGamef07.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf8.innerHTML = '<img src="../model/src/mapaScriptGamef08.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf9.innerHTML = '<img src="../model/src/mapaScriptGamef09.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf10.innerHTML = '<img src="../model/src/mapaScriptGamef10.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf11.innerHTML = '<img src="../model/src/mapaScriptGamef11.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf12.innerHTML = '<img src="../model/src/mapaScriptGamef12.png" alt="Button Image" style="width: 100%; height: 100%;">';
    elements.bf13.innerHTML = '<img src="../model/src/mapaScriptGamef13.png" alt="Button Image" style="width: 100%; height: 100%;">';


    for (const element of fases) {
    
        element.style.filter = 'brightness(0.2)';
        element.disabled = true;
    }

    let index = 1;
    for (const element of fases) {

        if(index > fase){
            break;
        }
        
        element.style.filter = 'brightness(1.0)';
        element.disabled = false;

        index++;
    }

    
    if(fase >= 4 ){
  
        elements.checkOff11.src = "../model/src/checkOn.png";

    }if(fase >= 8){
        
        elements.checkOff11.src = "../model/src/checkOn.png";
        elements.checkOff12.src = "../model/src/checkOn.png";

    }if(fase >=12){
        elements.checkOff11.src = "../model/src/checkOn.png";
        elements.checkOff12.src = "../model/src/checkOn.png";
        elements.checkOff13.src = "../model/src/checkOn.png";
     
    }

  
}

function updateDb(){

    switch (mapaAtual) {
        case 4:
            if(currentCheckpoint < 4){
                currentCheckpoint = 4;
            }
            break;
        case 8:
            if(currentCheckpoint < 8){
                currentCheckpoint = 8;
            }
            break;
        case 12:
            if(currentCheckpoint < 12){
                currentCheckpoint = 12;
            }
            break;
        default:
            break;
    }

    if(update == false){

        update = true;
        
        var dataUpdateUrl = '/Scriptgame/model/php/update.php';

        let salvarFase = 0;
        if(currentMapa < mapaAtual){
            console.log(currentMapa +"< mapa atual no bd || mapa atual no jogo >>>"+ mapaAtual);
            salvarFase = mapaAtual;
        }else{
            salvarFase = currentMapa;
        }

        let salvarCheckpoint = 0;
        if(currentCheckpoint > 0){
            salvarCheckpoint = currentCheckpoint;
        }
    
        const data = {
    
            usrId: usrAtualID,
            nome: nome, 
            username: usrAtual, 
            email: currentEmail, 
            senha: currentSenha, 
            faseAtual: salvarFase,
            hpAtual: hpRestante,
            vidaAtual: vidasRestantes,
            checkpoint: salvarCheckpoint

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
        

        let userJson = localStorage.getItem('user');
        let userObj = JSON.parse(userJson);
        userObj.faseAtual = salvarFase; 
        let updatedUserJson = JSON.stringify(userObj);
        localStorage.setItem('user', updatedUserJson);


    }

   

    
}

function updateDbMorreu(){

    elements.modalContent.textContent = "Você morreu! retornando ao mapa...";
    elements.modal.classList.toggle('hidden');

    toggleElements();        

    vidasRestantes = 3;
    hpRestante = 4;

    let salvarFase = 1;
    let salvarCheckpoint = 0;
    if(currentCheckpoint > 0){
        salvarFase = currentCheckpoint;
        salvarCheckpoint = currentCheckpoint;
    }

    if(currentCheckpoint > 0){
        carregarFases(currentCheckpoint);
    }else{
        carregarFases(1);
    }
    

    var dataUpdateUrl = '/Scriptgame/model/php/update.php';

    const data = {

        usrId: usrAtualID,
        nome: nome, 
        username: usrAtual, 
        email: currentEmail, 
        senha: currentSenha, 
        faseAtual: salvarFase,
        hpAtual: hpRestante,
        vidaAtual:  vidasRestantes,
        checkpoint: salvarCheckpoint
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
    

    morreu = true;
    location.reload()

    let userJson = localStorage.getItem('user');
    let userObj = JSON.parse(userJson);
    userObj.faseAtual = salvarFase; 
    let updatedUserJson = JSON.stringify(userObj);
    localStorage.setItem('user', updatedUserJson);

}

async function fetchDados(){
    var dataUrl = '/Scriptgame/model/php/read.php';

    let currentVidas = 0;
    let currentHp = 0;

    if (userJson) {

        const userJson = localStorage.getItem('user');

        userObj = JSON.parse(userJson);
    
        
        user = new User(userObj.username, userObj.nome, userObj.email);
    
    }

    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {

            if (item.username == user.usrAtual) {
                currentCheckpoint = item.checkpoint;
                usrAtual = item.username;
                usrAtualID = item.usrId;
                currentEmail = item.email;
                currentSenha = item.senha;
                currentMapa = item.faseAtual;
                nome = item.nome;
                currentVidas = item.vidaAtual; 
                currentHp = item.hpAtual;

                elements.nomeJogador.textContent += nome;
                elements.nomeJogadorAlt.textContent += nome;

                // if (currentMapa < currentCheckpoint) {
                    
                //     currentMapa = currentCheckpoint;
                // }

                carregarFases(currentMapa);
                
                hpRestante = currentHp;
                vidasRestantes = currentVidas;
                podeMorrer = true;

                elements.emailText.textContent = currentEmail;
                elements.userNameText.textContent = usrAtual;
                elements.senhaText.textContent = currentSenha;
               
            }
        });
       
        
        

    } catch (error) {
        console.error('Error:', error);
    }
}
fetchDados();

async function buscarFaseDb(){

    var dataUrl = '/Scriptgame/model/php/read_fases.php';
    

    let id1 = 0;
    let mundo1 = 0; 
    let fase1 = 0;
    let likes1 = 0;
    let dislikes1 = 0;

    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {

            if (item.fase == mapaAtual-1) {
                
                id1 = item.id;
                mundo1 = item.mundo; 
                fase1 = item.fase;

                if(votou == "v"){
                    likes1 = parseInt(item.likes, 10) + 1;
                    dislikes1 = item.dislikes;
                }else if(votou == "f"){
                    likes1 = item.likes;
                    dislikes1 = parseInt(item.likes, 10) + 1;
                }

                updateFaseNotas(id1, mundo1, fase1, likes1, dislikes1);
            }
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

function updateFaseNotas(id1, mundo1, fase1, likes1, dislikes1){

    var dataUpdateUrl = '/Scriptgame/model/php/update_fases.php';

    const data = {

        id: id1,
        mundo: mundo1, 
        fase: fase1, 
        likes: likes1, 
        dislikes: dislikes1, 
        dificuldade: 0

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

}

async function buscarUserFaseDb(){
    var dataUrl = '/Scriptgame/model/php/read_userFases.php';
    

    let id1 = 0;
    let id1_user = 0;
    let df1 = 0;
    let df2 = 0;
    let df3 = 0;
    let df4 = 0;
    let df5 = 0;
    let df6 = 0;
    let df7 = 0;
    let df8 = 0;
    let df9 = 0;
    let df10 = 0;
    let df11 = 0;
    let df12 = 0;
    let df13 = 0;


    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {

        
            if (item.id_user == usrAtualID) {
                
                id1 = item.id;
                id1_user = item.id_user; 

                df1 = item.df1;
                df2 = item.df2;
                df3 = item.df3;
                df4 = item.df4;
                df5 = item.df5;
                df6 = item.df6;
                df7 = item.df7;
                df8 = item.df8;
                df9 = item.df9;
                df10 = item.df10;
                df11 = item.df11;
                df12 = item.df12;
                df13 = item.df13;

                switch (mapaAtual-1) {
                    case 1:
                        df1 = dificuldade;
                        break;
                    case 2:
                        df2 = dificuldade;
                        break;
                    case 3:
                        df3 = dificuldade;
                        break;
                    case 4:
                        df4 = dificuldade;
                        break;
                    case 5:
                        df5 = dificuldade;
                        break;
                    case 6:
                        df6 = dificuldade;
                        break;
                    case 7:
                        df7 = dificuldade;
                        break;
                    case 8:
                        df8 = dificuldade;
                        break;
                    case 9:
                        df9 = dificuldade;
                        break;
                    case 10:
                        df10 = dificuldade;
                        break;
                    case 11:
                        df11 = dificuldade;
                        break;
                    case 12:
                        df12 = dificuldade;
                        break;
                    case 13:
                        df13 = dificuldade;
                        break;
                    default:
                        break;
                
                }

                updateUserFase(id1, id1_user, df1, df2, df3, df4, df5, df6, df7, df8, df9, df10, df11, df12, df13);
                
            }
        });
        

    } catch (error) {
        console.error('Error:', error);
    }
}

function updateUserFase(id1, id1_user, df1, df2, df3, df4, df5, df6, df7, df8, df9, df10, df11, df12, df13){

    var dataUpdateUrl = '/Scriptgame/model/php/update_userFases.php';

    const data = {

        id: id1,
        id_user: id1_user, 
        df1: df1,
        df2: df2,
        df3: df3,
        df4: df4,
        df5: df5,
        df6: df6,
        df7: df7,
        df8: df8,
        df9: df9,
        df10: df10,
        df11: df11,
        df12: df12,
        df13: df13

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

}

async function updateDificuldade(){
    

    var dataUrl = '/Scriptgame/model/php/read_userFases.php';
    
    var dataUrl1 = '/Scriptgame/model/php/read_fases.php';

    var dataUpdateUrl = '/Scriptgame/model/php/update_fases.php';
    

    let id1 = 0;
    let mundo1 = 0; 
    let fase1 = 0;
    let likes1 = 0;
    let dislikes1 = 0;

    let dificuldadeTemp = 0;
    let userCount = 0;

    let listaFases = [];

    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {
            
           
            listaFases.push([item.df1, item.df2, item.df3, item.df4, item.df5, item.df6, item.df7, item.df8, item.df9, item.df10, item.df11, item.df12, item.df13]);
          
        });
    
        
        const response1 = await fetch(dataUrl1);
        const data1 = await response1.json();

        data1.forEach(item => {
            dificuldadeTemp = parseInt(dificuldadeTemp, 10);

            listaFases.forEach(valor =>{
                dificuldadeTemp += parseInt(valor[userCount], 10);
                
            })
            
            dificuldadeTemp = dificuldadeTemp/data.length;
            
            dificuldadeTemp = Math.round(dificuldadeTemp);
            
            userCount++;

            id1 = item.id;
            mundo1 = item.mundo; 
            fase1 = item.fase;
            likes1 = item.likes;
            dislikes1 = item.dislikes;


            const data1 = {
        
                id: id1,
                mundo: mundo1, 
                fase: fase1, 
                likes: likes1, 
                dislikes: dislikes1, 
                dificuldade: dificuldadeTemp
        
            };
        
            fetch(dataUpdateUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data1)
            })
            .then(response1 => response1.json())
            .catch(error => {
                console.error('Error:', error);
            });
        

            dificuldadeTemp = 0;
        });
    
        
    } catch (error) {
        console.error('Error:', error);
    }

    
}

window.addEventListener('load', function(){

       
       setTimeout(() => {
        elements.progressBar.style.width = '100%';
    }, 50);

    
    setTimeout(() => {
        elements.loadingScreen.style.display = 'none';
    }, 300); 

    elements.continuarFimFase.classList.add('disabled-button');
    elements.continuarFimFase.disabled = true;

    animar();   
    
});

