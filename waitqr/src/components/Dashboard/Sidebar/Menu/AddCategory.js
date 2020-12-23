import React, {useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import menusContext from '../../../../context/menus/menusContext';
import seccionesContext from '../../../../context/secciones/seccionesContext';
 
function AddCategory(props) {
  
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
    //Extraer si un menu esta activo
    const menussContext = useContext(menusContext); 
    const {menu } = menussContext;
    


    //obtener la funcion del context de seccion
    const seccionessContext = useContext(seccionesContext);
    const {seccionseleccionada, errorseccion, agregarSeccion, validarSeccion, obtenerSecciones,
         actualizarSeccion, limpiarSeccion} = seccionessContext;

    //Effect que detecta si hay una seccion seleccionada
    useEffect(() =>{
        if(seccionseleccionada !== null){
            guardarSeccion(seccionseleccionada)
        }else{
            guardarSeccion({
                nombre: '',
                disponible: true,

            })
        }
    }, [seccionseleccionada]); //para que este revisando la seccion seleccionada
    //state del formulario
    const [seccion,guardarSeccion] = useState({
     nombre: '',
     disponible: true,

   })
    //extraer el nombre del proyecto
    const {nombre, disponible} = seccion;
    //si no hay restaurante seleccionado
    if(!menu)return null;
   

   //Array destructuring para extraer el proyecto actual
   const [menuActual] = menu
   

   //leer los valores del formulario
   const handleChange = e =>{
       guardarSeccion({
           ...seccion,
           [e.target.name] : e.target.value
           
       })
   }

   const onSubmit = e =>{
    
     e.preventDefault();
     console.log("si entre putooooo")


     //validar
     if(nombre.trim() === '') {
      console.log("si entre putooooo")

         validarSeccion();
         return;
     }

     //Si es edicion o si es nueva seccion
     if(seccionseleccionada === null ){
        //agregar la nueva seccion al state de secciones   
   seccion.menu = menuActual._id;
     agregarSeccion(seccion);
     }else{
         //actualizar menu existente
        actualizarSeccion(seccion);

        //Elimina menuseleccionado del state
        limpiarSeccion();
     }

 
     //Obtener y filtrar las tareas del proyecto actual, practicamente lo recarga
     obtenerSecciones(menuActual.id);

     //reiniciar el form
     guardarSeccion({
       nombre: '',
       disponible: true,
     })
     
  }
  
  return (
    
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
       <Form
            onSubmit={onSubmit}
            
          >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar Menu
                </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
         
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label>
                Nombre de la seccion
              </Form.Label>
              <Col  sm={"auto"}>
                <Form.Control
                 
                  type="text"
                   placeholder="Nombre de la seccion"
                   name="nombre"
                  value={nombre}
                  onChange={handleChange}   
                 />
              </Col>
            </Form.Group>
           
         
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit"  onClick={props.onHide}>Agregar Seccion</Button>
      </Modal.Footer>
      </Form>
    </Modal>
    
  );
}
export default AddCategory;