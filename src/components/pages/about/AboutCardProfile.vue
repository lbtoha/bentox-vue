<script setup lang="ts">
import imageShape from "@/assets/image/landing-two-profile-shapepng.png";

defineProps<{ image: string }>();
</script>
<template>
  <div className="about-card card-profile-image">
    <div className="card-profile-image__image-container">
      <img :src="image" alt="Landing bio image" className="profile-image" />
      <img :src="imageShape" alt="Image Shape" className="profile-shape" />
    </div>
  </div>
</template>

<style scoped></style>
