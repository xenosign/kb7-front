<template>
  <div><input type="text" v-model.trim="name" /></div>
  <button @click="$emit('nameChanged', { name })">이름 전달!</button>
</template>

<script>
export default {
  name: 'SendNameComponent',
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
