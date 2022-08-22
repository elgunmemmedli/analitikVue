<template>
<div>
  <div class="Content_chart charts">
    <h5 class="p-3"> Pageviews </h5>
    <div class="card-body">
      <ContentChart/>
      <StatisticsDetails/>
    </div>



    <div class="audence_chart_body d-flex justify-content-between p-3">
      <div class="flex-grow-1 px-3">
        <h3> Top Contents </h3>
        <TopContents/>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import ContentChart from "./ContentChart";
import  TopContents from './TopContents'
import StatisticsDetails from "./StatisticsDetails";
export  default {

  components : {
    StatisticsDetails,
    ContentChart,
    TopContents
  },


}
</script>


