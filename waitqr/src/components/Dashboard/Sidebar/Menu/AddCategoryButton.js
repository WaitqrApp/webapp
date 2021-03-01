import React, {useState} from 'react';
import { Nav, Button } from "react-bootstrap";

import AddCategory from './AddCategory';


function AddCategoryButton(){

    const [modalShow3, setModalShow3] = useState(false);

    return( 
        <Nav>
            <Nav.Link className="boton-categoria">
                <Button variant="primary" size="m" block onClick={() => setModalShow3(true)}>
                            + Categoria 
                </Button>
                    <AddCategory show={modalShow3} onHide={() => setModalShow3(false)} />
            </Nav.Link>
        </Nav>

    );
}

export default AddCategoryButton;