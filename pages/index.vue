<template>
  <div id="main-container" >
    <ScrollForMore/>
    <Hero/>

    <Counting number="1234"/>

    <section id="bgImage1" class="bgImage fullHeight">
      <div class="background"></div>
      <article class="blue">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              01
              <span>/03</span>
            </h4>
            <h4>Delivering physical property characteristics and predictive analysis</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="bgImage2" class="bgImage bgImage__right fullHeight">
      <div class="background"></div>
      <article class="red">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              02
              <span>/03</span>
            </h4>
            <h4>Understanding activity patterns to better determine risk</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="bgImage3" class="bgImage fullHeight">
      <div class="background"></div>
      <article class="ltBlue">
        <div>
          <h5 class="bgImage__title vertText h__white">What we do</h5>
          <div class="bgImage__content h__white">
            <h4 class="number">
              03
              <span>/03</span>
            </h4>
            <h4>Analysis that can expand to developing countries enabling creation of new markets</h4>
          </div>
        </div>
      </article>
    </section>
    <section id="logos" class="logos fullHeight bg__dkBlue">
      <article id="pin1">
        <h5 class="vertText">Our Customers</h5>
        <div class="logos__block">
          <div>
            <KinLogo/>
          </div>
          <div>
            <OpenlyLogo/>
          </div>
          <div>
            <HippoLogo/>
          </div>
          <div>
            <AmfamLogo/>
          </div>
          <!-- <div>
            <CanopiusLogo/>
          </div> -->
          <div>
            <BranchLogo/>
          </div>
        </div>
      </article>
    </section>

    <Cards/>

    <section class="process fullHeight">
      <article class="process__card">
        <div>
          <h5 class="process__title vertText h__white">Our Process</h5>
          <div class="process__content t__white h__white">
            <div class="process__item mark-for-fade-in">
              <img src="~assets/images/icon_proprietarty.svg">
              <h4>
                01
                <span>/03</span>
              </h4>
              <p>Arturo uses proprietary data to develop differentiated and transparent models</p>
            </div>
            <div class="process__item mark-for-fade-in">
              <img src="~assets/images/icon_models.svg">
              <h4>
                02
                <span>/03</span>
              </h4>
              <p>These models process the most recent input data available including images, mobile device data, property records, and weather data</p>
            </div>
            <div class="process__item mark-for-fade-in">
              <img src="~assets/images/icon_ui.svg">
              <h4>
                03
                <span>/03</span>
              </h4>
              <p>Our customers use our API and UI to easily integrate these insights within their existing workflows</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <Footer/>
  </div>
</template>

<script>
import KinLogo from "@/components/icons/customer-logos/kin_logo_white.svg?inline";
import OpenlyLogo from "@/components/icons/customer-logos/openly_logo_white.svg?inline";
import HippoLogo from "@/components/icons/customer-logos/hippo_logo_white.svg?inline";
import AmfamLogo from "@/components/icons/am_fam_logo_white.svg?inline";
import CanopiusLogo from "@/components/icons/customer-logos/CanopiusWhite.svg?inline";
import BranchLogo from "@/components/icons/customer-logos/BranchWhite.svg?inline";
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer";
import Cards from "@/components/cards";
import Hero from "@/components/Hero";
import Counting from "@/components/Counting";
export default {
  components: {
    KinLogo,
    OpenlyLogo,
    HippoLogo,
    AmfamLogo,
    CanopiusLogo,
    BranchLogo,
    ScrollForMore,
    Footer,
    Cards,
    Hero,
    Counting
  },
  head() {
    return {
      title: "Arturo",
      meta: [{ hid: "description", name: "description", content: "Arturo" }]
    };
  },
  mounted() {
    if (window._paq) {
      window._paq.push(['setCustomUrl', '/' + window.location.hash.substr(1)]);
      window._paq.push(['setDocumentTitle', 'Home Page']);
      window._paq.push(['trackPageView']);
    }
    const _this = this;
    var scenes_created = false;

    function initialize_fade_in_elements() {
        let marked = document.querySelectorAll(".mark-for-fade-in");
        for (let i = 0; i < marked.length; i++) {
          marked[i].classList.replace('mark-for-fade-in', 'hidden');
        }
    }

    // Shows/Hides fade-in elements
    var animateHTML = function() {
      var elems = document.querySelectorAll(".hidden");
      var windowHeight = window.innerHeight;
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= -250) {
          elems[i].className = elems[i].className.replace(
            "hidden",
            "fade-in-element"
          );
        }
      }
    };

    function createScenes() {
      if (scenes_created) {
        return;
      }

      //////////////////////
      //BGimage Section 1//
      /////////////////////
      const bg1Background = _this.$scrollmagic.scene({
        triggerElement: "#bgImage1 .background",
        triggerHook: 1
      });
      _this.$scrollmagic.addScene(
        bg1Background.setClassToggle("#bgImage1 .background", "on")
      );
      const bg1BackgroundOut = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg1BackgroundOut.setClassToggle("#bgImage1 .background", "off")
      );
      const bg1Article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage1 .background",
        triggerHook: 0.7
      });
      _this.$scrollmagic.addScene(
        bg1Article.setClassToggle("#bgImage1 article", "on")
      );
      const bg1ArticleOut = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg1ArticleOut.setClassToggle("#bgImage1 article", "off")
      );
      const bg1Number = _this.$scrollmagic.scene({
        triggerElement: "#bgImage1",
        triggerHook: 0.45
      });
      _this.$scrollmagic.addScene(
        bg1Number.setClassToggle("#bgImage1 .number", "reveal-text")
      );
      const bg1article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage1",
        triggerHook: 0.35
      });
      _this.$scrollmagic.addScene(bg1article.setClassToggle("#bgImage1 h4", "in"));
      //////////////////////
      //BGimage Section 2//
      /////////////////////
      const bg2Background = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2 .background",
      });
      _this.$scrollmagic.addScene(
        bg2Background.setClassToggle("#bgImage2 .background", "on")
      );
      const bg2BackgroundOut = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg2BackgroundOut.setClassToggle("#bgImage2 .background", "off")
      );
      const bg2Article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg2Article.setClassToggle("#bgImage2 article", "on")
      );
      const bg2ArticleOut = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg2ArticleOut.setClassToggle("#bgImage2 article", "off")
      );
      const bg2Number = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg2Number.setClassToggle("#bgImage2 .number", "reveal-text")
      );
      const bg2article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage2",
        triggerHook: 0.35
      });
      _this.$scrollmagic.addScene(bg2article.setClassToggle("#bgImage2 h4", "in"));
      //////////////////////
      //BGimage Section 3//
      /////////////////////
      const bg3Background = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3 .background",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg3Background.setClassToggle("#bgImage3 .background", "on")
      );
      const bg3Article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3 .background",
        triggerHook: 0.7
      });
      _this.$scrollmagic.addScene(
        bg3Article.setClassToggle("#bgImage3 article", "on")
      );
      const bg3Number = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3",
        triggerHook: 0.5
      });
      _this.$scrollmagic.addScene(
        bg3Number.setClassToggle("#bgImage3 .number", "reveal-text")
      );
      const bg3article = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3",
        triggerHook: 0.3
      });
      _this.$scrollmagic.addScene(bg3article.setClassToggle("#bgImage3 h4", "in"));
      const bg3pin = _this.$scrollmagic.scene({
        triggerElement: "#bgImage3",
        triggerHook: "onLeave",
        reverse: true
      });
      _this.$scrollmagic.addScene(
        bg3pin.setPin("#bgImage3", { pushFollowers: false })
      );
      /////////
      //Logos//
      /////////
      const logos = _this.$scrollmagic.scene({
        triggerElement: "#logos",
        triggerHook: "onLeave",
        reverse: true
      });
      _this.$scrollmagic.addScene(
        logos.setPin("#logos", { pushFollowers: false })
      );

      let main_container = document.getElementById('main-container');
      if (main_container)
        main_container.classList.add('initialized');
    }

    const react_to_scroll = function() {
      if (!scenes_created) {
          initialize_fade_in_elements();
          createScenes();
          scenes_created = true;
      }
      animateHTML();
    }

    window.addEventListener('scroll', react_to_scroll, false);
    window.addEventListener('resize', animateHTML, false);
  }
};
</script>

<style lang="scss" scoped>
.hero {
  height: 75vh;
  min-height: 470px;
}
.counting {
  /*height: 25vh;*/
}

#bgImage1 {
  .background {
    background-image: url("~assets/images/img_01_home.jpg");
  }
}
#bgImage2 {
  .background {
    background-image: url("~assets/images/img_02_home.jpg");
  }
}
#bgImage3 {
  .background {
    background-image: url("~assets/images/img_03_home_tanks.jpg");
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in-element {
  animation: fade-in 0.5s;
}

.hidden {
  opacity: 0;
  transition: all 0.5s ease;
}
</style>
