<script setup lang="ts">
import {
  PhAngularLogo,
  PhFigmaLogo,
  PhFilmStrip,
  PhFramerLogo,
  PhPencil,
  PhSketchLogo,
} from "@phosphor-icons/vue";

const sliderOneData = [
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
  "UX Design",
  "UI Design",
  "Product Design",
  "Workshops",
  "Design Sprient",
  "Design",
];

const sliderTwo = [
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhFramerLogo,
  },
  {
    icon: PhAngularLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhFramerLogo,
  },
  {
    icon: PhFigmaLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhPencil,
  },
  {
    icon: PhSketchLogo,
  },
  {
    icon: PhFilmStrip,
  },
  {
    icon: PhFramerLogo,
  },
];
</script>

<template>
  <div className="card-style skills-card">
    <span className="heading-4 skills-card__title">Skills & Tools</span>
    <div className="skills-card__slider-aria ">
      <div className="marquee-wrapper text-slider">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              <span
                v-for="(item, index) in sliderOneData"
                className="skills-card__slider-text"
              >
                {{ item }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="marquee-wrapper-icon-slider">
        <div className="marquee-inner to-right">
          <ul className="marqee-list d-flex">
            <li className="marquee-item">
              {sliderTwo.map(({ icon }, index) => (
              <span
                v-for="({ icon }, index) in sliderTwo"
                key="{`skill-slider-two${index}`}"
                className="skills-card__slider-two__box"
              >
                <component :is="icon" size="32"></component>
              </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
