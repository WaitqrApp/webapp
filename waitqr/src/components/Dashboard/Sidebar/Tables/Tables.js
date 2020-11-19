import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Tables/styles/tables.css';


function Tables() {
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <div className="row">
                <div className="col-md-6 text-left contenido-mesas" >
                    <Card className="mt-1" style={{ width: '18rem', height:"18rem", justifyContent:'center'}}>
                        <Card.Body>
                            <Card.Title className="text-center font-weight-bold">
                                Mesa 1
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Terraza
                            </Card.Subtitle>
                            <Card.Text className="text-success font-weight-bold">
                                Status: Llena
                           </Card.Text>
                            <Card.Text>
                                <br/>
                                Entrada: 13:45
                           </Card.Text>
                           <Card.Text>
                                <br/>
                                Progreso: Orden Procesada
                           </Card.Text>
                            <Card.Link className="text-danger" href="#">Cerrar Mesa</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Tables;