import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Tables/styles/tables.css';
import TableCard from './TableCard';

function Tables() {
    return (
        <div className="container-fluid dashboard-componente-mesas mt-4 mb-4">
            <div className="row">
                <div className="col-md-6 text-left contenido-mesas" >
                    <TableCard></TableCard>
                </div>
            </div>
        </div>
    );
}

export default Tables;