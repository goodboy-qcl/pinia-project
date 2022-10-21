<template>
  <div class="addNote">
    <h2>添加新笔记</h2>
    <form @submit.prevent>
      <input type="text" placeholder="请输入笔记标题" />
      <textarea rows="6" placeholder="请输入笔记内容"></textarea>
      <button type="submit">添加笔记</button>
    </form>
  </div>
</template>
<script setup></script>
<style scoped>
.addNote {
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 95%);
  padding-top: 24px;
}

.addNote h2 {
  margin-bottom: 12px;
}

.addNote form {
  display: grid;
  gap: 24px;
}
</style>
