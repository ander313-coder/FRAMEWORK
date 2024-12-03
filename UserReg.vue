<template>
    <div>
      <h1>Форма обратной связи</h1>
      <form @submit.prevent="submitForm">
        <div>
          <lable for="name"> Имя: </lable>
          <input type="text" v-model="user.name" required />
        </div>
        <div>
          <lable for="email"> Эл. почта: </lable>
          <input type="email" v-model="user.email" required />
        </div>
            <div>
          <lable for="password"> Пороль: </lable>
          <input type="password" v-model="user.password" minlength="6" required />
        </div>
        <button type="submit">Подтвердить</button>
      </form>
      <div v-if="submitted">
        <h2>Получена информация:</h2>
        <p>Имя: {{ user.name }}</p>
        <p>Эл. почта: {{ user.email }}</p>
        <p>Пороль: {{ user.password }}</p>
      </div>
    </div>
    <RouterLink to ="/UserInfo">На UserInfo</RouterLink>
 
  </template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {RouterLink} from "vue-router";
  export default defineComponent(
    {
    name: "UserInfo",
    setup() 
    {
      const user = ref
      ({
        name: '',
        email: '',
        password: '',
      });
      const submitted = ref(false)
      const submitForm = () => 
      {
        submitted.value = true;
      };
      return {
        user,
        submitted,
        submitForm,
      };
    },
  }
  );
  </script>
  