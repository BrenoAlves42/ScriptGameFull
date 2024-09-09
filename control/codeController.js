var editor = ace.edit("terminal");


editor.session.setMode("ace/mode/javascript");
editor.setTheme("ace/theme/dracula");

editor.setOptions({
    fontSize: '20pt',
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
});

editor.setReadOnly(true);
// GET E SET


export class aceEditor{

    constructor(){
        this.repitaContent = "";
        this.posAtualFila = 0;
        this.temRepita = false;
        this.temDoWhile = false;
    }

    updateLista(comandosParaCod, elemento){
        let firstIndex = comandosParaCod.indexOf(elemento);

        if (firstIndex !== -1) {
            let index = comandosParaCod.indexOf(elemento, firstIndex + 1);
            while (index !== -1) {
                comandosParaCod.splice(index, 1);
                index = comandosParaCod.indexOf(elemento, index);
            }
        }
    }

    setValue(valor){
        if(editor.getValue() == ""){
            editor.setValue(valor);
        }else{
            editor.session.insert({
                row: editor.session.getLength(),
                column: 0
             }, "\n" + valor)
        }
       
    }

    setValueComandos(blocos){

        for (let i = 0; i < blocos.length; i++) {
            switch (blocos[i]) {
                case 'avancar1':
                    if(this.temDoWhile  && !blocos[i+1]){
                        this.temDoWhile = false;
                        this.setValue("    avançar(1);\n\n } while (true);\n");
      
                    }else{
                        this.setValue("avançar(1);");
                    }
                    
                    break;

                case 'avancarN':
                    this.setValue("avançar(0);");
                    break;
                    
                case 'avancarSelect':
                    
                        switch (blocos[i+1]) {
                            case '1':
                                if(this.temRepita && !blocos[i+2]){
                                    this.temRepita = false;
                                    this.setValue("avançar(1);\n\n }\n");

                                }else if(this.temDoWhile  && !blocos[i+2]){
                                    this.temDoWhile = false;
                                    this.setValue("    avançar(1);\n\n } while (true);\n");
                  
                                }else{
                                    this.setValue("avançar(1);");
                                }
                                break;

                            case '11':
                                if(this.temRepita && !blocos[i+2]){
                                    this.temRepita = false;
                                    this.setValue("avançar(2);\n\n }\n");
                                }else if(this.temDoWhile  && !blocos[i+2]){
                                    this.temDoWhile = false;
                                    this.setValue("    avançar(2);\n\n } while (true);\n");
                  
                                }else{
                                    this.setValue("avançar(2);");
                                }
                                break;
                        
                            default:
                                break;
                        }
                    
                    
                    break;
                case 'virarEsq':
                    this.setValue("virarEsquerda();");
                    break;
                case 'virarDir':
                    this.setValue("virarDireita();");
                    break;
                case 'virarSelect':
                    switch (blocos[i+1]) {
                        case '3':
                            if(this.temRepita && !blocos[i+2]){
                                this.temRepita = false;
                                this.setValue("virarEsquerda();\n\n }\n");

                            }else if(this.temDoWhile  && !blocos[i+2]){
                                this.temDoWhile = false;
                                this.setValue("    virarEsquerda();\n\n } while (true);\n");
              
                            }
                            else{
                                this.setValue("virarEsquerda()");
                            }
                            
                            break;
                        case '4':
                            if(this.temRepita && !blocos[i+2]){
                                this.temRepita = false;
                                this.setValue("virarDireita();\n\n }\n");
                                
                            }else if(this.temDoWhile  && !blocos[i+2]){
                                this.temDoWhile = false;
                                this.setValue("    virarDireita();\n\n } while (true);\n");
              
                            }
                            else{
                                this.setValue("virarDireita();");
                            }
                            break;
                    
                        default:
                            break;
                    }
                    break;
                
                case 'repita':
                    
                    this.temRepita = true;
                    let rCount = 0;
                    switch (blocos[i+1]) {
                        case "51":
                            rCount = 1;
                            break;
                        case "52":
                            rCount = 2;
                            break;
                        case "53":
                            rCount = 3;
                            break;
                        case "54":
                            rCount = 4;
                            break;
                        default:
                            break;
                    }


                    if(!blocos[i+2]){

                        this.setValue("for (let i = 0; i < "+rCount+"; i++) {\n\n   }\n}");
                    }else{
                       
                        this.setValue("for (let i = 0; i < "+rCount+"; i++) {\n");
                    }
                  
                    break;

                case 'repitaAte_alt':

                    this.temDoWhile = true;
                    this.setValue("do{\n ");

                default:
                    break;
            }
        }
       
    
    }

    getValue(){
        return editor.getValue();
    }

    clear(){
        editor.setValue("");
    }
}
