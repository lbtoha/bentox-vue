<script setup lang="ts">
import allProjectImage from "@/assets/image/all-project-image.png";
import allProjectStars from "@/assets/image/all-project-stars.png";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>
<template>
  <div className="card-style all-projects-card">
    <div className="all-projects-card__title-text">
      <p className="heading-4">See My</p>
      <p className="all-projects-card__title-text-two heading-4">
        Latest Works
      </p>
    </div>

    <img
      :src="allProjectImage"
      alt="All Project Image"
      className="all-projects-card__image"
    />
    <LinkPrimary
      linkText="All Projects"
      link="/all-projects"
      className="all-projects-card__link"
    />
    <img
      :src="allProjectStars"
      alt="All Project Stars"
      className="all-projects-card__image-star scale-up-down light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
