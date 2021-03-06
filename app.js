let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.add('player-inactive');
            document.getElementById('player-1').classList.remove('player-inactive');
        }

        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('td-0').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-1').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-2').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('td-3').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-4').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-5').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('td-6').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-7').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-8').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('td-0').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-3').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-6').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('td-1').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-4').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-7').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('td-2').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-5').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-8').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('td-0').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-4').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-8').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('td-2').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-4').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
        document.getElementById('td-6').style.backgroundColor = 'rgba(87,184, 72, 0.2)';
    }

    if (winner) {
        console.log('GEWONNEN.....', winner);
        gameOver = true;
    }
}