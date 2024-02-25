<script setup lang="ts">
defineProps<{
  counterNumber: number;
  counterElement?: string;
  decimals?: number;
  text: string;
}>();
</script>
<template>
  <div className="experience-card__item">
    <p className="experience-card__item-number display-4">
      {{ counterElement }}

      <ReactCounterUp end="{counterNumber}" decimals="{decimals}" /> 120
    </p>
    <p className="experience-card__item-text textM">{{ text }}</p>
  </div>
</template>

<style scoped></style>
