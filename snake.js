function Snake(ctx,cols,rows,blockSize,canvas){
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.dir = 'Right';

    this.draw = function(){
        ctx.fillStyle = '#FFFFFF';
        for (let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y,blockSize, blockSize);
        }
        ctx.fillRect(this.x, this.y, blockSize,blockSize);
    }

    this.update = function(){
        for (let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y };
    
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    
        if (this.x > canvas.width-blockSize) {
        this.x = 0;
        }
    
        if (this.y > canvas.height-blockSize) {
        this.y = 0;
        }
    
        if (this.x < 0) {
        this.x = canvas.width-blockSize;
        }
    
        if (this.y < 0) {
        this.y = canvas.height-blockSize;
        }
    }

    this.changeDirection = function(direction) {
        switch(true) {
            case (direction=='Up'&& this.dir!= 'Down'):
                this.xSpeed = 0;
                this.ySpeed = -blockSize * 1;
                this.dir = direction;
                break;
            case (direction=='Down'&& this.dir!= 'Up'):
                this.xSpeed = 0;
                this.ySpeed = blockSize * 1;
                this.dir = direction;
                break;
            case (direction=='Left'&& this.dir!= 'Right'):
                this.xSpeed = -blockSize * 1;
                this.ySpeed = 0;
                this.dir = direction;
                break;
            case (direction=='Right'&& this.dir!= 'Left'):
                this.xSpeed = blockSize * 1;
                this.ySpeed = 0;
                this.dir = direction;
                break;
        }
        
    }
    this.eat = function(fruit) {
        if (this.x === fruit.x &&
          this.y === fruit.y) {
          this.total++;
          return true;
        }
    
        return false;
    }

    this.checkCollision = function() {
        let score = 0;
        for (var i=1; i<this.tail.length; i++) {
            console.log('x: '+this.x+' y: '+this.y+' tail.x: '+this.tail[i].x+' tail.y: '+this.tail[i].y);
            if (this.x === this.tail[i].x &&
            this.y === this.tail[i].y) {
            score = this.total;
            
            this.total = 0;
            this.tail = [];
            }
        }
        console.log(score);
        return score;
    }
}