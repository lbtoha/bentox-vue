<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
</script>
<template>
  <div className="right__search-box">
    <div className="search-field">
      <input type="text" className="search" placeholder="Search" />
      <button className="search-icon">
        <PhMagnifyingGlass :size="24" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
