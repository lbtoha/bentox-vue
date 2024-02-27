<script setup lang="ts">
import { navbarData } from "@/assets/data/navbarData";
import { useRoute } from "vue-router";
import ArrowButton from "./ArrowButton.vue";

interface MenuItem {
  id: string;
  menuTitle: string;
  path: string;
  menuItems?: {
    id: string;
    title: string;
    menuItemPath: string;
  }[];
}

const currentPath = useRoute();

const isActive = (item: MenuItem) => {
  return (
    currentPath.path === item.path ||
    (item.menuItems &&
      item.menuItems.some(
        (subItem) => currentPath.path === subItem.menuItemPath
      ))
  );
};
</script>

<template>
  <div class="navbar-container container position-relative z-3">
    <div class="desktop-navbar-container">
      <div>
        <router-link to="/" class="logo-main">
          Bento<span>X</span>
        </router-link>
      </div>
      <ul class="desktop-menu-items" id="primary">
        <li
          v-for="item in navbarData"
          :key="item.id"
          :class="{
            'position-relative menu-item-with-dropdown': item.menuItems,
          }"
        >
          <p
            class="d-flex gap-1 align-items-center justify-content-between navbar-hover-text"
            :class="{ 'text-secondary': isActive(item) }"
          >
            <span
              class="textL font-medium"
              :class="{ 'text-secondary': isActive(item) }"
            >
              {{ item.menuTitle }}
            </span>

            <i
              class="iconsax menu-arrow-icon"
              icon-name="chevron-down"
              v-if="item.menuItems"
            ></i>
          </p>

          <ul class="list-unstyled main-menu-dropdown" v-if="item.menuItems">
            <li
              v-for="subItem in item.menuItems"
              :key="subItem.id"
              :class="{ 'menu-active': isActive(subItem) }"
            >
              <router-link
                :to="subItem.menuItemPath"
                class="textL desktop-menu-item desktop-menu-dropdown-item menu-item-text-white"
              >
                {{ subItem.title }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ArrowButton link="/" />
    </div>
  </div>
</template>
