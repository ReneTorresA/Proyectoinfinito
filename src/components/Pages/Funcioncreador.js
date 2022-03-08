import React, { Fragment } from "react";





const Funcioncreador2 = ({urlv}) => {

    const inventario = [
        {id: 1 ,nombre: 'https://www.youtube.com/embed/6lvI-gTF_X8', cantidad: 2},
        {id: 2 ,nombre: 'https://www.youtube.com/embed/MCEgxH0O3Bg', cantidad: 0},
        {id: 3 ,nombre: 'https://www.youtube.com/embed/doLMt10ytHY', cantidad: 5}
    ]; 
   
    console.log(typeof urlv)
    console.log(inventario[urlv].nombre)
    return (

          
                <div className="ratio ratio-16x9">           
                    <iframe  allowFullScreen src={inventario[urlv].nombre} title="Video de YouTube"></iframe>
                </div>
           
            

     
    );
      
} 
export default Funcioncreador2;