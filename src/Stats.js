import React from 'react'
import { Chart } from 'chart.js'

class Stats extends React.Component {

  render() {
    // return (<div></div>)
    return (
      <div style={{paddingTop:64}}>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )
  }

  componentDidMount() {
    var ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
          labels: ["Broccoli", "Wasabi", "Fennel", "Thai Basil", "Purple Radish", "Red Mustard"],
          datasets: [{
              label: '# Daily punnets output',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
  }

}

export default Stats
