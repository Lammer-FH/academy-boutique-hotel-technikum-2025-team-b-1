<template>
  <div>
    <Navbar />
    <main class="container-fluid p-3 content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>


</style>