$(document).ready(function () {
    // Data for the charts
    const impressionsData = [
      { label: "aboutislam.net", value: 42946 },
      { label: "islamqa.org", value: 22745 },
      { label: "islamkazikr.com", value: 560 },
      { label: "turkishbasics.com", value: 152 },
      { label: "ummahjobs.com", value: 63 },
      { label: "theislamicreflections.com", value: 57 },
      { label: "islamicfinance.de", value: 12 },
      { label: "muslimhowto.com", value: 6 },
      { label: "shopnmstore.live", value: 4 },
      { label: "istandwithpalestine.org", value: 4 },
    ];
  
    const clicksData = [
      { label: "aboutislam.net", value: 12 },
      { label: "islamqa.org", value: 11 },
      { label: "islamkazikr.com", value: 0 },
      { label: "theislamicreflections.com", value: 0 },
      { label: "shopnmstore.live", value: 0 },
      { label: "islamicfinance.de", value: 0 },
      { label: "blogspot.com", value: 0 },
      { label: "istandwithpalestine.org", value: 0 },
      { label: "turkishbasics.com", value: 0 },
      { label: "muslimspace.co", value: 0 },
    ];
  
    // Function to render a bar chart
    function renderChart(containerId, data, maxValue) {
      data.forEach((item) => {
        const barWidth = (item.value / maxValue) * 100; // Calculate bar width as percentage
        $(`#${containerId}`).append(`
          <div class="bar__label">${item.label}</div>
          <div class="bar" style="width: ${barWidth}%"></div>
          <div class="bar__value">${item.value}</div>
        `);
      });
    }
  
    // Render both charts
    renderChart("chart__impressions", impressionsData, Math.max(...impressionsData.map(d => d.value)));
    renderChart("chart__clicks", clicksData, Math.max(...clicksData.map(d => d.value)));
  });


