<template>
  <div class="todo">
    <h1>오늘의 할일</h1>
    <TodoComponentChild />
    <hr />
    <TodoPropsChild todo="Vue 공부하기" />
    <TodoPropsChild todo="배열 함수 끝장내기" />
    <TodoComponentChild />
    <PropsButton :parentEvent="sendingEvent" />
  </div>
</template>

<script>
import TodoComponentChild from './TodoComponentChild.vue';
import TodoEventChild from './TodoEventChild.vue';
import TodoPropsChild from './TodoPropsChild.vue';

export default {
  name: 'TodoPage',
  components: {
    TodoComponentChild,
    TodoEventChild,
    TodoPropsChild,
  },
  methods: {
    sendingEvent() {
      alert('부모 컴포넌트님이 말씀 하셨다~ 비상!!!');
    },
  },
};
</script>

<style lang="scss" scoped></style>
