import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./styles/home.css";
  
function VerticalBar ({days})  {

  days = ["2021-02-07", "2021-02-07", "2021-01-01", "2020-01-01", "2020-01-01", "2020-01-01", "2020-01-01"]

  var distinct_days = [],
    day_counts = [],
    prev;

  days.sort();
  for (var i = 0; i < days.length; i++) {
    if (days[i] !== prev) {
      distinct_days.push(days[i]);
      day_counts.push(1);
    } else {
      day_counts[day_counts.length - 1]++;
    }
    prev = days[i];
  }

  console.log('distinct days' + distinct_days)
  console.log('day count' + day_counts)

  const data = {

    labels: distinct_days,
    datasets: [
      {
        label: 'Ordenes por Día',
        data: day_counts,
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
  }
  console.log('hola hola aqui los labels' + days)
  return (
  <>
    <Bar className="ordenes-chart" data={data} options={options} />
  </>
  );
  
}

export default VerticalBar;
