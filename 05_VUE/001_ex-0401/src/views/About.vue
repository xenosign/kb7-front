<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route);
</script>

<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청경로: {{ route.fullPath }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
