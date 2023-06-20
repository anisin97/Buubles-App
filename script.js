const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//CirclesMeasurements
const cx1 = 200;
const cy1 = 125;
const r1 = 70;

const cx2 = 200;
const cy2 = 320;
const r2 = 70;

const cx3 = 200;
const cy3 = 515;
const r3 = 70;

const cx4 = 200;
const cy4 = 710;
const r4 = 70;

const colorsArray = ['red', 'yellow', 'blue', 'green', 'red', 'purple', 'orange', 'pink', 'violet', 'magneta'];


//CircleFunction
function drawCircle(x, y, r, color){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

drawCircle(cx1, cy1, r1, colorsArray[parseInt((Math.random()*10))]);
drawCircle(cx2, cy2, r2, colorsArray[parseInt((Math.random()*10))]);
drawCircle(cx3, cy3, r3, colorsArray[parseInt((Math.random()*10))]);
drawCircle(cx4, cy4, r4, colorsArray[parseInt((Math.random()*10))]);


//ArrowMeasurements
const arrowLength = 125;
const halfConeHeight = 15;
const coneLength = 25;
const farEndDiff = 5;


//Function-for-Arrows
function drawArrow(yIndex, farEnd) {
    ctx.beginPath();
    ctx.moveTo(farEnd, yIndex-5);
    ctx.lineTo(farEnd - arrowLength, yIndex-5);
    ctx.lineTo(farEnd - arrowLength, yIndex - halfConeHeight - 5);
    ctx.lineTo(farEnd - arrowLength - coneLength, yIndex);
    ctx.moveTo(farEnd , yIndex-5);
    ctx.lineTo(farEnd, yIndex + 5);
    ctx.lineTo(farEnd - arrowLength, yIndex + 5);
    ctx.lineTo(farEnd - arrowLength, yIndex + halfConeHeight + 5);
    ctx.lineTo(farEnd - arrowLength - coneLength, yIndex);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

}

drawArrow(cy1, 1400);
drawArrow(cy2, 1400);
drawArrow(cy3, 1400);
drawArrow(cy4, 1400);
//Arrows
// ctx.beginPath();
// ctx.moveTo(1400, 125);
// ctx.lineTo(1250, 125);
// ctx.lineTo(1275, 110);
// ctx.moveTo(1250, 125);
// ctx.lineTo(1275, 140);
// ctx.stroke();

// Find Click Distance from Respective Circle Centers

function circleClicked(xClicked, yClicked) {
    const dist1 = Math.sqrt((xClicked - cx1) ** 2 + (yClicked - cy1) ** 2);
    const dist2 = Math.sqrt((xClicked - cx2) ** 2 + (yClicked - cy2) ** 2);
    const dist3 = Math.sqrt((xClicked - cx3) ** 2 + (yClicked - cy3) ** 2);
    const dist4 = Math.sqrt((xClicked - cx4) ** 2 + (yClicked - cy4) ** 2);
    console.log(dist1, "--", dist2, "--", dist3, "--", dist4);
    if (dist1 <= r1) {
        anim(1);
    }
    else if (dist2 <= r2) {
        anim(2);
    }
    else if (dist3 <= r3) {
        anim(3);
    }
    else if (dist4 <= r4) {
        anim(4);
    }

}



canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    circleClicked(x, y);
});


function anim(cNo) {
    var cy, cx, r;
        if (cNo === 1) {
            cy = cy1; cx = cx1; r=r1;
        }
        else if (cNo === 2) {
            cy = cy2; cx = cx2; r = r2;
        }
        else if (cNo === 3) {
            cy = cy3; cx = cx3; r = r3;
        }
        else if (cNo === 4) {
            cy = cy4; cx = cx4; r = r4;
        }
        console.log("cy", cy);
        var farEnd = 1400;

    function update() {
        

        ctx.clearRect(273, cy-70, canvas.width, 140);
        
        drawArrow(cy, farEnd);

        if (farEnd > 420) {
            farEnd = farEnd - 10;
            console.log("farEnd-in-if", farEnd);
        }
        else{
            drawCircle(cx, cy, r, colorsArray[parseInt((Math.random()*10))]);
            window.cancelAnimationFrame();
        }

        console.log("farEnd", farEnd);

        requestAnimationFrame(update);
    }

    update();
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(cx1, cy1, r1, colorsArray[parseInt((Math.random()*10))]);
    drawCircle(cx2, cy2, r2, colorsArray[parseInt((Math.random()*10))]);
    drawCircle(cx3, cy3, r3, colorsArray[parseInt((Math.random()*10))]);
    drawCircle(cx4, cy4, r4, colorsArray[parseInt((Math.random()*10))]);
    drawArrow(cy1, 1400);
    drawArrow(cy2, 1400);
    drawArrow(cy3, 1400);
    drawArrow(cy4, 1400);
}
);