<script setup lang="ts">
import image from "@/assets/image/landing-two-get-in-touch-shape.png";
import LinkPrimaryTwo from "./LinkPrimaryTwo.vue";
</script>
<template>
  <div className="get-in-touch card-style-two p-32px">
    <p className="heading-4">Let’s Works Together</p>
    <LinkPrimaryTwo link="/contact" linkText="Get In Touch" />
    <img
      :src="image"
      alt="Get in touch Shape"
      className="shape-get-touch light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
