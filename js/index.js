
//variables
const ayuda= document.querySelector("#ayuda");
let indice_preguntas = 0;
let puntaje = 0;
let dividiPregunta = "";
cargarPregunta(indice_preguntas);

function cargarPregunta(num){
    base= basepregunta[num];
    opciones = [...base.incorrecta];
    opciones.push(base.correcta);
    
    for(let i=0; i<4; i++){
        opciones.sort(()=> Math.random()-0.5);
    }
    //si la pregunta incluye un . 
    if(base.pregunta.includes('.')){
        dividiPregunta = base.pregunta.split(['.']);
        document.querySelector("#encabezado h1").innerHTML = dividiPregunta[0]+ ', <br>'+ dividiPregunta[1];

    }else{
        dividiPregunta = base.pregunta;
        document.querySelector("#encabezado h1").innerHTML = dividiPregunta;
    }

    
    document.getElementById("opcion1").innerHTML = opciones[0];
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];


}
cargarEventListener();
function cargarEventListener(){
    ayuda.addEventListener('click', pista);
   
}

async function SeleccionarOpcion(num){
    let validar = opciones[num] == base.correcta;
    /* RESPUESTA CORRECTA */
    if(validar){
        await Swal.fire({
            text: "Respuesta Correcta.",
            icon:"success",
            confirmButtonText: 'Siguiente',
        })
        puntaje++;
    }else {
        /*RESPUESTA INCORRECTA */
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text:`La respuesta correcta es "${base.correcta}"`,
            icon:"error",
            confirmButtonText: 'Siguiente',
        })
    }
    /*INDICE DE PREGUNTA IRÁ AUMENTANDO */
    indice_preguntas++;
    /*SI EL INDICE ES MAYOR O IGUAL A LA CANTIDAD DE PREGUNTAS */
    if(indice_preguntas>= basepregunta.length){
        indice_preguntas =0;
        await Swal.fire({
            title: 'El juego ha terminado.',
            text:`Puntaje Obtenido "${puntaje}/${basepregunta.length}".`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          puntaje=0;
    }
    cargarPregunta(indice_preguntas);
    
}

function pista(){
    Swal.fire({
        icon: "info",
        title: 'Ayuda!',
        text: base.ayuda,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}