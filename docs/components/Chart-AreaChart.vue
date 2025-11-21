<script setup>
import { onMounted } from 'vue'
import Highcharts from 'highcharts'

onMounted(() => {
  Highcharts.chart('AreaChart', {
    chart: {
      type: 'area'
    },
    title: {
      text: '圖表名稱',
      style: {
        fontSize: '18px',
        color: '#00a19b',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar'],
      gridLineWidth: 1,
      labels: {
        align: 'left',
        style: {
          fontSize: '14px'
        }
      }
    },
    yAxis: [{
      tickAmount: 6,
      title: {
        text: ''
      }
    }, {
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null
      },
      labels: {
        style: {
          fontSize: '14px'
        }
      },
      showFirstLabel: false
    }],
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        lineWidth: 2,
        lineColor: '#00a19b',
        states: {
          hover: {
            lineWidth: 2
          }
        },
        threshold: null
      },
      series: {
        cursor: 'pointer',
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 4,
          fillColor: '#00a19b',
          lineWidth: 1
        }
      }
    },
    series: [{
      name: '淨值',
      color: 'rgba(0, 161, 155, 0.7)',
      fillOpacity: 0.25,
      data: [1, 3, 2]
    }],
    credits: {
      enabled: false
    }
  })
})
</script>

<template>
  <div id = "AreaChart"></div> 
</template>