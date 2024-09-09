export class mapa04{

    constructor(){
        
        this.quantPassosX = 0;
        this.quantPassosY = 0;
        this.dir = 'direita';
        this.virou = '';
        this.continua = false;
        this.linha_comandos = [];
    }

    checarDesafio() {

        
        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
  
        this.linha_comandos = this.code.split("");

        
        let index = this.linha_comandos.indexOf("2");
        if (index !== -1) {
            this.linha_comandos.splice(index, 1, "1", "1", "1", "1", "1", "1", "1");
        }
    }

                
}