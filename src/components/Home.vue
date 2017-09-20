<template>
  <div class="Home">
    <h1>{{ClanName}}</h1>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  data: () => ({
    ClanName: '',
    posts: [],
    errors: []
  }),

// Fetches posts when the component is created.
  created () {
    var config = {
      headers: {
        'X-API-Key': '46b46fd8932d4fd2a67642ac21e1b3dc'
      }
    }
    // console.log(config)
    Axios.get('https://www.bungie.net/platform/GroupV2/2219355/', config)
    .then(response => {
      // JSON responses are automatically parsed.
      console.log(response)
      this.ClanName = response.ClanName
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
