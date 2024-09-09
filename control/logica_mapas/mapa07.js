export class mapa07{

    constructor(){
        
        this.quantPassosX = 0;
        this.quantPassosY = 0;
        this.dir = 'baixo';
        this.virou = '';
        this.continua = false;
        this.linha_comandos = [];
        this.linha_comandos_repita = [];
        this.repitaContent = "";
        
    }

    checarDesafio() {

        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());

        this.linha_comandos = this.code.split("");
        this.linha_comandos = this.linha_comandos.filter(function(element) {
            return element !== ' ';
        });

    
        let index = this.linha_comandos.indexOf("s");
        while (index !== -1) {
            this.linha_comandos.splice(index, 1);
            index = this.linha_comandos.indexOf("s");
        }
 

        let isSpecialChar = (element) => {
            return ['!', '@', '#', '$'].includes(element);
        };

        let index2 = this.linha_comandos.findIndex(isSpecialChar);

        while (index2 !== -1) {
            this.linha_comandos.splice(index2, 1);
            index2 = this.linha_comandos.findIndex(isSpecialChar);
        }

    }     
}