<script setup>
import Counter1 from '@/components/pinia/Counter1.vue';
import Counter2 from '@/components/pinia/Counter2.vue';
import Counter3 from '@/components/pinia/Counter3.vue';
import { ref } from 'vue';
</script>

<template>
  <div>
    <h1>PINIA PAGE</h1>
    <Counter1 />
    <Counter2 />
    <Counter3 />
  </div>
</template>

<style lang="scss" scoped></style>
