<template>
  <div class="d-flex gap-3">
    <div
        v-for="[[key, value]] in extras.map(Object.entries).filter(([[key, value]])=>value===1)"
        :key="key"
        class="text-center"
    >
      <IBiTv
          v-if="key==='television'"
          :id="key"
          class="me-2"
      />
      <BTooltip :target="key">
        {{labelMap[key]}}
      </BTooltip>
    </div>
  </div>
</template>

<script setup>
import {BTooltip} from 'bootstrap-vue-next';
import { computed } from 'vue';

// Props
const props = defineProps({
  extras: {
    type: Object,
    required: true,
  },
});

// Icon + Label Zuordnung
const iconMap = {
  bathRoom: 'IBWater',
  minibar: 'cup-straw',
  television: 'IBTv',
  aircondition: 'snow',
};

const labelMap = {
  bathRoom: 'Bad',
  minibar: 'Minibar',
  television: 'TV',
  aircondition: 'Klimaanlage',
};
</script>

<style scoped>
/* etwas Abstand, falls nötig */
</style>
