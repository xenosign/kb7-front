<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <VmodelEmitChild @nameChanged="nameChangeHandler" v-model:name="name" />
    <!-- <VmodelEmitChild
      :name="name"
      @update:name="(val) => (name = val)"
    /> -->
  </div>
</template>

<script>
import VmodelEmitChild from './VmodelEmitChild.vue';

export default {
  name: 'PageEmit',
  data() {
    return {
      name: '',
    };
  },
  components: {
    VmodelEmitChild,
  },
  methods: {
    nameChangeHandler(e) {
      this.name = e.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
