<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RoomList from "@/room/components/RoomList.vue";
</script>

<template>
  <DefaultLayout>
    <header class="mb-4">
      <p class="text-uppercase text-muted small mb-1">Boutique Hotel Technikum</p>
      <h1 class="mb-2">Unsere Zimmer</h1>
      <p class="text-muted mb-0">
        Wählen Sie aus unseren liebevoll gestalteten Zimmern.
      </p>
    </header>
    <RoomList />
  </DefaultLayout>
</template>
