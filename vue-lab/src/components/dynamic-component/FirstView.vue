<template>
  <div>
    First View
    

    <table>
      <thead>
        <th>id</th>
        <th>title</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in form" v-bind:key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
          form: [],
      }
    },
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
          console.log(res)
          this.form = res.data;
        }).catch( err => {
          console.log(err)
        })
    }
}
</script>

<style>

</style>