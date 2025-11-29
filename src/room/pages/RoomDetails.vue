<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RoomList from "@/room/components/RoomList.vue";

const props = defineProps({
  roomId: {
    type: Number,
    required: true,
  }
})

</script>

<template>
  <DefaultLayout>

  </DefaultLayout>

</template>

<style scoped>

</style>