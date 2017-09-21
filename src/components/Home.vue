<template>
  <div class="Home">
    <section id="banner">
      <div class="container">
        <h1 id="clanName">{{ClanInfo.name}}</h1>
        <h3 id="clanAbout">{{ClanInfo.about}}</h3>
      </div>
    </section>
    
    
    <p>Members: </p>
    <ul>
      <li v-for="Member in ClanMembers">{{Member.destinyUserInfo.displayName}}</li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default{
  data: () => ({
    ClanInfo: {},
    ClanMembers: {}

  }),
  created () {
    var config = {
      headers: {
        'X-API-Key': '46b46fd8932d4fd2a67642ac21e1b3dc'
      }
    }
    // get Clan
    Axios.get('https://www.bungie.net/platform/GroupV2/2219355/', config)
    .then(response => {
      // console.log(response.data.Response.detail)
      this.ClanInfo = response.data.Response.detail
    })
    // get Clan Members
    Axios.get('https://www.bungie.net/platform/GroupV2/2219355/Members/?lc=en&fmt=true&currentPage=1&platformType=2', config)
    .then(response => {
      this.ClanMembers = response.data.Response.results
      // console.log(this.ClanMembers)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banner{
  width: 100%;
  background-image: url('~assets/destiny-2-banner.png');
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
