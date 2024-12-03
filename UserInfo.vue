<template>
    <div>
    <h1>Регистрация прошла успешно!</h1>
        <h2>Получена информация:</h2>
        <p>Имя: {{ user.name }}</p>
        <p>Эл. почта: {{ user.email }}</p>
        <p>Пороль: {{ user.password }}</p>
        <p><RouterLink to ="/">На Главную</RouterLink></p>
    </div>
  </template>
 <script lang="ts" setup>
 import { defineComponent, ref } from 'vue'
 import {RouterLink} from "vue-router";
 import UserInfo from './UserReg.vue';
 </script>
 
  
 