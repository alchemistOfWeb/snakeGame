function Fruit(ctx,cols,rows,blockSize){
    this.x = 0;
    this.y = 0;

    this.pickLocation = function(){
        this.x = Math.floor(Math.random()*cols)*blockSize;
        this.y = Math.floor(Math.random()*rows)*blockSize;
    }

    this.draw = function(){
        ctx.fillStyle = '#e94c1a';
        ctx.fillRect(this.x, this.y, blockSize, blockSize);
    }
}
