<script setup>
const CORS_URL =
  'https://port-0-kb7-back-node-mmc3pmla14c7b8b4.sel3.cloudtype.app';

async function checkCorsOn() {
  try {
    const corsUrl = CORS_URL + '/cors/on';
    const corsRes = await fetch(corsUrl);
    const corsData = await corsRes.json();
    console.log('CORS 응답 결과 : ', corsData);
  } catch (e) {
    console.log('CORS 응답 통신 ERR 발생 : ', e);
  }
}

async function checkCorsOff() {
  try {
    const corsUrl = '/api' + '/cors/off';
    const corsRes = await fetch(corsUrl);
    const corsData = await corsRes.json();
    console.log('CORS 응답 결과 : ', corsData);
  } catch (e) {
    console.log('CORS 응답 통신 ERR 발생 : ', e);
  }
}
</script>

<template>
  <main>
    <h1>CORS PAGE</h1>
    <button @click="checkCorsOn">Cors 설정 O</button>
    <button @click="checkCorsOff">Cors 설정 X</button>
  </main>
</template>
