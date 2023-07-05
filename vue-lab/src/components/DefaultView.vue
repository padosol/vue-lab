<template>
  <div>
    <div>Main</div>
    <router-link to="/main/first"> Frist </router-link> |
    <router-link to="/main/second"> Second </router-link> | 
    <router-link to="/main/third"> Third </router-link> 
    <div> ----------------- </div>
    <router-view />
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    method: {
        
    }
}
</script>

<style>

</style>