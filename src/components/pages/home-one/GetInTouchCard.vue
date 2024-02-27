<script setup lang="ts">
import getInTouchShape from "@/assets/image/get-in-touch-shape.png";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
  <div class="card-style get-in-touch-card">
    <div class="get-in-touch-card__title-text">
      <p class="heading-4">Work with</p>
      <p class="get-in-touch-card__title-text-two heading-4">Gole Layla...!</p>
    </div>
    <LinkPrimary
      linkText="Get in Touch"
      link="/contact"
      class="get-in-touch-card__link"
    />
    <img
      :src="getInTouchShape"
      alt="Get In Touch Shape"
      class="get-in-touch-card__image-shape scale-up-down light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
