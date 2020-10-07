import React from 'react';

function Visitas(){
    return(
        <div class="container-fluid ">
        <div className="row">
          <div className="col-md-6 text-left" >
          <p>Visitas mensuales</p>
          </div>
          <div className="col-md-6 text-right" >
          <p>filtro</p>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12">
          <table class="table">
  <thead className="text-center">
    <tr>
      <th scope="col">Dia</th>
      <th scope="col">Platillos</th>
      <th scope="col">Ingreso</th>
      <th scope="col">Restaurante</th>
      <th scope="col">Ordenes por hora</th>

    </tr>
  </thead>
  <tbody className="text-center">
    <tr>
     
      <td>08-09-2020</td>
      <td>1600</td>
      <td>34,220</td>
      <td>La Noria</td>
      <td>10/hr</td>
    </tr>
  
  </tbody>
</table>
            </div>
        
      </div>
      </div>
        
    );
}

export default Visitas;