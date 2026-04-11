<script setup>
import { useTodoStore } from '@/stores/todo';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const todoStore = useTodoStore();
const { addTodo } = todoStore;

const todo = ref('');
const desc = ref('');

async function addTodoHandler() {
  try {
    const newTodo = {
      todo: todo.value,
      desc: desc.value,
      done: false,
    };

    await addTodo(newTodo);

    return router.push({ name: 'todo' });
  } catch (e) {
    alert('TODO 추가 통신 ERR 발생');
    console.error(e);
  }
}
</script>

<template>
  <div>
    <h1>TODO WRITE</h1>
    <div>
      <h2>todo : <input type="text" v-model.trim="todo" /></h2>
      <h2>desc : <input type="text" v-model.trim="desc" /></h2>
      <button v-on:click="addTodoHandler">작성</button>
      <button v-on:click="router.push({ name: 'todo' })">취소</button>
    </div>
  </div>
</template>
