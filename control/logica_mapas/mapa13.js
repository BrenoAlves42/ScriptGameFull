export class mapa13{

    constructor(){
       
        this.quantPassosX = 0;
        this.quantPassosY = 0;
        this.dir = 'direita';
        this.p = 1;
        this.continua = false;
        this.linha_comandos = [];
        this.repita = 0;
        this.cores_encontradas = [];
        this.repeteEsperar = [];
        this.achouCor = false;
        this.vaiEsperar = false;
    }

    checarDesafio() {

        Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
        this.code = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());

        this.linha_comandos = this.code.split("");
        this.linha_comandos = this.linha_comandos.filter(function(element) {
            return element !== ' ';
        });

        let uniqueCores = new Set();

        for (let i = 0; i < this.linha_comandos.length; i++) {
            if ((this.linha_comandos[i] === 'a' || this.linha_comandos[i] === 'b') && !uniqueCores.has(this.linha_comandos[i])) {
                uniqueCores.add(this.linha_comandos[i]);
                this.cores_encontradas.push(this.linha_comandos[i]);
            }
        }
        
        for (let i = 0; i < this.linha_comandos.length - 1; i++) {
            if (this.linha_comandos[i] === 'e' && this.linha_comandos[i + 1] === '6') {
                this.vaiEsperar = true;
                break; 
            }
        }

        this.repeteEsperar = this.linha_comandos.filter((item, index) => this.linha_comandos.indexOf(item) !== index);

        if(this.repeteEsperar.length > 2){
            this.vaiEsperar == true;
        }

        }
        
            
}