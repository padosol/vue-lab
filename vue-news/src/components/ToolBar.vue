<template>
    <div class="header">
        {{ counter }}
        <button v-on:click="addNum">add</button>
        <router-link to="/jobs">Jobs</router-link> |
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter:1
        }
    },
    methods:{
        addNum(){
            this.counter+=1;
        }
    }
}
</script>

<style scoped>
.header {
    color:white;
    background-color:#42b883;
    display:flex;
    padding: 8px;
}
.header .router-link-exact-active {
    color: white;
}
</style>