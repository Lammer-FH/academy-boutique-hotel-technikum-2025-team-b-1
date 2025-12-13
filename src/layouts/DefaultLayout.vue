<template>
  <div>
    <Navbar/>
    <b-container>
      <main class="container-fluid p-3 content">
        <slot/>
      </main>
    </b-container>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import {BContainer} from "bootstrap-vue-next";
</script>
