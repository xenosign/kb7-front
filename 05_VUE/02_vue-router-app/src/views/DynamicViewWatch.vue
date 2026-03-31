<script setup>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const msg = ref('');
const imgSrc = ref('');

watch(
  () => currentRoute.params.mood,
  (newMood) => {
    if (newMood === 'happy') {
      msg.value = '행복합니다';
      imgSrc.value =
        'https://i.pinimg.com/564x/a3/a3/52/a3a352efb5a5829ca7007d86369a0d59.jpg';
    } else {
      msg.value = '씐납니다';
      imgSrc.value = 'https://i.imgur.com/wOCGlbN.gif';
    }
  },
  // 컴포넌트가 뜨자마자 실행되도록 설정
  { immediate: true },
);
</script>

<template>
  <div>
    <h1>오늘의 기분은!? {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>
