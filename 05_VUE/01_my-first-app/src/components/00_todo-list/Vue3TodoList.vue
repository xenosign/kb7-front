<template>
  <div>
    <TodoInput :addTodo="addTodo" />
    <h2>할 일 목록</h2>
    <ul>
      <TodoItem
        v-for="todo in todolist"
        :key="todo.id"
        :todo="todo"
        :toggleCompleted="toggleCompleted"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

const todolist = ref([
  { id: 1, todo: '자전거 타기', completed: false },
  { id: 2, todo: '딸과 공원 산책', completed: true },
  { id: 3, todo: '일요일 애견 카페', completed: false },
  { id: 4, todo: 'Vue 원고 집필', completed: false },
]);

const addTodo = (text) => {
  todolist.value.push({
    id: Date.now(),
    todo: text,
    completed: false,
  });
};

const deleteTodo = (id) => {
  todolist.value = todolist.value.filter((todo) => todo.id !== id);
};

const toggleCompleted = (id) => {
  const target = todolist.value.find((todo) => todo.id === id);
  if (target) {
    target.completed = !target.completed;
  }
};
</script>
