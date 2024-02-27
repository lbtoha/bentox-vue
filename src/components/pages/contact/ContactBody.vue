<script setup lang="ts">
import ContactLeft from "./ContactLeft.vue";
import ContactRight from "./ContactRight.vue";
import SocialIcons from "./SocialIcons.vue";
</script>
<template>
  <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
    <div className="contact-section">
      <ContactLeft />
      <ContactRight />
    </div>
    <SocialIcons />
  </div>
</template>

<style scoped></style>
