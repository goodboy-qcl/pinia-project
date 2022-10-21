import { defineStore } from "pinia";
import { ref } from 'vue'


export const useUserStore = defineStore('user', ()=>{
  const user = ref({
    name: '张三',
    phone: '13312341234',
    email: '1234@test.com'
  })
  /**
  * @description: 判断是否登录（默认是）
  * @author 作者 on 邱灿磊 2022-10-21
  */
  function isLoggedIn () {
    return user.value !== null
  }

  return {
    user,
    isLoggedIn
  }
})