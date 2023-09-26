import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('Auth', () => {
  const isAuth = ref(false)

  return {isAuth}
})