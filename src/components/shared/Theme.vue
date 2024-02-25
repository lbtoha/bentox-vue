<script setup lang="ts">
import { useDark, useTextDirection, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "theme",
  valueDark: "custom-dark",
  valueLight: "custom-light",
});

const toggleDark = useToggle(isDark);

const dir = useTextDirection();

function handleOnClick() {
  dir.value = dir.value === "rtl" ? "ltr" : "rtl";
}
</script>

<template>
  <div className="theme-modal-button" @click="handleOnClick">
    <button>
      <!-- <Setting2 size="32" color="#ff6900" className="rotating setting-icon" /> -->
      <i class="iconsax rotating setting-icon" icon-name="setting-2"></i>
    </button>
  </div>

  <div className="theme-modal modal-open">
    <button className="theme-modal__theme-dir"></button>
    <button className="theme-modal__theme-dir"></button>
  </div>
</template>

<style scoped></style>
