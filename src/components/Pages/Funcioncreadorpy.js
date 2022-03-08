import React from "react";

const Funcioncreador2 = ({urlv}) => {

    const inventario = [
        {id: 1 ,nombre: 'https://www.youtube.com/embed/U6Kc__TJMDE',titulo:'Instalación Python para Windows 10'},
        {id: 2 ,nombre: 'https://www.youtube.com/embed/LrbHTnyO32Y',titulo:'Primera clase'}
        
    ]; 
   
   

    if (urlv <=1 && urlv >= 0){
        return( 
        <div className="ratio ratio-16x9">        
            <iframe  allowFullScreen src={inventario[urlv].nombre} title="Video de YouTube"></iframe>
        </div>
            )
    } else {return(<div>
        <p>no hay nada aqui</p>
    </div>)}
} 
export default Funcioncreador2;