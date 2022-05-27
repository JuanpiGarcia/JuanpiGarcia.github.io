let basepregunta =[
    {id:1,
        pregunta: "Su vehículo se desvía hacia un lado cuando usted frena. Usted debería:",
    /* para agregar ayuda --> ayuda: "aqui va la ayuda", */
    correcta: "Consultar con su mecánico lo antes posible",
    incorrecta:["Cambiar los neumáticos de un lado hacia el otro y viceversa",
                "Bombear el pedal al frenar",
                "Usar su freno de mano"],
    },
    {id:2,
        pregunta: "¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?",
    /* para agregar ayuda --> ayuda: "aqui va la ayuda", */
    correcta: "Revisando su vehículo ante cualquier olor a gasolina extraño",
    incorrecta:["Manteniendo los niveles de agua sobre el máximo",
                "Evitando conducir con el estanque lleno de combustible",
                "Usando gasolina sin plomo"],
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
   

