$(function(){

    let player = $("#player");
    let block = $("#block");
    let score = 0;

    let playerX = 215;
    let blockY = -50;
    let blockX = 100;
    let speed = 4;

    // キー入力
    $(document).on("keydown", function(e){
        if (e.key === "ArrowLeft" && playerX > 0) {
            playerX -= 20;
        }
        if (e.key === "ArrowRight" && playerX < 430) {
            playerX += 20;
        }
        player.css("left", playerX + "px");
    });

    // ゲームループ
    let timer = setInterval(function(){

        blockY += speed;
        block.css("top", blockY + "px");

        // 当たり判定
        let pLeft = playerX;
        let pRight = playerX + 50;
        let pTop = 590;
        let pBottom = 640;

        let bLeft = blockX;
        let bRight = blockX + 50;
        let bTop = blockY;
        let bBottom = blockY + 50;

        if (
            pLeft < bRight &&
            pRight > bLeft &&
            pTop < bBottom &&
            pBottom > bTop
        ) {
            alert("Game Over");
            clearInterval(timer);
        }

        // 下まで行ったらリセット
        if (blockY > 640) {
            blockY = -50;
            blockX = Math.random() * 430;
            block.css("left", blockX + "px");
            score++;
            speed += 0.3;
            $("#score").text("Score: " + score);
        }
    }, 16); // 約60fps

});