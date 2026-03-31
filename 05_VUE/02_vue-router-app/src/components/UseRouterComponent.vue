<template>
  <nav>
    <div class="button-nav">
      <button @click="router.push('/')">Home</button>        
      <button @click="router.push('/about')">About</button>        
      <button @click="router.back()">뒤로</button>        
      <button @click="router.forward()">앞으로</button>        
      <button @click="router.go(-2)">뒤로 2번</button>      
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
