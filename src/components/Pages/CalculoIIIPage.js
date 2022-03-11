import React,{useState} from "react";
import "../../App.css";
import Funcioncreador2 from "./Funcioncreadorpy";

function PythonPage() {
    const [contar,setContar] = useState(0)
 



    const inventario = [
        {id: 1, titulo:'Instalación de Python para Windows 10'},
        {id: 2 ,titulo:'Primera clase'}
        
    ]; 
   

  return (
    <div className="App_pythonpage">
      <div className="container  100vh">
        <hr className="my-5" />

        <section className="container">
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="h2 mt-5 text-top  mb-3">
                    Curso de cáculo III 
                  </h2>
                </div>

                <div className="col-lg-12">
                  <p className="text-left">
                    Aprende a programar con Python desde 0!.
                  </p>
                </div>

                <div className="col-lg-12 justify-content-right mx-auto">
                  <p className="text-left">
                    <svg
            
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-mortarboard"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                    </svg>{" "}
                    Profesor: René Torres
                    
                  </p>
                  
                </div>

                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-4 d-flex justify-content-right mx-auto">
                      <p className="p">
                        <svg
                          
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-watch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                          <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
                        </svg>{" "}
                        Duración: 5 hrs
                      </p>
                    </div>

                    <div className="col-lg-4 d-flex justify-content-right">
                      <p className="p">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-bar-chart-line"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                        </svg>{" "}
                        Nivel: Principiante
                      </p>
                    </div>

                    <div className="col-lg-4"></div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-center">
                  
                </div>

                <div className="col-lg-12 d-flex mt-5 justify-content-left">
                  <h4>Herramientas que necesitas</h4>
                </div>

                <div className="col-lg-12 d-flex  justify-content-left">
                  <ul>
                    <li className="h7">
                      <svg
                        
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                      </svg>{" "}
                      Una Computadora
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 my-5">
             <img className='mx-auto d-block img-fluid'src="https://i.blogs.es/1d8a5b/python1/450_1000.jpg" alt="Curso de Python" ></img>
            </div>
          
            <div className='col-lg-12'>
                <h1 className= 'h3 text-center'>Contenidos</h1>
            </div>

            <div className="col-lg-12">
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 Módulo 1 
                  
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 
                <ol className="list-group">
                    <li className='list-group-item d-flex justify-content-between'>
                        <button className="btn w-100 d-flex justify-content-right" data-bs-toggle='modal' data-bs-target='#contenedor-modal' onClick={()=> setContar(0)}>
                                    
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>ㅤ0. Instalación de Python con Windows 10
                        </button>
                    </li>

                    <li className='list-group-item d-flex justify-content-between'>
                        <button className="btn w-100 d-flex justify-content-right" data-bs-toggle='modal' data-bs-target='#contenedor-modal' onClick={()=> setContar(1)}>
                                    
                            <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" className="bi bi-play-btn" viewBox="0 0 16 16">
                            <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>ㅤ1. Primera clase
                        </button>
                    </li>
                   
                </ol>
               
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Módulo 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Módulo 3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            
            <div className="accordion-item mb-3">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Módulo 4
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          

          </div>
  


            </div>
          
          </div>


          <div className='modal fade' id='contenedor-modal' tabIndex="-1">
                    <div className='modal-dialog modal-dialog-centered modal-dialog modal-xl'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h2 className='modal-title h4 text-center'> {inventario[contar].titulo} contador:{contar} </h2>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label="Close">
                                   
                                </button>
                            </div>
                            <div className='modal-body'>
                              
                                <Funcioncreador2 urlv={contar}/>
                            </div>    
                            <div className='modal-footer'>
                                <button type="button" className="btn btn-secondary ms-3  position-absolute start-0" onClick={()=> { if (contar>=1){setContar(contar -1)}}}>Anterior</button>
                                <button type="button" className="btn btn-secondary"  onClick={()=> {if(contar <=0){setContar(contar + 1)}}}> Siguiente</button>
                            </div>
                        </div>

                    </div>

            
           
            </div>



          

            <hr className="mt-5 pt-0"></hr>
          
        </section>
     


      




     
      </div>
      
      <footer className="bd-footer py-5 mt-4 footers">
                <div className="container">
                    <div className='row'>
                            <div className='col-lg-12'>
                                <p className='text-center'>Designed by<strong> René Torres</strong></p>
                            </div>

                    </div>
                </div>
      </footer>  
    </div>
    
  );
}

export default PythonPage;
