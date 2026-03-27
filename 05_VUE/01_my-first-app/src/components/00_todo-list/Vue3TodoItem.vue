<template>
  <li @click="toggleCompleted(todo.id)" :class="{ completed: todo.completed }">
    {{ todo.todo }}
    <button @click.stop="deleteTodo(todo.id)">삭제</button>
  </li>
</template>

<script setup>
const props = defineProps(['todo', 'toggleCompleted', 'deleteTodo']);
// const { todo, toggleCompleted, deleteTodo } = defineProps({
//   todo: Object,
//   toggleCompleted: Function,
//   deleteTodo: Function,
// });
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
