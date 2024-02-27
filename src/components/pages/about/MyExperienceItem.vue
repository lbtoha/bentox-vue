<script setup lang="ts">
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
import { defineProps } from "vue";

defineProps<{ time: string; title: string; company: string }>();
</script>
<template>
  <div className="my-experience__content-item">
    <PhCaretDoubleRight :size="24" />
    <p className="textM">{{ time }}</p>
    <div className="dash"></div>
    <p className="textM">{{ title }}</p>
    <div className="dash"></div>
    <p className="textM">{{ company }}</p>
  </div>
</template>

<style scoped></style>
