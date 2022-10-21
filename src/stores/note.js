import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: 1,
      title: "Pinia 学习记录",
      content:
        "这是 Pinia 学习记录，这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录这是 Pinia 学习记录",
    },
    {
      id: 2,
      title: "React 学习记录",
      content:
        "这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录这是 React 学习记录",
    },
    {
      id: 3,
      title: "Vue 学习记录",
      content:
        "这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录这是 Vue 学习记录",
    },
    {
      id: 4,
      title: "JavaScript 学习记录",
      content:
        "这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录这是 JavaScript 学习记录",
    },
  ]);

  const searchTerm = ref('')
  // 定义搜索方法（getters）
  const searchedNotes = computed(() => {
    if(searchTerm.value === ''){
      return notes.value
    } else {
      return notes.value.filter( note => {
        return note.title.includes(searchTerm.value)
      })
    }
  })

  /**
  * @description: 添加笔记 （Actions修改状态）
  * @author 作者 on 邱灿磊 2022-10-21
  * @param { title } string 标题
  * @param { content } content 内容
  */
  async function addNote (title, content) {
    setTimeout(()=>{
      notes.value.push({
        id: notes.value.length + 1,
        title,
        content
      })
    }, 2000)
    
    searchTerm.value = ''
  }

  return {
    notes,
    searchTerm,
    searchedNotes,
    addNote
  };
})
