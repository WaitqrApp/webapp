import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./styles/home.css"


function DoughnutChart ({platillos}){

  platillos = ["Tacos",
               "Picanha",
               "Pitomate",
               "Tacos",
               "Tacos",
               "Tacos"];

  var distinct_dishes = [],
    dish_counts = [],
    prev;

  platillos.sort();
  for (var i = 0; i < platillos.length; i++) {
    if (platillos[i] !== prev) {
      distinct_dishes.push(platillos[i]);
      dish_counts.push(1);
    } else {
      dish_counts[dish_counts.length - 1]++;
    }
    prev = platillos[i];
  }

  console.log("distinct dishes" + distinct_dishes);
  console.log("dish count" + dish_counts);

  const data = {
    labels: distinct_dishes,
    datasets: [
      {
        label: "Ordenes por Día",
        data: dish_counts,
        backgroundColor: [
          "rgba(239, 182, 61, 1)",
          "rgba(64, 99, 118, 1)",
          "rgba(246, 135, 32, 1)",
        ],
        borderColor: [
          "rgba(239, 182, 61, 1)",
          "rgba(64, 99, 118, 1)",
          "rgba(246, 135, 32, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

    return (
    <>
      <Doughnut className="platillos-probados" data={data} />
    </>
  );
}

export default DoughnutChart;