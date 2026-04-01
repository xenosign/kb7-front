<script setup>
import { RouterLink, RouterView } from 'vue-router';
import RouterHeader from './components/RouterHeader.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      /
      <RouterLink to="/about">About</RouterLink>
      /
      <RouterLink to="/dynamic/happy">Happy</RouterLink>
      /
      <RouterLink to="/dynamic/exciting">Exciting</RouterLink>
      /
      <RouterLink to="/watch/happy">WatchHappy</RouterLink>
      /
      <RouterLink to="/watch/exciting">WatchExciting</RouterLink>
      /
      <RouterLink to="/cors">Cors</RouterLink>
      /
      <RouterLink to="/ex-cors">Ex-Cors</RouterLink>
    </nav>
    <RouterHeader />
  </header>

  <RouterView />
</template>

<style scoped></style>
