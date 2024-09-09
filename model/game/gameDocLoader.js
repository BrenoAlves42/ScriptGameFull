export class gameDocLoader{

    constructor(){
        this.header = document.getElementById('mainHeader');
        this.logo = document.getElementById('logo');
        this.buttonHome = document.getElementById('buttonHome');
        this.gameLogo = document.getElementById('logo');
        this.modal  = document.getElementById('modal');
        this.modalArea  = document.getElementById("modalContent");
        this.modalContent = document.getElementById("modalSpan");
        this.main = document.getElementById('main');
        this.mostrarNotas = document.getElementById('imgNota');
        this.gameScreen = document.getElementById('fullGameDiv');
        this.canvas = document.getElementById('canvas1');
        this.blocklyDiv = document.getElementById('blocklyDiv');
        this.blocklyLock = document.getElementById('blocklyDivLock'); 
        this.terminal = document.getElementById('terminal');
        this.ctx = this.canvas.getContext('2d');
        this.telaMapa = document.getElementById('mapa');
        this.execButton = document.getElementById('buttonPlay');
        this.cancelCompileButton = document.getElementById('buttonCancelCompile');
        this.stepButton = document.getElementById('buttonStep');
        this.pauseButton = document.getElementById('buttonPause');
        this.continueButton = document.getElementById('buttonContinue');
        this.codButton = document.getElementById('buttonCod');
        this.buttonVelocidade = document.getElementById('buttonShowSpeed'); 
        this.mapaButton = document.getElementById('buttonMapa');
        this.radioSpeed = document.getElementById("radioSpeed");
        this.statsDisplay = document.getElementById("statsDiv");
        this.functionsDisplay = document.getElementById("funcDiv");
        this.optionsDisplay = document.getElementById("opDiv");
        this.optionsHeader = document.getElementById("optionsMenu");
        this.nomeJogador = document.getElementById("nomeJogador");
        this.mapaAtualDisplay = document.getElementById("mapaAtualDisplay");
        this.mapaAtualDisplay2 = document.getElementById("mapaAtualDisplay2");
        this.blocosDisplay = document.getElementById("blocosDisponiveisDisplay");
        this.checkOff11 = document.getElementById("checkOff11");
        this.checkOff12 = document.getElementById("checkOff12");
        this.checkOff13 = document.getElementById("checkOff13");
        this.bf1 = document.getElementById('bf1');
        this.bf2 = document.getElementById('bf2');
        this.bf3 = document.getElementById('bf3');
        this.bf4 = document.getElementById('bf4');
        this.bf5 = document.getElementById('bf5');
        this.bf6 = document.getElementById('bf6');
        this.bf7 = document.getElementById('bf7');
        this.bf8 = document.getElementById('bf8');
        this.bf9 = document.getElementById('bf9');
        this.bf10 = document.getElementById('bf10');
        this.bf11 = document.getElementById('bf11');
        this.bf12 = document.getElementById('bf12');
        this.bf13 = document.getElementById('bf13');
        this.map1 = document.getElementById('map1');
        this.map2 = document.getElementById('map2');
        this.map3 = document.getElementById('map3');
        this.map4 = document.getElementById('map4');
        this.map5 = document.getElementById('map5');
        this.map6 = document.getElementById('map6');
        this.map7 = document.getElementById('map7');
        this.map8 = document.getElementById('map8');
        this.map9 = document.getElementById('map9');
        this.map10 = document.getElementById('map10');
        this.map11 = document.getElementById('map11');
        this.map12 = document.getElementById('map12');
        this.map13 = document.getElementById('map13');
        this.vidaBar = document.getElementById('vidaBar');
        this.coracao1 = document.getElementById('coracao1');
        this.coracao2 = document.getElementById('coracao2');
        this.coracao3 = document.getElementById('coracao3');
        this.hpBar = document.getElementById('hpBar');
        this.hp1 = document.getElementById('hp1');
        this.hp2 = document.getElementById('hp2');
        this.hp3 = document.getElementById('hp3');
        this.hp4 = document.getElementById('hp4');
        this.loadingScreen = document.getElementById('loading-screen');
        this.progressBar = document.getElementById('progress-bar');
        this.mainContent = document.getElementById('main-content');
        this.finalFase = document.getElementById('finalFase');
        this.buttonLike = document.getElementById('buttonLike');
        this.buttonDislike = document.getElementById('buttonDislike');
        this.radioDif = document.getElementById("radioDif");
        this.continuarFimFase = document.getElementById("buttonContinuarFimFase"); 

        this.optionsMenuMapa = document.getElementById("optionsMenuMapa"); 
        this.nomeJogadorAlt = document.getElementById("nomeJogadorAlt"); 
        this.buttonForum = document.getElementById("buttonForum"); 

        this.aval =  document.getElementById("aval"); 

       
        this.tutorial = document.getElementById("tutorial"); 
        this.tutorial_fundo1 = document.getElementById("tutorial_fundo1");
        this.tutorial_fundo1_anim = document.getElementById("tutorial_fundo1_anim");
        this.tutorial_fundo2 = document.getElementById("tutorial_fundo2"); 
        this.tutorial_fundo2_anim1 = document.getElementById("tutorial_fundo2_anim1");
        this.tutorial_fundo2_anim2 = document.getElementById("tutorial_fundo2_anim2");
        this.buttonPrevTut = document.getElementById("buttonPrevTut"); 
        this.buttonCancelTut = document.getElementById("buttonCancelTut"); 
        this.buttonNextTut = document.getElementById("buttonNextTut"); 

        this.buttonPerfil = document.getElementById("buttonPerfil"); 
        this.telaPerfil = document.getElementById("perfil"); 
        this.emailText = document.getElementById("e-mailText"); 
        this.userNameText = document.getElementById("userNameText"); 
        this.senhaText = document.getElementById("senhaText"); 

    }


}