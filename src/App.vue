<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
</script>

<template>
  <main>
    <h1>我的笔记本</h1>
    <SearchNote />
    <NoteList />
    <AddNote />
  </main>
</template>

<style scoped>
main {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  padding: 48px 0;
}
</style>
