<template>
  <div id="Members">
  <p>Members: </p>
    <ul>
      <li v-for="Member in ClanMembers">{{Member.destinyUserInfo.displayName}}</li>
    </ul>
    <ul>
      <li v-for="Character in ClanMembersActivities">{{Character.Characters}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  data: () => ({
    ClanMembers: {},
    ClanMembersActivities: {}
  }),
  created () {
    // get Clan Members
    this.$Axios.get('https://www.bungie.net/platform/GroupV2/2219355/Members/?lc=en&fmt=true&currentPage=1&platformType=2')
    .then(response => {
      this.ClanMembers = response.data.Response.results
      this.ClanMembers.forEach(function (member) {
        this.$Axios.get(this.$url + '/Destiny2/1/Profile/' + member.destinyUserInfo.membershipId + '/?components=204')
        .then(response => {
          this.ClanMembersActivities = { Name: member.destinyUserInfo.displayName, Characters: response.data.Response.characterActivities.data }
          console.log(this.ClanMembersActivities)
        })
      }, this)
    })
  }
}
</script>

<!-- styling for the component -->
<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}
</style>