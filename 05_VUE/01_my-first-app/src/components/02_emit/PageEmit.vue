<template>
  <div>
    <h1>너의 이름은 {{ name }}</h1>
    <SendNameComponent @nameChanged="nameChangeHandler" />
  </div>
</template>

<script>
import SendNameComponent from './SendNameComponent.vue';

export default {
  name: 'PageEmit',
  data() {
    return {
      name: '',
    };
  },
  components: {
    SendNameComponent,
  },
  methods: {
    nameChangeHandler(e) {
      this.name = e.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
