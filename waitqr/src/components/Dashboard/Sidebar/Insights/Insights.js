import React from 'react';
import insights from '../img/insight-final.jpeg';
import '../Insights/styles/insights.css';

function Insights() {
    return (
        <div className="container-fluid mt-4 mb-3">
            <h1>Estadísticas</h1>
                    <img className="placeholder" src={insights}/>
        </div>
       
    );
}

export default Insights;