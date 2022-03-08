import React from "react";
import '../../App.css'
import Funcioncreador from "./Funcioncreador";


function Pythoncourse() {
    return <div className="container">


        <section>
        
        <div className="row">

        <div className="col-lg-12 text-center">
            
            <h2>Entorno de trabajo</h2>
        
            <Funcioncreador url="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"/>
        </div>


        </div>
        </section>

        <section>
        <div className="row">
                <div className="col-lg-6">

                    <button className="btn btn-primary" type="submit">Anterior</button>

                </div>

                <div className="col-lg-6">
                    <button className="btn btn-primary" type="submit">Siguiente</button>

                    
                </div>
            </div>
        </section>


    </div>

    }

export default Pythoncourse;