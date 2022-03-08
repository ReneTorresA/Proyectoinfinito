import React from "react";
import '../../App.css'
import Footer from '../Footer'
import {NavLink, Route, Routes} from 'react-router-dom'
import Pythoncourse from "./Pythoncourse";
function PythonPage() {


    return (
    
    <div className="App_pythonpage">
    
        <div className="container  100vh ">



               
                

                <hr className="my-5"/>
                
                
                <section className="container">
                    


                    <div className="row mt-5">


                        <div className="col-lg-6">
                            
                            
                            <div className="row">
                                
                                <div className="col-lg-12">
                                    <h2 className="h2 mt-5 text-top  mb-3">Curso de introducción a la programación con Python</h2>
                                </div>

                                <div className="col-lg-12">
                                    <p className="text-left">pción del cursoDescripción del cursoDescripción del cursoDescripción del cursoDescripción del cursoDescripción del cursoDescripción del curso</p>
                                </div>

                                <div className="col-lg-12 justify-content-right mx-auto">
                                    <p className="text-left">
                                        
                                    <svg className="w-75"xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-mortarboard" viewBox="0 0 16 16">
                                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                                    </svg> Profesor: René Torres  
                                        
                                       
                                    </p>
                                </div>

                                <div className="col-lg-12">
                                    <div className="row">

                                        <div className="col-lg-4 d-flex justify-content-right mx-auto">

                                        <p className="p">  
                                        <svg className="w-75"xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-watch" viewBox="0 0 16 16">
                                            <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"/>
                                            <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
                                        </svg> Duración: 5 hrs
                                        
                                        </p>
                                        

                                        </div>

                                        <div className="col-lg-4 d-flex justify-content-right">

                                        <p className="p">  
                                            <svg className="w-75" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart-line" viewBox="0 0 16 16">
                                                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                                            </svg> Nivel: Principiante
                                        </p>

                                        </div>

                                        <div className="col-lg-4">

                                          
                                        </div>

                                    </div>
                                </div>

                             
                            
                                <div className="col-lg-12 d-flex justify-content-center">
                                
                                    <NavLink className="btn w-50 btn-primary btn-lg " role="button"  to="/Python2">¡ IR AL CURSO !</NavLink>
                                                        
                                </div>

                                <div className="col-lg-12 d-flex mt-5 justify-content-left">
                                
                                    <h4>Herramientas que necesitas</h4>
                                </div>

                                <div className="col-lg-12 d-flex  justify-content-left">
                                
                                <ul >
                                    <li className="h7">
                                        <svg className="w-75"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                        </svg>  Una Computadora
                                            
                                            
                                    </li>
                                </ul>
                                </div>
                            </div>



                        </div>

                        
                        <div className="col-lg-6 my-5">

                        <div className="ratio ratio-16x9">
                            <iframe  allowFullScreen src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video"></iframe>
                        </div>

                        </div>

                    </div>

                <section>

                <Routes>
                    <Route path="Pythoncourse" element={<Pythoncourse/>} />
                </Routes>

                </section>

                

               


                </section>
                <h4 className="h4 text-center">Contenido del curso</h4>
                <section>

                    <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Bienvenida al Curso
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            <p>Entorno de trabajo</p>
                            <p>Estructura de documentos</p>
                            
                        </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Modulo 1: Primeros pasos
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <p>Mi primer hola mundo</p>
                            <p>¿Qué es un string?</p>
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