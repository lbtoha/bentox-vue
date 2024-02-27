<script setup lang="ts">
import ExperienceCardItemAbout from "./ExperienceCardItemAbout.vue";
</script>
<template>
  <div className="about-card experience-in-number">
    <ExperienceCardItemAbout
      :counterNumber="7"
      text="YEARS EXPERIENCE"
      counterElement="0"
      rightElement="+"
    />
    <ExperienceCardItemAbout
      :counterNumber="125"
      text="TOTAL PROJECTS"
      counterElement="+"
    />

    <ExperienceCardItemAbout
      :counterNumber="9"
      text="RECOGNITIONS"
      counterElement="0"
    />
    <ExperienceCardItemAbout
      :counterNumber="0"
      text="UNHAPPY CLIENTS"
      counterElement="0"
    />
  </div>
</template>

<style scoped></style>
