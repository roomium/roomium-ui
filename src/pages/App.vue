<template>
  <div id="app">
    <!-- <h1>INI APP</h1> -->
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header: Header,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:ital@1&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
}
</style>
