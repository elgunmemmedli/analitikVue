<template>
<div>
  <vue-chart :height="chart_height" class="vue_chart" type="line" :data="chartData"></vue-chart>
</div>
</template>

<script>
import VueChart from 'vue-chart-js'
import axios from "axios";
import moment from 'moment'

export default {
  name: 'App',

  components: {
    VueChart
  },

  data: () => ({
    chart_height : 60,
    date : [],
    dateIndexEven : [],
    chartData: {
      labels: [],
      datasets: [
        {
          label: 'views',
          data: [],
          borderWidth: 5,
          borderColor: '#6777ef',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#fff',
          pointBorderColor: '#6777ef',
          pointRadius: 4
        },
      ]
    },
  }),

  created() {
    axios.get('http://ga.loc/api/v1/dates').then(({data}) =>{
      data.forEach(item=>{
        moment.locale("az")
        this.dateIndexEven.push(moment(item.date).format('ll'));
        this.chartData.datasets[0].data.push(item.views);
      })
    });

  },

  watch :{
    dateIndexEven(value){
      for (let i = 0; i < value.length; i++) {
        if(i % 2 === 0) {
          this.date.push(value[i]);
        }
      }
      this.chartData.labels = this.date
    }


  }





}
</script>


