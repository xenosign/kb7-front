<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
