$(document).ready(function () {
    const ctx = document.getElementById('deviceChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [88.1, 10.5, 1.4],
          backgroundColor: ['#1f649980', '#aeb90f59', '#56565648'],
          borderColor: ['#ffffff', '#ffffff', '#ffffff'],
          borderWidth: 2
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              color: '#495057',
              font: {
                size: 12
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  });