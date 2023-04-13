
// 하이오더 컴포넌트
import ListView from './ListView.vue';
// import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';


// function 하나를 꺼내는 중....
// name은 만들때 전달해줬었음
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        created() {
          console.log("created")
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
              bus.$emit('end:spinner');
            })
            .catch(function(error) {
              console.log(error)
            });
        },
        render(createElement) {
            return createElement(ListView);
        }


        // el, data, component, created
    }
}