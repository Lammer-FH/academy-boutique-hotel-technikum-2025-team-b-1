<script setup>
import { BContainer } from "bootstrap-vue-next";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <BContainer>
      <main class="container-fluid p-3 content">
        <slot />
      </main>
    </BContainer>
    <Footer />
  </div>
</template>
