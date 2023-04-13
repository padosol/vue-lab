<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" v-bind:key="item" class="post">
        <!-- point 영역 -->
        <div class="points">
            <!-- || 이거 쓰면 null 이면 넘어가나봄--> 
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
            <!-- 타이틀 영역 -->
          <p class="news-title">

            <template v-if="item.domain">
                <a v-bind:href="item.url">
                     {{ item.title }}
                </a>
            </template>
            <template v-else>
                <router-link v-bind:to="`/item/${item.id}`" >
                    {{ item.title }}
                </router-link>
            </template>

          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by 
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
                {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
                {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    computed: {
        listItems() {
            const name = this.$route.name;
            let item = [];
            if(name == 'FETCH_ASK'){
                item = this.$store.state.ask;
            }else if(name === 'FETCH_NEWS'){
                item = this.$store.state.news;
            }else if(name === 'FETCH_JOBS'){
                item = this.$store.state.jobs;
            }
            return item;
        }
    },      
    created() {
        // NewsView가 created 되었을때 store의 dispatch를 이용해서 fetch_news action을 발동 시킴
        this.$store.dispatch(this.$route.name);
    }
}
</script>

<style scoped>
.news-list{
  margin : 0;
  padding : 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #41b883
}
.news-title{
  margin : 0;
}
.link-text{
  color: #828282
}
</style>