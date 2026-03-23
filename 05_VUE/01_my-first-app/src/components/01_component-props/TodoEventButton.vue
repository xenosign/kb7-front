<script setup>
const props = defineProps(['parentEvent']);
</script>

<template>
  <button @click="parentEvent">자식 버튼</button>
</template>
