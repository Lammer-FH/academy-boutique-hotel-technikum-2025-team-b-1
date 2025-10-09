<template>
  <div>
    <Navbar />
    <main class="container-fluid p-0">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>