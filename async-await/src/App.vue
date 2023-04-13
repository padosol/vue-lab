<template>
  <div id="app">
      <button @click="loginUser1">login</button>
      <h1>List</h1>
      <ul>
        <li v-for="list in lists" v-bind:key="list.id">
          {{  list }}
        </li>
      </ul>
</div>
</template>

<script>
import axios from 'axios';
import { handleExeption }  from './utils/handler';

export default {
  name: 'App',
  data() {
    return {
      lists: {}
    }
  },
  methods:{
    loginUser() {
      axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then( response => {
        if(response.data.id === 1){

          console.log("사용자가 인증되었습니다.")
          axios.get('http://jsonplaceholder.typicode.com/todos')
          .then(response => {
            this.lists = response.data;
          })
          .catch();
        }
      })
      .catch( error => console.log(error))
    },
    async loginUser1(){

      try {
        var response = await axios.get('http://jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1){
          var list = await axios.get('http://jsonplaceholder.typicode.com/todos')
          this.lists = list.data;
        }
      } catch (error) {
        handleExeption(error.status);
        console.log(error);
      }
      

    }
  }
}
</script>

<style>

</style>
