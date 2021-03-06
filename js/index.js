//variables
const ayuda= document.querySelector("#ayuda");
const QuieresJugar = document.getElementById("jugar");
const comenzarjuego = document.querySelector("#adelante");
let indice_preguntas = 0;
let puntaje = 0;
let preguntaActual =1;
let dividiPregunta = "";
let popo = 0;
npreguntas = document.getElementById('numeropreguntas').value;


function cargarPregunta(num){
    base= pepito[num];
    //añade a la variable opciones las incorrectas
    opciones = [...base.incorrecta];
    //añade al ultimo la opcion correcta
    opciones.push(base.correcta);
    //las respuesta serán aleatorias
    for(let i=0; i<4; i++){
        opciones.sort(()=> Math.random()-0.5);
    }
    //añade la pregunta al al inicio del array
    opciones.push(base.pregunta);
    //si no hay ayuda
    if(base.ayuda){
        document.getElementById("ayuda").style.display = "";
    }else{
        document.getElementById("ayuda").style.display = "none";
    }

    //si la pregunta incluye un . 
    if(base.pregunta.includes('.',)){
        dividiPregunta = base.pregunta.split(['.']);
        document.querySelector("#encabezado h1").innerHTML = dividiPregunta[0]+ '<br>'+ '<div style="text-align:center">'+ dividiPregunta[1] +'</div>';

    }else{
        dividiPregunta = base.pregunta;
        document.querySelector("#encabezado h1").innerHTML = opciones[4];
    }
    document.getElementById("opcion1").innerHTML = opciones[0];
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];


}
cargarEventListener();
function cargarEventListener(){
    ayuda.addEventListener('click', pista);
    QuieresJugar.addEventListener('click',jugar);
    comenzarjuego.addEventListener('click', abretodo);
   
}
function delante(){
    window.open("https://juanpigarcia.github.io/");
}

async function SeleccionarOpcion(num){
    let validar = opciones[num] == base.correcta;
    /* RESPUESTA CORRECTA */
    

    if(validar){
        await Swal.fire({
            background: '#393231',
            text: "Respuesta Correcta.",
            color: "#fff",
            icon:"success",
            confirmButtonText: 'Siguiente',
        })
        puntaje++;
        
    }else {
        /*RESPUESTA INCORRECTA */
        await Swal.fire({
            background: '#393231',
            text: "Respuesta Correcta.",
            color: "#fff",
            title: "Respuesta Incorrecta",
            text:`La respuesta correcta es "${base.correcta}"`,
            icon:"error",
            confirmButtonText: 'Siguiente',
        })
        
    }
    preguntaActual++;
    /* se añade aquí, porque cada vez que pasa pregunta se ira actualizando el contador de la pregunta */
    numeropregunta();
    /*INDICE DE PREGUNTA IRÁ AUMENTANDO */
    indice_preguntas++;
    /*SI EL INDICE ES MAYOR O IGUAL A LA CANTIDAD DE PREGUNTAS */
    if(indice_preguntas>= pepito.length){
        
        Swal.fire({
            background: '#393231',
            text: "Respuesta Correcta.",
            color: "#fff",
            title: 'El juego ha terminado',
            text: `Puntaje Obtenido "${puntaje}/${pepito.length}".`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Volver a iniciar',
            cancelButtonText: 'Inicio'
          }).then((result) => {
            if (!result.isConfirmed) {
               location.reload();
            }else{
                jugar2();
            }
          })
          indice_preguntas =0;
          preguntaActual =1;
          puntaje=0;
          
    }
    cargarPregunta(indice_preguntas);
}

function jugar2(){
    document.getElementById('jugar').style.display = 'none';
    document.getElementById('tablero').style.display = 'block';
    numeropregunta();
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
//que pregunta va?
function numeropregunta(){
    document.getElementById('numpregunta').innerHTML = 'Pregunta ' + preguntaActual+ ' de '+ pepito.length;
}
function cargar(numero){
    pepito = [];
    preguntas2 = [...basepregunta];

    for(let i=0; i<numero; i++){
        pepito.push(preguntas2[i]);
        
    }
    cargarPregunta(indice_preguntas);

}
//comenzar juego
function abretodo(){
      //captura la cantidad de preguntas del input
      npreguntas = document.getElementById('numeropreguntas');
      if(npreguntas.value.length > 0){
          let numero = npreguntas.value;
          cargar(numero);
          //oculta el div
            document.getElementById('jugar').style.display = 'none';
            document.getElementById('tablero').style.display = 'block';
            numeropregunta();

        }else{
            console.log("input vacio");
            document.querySelector('#error').classList.add('error');
            document.querySelector("#error").innerHTML = " Por favor ingrese el numero de preguntas.";
        }
      
    
}