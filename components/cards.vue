<template>
  <div id="cards-container" >
    <section class="cards cards__right fullHeight card1 animated hide">
      <div class="image"></div>
      <article class="card card__blue">
        <div class="articleOne">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>
              01
              <span>/03</span>
            </h4>
            <h4>Transparency</h4>
            <p>We constantly assess our model’s performance and publish our performance metrics.</p>
            <!-- temporarily removing till blog details are up
            <a class="button button__white button__white-blue" href="#">/Link</a>
            -->
          </div>
        </div>
        <div class="articleTwo hide">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>02
              <span>/03</span>
            </h4>
            <h4>Full-loop deep learning™</h4>
            <p>Our proprietary deep learning methodology doesn’t end with a model’s output, but harnesses feedback loops to automatically improve quality and performance over time.</p>
          </div>
        </div>
        <div class="articleThree hide">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>
              03
              <span>/03</span>
            </h4>
            <h4>Access to exclusive proprietary data sources</h4>
            <p>We have access to proprietary and exclusive data no other providers have.</p>
          </div>
        </div>
      </article>
    </section>
    <section class="cards cards__right card1 unanimated">
      <div class="image"></div>
      <article class="card card__blue">
        <div class="articleOne">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>
              01
              <span>/03</span>
            </h4>
            <h4>Transparency</h4>
            <p>We constantly assess our model’s performance and publish our performance metrics.</p>
            <!-- temporarily removing till blog details are up
            <a class="button button__white button__white-blue" href="#">/Link</a>
            -->
          </div>
        </div>
      </article>
    </section>
    <section class="cards cards__right card1 unanimated">
      <div class="image image__two"></div>
      <article class="card card__red">
        <div class="articleTwo">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>02
              <span>/03</span>
            </h4>
            <h4>Full-loop deep learning™</h4>
            <p>Our proprietary deep learning methodology doesn’t end with a model’s output, but harnesses feedback loops to automatically improve quality and performance over time.</p>
          </div>
        </div>
      </article>
    </section>
    <section class="cards cards__right card1 unanimated">
      <div class="image image__three"></div>
      <article class="card card__ltBlue">
        <div class="articleThree">
          <h5 class="card__title vertText h__white">WHY WE’RE BETTER</h5>
          <div class="card__content h__white">
            <h4>
              03
              <span>/03</span>
            </h4>
            <h4>Access to exclusive proprietary data sources</h4>
            <p>We have access to proprietary and exclusive data no other providers have.</p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
var react_to_scroll__cards;
export default {
  mounted() {
    const _this = this;
    let scenes_created__cards = false;
    function createScenes_cards() {

      const unanimated_sections = document.querySelectorAll('section.cards.unanimated');
      for (let i = 0; i < unanimated_sections.length; i++) {
        unanimated_sections[i].classList.add('hide');
      }

      const animated_sections = document.querySelectorAll('section.cards.animated');
      for (let i = 0; i < animated_sections.length; i++) {
        animated_sections[i].classList.remove('hide');
      }

      const cards_container = document.getElementById('cards-container');
      if (cards_container) {
        cards_container.classList.add('initialized');
      }

      
      const cardPin = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "onLeave",
        reverse: true,
        duration: 3000
      });

      /// Blue Card

      _this.$scrollmagic.addScene(
        cardPin.setPin(".cards", { pushFollowers: true })
      );

      const backgroundChange0 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        duration: 1000
      });
      _this.$scrollmagic.addScene(
        backgroundChange0
          .setClassToggle(".cards .card", "card__blue")
      );

      const article0 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 1000
      });
      _this.$scrollmagic.addScene(
        article0
          .setClassToggle(".articleOne", "hide")
      );

      /// Red Card

      const backgroundChange1 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 1000,
        duration: 1000
      });
      _this.$scrollmagic.addScene(
        backgroundChange1
          .setClassToggle(".cards .card", "card__red")
      );

      const imageChange1 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 1000,
        duration: 1000
      });
      _this.$scrollmagic.addScene(
        imageChange1
          .setClassToggle(".cards .image", "image__two")
      );

      const article1 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 1000,
        duration: 1000
      });
      _this.$scrollmagic.addScene(
        article1
          .setClassToggle(".articleTwo", "hide__nohide")
      );

      /// Light Blue Card

      const backgroundChange2 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 2000
      });
      _this.$scrollmagic.addScene(
        backgroundChange2
          .setClassToggle(".cards .card", "card__ltBlue")
      );

      const imageChange2 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 2000
      });
      _this.$scrollmagic.addScene(
        imageChange2
          .setClassToggle(".cards .image", "image__three")
      );

      const article2 = _this.$scrollmagic.scene({
        triggerElement: ".cards",
        triggerHook: "0",
        reverse: true,
        offset: 2000
      });
      _this.$scrollmagic.addScene(
        article2
          .setClassToggle(".articleThree", "hide__nohide")
      );
    }

    react_to_scroll__cards = function() {
      if (!scenes_created__cards) {
          createScenes_cards();
          scenes_created__cards = true;
          window.removeEventListener('scroll', react_to_scroll__cards, false);
      }
    }

    window.addEventListener('scroll', react_to_scroll__cards, false);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', react_to_scroll__cards, false)
  }
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .image__block {
    width: 50%;
    height: 75vh;
    display: flex;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      background-color: $color_blue;
      height: 100%;
      width: 75%;
      top: 0;
      position: absolute;
    }

    .image {
      background-color: gray;
      height: 85%;
      width: 100%;
      z-index: 10;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 2rem;
    }
  }

  .card {
    width: 70%;
    height: 75vh;
    display: flex;
    margin-top: 2rem;
    background-color: $color_blue;
    transition: background-color 0.5s ease;

    &__blue {
      background-color: $color_blue;
    }

    &__red {
      background-color: $color_red;
      justify-content: flex-start !important;
    }

    &__ltBlue {
      background-color: $color_lightBlue;
    }

    &__yellow {
      background-color: $color_yellow;
    }

    &__dkBlue {
      background-color: $color_darkBlue;
    }

    & > div {
      width: 50%;
      display: flex;
    }

    &__title {
      padding: 3rem 2rem 5rem 2rem;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        background-color: $color_white;
        height: 50%;
        top: 0;
        right: 0;
      }
    }

    &__content {
      padding: 0 5rem 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      h4 {
        padding-bottom: 1rem;
      }
      svg {
        fill: $color_white;
        height: 46px;
        display: block;
        margin-bottom: 1rem;
      }
    }
  }

  &__right {
    .card {
      justify-content: flex-end;
    }
    .image {
      background-image: url("~assets/images/img_careers.jpg");
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      width: 50%;
      height: 65vh;
      left: 0;
      right: auto;
      top: auto;
      box-sizing: border-box;
      transition: all 0.5s ease;
      z-index: 10;
      &__two {
        left: 50%;
        background-image: url("~assets/images/img_home_fullloop@2x.jpg");
        background-position: center;
      }
      &__three {
        left: 0;
        background-image: url("~assets/images/img_home_proprietary.jpg");
      }
    }
  }

  @media (max-width: 1315px) {
    .card {
      width: 90%;
    }
  }
  @media (max-width: 1060px) {
    height: auto;
    .card {
    }
  }

  @media (max-width: 745px) {
    height: auto;
    justify-content: flex-start;
    .card {
      height: auto;
      padding: 2em 0;
      width: 100%;
      div {
        width: 100%;
      }
    }
    .image {
      display: none;
    }
    &.cards__right {
      justify-content: flex-end;
    }
  }
}

article {
  div {
    transition: opacity 0.25s ease;
  }
}

.hide {
  display: none !important;
  &__nohide {
    display: flex !important;
  }
}
</style>
