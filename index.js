function CountFunction(){

    let w1 = document.getElementById("w1").value;
    let w2 = document.getElementById("w2").value;
    let A = document.getElementById("A").value;

    //все единицы измерения в  СИ
    let t = [];
    let A_Res = [];

    if (w1 == w2){
        T_Res = 2*Math.PI/w1;
    }
    else {
        T_Res = 2*Math.PI/Math.abs(w1 - w2);
    }

    for(let i = -2*T_Res; i < 2*T_Res; i+=5*T_Res/10000)
    {
        t.push(i);
        A_Res.push(A*Math.cos(w1 * i) + A*Math.cos(w2 * i));
        
    }

    let layout_1 = {
        title: 'График биений',
        xaxis: {
            title: 'Время t (c)'
        },
        yaxis: {
            title: 'U (B)'
        }
    };

    Plotly.newPlot(
        "myDiv_1",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: A_Res,
        }],
        layout_1
    );

    return false;
}
