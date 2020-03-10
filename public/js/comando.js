 
function formFin(){
    document.getElementById('formularioIni').style.display = 'none';
    var boton = document.getElementById('ofertaBtn');
    boton.disabled = false;
}

$("#regisBtn").on("click",(function(e){
    e.preventDefault();
}));

var ofertaActual = 150000000;
var aleatorio = (Math.random()* 5000000 + 5000000);

function aumentar(){
    ofertaActual = Math.abs(Math.abs(ofertaActual) + Math.abs(aleatorio.toFixed(2)));
}

    
    document.getElementById("valor").innerHTML = ofertaActual;

    function actualizarValor(){
        aumentar();
        document.getElementById("valor").innerHTML = ofertaActual;
    }


document.getElementById('ofertaBtn').addEventListener('click',function(){
    var boton = document.getElementById('ofertaBtn');
    boton.disabled = true;
    var pb = (Math.random()* 0.5 + 0.3);
    var po = (Math.random()* 0.5 + 0.3);
    if(po > pb){
        console.log("succedd");
        actualizarValor();
        setTimeout(ver,30000);
        alert("aceptada");
    }
    console.log("failed")
    alert("no aceptada")
    setTimeout(ver,1000);
})

function ver(){
    var boton = document.getElementById('ofertaBtn');
    boton.disabled = false;
};