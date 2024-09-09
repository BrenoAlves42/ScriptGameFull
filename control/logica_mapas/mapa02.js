
export class mapa02{

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

        

 
        }
            
          
            
}


