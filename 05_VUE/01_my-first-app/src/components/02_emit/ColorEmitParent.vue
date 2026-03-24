<template>
  <div :style="{ backgroundColor: color }">
    <h1>저의 색상을 정해주세요!!</h1>
    <ColorEmitChild @colorChange="colorChangeHandler" />
  </div>
</template>
<script>
import ColorEmitChild from './ColorEmitChild.vue';
export default {
  data() {
    return {
      color: '',
    };
  },
  components: {
    ColorEmitChild,
  },
  methods: {
    colorChangeHandler(e) {
      this.color = e.color;
    },
  },
};
</script>
