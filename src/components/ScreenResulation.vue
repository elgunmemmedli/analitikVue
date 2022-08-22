<template>
  <div>
    <table class="table mt-3">
      <thead>
      <tr>
        <th scope="col">Country</th>
        <th scope="col">Visits</th>
        <th scope="col">% Visits</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in companiesLoaded">
        <td>{{item.resolution}}</td>
        <td>{{item.views}}</td>
        <td>
          <div class="d-flex align-items-center">
            <div class="progress flex-grow-1 rounded-0">
              <div class="progress-bar" role="progressbar" :style="`width: ${item.percentage}%;`" aria-valuenow="16.67" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="d-inline-block flex-grow-1">{{item.percentage}} % </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <button v-if="mobile.length > companiesLoaded.length" @click="loadMore"
            class="btn btn-primary btn-sm d-block ms-auto">View More
    </button>
    <p v-if="mobile.length === companiesLoaded.length" class="text-end"> View all results </p>  </div>
</template>


<script>
import axios from "axios";

export default  {
  data(){
    return {
      mobile: "",
      length: 7,
    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/mobile').then(({data}) =>{
      this.mobile = data;
    })
  },
  methods: {
    loadMore() {
      if (this.length > this.mobile.length) return;
      this.length = this.length + 10;
    },
  },
  computed: {
    companiesLoaded() {
      return this.mobile.slice(0, this.length);
    },
  },
}
</script>
