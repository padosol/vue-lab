<template>
  <div>
    <div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
// import axios from 'axios';
import { fetchNewsList } from '../api/index';



export default {
  data(){
    return {
      users: []
    }
  },
   created() {
    fetchNewsList()
    .then(response => this.users = response.data)
    .catch(error => console.log(error.message))
   }
}
</script>

<style>

</style>