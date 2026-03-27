<script setup>
import TodoParent from './components/01_component-props/TodoParent.vue';
import PropsListPage from './components/01_component-props/PropsListParent.vue';
import EmitParent from './components/02_emit/EmitParent.vue';
import ColorEmitParent from './components/02_emit/ColorEmitParent.vue';
import TodoList from './components/00_todo-list/TodoList.vue';
import ModalParent from './components/03_slot-teleport/ModalParent.vue';
import TeleportParent from './components/03_slot-teleport/TeleportParent.vue';
import ProvideParent from './components/04_provide/ProvideParent.vue';
import VmodelModalParent from './components/03_slot-teleport/VmodelModalParent.vue';
import RefReactive from './components/05_composition-api/RefReactive.vue';
import MethodComputed from './components/05_composition-api/MethodComputed.vue';
import Watch from './components/05_composition-api/Watch.vue';
import Vue3PropsParent from './components/05_composition-api/Vue3PropsParent.vue';
import Vue3EmitParent from './components/05_composition-api/Vue3EmitParent.vue';
import LifeCylce from './components/05_composition-api/LifeCylce.vue';
import Vue3TodoList from './components/00_todo-list/Vue3TodoList.vue';
</script>

<template>
  <Vue3TodoList />
</template>

<style scoped></style>
