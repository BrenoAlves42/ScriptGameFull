
export class mapa01{

    constructor(){
        
        this.winPosX = 576;
        this.linha_comandos = [];
        
    }

    checarDesafio() {

        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
        
        this.linha_comandos = this.code.split("");        
        
        }

            
}

