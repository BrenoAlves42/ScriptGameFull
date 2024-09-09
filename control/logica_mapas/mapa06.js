export class mapa06{

    constructor(){
        
        this.quantPassosX = 0;
        this.quantPassosY = 0;
        this.dir = 'esquerda';
        this.virou = '';
        this.continua = false;
        this.linha_comandos = [];
        this.repita = 0;
    }

    checarDesafio() {

        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
 
        this.linha_comandos = this.code.split("");
        this.linha_comandos = this.linha_comandos.filter(function(element) {
            return element !== ' ';
        });

        let index = this.linha_comandos.indexOf("r");
        if (index !== -1) {
            this.linha_comandos.splice(index, 1);
        }

        
 
        }
            
          
            
}