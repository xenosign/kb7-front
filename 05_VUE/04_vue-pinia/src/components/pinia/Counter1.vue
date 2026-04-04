<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>Counter</h1>
    <h1>count : {{ counterStore.count }}</h1>
    <h1>count x 2 : {{ counterStore.doubleCount }}</h1>
    <button @click="counterStore.increment">+1</button>  
    <button @click="counterStore.decrement">-1</button>  
  </div>
</template>
