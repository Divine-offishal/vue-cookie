<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/user">User</RouterLink>
      </nav>
  </header>

  <RouterView />

  <div class="button_wrapper">
    <RouterLink to="/signup">
      <button>Sign Up</button>
    </RouterLink>

    <RouterLink to="/login">
      <button>Login</button>
    </RouterLink>

    <button>Logout</button>
    
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 10px;
}

.button_wrapper {
  display: flex;
  gap: 8px;
}
</style>
