<template>
    <div>
        <user-profile v-bind:info="userInfo">
            <template v-slot:username> {{ userInfo.id }} </template>
            <template v-slot:time> {{"joined : " +  userInfo.created }} </template>
            <template v-slot:karma> {{ userInfo.karma }} </template>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {

    // 데이터처리방법 2가지 
    // 1. 바로 computed로 처리하는 방법
    // 2. props를 이용하여 데이터를 내려주는 방법
    // vue를쓴다면 해당 컴포너틑에서 데이터를 받는것이 좋다. 하지만 상황에 맞게 사용하는것이 중요!

    components: {
        UserProfile,
    },
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}   
</script>

<style>

</style>