import { defineStore } from "pinia";
import { ref } from 'vue'


export const useUserStore = defineStore('user', ()=>{
  const user = ref({
    name: '张三',
    phone: '13312341234',
    email: '1234@test.com'
  })

  return {
    user
  }
})