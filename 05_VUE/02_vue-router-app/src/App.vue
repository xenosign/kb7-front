<script setup>
import { RouterLink, RouterView } from 'vue-router';
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
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
