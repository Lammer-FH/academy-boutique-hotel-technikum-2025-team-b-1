<template>
  <div class="d-flex justify-content-center">
    <b-pagination
        v-model="internalPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        @change="onChange"
        size="md"
        prev-text="«"
        next-text="»"
    />
  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue-next';

export default {
  name: 'BaseListPagination',
  components: { BPagination },
  props: {
    currentPage: { type: Number, default: 1 },
    perPage: { type: Number, default: 5 },
    totalRows: { type: Number, default: 0 },
  },
  emits: ['update:currentPage'],
  data() {
    return { internalPage: this.currentPage };
  },
  watch: {
    currentPage(v) { this.internalPage = v; },
  },
  methods: {
    onChange(page) {
      this.$emit('update:currentPage', page);
    },
  },
};
</script>
