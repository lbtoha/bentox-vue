<script setup lang="ts">
import bioImage from "@/assets/image/bio-image.png";
import bioRoundedImage from "@/assets/image/bio-round-text.png";
import ButtonPrimary from "@/components/shared/ButtonPrimary.vue";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
  <div class="card-style d-flex flex-column bio-card">
    <div class="bio-rounded-image">
      <img
        :src="bioRoundedImage"
        alt="Bio rounded Image"
        class="bio-rounded-text-image light-mood-image-shape"
      />
      <img
        :src="bioImage"
        alt="Bio Image"
        class="bio-image position-absolute"
      />
    </div>
    <ButtonPrimary />
    <LinkPrimary linkText="Biography" link="/about-us" />
  </div>
</template>

<style scoped></style>
