<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner-vue v-bind:loading="loadingStatus"></spinner-vue>
  </div>
</template>

<script>
import SpinnerVue from './components/SpinnerVue.vue';
import ToolBar from './components/ToolBar.vue';
import bus from './utils/bus.js';

export default {
  components: {
    ToolBar,
    SpinnerVue
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinne );
    bus.$on('end:spinner', this.endSpinner );
  }
}
</script>

<style>

body {
  padding:0;
  margin:0;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a {
  color: #35495e;
  text-decoration: none;
}
a.router-link-exact-active {
  text-decoration: underline;
}

</style>
