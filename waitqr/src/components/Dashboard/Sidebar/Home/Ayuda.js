import React from 'react';

import help from '../../img/Help.png';


function Ayuda() {
    return (

        <div className="container-fluid text-center dashboard-componente-ayuda mt-4">
            <div className="row">
                <div className="col-md-12" >
                </div>
            </div>
            <div className="row">
                <img className="help" src={help} />
                <div className="col-md-12">
                    <h1> ¿Necesitas ayuda?</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="platillosdashboard">
                        <p>Podemos ayudarte con mas herramientas para manejar tu restaurante.</p>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-12">
                    <div className="platillosdashboard">
                        <button className="btn btn-warning">CONTACTANOS</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ayuda;