<template>
  <div id="Members">
  <p>Members: </p>
    <ul>
      <li v-for="Member in ClanMembers">{{Member.destinyUserInfo.displayName}} | {{Member.characterActivities}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  data: () => ({
    ClanMembers: {}
  }),
  created () {
    let $this = this
    // get Clan Members
    $this.$Axios.get($this.$url + '/GroupV2/2219355/Members/?lc=en&fmt=true&currentPage=1&platformType=2')
    .then(response => {
      $this.ClanMembers = response.data.Response.results
      $this.ClanMembers.forEach(function (member) {
        $this.$Axios.get($this.$url + '/Destiny2/1/Profile/' + member.destinyUserInfo.membershipId + '/?components=204')
        .then(response => {
          member.characterActivities = response.data.Response.characterActivities.data
          for (var char in member.characterActivities) {
            member.characterActivities['' + char + ''].availableActivities.forEach(function (activity) {
              $this.$Axios.get($this.$url + '/Destiny2/Manifest/DestinyActivityDefinition/' + activity.activityHash + '/')
              .then(response => {
                activity.Name = response.data.Response.displayProperties.name
                // console.log(member)
                // console.log($this.ClanMembers)
              })
            })
          }
        })
      }, this)
    })
  }
}
</script>

<!-- styling for the component -->
<style scope>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}
</style>