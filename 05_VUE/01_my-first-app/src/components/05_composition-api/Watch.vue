<template>
  <div>
    {{ count }}
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

watchEffect(() => {
  console.log(`카운트가 ${count.value} 로 변경 되었습니다!`);
});
</script>
