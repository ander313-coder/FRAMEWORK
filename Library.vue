<template>
    <div>
    <h1>Список книг</h1>
    <ul>
    <li v-for="author in authors">
    {{ author.author }} - {{ author.name }} - {{ author.year }}
    </li>
    </ul>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">Загрузка...</div>
    </div>
   </template>
   <script lang="ts">
   import { defineComponent, ref, onMounted } from 'vue';
   import { from } from 'rxjs';
   import { ajax } from 'rxjs/ajax';
   import { catchError, map } from 'rxjs/operators';
class Book {
 author: string;
 name: string;
 year: string;
}
export default defineComponent({
 name: 'Books',
 setup() {
 const authors = ref<Book[]>([]);
 const loading = ref<boolean>(true);
 const error = ref<string | null>(null);
 const fetchAuthors = () => {
 return from(
 ajax.getJSON<Book[]>('https://42a693b2-ec29-483d-807e-925aee4c676a.mock.pstmn.io/books')
 ).pipe(
 map((response) => {
 loading.value = false;
 return response;
 }),
 catchError((err) => {
 loading.value = false;
 error.value = 'Ошибка при загрузке данных';
 return [];
 })
 );
 };
 onMounted(() => {
 fetchAuthors().subscribe({
 next: (data) => {
 authors.value = data;
 },
 error: (err) => {
 console.error('Error fetching authors:', err);
 },
 });
 });
 return {
 authors,
 loading,
 error,
 };
 },
});
</script>
<style scoped>
ul {
 list-style-type: none;
 padding: 0;
}
li {
 margin: 5px 0;
}
</style>