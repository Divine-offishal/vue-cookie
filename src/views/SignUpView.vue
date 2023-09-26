<template>
  <div class="wrapper">
    <h1>Create account</h1>
    <form @submit.prevent="handleSubmit">
      <input placeholder="email" type="email" v-model="email"/>
      <input placeholder="password"  v-model="password"/>
      <button>Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useSignUp } from '../Composables/SignUp'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const { signUp } = useSignUp()

const handleSubmit = () => {
  signUp(email.value, password.value)
  email.value = ''
  password.value = ''

}
</script>

<style>
  .wrapper {
    margin: 20px 0;
  }
</style>