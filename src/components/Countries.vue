<template>
  <div class="card-body">
    <div v-for="item in companiesLoaded" :key="item.id" class="mb-4 mt-4">
      <div class="d-flex justify-content-between">
        <div class="font-weight-bold mb-1">{{item.country}}</div>
        <div class="text-small font-weight-bold text-muted">{{item.views}}</div>
      </div>
      <div class="progress rounded-0" style="height: 15px;" data-height="3">
        <div class="progress-bar" role="progressbar" :style="`width: ${item.percentage}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{item.percentage}} %</div>
      </div>
    </div>
    <button v-if="countries.length > companiesLoaded.length" @click="loadMore"
            class="btn btn-primary btn-sm d-block ms-auto">View More
    </button>
    <p v-if="countries.length === companiesLoaded.length" class="text-end"> View all results </p>
  </div>
</template>

<script>
import axios from "axios";

export default  {
  data(){
    return {
      countries : "",
      length: 5,
    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/country').then(({data}) =>{
      this.countries = data;
    })
  },
  methods: {
    loadMore() {
      if (this.length > this.countries.length) return;
      this.length = this.length + 10;
    },
  },
  computed: {
    companiesLoaded() {
      return this.countries.slice(0, this.length);
    },
  },
}
</script>
