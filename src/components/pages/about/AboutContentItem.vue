<script setup lang="ts">
defineProps<{
  year: string;
  title: string;
  university: string;
}>();
</script>
<template>
  <div className="about-education__content-item">
    <p className="textM year">{{ year }}</p>
    <p className="textXL title">{{ title }}</p>
    <p className="textM university">{{ university }}</p>
  </div>
</template>

<style scoped></style>
