<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item">

      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>

      <br>
      <br>
      

    </p>
  </div>
</template>

<script>
// this.$store 가 vuex임
import { mapGetters } from 'vuex';

export default {
  computed: {

    //getter를 본연의 이름으로 저장하려면 배열 형태로 넣으면 됨
    ...mapGetters(['fetchedAsk'])

    // getter를 다른 이름으로 저장하려면 객체형태로 넣으면 됨
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })


    // mapState를 이용하여 구현
    // ...mapState({
    //   ask: state => state.ask
    // })

    // 기본형
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>
</style>