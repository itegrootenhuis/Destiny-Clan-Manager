<template>
  <div class="Home">
    <section id="banner">
      <div class="container">
        <h1 id="clanName">{{ClanInfo.name}}</h1>
        <h3 id="clanAbout">{{ClanInfo.about}}</h3>
      </div>
    </section>
  </div>
</template>

<script>
export default{
  data: () => ({
    ClanInfo: {},
    ClanMilestone: {}
  }),
  created () {
    // get clan info
    this.$Axios.get(this.$url + '/GroupV2/2219355/')
    .then(response => {
      this.ClanInfo = response.data.Response.detail
      // console.log(this.ClanInfo)
    })
    // get clan milestone hash
    this.$Axios.get(this.$url + '/Destiny2/Clan/2219355/WeeklyRewardState/')
    .then(response => {
      console.log(response.data.Response)
      // this.$Axios.get(this.$url + '/Destiny2/Milestones/1064137897/Content/') // ' + response.data.Response.milestoneHash + '
      // .then(response => {
      //   console.log(response.data)
      //   this.ClanMilestone = response.data.Response
      //   // console.log(this.ClanWeeklyRewards)
      // })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner{
  width: 100%;
  /* background-image: url('~assets/destiny-2-banner.png'); */
}
#clanName{
  font-size: 5em;
  font-family: fantasy;
}
#clanAbout{
  font-style: italic;
}
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
