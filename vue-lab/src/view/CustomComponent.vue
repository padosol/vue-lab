<template>
    <div>
        <div> 커스텀 컴포넌트 테스트 공간 </div>

        <div>테이블</div>
        <CustomTable :headers="headers">
            <template #test="slotProps">
                {{ slotProps.childData }}
            </template>
        </CustomTable>

    </div>
</template>

<script setup>
import CustomTable from '@/components/custom-components/CustomTable.vue';

const headers = ['no', 'test1', 'test2', 'test3']


</script>

<style lang="scss" scoped>

</style>