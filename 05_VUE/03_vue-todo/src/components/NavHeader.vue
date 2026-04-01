<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    /
    <RouterLink to="/login">Login</RouterLink>
    /
    <RouterLink to="/Todo">Todo</RouterLink>
  </nav>
</template>

<style lang="scss" scoped></style>
