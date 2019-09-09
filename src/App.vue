<template>
  <div id="app">
    <NavBar/>
    <div class="container">
        <Errors v-if="error" :msg="error" />
        <router-view/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import NavBar from "@/components/NavBar";
  import Errors from "@/components/Errors";
  export default {
    components: {
      NavBar,
      Errors
    },
    computed: {
      ...mapGetters(["error"])
    }
  }
</script>

<style>

</style>
