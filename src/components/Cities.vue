<template>
  <table class="table mt-3">
    <thead>
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Visits</th>
      <th scope="col">% Visits</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in city" :key="item.id" >
      <td>{{item.resolution}}</td>
      <td>{{item.views}}</td>
      <td> {{item.percentage}} %</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default  {
  data(){
    return {
      city : "",
    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/desktop').then(({data}) =>{
      this.city = data;
    })
  }
}
</script>

