<template>
<div>
  <table class="table mt-3">
    <thead>
    <tr>
      <th scope="col" width="60%">Page</th>
      <th scope="col" width="20%">Pageviews</th>
      <th scope="col" width="20%">% Pageviews</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in companiesLoaded" >
      <td>{{item.path}}</td>
      <td>{{item.views}}</td>
      <td>
        <div class="d-flex align-items-center">
          <div class="progress flex-grow-1 rounded-0">
            <div class="progress-bar" role="progressbar"  :style="`width: ${item.percentage}%;`" aria-valuenow="16.67" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="d-inline-block flex-grow-1"> {{item.percentage}} %</div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
  <button v-if="pagePath.length > companiesLoaded.length" @click="loadMore"
          class="btn btn-primary btn-sm d-block ms-auto">View More
  </button>
  <p v-if="pagePath.length === companiesLoaded.length" class="text-end"> View all results </p> </div>

</template>

<script>
import axios from "axios";

export default  {
  data(){
    return {
      pagePath: "",
      length: 5,
    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/pagePath').then(({data}) =>{
      this.pagePath = data;
    })
  },
  methods: {
    loadMore() {
      if (this.length > this.pagePath.length) return;
      this.length = this.length + 10;
    },
  },
  computed: {
    companiesLoaded() {
      return this.pagePath.slice(0, this.length);
    },
  },
}
</script>

