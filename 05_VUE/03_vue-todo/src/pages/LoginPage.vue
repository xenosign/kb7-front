<template>
  <div>
    <h1>LOGIN PAGE</h1>
    아이디 : <input type="text" v-model.trim="userId" />
    <br />
    패스워드 : <input type="text" v-model.trim="userPassword" />
    <br />
    <button v-on:click="login">로그인</button> /
    <button v-on:click="logout">로그아웃</button>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const BASE_URL = '/api';
const userId = ref('');
const userPassword = ref('');

async function login() {
  try {
    const loginUrl = BASE_URL + '/users';
    const loginRes = await axios.get(loginUrl);

    const userArr = loginRes.data;
    console.log('백엔드 유저 데이터 목록 : ', userArr);

    const findUser = userArr.find(function (item, index) {
      return item.id === userId.value;
    });

    if (findUser === undefined)
      return alert('해당 ID 를 가지는 사용자가 없습니다.');

    if (findUser.password !== userPassword.value)
      return alert('비밀번호가 일치하지 않습니다.');

    localStorage.setItem('auth', 'true');
    alert('로그인 성공!');

    return router.push({ name: 'todo' });
  } catch (e) {
    alert('로그인 통신 ERR 발생');
    console.error(e);
  }
}

function logout() {
  localStorage.removeItem('auth');
  return alert('로그 아웃 완료');
}
</script>
