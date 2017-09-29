<template>
  <div id="ClanSettings">
  ClanSettings
  </div>
</template>

<script>
export default{
  data: () => ({
    Manifest: {}
  }),
  created () {
    // get Clan Members
    this.$Axios.get('https://bungie.net/common/destiny2_content/sqlite/en/world_sql_content_4a0f279aaf9e1914bfcd210a1edea4a4.content')
    .then(response => {
      console.log(response.data.Response.mobileWorldContentPaths)
      this.Manifest = response.data.Response.mobileWorldContentPaths
      // console.log(this.Manifest)
    })
  }
}
</script>

<!-- styling for the component -->
<style>

</style>