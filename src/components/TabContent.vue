<template>
  <div class="analitik border-start border-end border-bottom">
    <div class="audence_chart charts show">
      <h5 class="p-3"> Visits </h5>
      <LineChart/>
      <p class="mt-2"> no records found </p>
      <div class="audence_chart_body d-flex justify-content-between p-3">
        <div class="flex-grow-1 px-3">
          <h3> Demographics </h3>
          <a @click.prevent="activeCompDemographics = 'Countries'" :class="{'active' : activeCompDemographics}" href="">Countries</a>
<!--          <a @click.prevent="activeCompDemographics = 'Cities'" href="">Cities</a> <span>/</span>-->
<!--          <a href="">Languages</a>-->
          <component :is="activeCompDemographics"></component>
        </div>
        <div class="flex-grow-1 border-start border-end px-3 ">
          <h3> System </h3>
<!--          <a @click.prevent="activeCompSystem = 'Browsers'" href="">Browsers</a> <span>/</span>-->
<!--          <a @click.prevent="activeCompSystem = 'OperaytingSystem'"   href="">Operayting sytyem</a> <span>/</span>-->
          <a @click.prevent="activeCompSystem = 'ScreenResulationDesktop'" href="" :class="{'active' : activeCompSystem}">Screen Resulations</a>
          <component :is="activeCompSystem"></component>
        </div>
        <div class="flex-grow-1 px-3">
          <h3> Mobile </h3>
<!--          <a href="">Operayting sytyem</a> <span>/</span>-->
          <a :class="{'active' : true}" href="">Screen Resulations</a>
         <ScreenResulation/>
        </div>
      </div>
    </div>
    <ContentTab/>
    <TrafficTab/>
  </div>
</template>

<script>
import LineChart from "./LineChart";
import Countries from './Countries'
import Cities from './Cities'
import ContentTab from './ContentTab'
import TrafficTab from './TrafficTab'
import Browsers from './Browsers'
import OperaytingSystem from './OperaytingSystem'
import ScreenResulation from './ScreenResulation'
import ScreenResulationDesktop from "./ScreenResulationDesktop";

export default {
  data() {
    return {
      activeCompDemographics: 'Countries',
      activeCompSystem : 'ScreenResulationDesktop'
    }
  },
  components: {
    LineChart,
    Countries,
    Cities,
    ContentTab,
    TrafficTab,
    Browsers,
    OperaytingSystem,
    ScreenResulation,
    ScreenResulationDesktop

  },
  methods: {},


}
</script>
