<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>

button {
  background-color: #FEF1C8;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #f9df95;
}
</style>