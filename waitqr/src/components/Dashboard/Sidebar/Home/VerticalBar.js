import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./styles/home.css";
  


function getdata(ordenrestaurante) {
  // recibimos las ordenes del restaurante desde el Home
  //convertimos ordenrestaurante en legible para manipularlo usado aux como variable
  var aux= JSON.parse(JSON.stringify(ordenrestaurante))

if( aux.ordenrestaurante[0]){
  //esta es la forma en la que podemos acceder a cualquier propiedad de nuestro objeto
  //solo es necesario cambiar "registro" por cualquier otra propiedad necesaria.
  console.log("estoy dentro"+ aux.ordenrestaurante[0].registro)

  var dates = aux.ordenrestaurante[0].registro
}
}

const data = {

  labels: dates,
  datasets: [
    {
      label: 'Numero de Ordenes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <Bar className="ordenes-chart" data={data} options={options} />
  </>
);

export default VerticalBar;