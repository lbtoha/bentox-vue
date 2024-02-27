<script setup lang="ts">
import CustomCounterUp from "@/components/shared/CustomCounterUp.vue";
import { defineProps } from "vue";

defineProps<{
  counterNumber: number;
  counterElement?: string;
  rightElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <div className="experience-in-number__item">
    <p className="experience-in-number__item-number heading-1">
      {{ counterElement }}
      <!-- <ReactCounterUp end="{counterNumber}" decimals="{decimals}" /> -->
      <CustomCounterUp :counter-number="counterNumber" />
      {{ rightElement }}
    </p>
    <p className="textL experience-in-number__item-text ">{{ text }}</p>
  </div>
</template>

<style scoped></style>
