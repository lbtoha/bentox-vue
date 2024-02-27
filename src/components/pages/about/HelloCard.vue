<script setup lang="ts">
import image from "@/assets/image/shape-11.png";

</script>
<template>
  <div className="about-card card-hello">
    <span className="heading-3">Hello,</span>
    <h2 className="heading-3">I’m Gole Layla, an Award-Winning</h2>
    <span className="heading-3">Product Designer.</span>
    <p className="textL">
      As a skilled Product designer, illustrator, and visual development expert,
      my diverse background has allowed me to apply my talents across different
      fields and industries, demonstrating adaptability and versatility.
    </p>
    <img
      :src="image"
      alt="Shape"
      className="card-hello__shape light-mood-image-shape"
    />
  </div>
</template>

<style scoped></style>
