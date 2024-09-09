export class Player {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight
        this.image = document.getElementById('playerSheet');
        this.spriteWidth = 64;
        this.spriteHeight = 64;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = this.canvasWidth/2 - 64;
        this.y = this.canvasHeight/2 - 64;
        this.minFrame = 0;
        this.maxFrame = 3;
        this.frameAtualPlayer = 0;
        this.fps = 0;
        this.fpsTimer = 8;
        this.direcao = "dir";

        


    }
    draw(context){
        if(this.direcao == "dir"){
            context.drawImage(this.image, this.frameAtualPlayer * this.spriteWidth, 1 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }else if(this.direcao == "esq"){
            context.drawImage(this.image, this.frameAtualPlayer * this.spriteWidth, 2 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }else if(this.direcao == "bx"){
            context.drawImage(this.image, this.frameAtualPlayer * this.spriteWidth, 0 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }else if(this.direcao == "cim"){
            context.drawImage(this.image, this.frameAtualPlayer * this.spriteWidth, 3 * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }

    update(){
        if(this.fps == 0){
            if(this.frameAtualPlayer < this.maxFrame){
                this.frameAtualPlayer++;
                this.fps++;
                
                
            }else{
                this.frameAtualPlayer = this.minFrame;
                
            }
        }else if(this.fps == this.fpsTimer){
            this.fps = 0;
        }else if(this.fps < this.fpsTimer){
            this.fps++;
        }
          
    }

}