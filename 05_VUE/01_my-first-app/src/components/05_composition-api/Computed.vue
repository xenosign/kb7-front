<template>
  <div>
    <h1>{{ count }}</h1>

    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);

const double = computed(() => count.value * 2);

const increment = () => {
  count.value++;

  console.log('🚀 ~ count:', count);
  console.log('🚀 ~ double:', double);
};
</script>
