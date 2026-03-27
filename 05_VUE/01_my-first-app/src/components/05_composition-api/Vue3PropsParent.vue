<template>
  <div>
    <Vue3PropsChild :msg="msg" />
  </div>
</template>

<script setup>
import Vue3PropsChild from './Vue3PropsChild.vue';
import { ref } from 'vue';

const msg = ref('props 로 전달');
</script>
