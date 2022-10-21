<template>
  <div class="noteList">
    <div v-for="n in 6" class="note" :key="n">
      <h2>笔记标题{{ n }}</h2>
      <article>
        <p>这是笔记内容 {{ n }}</p>
      </article>
    </div>
  </div>
</template>
<script setup></script>
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
