<template>
  <div>
    <input type="text" v-on:input="$emit('update:name', $event.target.value)" />
  </div>
  <button @click="$emit('nameChanged', { name })">이름 전달!</button>
</template>

<script>
export default {
  name: 'EmitChild',
  props: ['name'],
  emits: ['nameChanged', 'update:name'],
};
</script>

<style lang="scss" scoped></style>
