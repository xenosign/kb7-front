<script setup>
import { ref } from 'vue';

const API = '/ex-api';

const data = ref([]);

async function fetchData() {
  try {
    const url = API + '/cors/ex';
    const res = await fetch(url);
    data.value = await res.json();
    console.log(data.value);
    console.log('CORS 응답 결과 : ', data.value);
  } catch (e) {
    console.log('CORS 응답 통신 ERR 발생 : ', e);
  }
}

fetchData();
</script>

<template>
  <main>
    <h1>CORS EX</h1>
    <ul>
      <li v-for="el in data" :key="el">{{ el }}</li>
    </ul>
  </main>
</template>
