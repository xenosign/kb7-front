import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = 'https://json-server-render2-production.up.railway.app';

export const useTodoStore = defineStore('todo', () => {
  const todoArr = ref([]);
  const isFetching = ref(false);
  const isError = ref(false);

  const fetchTodoList = async () => {
    try {
      isFetching.value = true;
      const fetchTodoListUrl = BASE_URL + '/todos';
      const fetchTodoListRes = await axios.get(fetchTodoListUrl);

      todoArr.value = fetchTodoListRes.data;
      isFetching.value = false;
      return fetchTodoListRes.data;
    } catch (error) {
      isError.value = true;
      console.error(error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      const addTodoUrl = BASE_URL + '/todos';
      const addTodoRes = await axios.post(addTodoUrl, newTodo);

      return addTodoRes.data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTodo = async (id) => {
    try {
      const fetchTodoUrl = BASE_URL + `/todos/${id}`;
      const fetchTodoRes = await axios.get(fetchTodoUrl);

      return fetchTodoRes.data;
    } catch (error) {
      console.error(error);
    }
  };

  const editTodo = async (editTodo) => {
    try {
      const editTodoUrl = BASE_URL + `/todos/${editTodo.id}`;
      const editTodoRes = await axios.patch(editTodoUrl, editTodo);

      return editTodoRes.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodoUrl = BASE_URL + `/todos/${id}`;
      const deleteTodoRes = await axios.delete(deleteTodoUrl);

      return deleteTodoRes.data;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    todoArr,
    isFetching,
    isError,
    fetchTodoList,
    fetchTodo,
    addTodo,
    editTodo,
    deleteTodo,
  };
});
