<template>
  <div>
    할 일 <input type="text" v-model="todoText" @keyup.enter="handleAddtodo" />
    <button @click="handleAddtodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  addTodo: Function,
});

const todoText = ref('');

const handleAddtodo = () => {
  if (todoText.value.trim() === '') return;

  props.addTodo(todoText.value);

  todoText.value = '';
};
</script>
