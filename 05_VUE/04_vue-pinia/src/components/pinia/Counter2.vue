<script setup>
import { useCounterStore } from '@/stores/counter';
import { computed } from 'vue';
const counterStore = useCounterStore();
const count = computed(() => counterStore.count);
const doubleCount = computed(() => counterStore.doubleCount);
const increment = counterStore.increment;
const decrement = counterStore.decrement;
</script>

<template>
  <div>
    <h1>Counter</h1>
    <h1>count : {{ count }}</h1>
    <h1>count x 2 : {{ doubleCount }}</h1>
    <button @click="increment">+1</button>  
    <button @click="decrement">-1</button>  
  </div>
</template>
