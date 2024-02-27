<script setup lang="ts">
import groupShape from "@/assets/image/group-4.png";
import bottomShape from "@/assets/image/shape-14.png";
import { IconArrowBadgeRight } from "@tabler/icons-vue";
</script>
<template>
  <div className="about-card what-i-do p-32px">
    <p className="heading-4">What I Do</p>
    <div className="what-i-do__content">
      <div className="what-i-do__content-item">
        <IconArrowBadgeRight />
        <p className="textL">Branding</p>
      </div>
      <div className="what-i-do__content-item">
        <IconArrowBadgeRight />
        <p className="textL">Illustration</p>
      </div>
      <div className="what-i-do__content-item">
        <IconArrowBadgeRight />
        <p className="textL">Logo Design</p>
      </div>
      <div className="what-i-do__content-item">
        <IconArrowBadgeRight />
        <p className="textL">Typography</p>
      </div>
      <div className="what-i-do__content-item">
        <IconArrowBadgeRight />
        <p className="textL">Card Design</p>
      </div>
    </div>
    <img
      :src="bottomShape"
      alt="Bottom Shape"
      className="bottom-shape light-mood-image-shape"
    />
    <img
      :src="groupShape"
      alt="Bottom Shape"
      className="group-shape light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
