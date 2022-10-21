<template>
  <div class="noteList">
    <div v-for="item in noteStore.searchedNotes" class="note" :key="item.id">
      <h2>笔记标题{{ item.title }}</h2>
      <article>
        <p>这是笔记内容 {{ item.content }}</p>
      </article>
    </div>
  </div>
</template>
<script setup>
import { useNoteStore } from '../stores/note';
// 在组件中访问pinia状态
const noteStore = useNoteStore();
</script>
<style scoped>
.noteList {
  margin: 48px 0;
  display: grid;
  row-gap: 48px;
  width: 100%;
}

.note h2 {
  font-weight: normal;
  margin-bottom: 12px;
}

.note article {
  color: hsl(0deg, 0%, 40%);
}
</style>
