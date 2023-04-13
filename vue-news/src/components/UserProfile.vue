<template>
    <div>
        <div class="user-container">
            <i class="fa-solid fa-user"></i>
            <div class="user-description">
                <span><slot name="username"></slot></span>
                <!-- <div>username:  {{ info.id }}</div> -->

                <!-- <router-link v-bind:to="`/user/${userInfo.id}`">
                   {{ userInfo.id }}
                </router-link> -->
                <div class="time">
                   <span> <slot name="time"></slot></span>

                    <span><slot name="karma"></slot></span>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        info: Object
    }
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
.user-container{
    display: flex;
    align-items: center;
}
.fa-user{
    size: 2.0rem;
}
</style>