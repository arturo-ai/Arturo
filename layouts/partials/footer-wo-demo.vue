<template>
  <footer class="page-footer">
    <div class="footer__bottom">
      <div class="bottom-content t__white">
        <div class="bottom-left">
          <div class="logo-holder">
            <a href="/"></a>
            <nuxt-link to="/">
              <ArturoLogo />
            </nuxt-link>
          </div>
          <div class="address">
            350 North Orleans Street
            <br />Suite 8000N <br />Chicago IL 60654 <br />USA
          </div>
          <div class="address secondary_address">
            245 Powell Ave
            <br />Ottawa, ON K1S 2A4 <br />Canada
          </div>
          <div class="address secondary_address">
            312-535-3006
            <br />
            <a href="mailto:info@arturo.ai">info@arturo.ai</a>
          </div>
        </div>
        <div class="bottom-right">
          <SocialList class="social" />
          <nuxt-link to="/">Home</nuxt-link>//<nuxt-link to="/about-us"
            >About Us</nuxt-link
          >//<nuxt-link to="/our-value">Our Value</nuxt-link>
        </div>
      </div>
      <div class="footer__copyright t__white">©2019 Arturo inc.</div>
    </div>
  </footer>
</template>

<script>
import ArturoLogo from "@/components/icons/Arturo-vertical-logo/arturo_vertical_logo_white.svg?inline";
import SocialList from "@/components/SocialList";
import { TweenMax, Elastic } from "gsap";

var footer_menu_scene = null;
var footer_scroll_scene = null;

export default {
  components: {
    SocialList,
    ArturoLogo
  },

  mounted() {
    const scene2 = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 0.2,
      reverse: true,
      duration: 150
    });

    this.$scrollmagic.addScene(
      scene2.setTween("footer .footer__bottom", { "margin-top": "0" })
    );

    footer_menu_scene = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 1,
      reverse: true
    });
    footer_menu_scene.setClassToggle("#slideout-menu", "hide-from-footer");

    this.$scrollmagic.addScene(footer_menu_scene);

    footer_scroll_scene = this.$scrollmagic.scene({
      triggerElement: "footer",
      triggerHook: 1,
      reverse: true
    });
    footer_scroll_scene.setClassToggle("#scroll", "hide-from-footer");

    this.$scrollmagic.addScene(footer_scroll_scene);
  },
  beforeDestroy() {
    footer_menu_scene.removeClassToggle();
    footer_scroll_scene.removeClassToggle();
  },
  methods: {
    show() {
      this.$modal.show("demo");
    }
  }
};
</script>

<style></style>
