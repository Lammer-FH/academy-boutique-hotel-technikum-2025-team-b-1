<template>
  <div class="base-list container my-4">
    <div class="mb-3">
      <slot name="filters"></slot>
    </div>

    <div>
      <slot><!-- hier kommt die Liste (RoomList) --></slot>
    </div>

    <div class="mt-4">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseList',
  };
</script>
