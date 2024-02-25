<script setup lang="ts">
import ExperienceCardItem from "./ExperienceCardItem.vue";
</script>
<template>
  <div className="card-style experience-card">
    <ExperienceCardItem
      :counterNumber="6"
      text="YEARS EXPERIENCE"
      counterElement="0"
    />
    <ExperienceCardItem
      :counterNumber="145"
      text="TOTAL PROJECTS"
      counterElement="+"
    />
    <ExperienceCardItem
      :counterNumber="129"
      text="CLENTS WORLDWIBE"
      counterElement="+"
    />
  </div>
</template>

<style scoped></style>
