<script setup lang="ts"></script>
<template>
  <footer className="landing-footer m-t-120px position-relative z-2 container">
    <div className="landing-footer__left">
      <p className="landing-footer__copyright-text textL">
        Copyright @ {{ new Date().getFullYear() }}
        <router-link to="/" className="footer-template-link">
          BentoX
        </router-link>
      </p>
      <p className="landing-footer__design-text textL">
        Designed By
        <router-link className="textL" to="/"> Pixelaxis </router-link>
      </p>
    </div>
    <ul className="landing-footer__menu">
      <li className="landing-footer__menu-item">
        <router-link className="textL" to="/"> Home </router-link>
      </li>
      <li className="landing-footer__menu-item">
        <router-link className="textL" to="/about-us"> About </router-link>
      </li>
      <li className="landing-footer__menu-item">
        <router-link className="textL" to="/all-projects"> Works </router-link>
      </li>
      <li className="landing-footer__menu-item">
        <router-link className="textL" to="/contact"> Contact </router-link>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped></style>
