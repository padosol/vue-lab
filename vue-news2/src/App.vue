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
import bus from './utils/bus'; 

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
  methods:{
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.log(this)
    console.log(bus)
    // 이벤트 버스는 addEventLister 같은 역할이기 떄문에 beforeDestrory를 통해서 항상 없애야함 아니면 스택쌓임
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
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
