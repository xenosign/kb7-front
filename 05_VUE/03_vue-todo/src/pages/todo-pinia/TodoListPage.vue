<template>
  <main>
    <h1>TODO PAGE</h1>
    <h2 v-if="isFetching">데이터 로딩 중</h2>
    <h2 v-else-if="isError">데이터 통신 중 에러 발생</h2>
    <div v-else>
      <ul>
        <li v-for="(item, index) in todoArr">
          {{ item.id }} /
          <RouterLink v-bind:to="`/todo/detail/${item.id}`">{{
            item.todo
          }}</RouterLink>
          / {{ item.done }}
        </li>
      </ul>
      <button @click="router.push({ name: 'todo/write' })">todo 작성</button>
    </div>
  </main>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const todoStore = useTodoStore();
const { todoArr } = storeToRefs(todoStore);
const { fetchTodoList } = todoStore;

let isFetching = ref(true);
let isError = ref(false);

async function fetchTodo() {
  try {
    isFetching.value = true;
    isError.value = false;

    fetchTodoList();

    isFetching.value = false;
  } catch (e) {
    isError.value = true;
    alert('TODO DATA FETCH 통신 ERR 발생');
    console.log(e);
  }
}

fetchTodo();
</script>
