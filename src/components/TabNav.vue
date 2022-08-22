<template>
  <div class="container">
  <div class="d-flex justify-content-between align-items-center">
    <h2 class="pt-5"> {{date_show[0]}} - {{date_show[date_show.length - 1]}} </h2>
    <div class="pt-4">
      <input  type="date" v-model="dateRange.date_start" />
      <input @change="Filter" type="date" v-model="dateRange.date_end" />
    </div>
  </div>
    <div>
      <ul class="nav nav-tabs pt-2">
        <li v-for="(tab,index) in tabs" :key="tab" class="nav-item">
          <a @click.prevent="tabActive(index)" :class="{'active' : index === 0, 'nav-link' : true }"   aria-current="page" href=" ">{{tab}}</a>
        </li>
      </ul>
    </div>
    <TabContent :date="dateRange" />
  </div>
</template>


<script>

import TabContent from './TabContent'
import axios from "axios";
import moment from "moment";

export  default {

  data(){
    return {
      tabs : ['Audence', 'Content', 'Traffic'],
      date_show : [],
      dateRange : {
        date_start : "",
        date_end : ""
      }
    }
  },

  components: {
    TabContent
  },
  methods: {
    tabActive(item) {
      let tabClass = document.querySelectorAll('.nav-link');
      let charts =  document.querySelectorAll('.charts');
      tabClass.forEach(item=>item.classList.remove('active'));
      charts.forEach(item=>item.classList.remove('show'));
      tabClass[item].classList.add('active');
      charts[item].classList.add('show');
    },

    Filter(){
      axios.get(`http://ga.loc/api/v1/dates?date_start=${this.dateRange.date_start}&date_end=${this.dateRange.date_end}`).then(({data}) =>{
        data.forEach(item=>{
          moment.locale("az")
          this.date_show.push(moment(item.date).format('LL'));
        })
      });
    }
  },

  created() {
    axios.get('http://ga.loc/api/v1/dates').then(({data}) =>{
      data.forEach(item=>{
        moment.locale("az")
        this.date_show.push(moment(item.date).format('LL'));
      })
    });
  }
}

</script>

<style>
@import "../assets/css/style.css";
</style>
