let values = [];

window.onload = ()=>{
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    setInterval(draw, 1000/60);
    for(let i = 0; i < canv.width; i++){
        values.push(Math.random()*canv.height);
    }
}

function draw(){
    ctx.fillStyle = "rgb(65, 65, 65)";
    ctx.fillRect(0,0,canv.width, canv.height);
    ctx.fillStyle = "red";
    for(let j = 0; j < canv.width; j++){
        ctx.fillRect(j,0,1,values[j]);
    }
    for(let k = 0; k < canv.width;k++){
        if(values[k] > values[k+1]){
            let temp = values[k];
            values[k] = values[k+1];
            values[k+1] = temp;
        }
    }
}

