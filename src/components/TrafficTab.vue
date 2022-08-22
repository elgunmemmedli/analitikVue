<template>
  <div class="Content_chart charts border-start border-end border-bottom p-3">
    <h5 class="pb-3"> Statistics </h5>
    <StatisticsTraffic/>
    <div class="audence_chart_body d-flex justify-content-between p-3">
      <div class="flex-grow-1 px-3">
        <h3 class="mb-5"> Keywords </h3>
        <Keywords/>
      </div>
      <div class="flex-grow-1 border-start border-end px-3 ">
        <h3> Referal Traffic </h3>
        <a @click.prevent="activeComp = 'FullReferer'" :class="{'active' : activeComp == 'FullReferer'}" href="">Domain</a> <span>/</span>
        <a @click.prevent="activeComp = 'FullRefererUrl'" :class="{'active' : activeComp == 'FullRefererUrl'}" href="">Url</a>
        <component :is="activeComp"></component>
      </div>
    </div>

  </div>
</template>

<script>
import Keywords from "./Keywords";
import FullReferer from "./FullReferer";
import FullRefererUrl from "./FullRefererUrl";
import StatisticsTraffic from "./StatisticsTraffic";

export default {
  data(){
    return {
      activeComp : 'FullReferer'
    }
  },
  components: {
    Keywords,
    FullReferer,
    FullRefererUrl,
    StatisticsTraffic
  }
}
</script>


