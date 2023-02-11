<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 50px 60px;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  background-color: #F6F8FF;

  font-family: 'Helvetica Neue';
  font-style: normal;
}
</style>
