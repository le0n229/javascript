var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var CELL_SIZE = 16;
var SNAKE_SPEED = 100;
var FOOD_SPEED = 3000;

var snakeCoordX;
var snakeCoordY;
var snake = [];
var snakeTimer;
var direction = 'top';
var score = 0;

function init() {
    buildGameField();

    document.getElementById('snake-start').addEventListener('click', handleGameStart);
    document.getElementById('snake-renew').addEventListener('click', handleGameRefresh);

    window.addEventListener('keydown', handleDirectionChange);
}

function handleDirectionChange(event) {
    switch (event.keyCode) {
        case 37:
            direction = 'left';
            break;
        case 38:
            direction = 'top';
            break;
        case 39:
            direction = 'right';
            break;
        case 40:
            direction = 'bottom';
            break;
    }
}

function handleGameStart() {
    respawn();

    snakeTimer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, FOOD_SPEED);
}

function createFood() {
    var foodCreated = false;
    var $table = document.getElementById('game-table');

    while (!foodCreated) {
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var foodUnit = $table.children[foodX].children[foodY];

        if (!foodUnit.classList.contains('snake-unit')) {
            foodCreated = true;
            foodUnit.classList.add('food-unit');
        }
    }
}

function move() {
    var $table = document.getElementById('game-table');
    var newUnit;

    switch (direction) {
        case 'top':
            snakeCoordX--;
            if (snakeCoordX < 0) {
                snakeCoordX += FIELD_SIZE_X
            }

            break;
        case 'bottom':
            snakeCoordX++;
            if (snakeCoordX === FIELD_SIZE_X) {
                snakeCoordX -= FIELD_SIZE_X
            }
            break;
        case 'left':
            snakeCoordY--;
            if (snakeCoordY < 0) {
                snakeCoordY += FIELD_SIZE_Y
            }

            break;
        case 'right':
            snakeCoordY++;
            if (snakeCoordY === FIELD_SIZE_Y) {
                snakeCoordY -= FIELD_SIZE_Y
            }
            break;
    }

    if (
        snakeCoordX >= 0 && snakeCoordX < FIELD_SIZE_X &&
        snakeCoordY >= 0 && snakeCoordY < FIELD_SIZE_Y
    ) {
        newUnit = $table.children[snakeCoordX].children[snakeCoordY]; // td
    }

    if (newUnit && !isSnakeUnit(newUnit)) {
        newUnit.classList.add('snake-unit');
        snake.push(newUnit);

        if (!isFoodUnit(newUnit)) {
            var oldUnit = snake.shift();
            oldUnit.classList.remove('snake-unit')
        } else {
            // Выигрышная ветка
            createFood();
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    clearInterval(snakeTimer);
    alert('Game over');
}

function isFoodUnit(unit) {
    if (unit.classList.contains('food-unit')) {
        score++;
        unit.classList.remove('food-unit');

        return true;
    } else {
        return false;
    }
}

function isSnakeUnit(unit) {
    return snake.includes(unit);
}

function handleGameRefresh() {

}

function respawn() {
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);

    var $table = document.getElementById('game-table');
    var $snakeHead = $table.children[snakeCoordX].children[snakeCoordY];
    var $snakeTail = $table.children[--snakeCoordX].children[snakeCoordY];

    $snakeHead.classList.add('snake-unit');
    $snakeTail.classList.add('snake-unit');

    snake.push($snakeHead);
    snake.push($snakeTail);
}

function buildGameField() {
    var $table = document.createElement('table');
    $table.classList.add('game-table');
    $table.id = 'game-table';

    var $field = document.getElementById('snake-field');
    $field.style.width = FIELD_SIZE_X * CELL_SIZE + 'px';

    for (var i = 0; i < FIELD_SIZE_X; i++) {
        var $row = document.createElement('tr');

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            var $cell = document.createElement('td');
            $cell.classList.add('game-table-cell');
            $cell.style.width = CELL_SIZE + 'px';
            $cell.style.height = CELL_SIZE + 'px';

            $row.appendChild($cell);
        }

        $table.appendChild($row);
    }

    $field.appendChild($table);
}

window.addEventListener('load', init);