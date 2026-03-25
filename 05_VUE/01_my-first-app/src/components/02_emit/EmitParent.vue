<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <EmitChild @nameChanged="nameChangeHandler" />
  </div>
</template>

<script>
import EmitChild from './EmitChild.vue';

export default {
  name: 'PageEmit',
  data() {
    return {
      name: '',
    };
  },
  components: {
    EmitChild,
  },
  methods: {
    nameChangeHandler(name) {
      this.name = name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
