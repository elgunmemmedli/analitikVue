<template>
  <div class="row">
    <div v-for="item in companiesLoaded" class="col-lg-4 col-md-6 col-sm-6 col-12">
      <div class="card card-statistic-1">
        <div class="card-wrap">
          <div class="card-header">
            <h4>{{item.referrer}}</h4>
          </div>
          <div class="card-body">
           {{item.percentage}}%
          </div>
        </div>
      </div>
    </div>
    <div v-if="fullReferrer.length > companiesLoaded.length" class="col-lg-4 col-md-6 col-sm-6 col-12">
      <div class="card card-statistic-1">
        <div class="card-wrap">
          <div class="card-header">
          </div>
          <div   class="card-body">
          <button @click="loadMore" class="btn btn-primary d-block mx-auto" >View More</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";

export default  {
  data(){
    return {
      fullReferrer: "",
      length: 8,
    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/fullReferrer').then(({data}) =>{
      this.fullReferrer = data;
    })
  },
  methods: {
    loadMore() {
      if (this.length > this.fullReferrer.length) return;
      this.length = this.length + 8;
    },
  },
  computed: {
    companiesLoaded() {
      return this.fullReferrer.slice(0, this.length);
    },
  },
}
</script>

