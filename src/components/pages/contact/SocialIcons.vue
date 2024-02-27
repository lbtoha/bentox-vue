<script setup lang="ts">
import {
  PhBehanceLogo,
  PhDribbbleLogo,
  PhFacebookLogo,
  PhInstagramLogo,
  PhTwitchLogo,
} from "@phosphor-icons/vue";
</script>
<template>
  <div className="m-t-120px social-icon-section">
    <router-link to="https://www.facebook.com" className="social-icon">
      <span className="icon">
        <PhFacebookLogo :size="24" />
      </span>
      <span className="textLead icon-name">Facebook</span>
    </router-link>

    <router-link to="https://twitter.com/" className="social-icon">
      <span className="icon">
        <PhTwitchLogo :size="24" />
      </span>
      <p className="textLead icon-name">Twitter</p>
    </router-link>

    <router-link to="https://dribbble.com/" className="social-icon">
      <span className="icon">
        <PhDribbbleLogo :size="24" />
      </span>
      <p className="textLead icon-name">Dribbble</p>
    </router-link>

    <router-link to="https://www.instagram.com/" className="social-icon">
      <span className="icon">
        <PhInstagramLogo :size="24" />
      </span>
      <p className="textLead icon-name">Instagram</p>
    </router-link>

    <router-link to="https://www.behance.net/" className="social-icon">
      <span className="icon">
        <PhBehanceLogo :size="24" />
      </span>
      <p className="textLead icon-name">Behance</p>
    </router-link>
  </div>
</template>

<style scoped></style>
