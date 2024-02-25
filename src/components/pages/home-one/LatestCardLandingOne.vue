<script setup lang="ts">
import starShape from "@/assets/image/star-shape.png";

const arrayLength = Array.from({ length: 50 });
</script>
<template>
  <div className="card-style latest-card position-relative overflow-hidden">
    <div className="marquee-wrapper">
      <div className="marquee-inner to-left">
        <ul className="marqee-list d-flex">
          <li className="marquee-item">
            <span v-for="item in arrayLength">
              <span className="star-image">
                <img :src="starShape" alt="Star Shape" />
              </span>
              <span className="latest-work-slider-text textL">
                <span className="latest-work-light-text">
                  LATEST WORKS AND
                </span>
                FEATURED
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
