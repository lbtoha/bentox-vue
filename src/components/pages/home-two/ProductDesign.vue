<script setup lang="ts">
import titleShape from "@/assets/image/landing-two-title-shape.png";
</script>
<template>
  <div class="card-style-two product-design p-32px">
    <span class="product-design__sub-title heading-4">Title</span>
    <h2 class="heading-2 product-design__title">Product Designer</h2>
    <Image
      :src="titleShape"
      alt="Title shape"
      class="product-design__shape scale-up-down light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
