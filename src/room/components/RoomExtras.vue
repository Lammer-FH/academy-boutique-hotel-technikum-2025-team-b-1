<template>
  <div class="d-flex gap-2 flex-wrap">
    <b-tooltip
        v-for="(available, key) in extras"
        v-if="available"
        :key="key"
        :title="extraLabel(key)"
        placement="top"
    >
      <b-icon :icon="iconMap[key]" font-scale="1.5" />
    </b-tooltip>
  </div>
</template>

<script>
import { BIcon, BTooltip } from 'bootstrap-vue-next';

export default {
  name: 'RoomExtras',
  components: { BIcon, BTooltip },
  props: {
    extras: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      iconMap: {
        bathRoom: 'bathtub',
        minibar: 'cup-straw',
        television: 'tv',
        aircondition: 'snow',
      },
      labelMap: {
        bathRoom: 'Bad',
        minibar: 'Minibar',
        television: 'TV',
        aircondition: 'Klimaanlage',
      },
    };
  },
  methods: {
    extraLabel(key) {
      return this.labelMap[key] || key;
    },
  },
};
</script>

<style scoped>
div > .b-icon {
  cursor: default;
}
</style>
