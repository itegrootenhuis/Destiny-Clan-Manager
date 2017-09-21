<template>
  <div id="app">
    <nav>
      <div class="container">
        <div class="btn-group btn-group-justified">
          <router-link v-bind:to="'/'" class="btn btn-default">Home</router-link>
          <router-link v-bind:to="'/Members'" class="btn btn-default">Members</router-link>
          <router-link v-bind:to="'/ClanSettings'" class="btn btn-default">Clan Settings</router-link>
          <router-link v-bind:to="'/AppSettings'" class="btn btn-default">App Settings</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.btn-group a{
  color: #222;
  font-size: 1.5em;
}
nav{
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: #444
}
</style>
