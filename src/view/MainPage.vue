<template>
	<div></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { test } = useTest();

function useTest() {
	console.log(1234);
	const test = ref();

	return { test };
}
</script>

<style lang="scss" scoped></style>
