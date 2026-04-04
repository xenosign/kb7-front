<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();

const { count, doubleCount } = storeToRefs(counterStore);
const { increment, decrement } = counterStore;
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
