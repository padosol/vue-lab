<template>
    <table>
        <thead>
            <tr>
                <th v-for="header in headers" :key="header">{{ header }}</th>
            </tr>
        </thead>

        <tbody>
            <slot name="test" :childData="childData">
            </slot>
        </tbody>
    </table>


</template>


<script>
export default {
    name: 'CustomTable',
    props: ['headers'],
    data(){
        return {
            childData: "childData2222",
        }
    },
}

</script>

<style lang="scss" scoped>

</style>