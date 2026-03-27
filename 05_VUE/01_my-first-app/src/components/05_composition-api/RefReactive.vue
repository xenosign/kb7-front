<template>
  <div>
    <h1>아아 꿈을 꾸었습니다. 제가 차은우가 되는 꿈을...</h1>
    <h1>Ref Data : {{ refData.name }}</h1>
    <h1>Reactive Data : {{ reactiveData.name }}</h1>
    <button v-on:click="changeRef">Ref Data 변경</button>
    <button v-on:click="changeReactive">Reactive Data 변경</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const refData = ref({ name: '이효석' });
const reactiveData = reactive({ name: '이효석' });
const changeRef = () => {
  refData.value = { name: '차은우' };
};
const changeReactive = () => {
  reactiveData = { name: '차은우' };
};
</script>
