<template>

<div>
    <h1>О разработчиках</h1>
    <h2>Имя: Злобин Андрей Сергеевич</h2>   
    <h3>Почта: ander313@mail.ru</h3>   
    <h3>Телефон: +7 922 999 88 77</h3>   
    <h3>Адрес: Россия, Киров, К-Маркса 11-1</h3>   
</div>
<UserForm />
<RouterLink to ="/">На главную</RouterLink>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {RouterLink} from "vue-router";
import UserForm from '../components/UserForm.vue';
export default defineComponent(
    { 
        name: 'About',
        components:{
            UserForm
        },
    }
);
</script>