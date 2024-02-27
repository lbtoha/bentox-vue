<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  image: string;
  text: string;
  listContent: string[];
  flexDirection?: string;
}>();
</script>
<template>
  <div class="project-details__item ${flexDirection">
    <div class="product-details-image-div">
      <img
        :src="image"
        alt="Image one"
        class="img-fluid project-details__item-image"
      />
    </div>
    <div class="project-details__item-content">
      <h5 class="heading-3">{{ title }}</h5>
      <p class="textL project-details__item-content-text">{{ text }}</p>
      <ol>
        <li
          v-for="(item, index) in listContent"
          :key="`project-details-${index}`"
        >
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped></style>
