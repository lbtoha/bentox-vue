<script setup lang="ts">
import BlogLink from "./BlogLink.vue";

defineProps<{
  image: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  link: string;
}>();
</script>
<template>
  <div className="card-style-two blog-slider">
    <div className="image-container">
      <img :src="image" alt="Blog image" className="img-fluid" />
    </div>
    <div className="blog-slider__content">
      <div className="blog-slider__content-date">
        <span className="textS font-thin">{{ date }}</span>
        <span className="textS font-thin articles-tag">{{ tag }}</span>
      </div>
      <div className="blog-slider__content-title">
        <router-link to="/blog-details">
          <h3 className="heading-4 font-medium list-blog-title">{{ title }}</h3>
        </router-link>
        <p className="textM font-thin">{{ text }}</p>
      </div>
      <BlogLink
        link="/blog-details"
        linkText="Read Now"
        className="slider-link"
      />
    </div>
  </div>
</template>

<style scoped></style>
