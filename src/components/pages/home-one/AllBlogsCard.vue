<script setup lang="ts">
import allBlogsStar from "@/assets/image/all-blog-card-star.png";
import LinkPrimary from "@/components/shared/LinkPrimary.vue";
</script>

<template>
  <div class="card-style all-blog-card">
    <div class="all-blog-card__title-text">
      <p class="heading-4">Articles &</p>
      <p class="all-blog-card__title-text-two heading-4">Publications</p>
    </div>

    <LinkPrimary
      linkText="All Blogs"
      link="/blogs"
      class="all-blog-card__link"
    />
    <img
      :src="allBlogsStar"
      alt="Title Card Shape"
      class="all-blog-card__shapes-image light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
