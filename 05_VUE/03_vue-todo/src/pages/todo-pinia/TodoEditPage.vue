<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const router = useRouter();
const curRoute = useRoute();
const id = curRoute.params.id;

const todoStore = useTodoStore();
const { fetchTodo, editTodo } = todoStore;

const editedTodo = ref({});

async function initTodo() {
  try {
    editedTodo.value = await fetchTodo(id);

    console.log('TODO EDIT 데이터 : ', editedTodo.value);
  } catch (e) {
    alert('TODO EDIT 통신 ERR 발생');

    console.error(e);
  }
}

async function onEditTodo() {
  try {
    const editRes = await editTodo(editedTodo.value);

    console.log('TODO 수정 통신 결과 : ', editRes);
    router.push({ name: 'todo' });
  } catch (e) {
    alert('TODO 수정 통신 ERR 발생');
    console.error(e);
  }
}

initTodo();
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <h1>TODO EDIT</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="editedTodo.todo" /></h2>
      <h2>desc : <input type="text" v-model.trim="editedTodo.desc" /></h2>
      <h2>done : <input type="checkbox" v-model.trim="editedTodo.done" /></h2>
      <button v-on:click="onEditTodo(id)">수정</button>
      <button @click="router.push({ name: 'todo/detail', params: { id: id } })">
        취소
      </button>
    </div>
  </div>
</template>
