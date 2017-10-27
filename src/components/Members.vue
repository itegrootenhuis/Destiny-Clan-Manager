<template>
  <div id="Members">
    <div class="container" v-if="ClanMembers">
      <div class="col-md-6" v-for="Member in ClanMembers"><h3 @click="toggleChild(Member.destinyUserInfo.displayName)">{{Member.destinyUserInfo.displayName}}</h3>
        <div v-if="Member.characterActivities">
          <div class="characters" v-for="(char, idx) in Member.characterActivities">
            <p class="character">Character: {{idx}}</p>
            <div v-for="(charActivity, i) in char.availableActivities">
              <p v-if="(charActivity.Name === 'Leviathan' && charActivity.recommendedLight == 300)"><strong>Prestige-Raid:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>
              <p v-if="(charActivity.Name === 'Leviathan' && charActivity.activityHash == 2693136601)"><strong>Raid test 1:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>
              <p v-if="(charActivity.Name === 'Leviathan' && charActivity.activityHash == 287649202)"><strong>Raid test 2:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>
              
              <p v-else-if="($wildString.match('Nightfall*', charActivity.Name) && charActivity.recommendedLight == 300)"><strong>Prestige:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>
              <p v-else-if="($wildString.match('Nightfall*', charActivity.Name) && charActivity.activityHash == 145302664)"><strong>Nightfall Test 1:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>
              <p v-else-if="($wildString.match('Nightfall*', charActivity.Name) && charActivity.activityHash == 3920643231)"><strong>Nightfall Test 2:</strong> {{charActivity.Name}}: {{charActivity.isCompleted}}</p>

              <p v-else-if="charActivity.Name === 'Trials of the Nine'">{{charActivity.Name}}: {{charActivity.isCompleted}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    // console.log(!sessionStorage.getItem('ClanMembers'))
    if (!sessionStorage.getItem('ClanMembers')) {
      $this.$Axios.get($this.$url + '/GroupV2/2219355/Members/?lc=en&fmt=true&currentPage=1&platformType=2')
      .then(response => {
        $this.ClanMembers = response.data.Response.results
        $this.ClanMembers.forEach(function (member) {
          $this.$Axios.get($this.$url + '/Destiny2/1/Profile/' + member.destinyUserInfo.membershipId + '/?components=204')
          .then(response => {
            member.characterActivities = response.data.Response.characterActivities.data
            for (var char in member.characterActivities) {
              member.characterActivities[char].availableActivities.forEach(function (activity) {
                $this.$Axios.get($this.$url + '/Destiny2/Manifest/DestinyActivityDefinition/' + activity.activityHash + '/')
                .then(response => {
                  activity.Name = response.data.Response.displayProperties.name
                  // console.log(member)
                  // console.log($this.ClanMembers)
                  sessionStorage.setItem('ClanMembers', JSON.stringify($this.ClanMembers))
                })
              })
            }
          })
        }, this)
      })
    } else {
      // console.log('here')
      $this.ClanMembers = JSON.parse(sessionStorage.getItem('ClanMembers'))
      // console.log($this.ClanMembers)
    }
  },
  mounted: function () {
    $('.characters').toggle()
  },
  methods: {
    toggleChild: function (clanMember) {
      // let $this = this
      let clickedMember = $('#Members').find('h3:contains(' + clanMember + ')')[0]
      let membersCharacters = $(clickedMember).parent().find('.characters')
      $(membersCharacters).toggle()
    }
  }
}
</script>

<!-- styling for the component -->
<style scoped>
#Members{
 background-color: #777; 
}
p, h3 {
  color: #fff;
}
h3{
  cursor: pointer;
  font-size: 3em;
  text-decoration: underline
}
.character{
  font-size: 1.3em;
}
</style>

