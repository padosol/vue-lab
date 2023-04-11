<template>
  <div>
    <section>
        <!-- 질문 상세 정보 -->
        <div>
            <div>
                User
            </div>
            <div>
                <router-link v-bind:to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
            </div>
            <h2>{{ fetchedItem.title }}</h2>
        </div>
    </section>
    <section>
        <!-- 질문 댓글 -->
    </section>

    <!-- <p v-for=" val in item.comments" v-bind:key="val">
        {{ val.content }}
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['fetchedItem']),
        item() {
            return this.$store.state.item;
        }
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',id);
    }
}
</script>

<style>

</style>