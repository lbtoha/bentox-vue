<script setup lang="ts">
defineProps<{
  image: string;
  date: string;
  tag: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}>();
</script>
<template>
  <div className="card-style-two blog-body__up-right-list">
    <div className="image-container">
      <img :src="image" alt="List blog one" className="img-fluid" />
    </div>
    <div className="list__content">
      <div className="list__content-date">
        <span className="textS font-thin">{{ date }}</span>
        <span className="textS font-thin articles-tag">{{ tag }}</span>
      </div>
      <div className="list__content-title">
        <router-link :to="link">
          <h4 className="heading-4 font-medium list-blog-title">{{ title }}</h4>
        </router-link>
        <p className="textM font-thin">{{ text }}</p>
      </div>
      <BlogLink link="{link}" linkText="{linkText}" className="list-blog" />
    </div>
  </div>
</template>

<style scoped></style>
