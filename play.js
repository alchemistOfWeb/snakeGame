function Game(ctx){
    this.snake = 0;
    this.fruit = 0;
    this.game = 0;
    this.status = '';
    this.start =function(ctx,cols,rows,blockSize,gameCanvas){
        this.fruit = new Fruit(ctx,cols,rows,blockSize);
        this.snake = new Snake(ctx,cols,rows,blockSize,gameCanvas);
        this.snake.total =1;
        this.fruit.pickLocation();
    }
    this.play = function(SCREEN_WIDTH, SCREEN_HEIGTH){
        this.game = setInterval(()=>{
            ctx.clearRect(0,0,SCREEN_WIDTH, SCREEN_HEIGTH);
            this.fruit.draw();
            this.snake.update();
            this.snake.draw();
            if(this.snake.eat(this.fruit)){
                this.fruit.pickLocation();
            }
            let result = this.snake.checkCollision();
            document.querySelector('.score').innerText = this.snake.total;
            if(result){
                clearInterval(this.game);
                document.querySelector('.lost-score').innerText = 'your score: '+result;
                document.querySelector('.lost').classList.add('open');
                this.status = 'lost';
                console.log(this.status);
            }
        },75);
        window.addEventListener('keydown', ((evt) => {
            const direction = evt.key.replace('Arrow', '');
            this.snake.changeDirection(direction);
        }));
    }
    this.pause = function(){
        clearInterval(this.game);
    }
}