<template lang="">
  <div>
    <button @click="showModal">모달 열기</button>
    <ModalChild :visible="isModalVisible" @close="hideModal">
      <h2>이 모달을 당장 닫지 않으면!?</h2>
      <p>씨끄러울 겁니다!</p>
      <img
        src="https://photo.coolenjoy.co.kr/data/editor/2008/20200813130955_aiqgbsrk.gif"
        alt="장동민마멋"
      />
    </ModalChild>
  </div>
</template>
<script>
import ModalChild from './ModalChild.vue';

export default {
  name: 'ModalParent',
  components: { ModalChild },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
<style lang=""></style>
