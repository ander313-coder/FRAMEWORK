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
        <lable for="age"> Возраст: </lable>
        <input type="number" v-model="user.age" required />
      </div>
      <div>
        <lable for="phone"> Номер телефона: </lable>
        <input type="number" v-model="user.phone" required />
      </div>
      <button type="submit">Подтвердить</button>
    </form>
    <div v-if="submitted">
      <h2>Получена информация:</h2>
      <p>Имя: {{ user.name }}</p>
      <p>Эл. почта: {{ user.email }}</p>
      <p>Возраст: {{ user.age }}</p>
      <p>Номер телефона: {{ user.phone }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import "./UserForm.css"
import { defineComponent, ref } from 'vue'
export default defineComponent(
  {
  name: "userForm",
  setup() 
  {
    const user = ref
    ({
      name: '',
      email: '',
      age: null as number | null,
      phone: '',
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
