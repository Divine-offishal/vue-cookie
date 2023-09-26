<template>
  <div class="wrapper">
    <h1>Log In</h1>
    <form @submit.prevent="handleSubmit">
      <input placeholder="email" type="email" v-model="email"/>
      <input placeholder="password"  v-model="password"/>
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useLogin } from '../Composables/Login'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const { logIn } = useLogin()

const handleSubmit = () => {
  logIn(email.value, password.value)
  email.value = ''
  password.value = ''
}
</script>

<style>
  .wrapper {
    margin: 20px 0;
  }
</style>
