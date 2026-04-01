<script setup>
const obj = {
  name: '이효석',
  isOld: true,
};

localStorage.setItem('tetzObj', JSON.stringify(obj));
const getObj = JSON.parse(localStorage.getItem('tetzObj'));

console.log(getObj);
console.log(getObj.name);
</script>

<template>
  <div>
    <h1>HOME</h1>
  </div>
</template>
