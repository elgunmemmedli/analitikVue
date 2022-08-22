<template>
  <div class="statistic-details mt-sm-4">
    <div class="statistic-details-item">
      <div class="detail-value">{{pageviews}}</div>
      <div class="detail-name">PageViews Total</div>
    </div>
    <div class="statistic-details-item">
      <div class="detail-value">{{uniquepageviews}}</div>
      <div class="detail-name">Uniqe pageview total</div>
    </div>
    <div class="statistic-details-item">
      <div class="detail-value">{{bounce}} %</div>
      <div class="detail-name">Bounce Rate</div>
    </div>
    <div class="statistic-details-item">
      <div class="detail-value">{{exits}}</div>
      <div class="detail-name">Exits</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default  {
  data(){
    return {
      pageviews: "",
      uniquepageviews : '',
      bounce : '',
      exits : ''

    }
  },
  created() {
    axios.get('http://ga.loc/api/v1/pageviews').then(({data}) =>{
      this.pageviews = data['ga:pageviews'];
    });
    axios.get('http://ga.loc/api/v1/uniquepageviews').then(({data}) =>{
      this.uniquepageviews = data['ga:uniquepageviews'];
    });
    axios.get('http://ga.loc/api/v1/bounce').then(({data}) =>{
      this.bounce = data['ga:bounceRate'];
    });
    axios.get('http://ga.loc/api/v1/exits').then(({data}) =>{
      this.exits = data['ga:exits'];
    })
  },
}
</script>
