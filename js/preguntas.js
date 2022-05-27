let basepregunta =[
    {id:1,
        pregunta: "1",
    /* para agregar ayuda --> ayuda: "aqui va la ayuda", */
    correcta: "Consultar con su mecánico lo antes posible",
    incorrecta:["Cambiar los neumáticos de un lado hacia el otro y viceversa",
                "Bombear el pedal al frenar",
                "Usar su freno de mano"],
    },
    {id:2,
        pregunta: "2",
    /* para agregar ayuda --> ayuda: "aqui va la ayuda", */
    correcta: "Frenos mal ajustados",
    incorrecta:["Un bajo nivel del líquido de frenos",
                "Su freno de mano está todavía puesto",
                "Neumáticos con presión de aire inadecuada"],
    },
    {id:3,
        pregunta: "Mientras conduce usted siente un fuerte olor a gasolina.¿Qué debería hacer usted?",
    /* para agregar ayuda --> ayuda: "aqui va la ayuda", */
    correcta: "Detenerse e investigar el problema",
    incorrecta:["No preocuparse, ya que sólo son los gases de escape",
                "Continuar a una velocidad reducida",
                "Continuar porque sabe que se detendrá algunos kilómetros más allá"],
    },

];

for(let i=0; i<4; i++){
   basepregunta.sort(()=> Math.random()-0.5);
}
    pepito = [];
    preguntas2 = [...basepregunta];

    for(let i=0; i<1; i++){
        pepito.push(preguntas2[i]);
        
    }
    console.log(pepito);


