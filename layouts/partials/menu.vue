<template>
  <nav class="slideout-menu" id="slideout-menu">
    <ul>
      <h5 class="vertText h__white">Navigation</h5>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/about-us">About Us</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/our-value">Our Value</nuxt-link>
      </li>
      <li>
        <nuxt-link @click.native="toggleMenue" to="/press">Press</nuxt-link>
      </li>
      <li>
        <a href="https://jobs.arturo.ai/">Careers</a>
      </li>
    </ul>
    <SocialList class="mobile-social" />
    <div class="slider">
      <div class="logo">
        <nuxt-link to="/"><ArturoMark /></nuxt-link>
      </div>
      <div id="slideout_toggle_wrapper" class="slideout-toggle-wrapper" >
        <a class="slideout-toggle vertText t__white" href="#" id="slideout-toggle" >
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>MENU
        </a>
      </div>
      <SocialList class="social" />
    </div>
  </nav>
</template>

<script>

import ArturoMark from '@/components/icons/arturo_white_mark.svg?inline';
import SocialList from '@/components/SocialList';

const interaction_debounce = 300;
var timestamp = 0;

export default {
  methods: {
    toggleMenue: function () {
      const menu = document.getElementById("slideout-menu");
      menu.classList.toggle("is-open");
    }
  },
  components:{
    ArturoMark,
    SocialList
  },
  mounted() {

    var after_click = function (e) {
      e.preventDefault();
      let c_time = new Date().getTime();
      if (c_time - interaction_debounce <= timestamp) {
        return;
      }
      timestamp = c_time;
      if (!menu) {
        menu = document.getElementById("slideout-menu");
      }
      if (!menu) { return };
      menu.classList.toggle("is-open");
    };

    var after_touched = function (e) {
      e.preventDefault();
      let c_time = new Date().getTime();
      if (c_time - interaction_debounce <= timestamp) {
        return;
      }
      timestamp = c_time;
      if (!menu) {
        menu = document.getElementById("slideout-menu");
      }
      if (!menu) { return };
      menu.classList.toggle("is-open");
    };

    var menu, toggleButton, closeButton;
    // Set Elements
    menu = document.getElementById("slideout-menu");
    toggleButton = document.getElementById("slideout_toggle_wrapper");
    closeButton = document.getElementById("slideout-close");

    if (menu) {
      menu.classList.add('initialized');
    }

    timestamp = new Date().getTime();

    // Toggle Menu
    toggleButton.addEventListener("click", after_click, true);
    toggleButton.addEventListener("touchend", after_touched, true);
  },
  watch: {
    $route() {
      let menu = document.getElementById("slideout-menu");
      if (menu) {
        menu.classList.remove('hide-from-footer');
      }
      let scroll = document.getElementById("scroll");
      if (scroll) {
        scroll.classList.remove('hide-from-footer');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>