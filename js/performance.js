
// let myChart = null
// function renderiza(resposta) {

 
// const ctx = document.getElementById('myChart').getContext('2d');

// if (myChart != null){
//   myChart.destroy()
// }

// myChart = new Chart(ctx, {
//   type: 'line',
//   data: {
//     labels: resposta['data'],
//     datasets: [
//       {
//         label: 'Maina',
//         data: resposta['maina'],
//         borderColor: 'blue',
//         fill: false,
//         pointHoverRadius: 0,
//         pointRadius: 0,
        
//       },
//       {
//         label: 'Usd',
//         data: resposta['usd'],
//         borderColor: 'red',
//         fill: false,
//         pointHoverRadius: 0,
//         pointRadius: 0,
//       },
//       {
//         label: 'Ibov',
//         data: resposta['ibov'],
//         borderColor: 'green',
//         fill: false,
//         pointHoverRadius: 0,
//         pointRadius: 0,
//       },
//       {
//         label: 'CDI',
//         data: resposta['cdi'],
//         borderColor: 'yellow',
//         fill: false,
//         pointHoverRadius: 0,
//         pointRadius: 0,

      
//       }
//     ]
//   },
//   options: {
//     scales: {
//       x: {
//         ticks: {
//           maxTicksLimit: 6,
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: true,
//           autoSkipPadding: 10,

//           maxRotation: 90,
//         },
   
        
//       },
//       y: {
//         ticks: {
//           callback: (value, index, values) => {
//             if (value == 0){
//               return `${value}`;
//             }
//             return `${value}%`;
//           },
//           maxTicksLimit: 6,
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: true,
//           autoSkipPadding: 5,

          

//         },
     

//       },

//     },
//     interaction: {
//       mode: 'index',
//       intersect: false,

//     },
//     hover: {
//       mode: 'x',
//       intersect: false,
      
//     },
//     stacked: false,
//     plugins: {
//       title: {
//         display: true,
//         text: (ctx) => 'Performance',
//       },
//       tooltip: {
//         backgroundColor: 'rgba(0,0,0,0.8)',
//         titleColor: 'rgba(255,255,255,0.8)',
//         bodyColor: 'rgba(255,255,255,0.8)',
//         boxHeight: 1,
//         padding: 10,
        
//         position: 'nearest',
//         mode: 'index',
//         intersect: false,
//         callbacks: {
//           label: (context) => {
//             return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`;
//           },



//     }},
//     legend: {
//       position: 'bottom',
//       align: 'start',
//       labels: {
//         boxWidth: 20,
//         boxHeight: 0,
//         padding:20,
//         font: {
//           size: 14,
//         },

        
        


      
//       }}
//   }
//   }
// });
// ;
// ;


// };




// function changeDate(){
//   dataInicial = document.querySelector('input#dataInicial').value
//   dataFinal = document.querySelector('input#dataFinal').value
//   console.log(typeof(dataFinal))
//   if(dataFinal != '' && dataInicial != ''){
//     fetch(`https://troqueseuvale.com.br/performance/?data-inicial=${dataInicial}&data-final=${dataFinal}`, {
//       method: 'GET',
//     })
//     .then(response => response.json())
//     .then(data => renderiza(data))
//     .catch(error => console.error(error));

//   }

// }

// function getAPI(){
//     fetch('https://troqueseuvale.com.br/performance/', {
//       method: 'GET',
     
//     })
//     .then(response => response.json())
//     .then(data => renderiza(data))
//     .catch(error => console.error(error)); 

// }

  

// getAPI()


