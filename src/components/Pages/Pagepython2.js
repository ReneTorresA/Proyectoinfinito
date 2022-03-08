import React, { Fragment , useEffect, useState} from "react";
import '../../App.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import Pythoncourse from "./Pythoncourse";
import Funcioncreador2 from "./Funcioncreador";

function PythonPage() {

    
    
    const [contar,setContar] = useState(0)



   


    return (
    
    <div className="App_pythonpage">
    
        <div className="container  100vh bg-info">



               
                

                <hr className="my-5"/>
                
                
                <section>
                    


                    <div className="row mt-5">


                        <div className="col-lg-12">
                            <h1 className="h1 text-center mt-4">Bienvenido al curso de Python</h1>
            
                        </div>


                        

                    </div>

                <section>

                <Routes>
                    <Route path="Pythoncourse" element={<Pythoncourse/>} />
                </Routes>

                </section>

              


                </section>
              
                <section>

                    <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h5 className="mb-1">
                            
                            <Funcioncreador2 urlv={contar}/>
                            <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Bienvenida al Curso
                            </button>
                            <h1>clicks: {contar}</h1>
                           
                            
                        </h5>
                        
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">

                        

                            
                           

                        <p>Estructura de documentos</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <button onClick={()=> setContar(2)}>video 2</button>
                            <button onClick={()=> setContar(1)}>video 1</button>
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body text-right">
                            
                           <ul>
                               <li>
                                   
                                <button className="btn w-100 d-flex justify-content-right" onClick={()=> setContar(1)}>
                                
                                <svg className="w-75" xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                </svg>ㅤQué es un string?
                                
                                
                                </button>  
                               </li>
                           </ul>
                            
                              
                            
                            
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Modulo 3: Ciclo for
                            </button>
                        </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                            <p>Ciclo For y utilidades</p>
                        </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header" id="headingfour">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                            Modulo 4: Ciclo While
                            </button>
                        </h5>
                        </div>
                        <div id="collapsefour" className="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                        <div className="card-body">
                            <p>Estructura del ciclo While</p>
                            <p>Aplicaciones del ciclo While</p>
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingfive">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                            Funciones en Python
                            </button>
                        </h5>
                        </div>
                        <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                        <div className="card-body">
                            <p>Mi primera función</p>
                        </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header" id="headingsix">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                            Collapsible Group Item #3
                            </button>
                        </h5>
                        </div>
                        <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>



                    


                   

                 




                 


                  






                   









                   
                    </div>
                
                
                  
                
                </section>

               

                <hr className="mt-5"/>
                

              

            </div>
 
  
    
        
    
    </div>
    
      
    );
}

export default PythonPage;