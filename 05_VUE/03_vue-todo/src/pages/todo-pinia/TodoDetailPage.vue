<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const curRoute = useRoute();
const id = curRoute.params.id;

const todoStore = useTodoStore();
const { fetchTodo, deleteTodo } = todoStore;

const todo = ref({});

async function initTodo() {
  try {
    todo.value = await fetchTodo(id);
    console.log('TODO DETAIL 데이터 : ', todo.value);
  } catch (e) {
    alert('TODO DETAIL 통신 ERR 발생');
    console.error(e);
  }
}

async function deleteTodoHandler(id) {
  try {
    const deleteRes = await deleteTodo(id);
    console.log('삭제 통신 결과 : ', deleteRes);

    router.push({ name: 'todo' });
  } catch (e) {
    alert('TODO 삭제 ERR 발생');
    console.log(e);
  }
}

initTodo();
</script>

<template>
  <div>
    <h1>TODO DETAIL</h1>
    <div>
      <h2>id : {{ todo.id }}</h2>
      <h2>todo : {{ todo.todo }}</h2>
      <h2>desc : {{ todo.desc }}</h2>
      <h2>done : {{ todo.done }}</h2>
      <button v-on:click="router.push({ name: 'todo' })">목록</button>
      <button v-on:click="router.push(`/todo/edit/${todo.id}`)">수정</button>
      <button
        v-on:click="router.push({ name: 'todo/edit', params: { id: todo.id } })"
      >
        수정
      </button>
      <button v-on:click="deleteTodoHandler(todo.id)">삭제</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
