<template>
  <div class="todo">
    <h1>오늘의 할일</h1>
    <CheckList />
    <hr />
    <TodoProps todo="Vue 공부하기" />
    <TodoProps todo="배열 함수 끝장내기" />
    <CheckList />
    <PropsButton :parentEvent="sendingEvent" />
  </div>
</template>

<script>
import CheckList from './TodoCheckList.vue';
import PropsButton from './TodoEventButton.vue';
import TodoProps from './TodoProps.vue';

export default {
  name: 'TodoPage',
  components: {
    CheckList,
    PropsButton,
    TodoProps,
  },
  methods: {
    sendingEvent() {
      alert('부모 컴포넌트님이 말씀 하셨다~ 비상!!!');
    },
  },
};
</script>

<style lang="scss" scoped></style>
