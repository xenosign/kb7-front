<template>
  <div>
    <h1>{{ msg }}</h1>
    <Vue3EmitChild @send-msg="emitHandler" />  
  </div>
</template>

<script setup>
import Vue3EmitChild from './Vue3EmitChild.vue';
import { ref } from 'vue';

const msg = ref('자식놈이 바꿀 메세지입니다!');
function emitHandler(value) {
  msg.value = value;
}
</script>
