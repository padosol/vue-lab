<template>
  <div>
    <p v-for="news in fetchedNews" v-bind:key="news">
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small>
        {{ news.time_ago }} by 
        <!-- <router-link v-bind:to="'/user/' +  news.user ">{{ news.user }}</router-link> -->
        <router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import axios from 'axios';
// import { fetchNewsList } from '../api/index';
import { mapGetters } from 'vuex';



export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },      
   created() {
    // NewsView가 created 되었을때 store의 dispatch를 이용해서 fetch_news action을 발동 시킴
    this.$store.dispatch('FETCH_NEWS');

    // // 1
    // fetchNewsList()
    // //2
    // .then(response => this.users = response.data)
    // .catch(error => console.log(error.message))
   }
}
</script>

<style>

</style>