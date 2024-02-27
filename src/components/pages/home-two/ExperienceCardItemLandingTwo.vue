<script setup lang="ts">
import CustomCounterUp from "@/components/shared/CustomCounterUp.vue";

defineProps<{
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <div className="experience-one card-style-two p-32px">
    <div className="experience__item">
      <p className="experience__item-number display-4">
        {{ counterElement }}
        <CustomCounterUp :counterNumber="counterNumber" />
      </p>
      <p className="experience__item-text textL">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped></style>
