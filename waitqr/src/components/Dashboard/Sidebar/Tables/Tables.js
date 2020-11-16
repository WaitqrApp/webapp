import React from 'react';
import Card from 'react-bootstrap/Card';

function Tables() {
    return (
        <div className="container-fluid dashboard-componente mt-4 mb-4">
            <div className="row">
                <div className="col-md-6 text-left" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Mesa 1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Terraza</Card.Subtitle>
                            <Card.Text>
                                Entrada: 13:45<br />
                                Orden Procesada
                        </Card.Text>
                            <Card.Link href="#">Agregar Platillo</Card.Link>
                            <Card.Link href="#">Cerrar Mesa</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Tables;