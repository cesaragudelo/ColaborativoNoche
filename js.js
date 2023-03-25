document.addEventListener("DOMContentLoaded",function(){

let imagenes=[
{url:"imagenes/imagen1.jpg",
nombre:"morada" },
{url:"imagenes/imagen2.jpg",
nombre:"azul" },
{url:"imagenes/imagen3.jpg",
nombre:"dracula" },
{url:"imagenes/imagen4.jpg",
nombre:"frank" },
{url:"imagenes/imagen5.jpg",
nombre:"lobo" },
{url:"imagenes/imagen6.jpg",
nombre:"ardilla" },
{url:"imagenes/imagen7.jpg",
nombre:"verde" },
{url:"imagenes/imagen8.jpg",
nombre:"grupo" },
{url:"imagenes/imagen9.jpg",
nombre:"peludo" },
{url:"imagenes/imagen10.jpg",
nombre:"robot" },
{url:"imagenes/imagen11.jpg",
nombre:"morena" },
{url:"imagenes/imagen12.jpg",
nombre:"barbie" },
{url:"imagenes/imagen13.jpg",
nombre:"pepahermano" },
{url:"imagenes/imagen14.jpg",
nombre:"hermanopepa" },
{url:"imagenes/imagen15.jpg",
nombre:"pepavoladora" },
{url:"imagenes/imagen16.jpg",
nombre:"bug" },
{url:"imagenes/imagen17.jpg",
nombre:"bugamigos" },
{url:"imagenes/imagen18.jpg",
nombre:"gallo" },
{url:"imagenes/imagen19.jpg",
nombre:"elcompa" },
{url:"imagenes/imagen20.jpg",
nombre:"noviacompa" },
{url:"imagenes/imagen21.jpg",
nombre:"pitufina" },
{url:"imagenes/imagen1.jpg",
nombre:"morada" },
{url:"imagenes/imagen2.jpg",
nombre:"azul" },
{url:"imagenes/imagen3.jpg",
nombre:"dracula" },
{url:"imagenes/imagen4.jpg",
nombre:"frank" },
{url:"imagenes/imagen5.jpg",
nombre:"lobo" },
{url:"imagenes/imagen6.jpg",
nombre:"ardilla" },
{url:"imagenes/imagen7.jpg",
nombre:"verde" },
{url:"imagenes/imagen8.jpg",
nombre:"grupo" },
{url:"imagenes/imagen9.jpg",
nombre:"peludo" },
{url:"imagenes/imagen10.jpg",
nombre:"robot" },
{url:"imagenes/imagen11.jpg",
nombre:"morena" },
{url:"imagenes/imagen12.jpg",
nombre:"barbie" },
{url:"imagenes/imagen13.jpg",
nombre:"pepahermano" },
{url:"imagenes/imagen14.jpg",
nombre:"hermanopepa" },
{url:"imagenes/imagen15.jpg",
nombre:"pepavoladora" },
{url:"imagenes/imagen16.jpg",
nombre:"bug" },
{url:"imagenes/imagen17.jpg",
nombre:"bugamigos" },
{url:"imagenes/imagen18.jpg",
nombre:"gallo" },
{url:"imagenes/imagen19.jpg",
nombre:"elcompa" },
{url:"imagenes/imagen20.jpg",
nombre:"noviacompa" },
{url:"imagenes/imagen21.jpg",
nombre:"pitufina" }
];
//mover posicion imagenes 
imagenes.sort(()=>Math.random()-0.5);

/*LLENAR CUADRO*/
const $tablero=document.querySelector(".juego");
function llernartablero(){
    for(i=0;i<imagenes.length;i++){

        let $img = document.createElement("img");
        $img.setAttribute("src","imagenes/pregunta.jpg");
        /* 
        $img.setAttribute("width","10%");
        $img.setAttribute("height","10%");
        */
        $img.style.borderRadius ="10%";
        $img.setAttribute("position",i);
        $img.classList.add("imagenes");
        $tablero.appendChild($img);
        $img.addEventListener('click',mostrarimagen);
    };
};
llernartablero();
/*MOSTRAR IMAGEN*/
let $todasimg=document.querySelectorAll("img");
let posicion = [];
let nombres = [];
let contador=0;
let puntajeuno=0;
let puntajedos=0;
let contaciertos=1;
let sw=1;
let sw2=0;
function mostrarimagen(){
    
    let posiciones=this.getAttribute("position");
    posicion.push(posiciones);
    $todasimg[posicion[0]].removeEventListener('click',mostrarimagen);
    nombres.push(imagenes[posiciones].nombre);
    this.setAttribute("src",[imagenes[posiciones].url]);

    if(posicion.length===2){
    
        setTimeout (compararimagen,600);
    };  
};




});











 
