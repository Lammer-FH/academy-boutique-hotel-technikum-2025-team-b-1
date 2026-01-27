<script setup>
import IBiWater from "~icons/bi/water";
import IBiCupStraw from "~icons/bi/cup-straw";
import IBiTv from "~icons/bi/tv";
import IBiDoorOpen from "~icons/bi/door-open";
import IBiSnow from "~icons/bi/snow";
import IBiWifi from "~icons/bi/wifi";
import IBiCupHot from "~icons/bi/cup-hot";
import IBiPersonWheelchair from "~icons/bi/person-wheelchair";

defineProps({
  extras: {
    type: Array,
    default: () => [],
  },
});

const iconMap = {
  bathroom: IBiWater,
  minibar: IBiCupStraw,
  television: IBiTv,
  livingroom: IBiDoorOpen,
  aircondition: IBiSnow,
  wifi: IBiWifi,
  breakfast: IBiCupHot,
  "handicapped accessible": IBiPersonWheelchair,
};
</script>

<template>
  <div class="d-flex flex-wrap gap-2 align-items-center">
    <div
        v-for="extra in extras"
        :key="extra.id"
        class="d-flex align-items-center gap-2 text-muted"
    >
      <component :is="iconMap[extra.type]" class="icon"/>
      <span class="small">{{ extra.label }}</span>
    </div>
  </div>
</template>
