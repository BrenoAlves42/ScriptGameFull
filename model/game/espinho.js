export class Espinho {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight
        this.image = document.getElementById('espinho');
        this.spriteWidth = 64;
        this.spriteHeight = 64;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.canvasWidth/2 - 64;
        this.y = this.canvasHeight/2 - 64;
        this.minFrame = 0;
        this.maxFrame = 1;
        this.frameAtualEspinho = 0;


    }
    draw(context){

        context.drawImage(this.image, this.frameAtualEspinho * this.spriteWidth, 0 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        
    }

    update(){
        if(this.frameAtualEspinho == 0){
            this.frameAtualEspinho = 1;
        }else{
            this.frameAtualEspinho = 0;
        }
          
    }

}