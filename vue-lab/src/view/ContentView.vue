<template>
  <div>
    <component :is="componentLoader" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import FirstView from '../components/dynamic-component/FirstView.vue';
import SecondView from '../components/dynamic-component/SecondView.vue';
import ThirdView from '../components/dynamic-component/ThirdView.vue';
import NotPage from '../components/dynamic-component/NotPage.vue'

export default {
    components: {
        FristView: defineAsyncComponent( () => import('../components/dynamic-component/FirstView.vue'))
    },
    computed: {
        componentLoader(){
            const path = this.$route.params.param;

            if(path == 'first'){
                return this.$options.components.FristView;
            }else if (path == 'second'){
                return SecondView;
            }else if (path == "third"){
                return ThirdView;
            } else {
                return NotPage;
            }
        }
    }
}
</script>

<style>

</style>