<script setup lang="ts">
import { onMounted, ref } from "vue";

const preloader = ref<HTMLElement | null>(null);

onMounted(() => {
  preloader.value = document.getElementById("preloader");
  if (preloader.value) {
    (preloader.value as HTMLElement).style.display = "none";
  }
});
</script>
<template>
  <div id="preloader">
    <div class="layla-preloader text-center"></div>
  </div>
</template>
