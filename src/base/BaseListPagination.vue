<script setup>
import {ref, watch} from "vue";
import {BPagination} from "bootstrap-vue-next";

const props = defineProps({
  currentPage: {type: Number, default: 1},
  perPage: {type: Number, default: 5},
  totalRows: {type: Number, default: 0},
});

const emit = defineEmits(["update:currentPage"]);

const internalPage = ref(props.currentPage);

watch(
    () => props.currentPage,
    (v) => {
      internalPage.value = v;
    }
);

function onChange(page) {
  emit("update:currentPage", page);
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <BPagination
        v-model="internalPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="center"
        size="md"
        prev-text="«"
        next-text="»"
        @change="onChange"
    />
  </div>
</template>
