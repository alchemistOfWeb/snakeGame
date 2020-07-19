document.addEventListener('DOMContentLoaded',function(){
    const menuSelector = document.getElementById('main-menu');
    const playBtn = document.getElementById('play-game');
    const settingsBtn = document.getElementById('settings');
    const recordsBtn = document.getElementById('records');

    const gameCanvas = document.getElementById('game-canvas');
    const SCREEN_WIDTH = 1000;
    const SCREEN_HEIGTH= 700;
    gameCanvas.width = SCREEN_WIDTH;
    gameCanvas.height = SCREEN_HEIGTH;
    
    const blockSize = 20;
    let cols = SCREEN_WIDTH/blockSize;
    let rows = SCREEN_HEIGTH/blockSize;
    let ctx = gameCanvas.getContext('2d');
    
    let gameStatus = "waiting";//play, pause, lost
    let game;
    
    playBtn.addEventListener('click',function(){
        
        if(gameStatus=='waiting'){
            //start new game
            gameStatus = 'play';
            menuSelector.classList.toggle('open');
            playBtn.innerText = 'continue';
            game = new Game(ctx);
            game.status = 'play';
            game.start(ctx,cols,rows,blockSize,gameCanvas);
            game.play(SCREEN_WIDTH, SCREEN_HEIGTH);
        }else{
            //continue game
            gameStatus = 'play';
            game.status = 'play';
            menuSelector.classList.toggle('open');
            game.play(SCREEN_WIDTH, SCREEN_HEIGTH);
        }
        console.log(gameStatus);
    });
    document.addEventListener('keydown', function(e){
        console.log(e.keyCode);
        if(e.keyCode == 27 && gameStatus != 'waiting'){
            menuSelector.classList.toggle('open');
            if(game.status == 'play'){
                //pause game
                game.status = 'pause';
                game.pause();
            }else if(game.status == 'pause'){
                //continue game
                game.status = 'play';
                game.play(SCREEN_WIDTH, SCREEN_HEIGTH);
            }else if(game.status == 'lost'){
                //menu game
                document.querySelector('.lost').classList.remove('open');
                gameStatus = 'waiting';
                game.status = 'waiting';
                playBtn.innerText = 'play again';
                console.log('ok_____________');

            }
            console.log(gameStatus);
        }
    });
});