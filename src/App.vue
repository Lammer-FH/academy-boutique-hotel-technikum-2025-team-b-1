<template>
  <Navbar />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #fffaf9;
}

h1, h2, h3 {
  color: #5a3d2e;
}

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