<script setup lang="ts">
import hoverIcon from "@/assets/image/hover-icon.png";
import { defineProps } from "vue";

defineProps<{ socialLink: string }>();
</script>
<template>
  <router-link
    :to="`${socialLink}`"
    className="position-relative  icon-container profile-icon"
  >
    <slot />
    <img :src="hoverIcon" alt="Hover Icon" className="hover-icon" />
  </router-link>
</template>

<style scoped></style>
