<template>
  <div>
    <section>
        <!-- 사용자 상세 정보 -->
        <user-profile v-bind:info="fetchedItem">
            <template v-slot:username>
                <router-link v-bind:to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
            </router-link>
            </template>
            <template v-slot:time>
               posted : {{ fetchedItem.time_ago }}
            </template>
        </user-profile>  
    </section>

    <section>
        <h2>{{ fetchedItem.title }}</h2>
    </section>

    <section>
        <!-- 질문 댓글 -->
        <div v-html="fetchedItem.content">
        </div>
    </section>


  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedItem'])
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id);
    },
    components: {
        UserProfile,
    }
}
</script>

<style scope>
.user-container{
    display: flex;
    align-items: center;
}
.fa-user{
    size: 2.0rem;
}
</style>