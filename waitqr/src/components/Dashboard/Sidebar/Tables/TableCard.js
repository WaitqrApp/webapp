import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, Card } from "react-bootstrap";
import '../Tables/styles/tables.css';

import TableModal from './TableModal';





function TableCard({mesa}) {

    const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
    <Card className="" style={{ width: '18rem', height: "11rem", justifyContent: 'center' }}>
                        <Card.Body>
                            <Card.Title className="text-center font-weight-bold">
                               {mesa.numero}
                            </Card.Title>
                            <TableModal show={modalShow} onHide={() => setModalShow(false)}
                                    mesa={mesa}
                                />
                        </Card.Body>
                    </Card>
    </Fragment>
  );
}

export default TableCard;