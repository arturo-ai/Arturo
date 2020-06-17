<template>
  <div>
    <ScrollForMore/>
    <section class="cards cards__right fullHeight hippo">
      <div class="image"></div>
      <article class="card card__blue">
        <div>
          <h5 class="card__title vertText h__white">OUR VALUE</h5>
          <div class="card__content h__white">
            <h4>
              01
              <span>/04</span>
            </h4>
            <HippoLogo/>
            <h4>Pre-Fill / Underwriting</h4>
            <p>
              "Hippo’s partnership with Arturo has allowed us to pre-fill valuable data at the individual property level. These insights streamline the client’s application process, while helping us define a highly accurate initial rating and top-quality underwriting requirements."
              <span>—Mike Gulla // Head of Underwriting // Hippo Insurance</span>
            </p>
            <!-- <a class="button button__white button__white-blue" href="#">/Link</a> -->
          </div>
        </div>
      </article>
    </section>

    <section class="cards fullHeight amfam">
      <article class="card card__red">
        <div>
          <h5 class="card__title vertText h__white">OUR VALUE</h5>
          <div class="card__content h__white">
            <h4>
              02
              <span>/04</span>
            </h4>
            <AmfamLogo/>
            <h4>Claims / Underwriting</h4>
            <p>
              American Family utilizes Arturo data throughout multiple parts of their business to improve underwriting performance, identify risk within their book by identifying changes, and predicting the right resources necessary to respond to claim events.
            </p>
            <!-- <a class="button button__white button__white-red" href="#">/Link</a> -->
          </div>
        </div>
      </article>
      <div class="image"></div>
    </section>

    <section class="cards cards__right fullHeight roofr">
      <div class="image"></div>
      <article class="card card__ltBlue">
        <div>
          <h5 class="card__title vertText h__white">OUR VALUE</h5>
          <div class="card__content h__white">
            <h4>
              03
              <span>/04</span>
            </h4>
            <OpenlyLogo style="height: 80px"/>
            <h4>Pre-Fill / Quotation</h4>
            <p>
              "Access to quality data is integral to how we quantify risk at Openly. Arturo’s approach, layering sophisticated machine learning on top of high resolution imagery, is a key part of how we gain a deeper understanding of a specific property, and are ultimately able to offer an accurate and competitive rate."
              <span>—Matt Wielbut // CTO // Openly</span>
            </p>
            <!-- <a class="button button__white button__white-ltBlue" href="#">/Link</a> -->
          </div>
        </div>
      </article>
    </section>

    <section class="cards fullHeight kin">
      <article class="card card__yellow">
        <div>
          <h5 class="card__title vertText h__white">OUR VALUE</h5>
          <div class="card__content h__white">
            <h4>
              04
              <span>/04</span>
            </h4>
            <KinLogo/>
            <h4>Underwriting</h4>
            <p>
              Arturo enables Kin to provide policies built from the ground-up around the homeowner.
            </p>
            <!-- <a class="button button__white button__white-yellow" href="#">/Link</a> -->
          </div>
        </div>
      </article>
      <div class="image"></div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import KinLogo from "@/components/icons/customer-logos/kin_logo_white.svg?inline";
import RoofrLogo from "@/components/icons/customer-logos/roofr_logo_white.svg?inline";
import HippoLogo from "@/components/icons/customer-logos/hippo_logo_white.svg?inline";
import OpenlyLogo from "@/components/icons/customer-logos/openly_logo_white.svg?inline";
import AmfamLogo from "@/components/icons/am_fam_logo_white.svg?inline";
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer";
export default {
  components: {
    KinLogo,
    RoofrLogo,
    HippoLogo,
    OpenlyLogo,
    AmfamLogo,
    ScrollForMore,
    Footer
  },
  mounted() {
    if (window._paq) {
      window._paq.push(['setCustomUrl', '/' + window.location.hash.substr(1)]);
      window._paq.push(['setDocumentTitle', 'Our Value Page']);
      window._paq.push(['trackPageView']);
    }
  },
  head() {
    return {
      title: "Our Value | Arturo",
      meta: [{ hid: "description", name: "description", content: "Our Value" }]
    };
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
      right: 0;
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
    height: 80vh;
    display: flex;
    margin-top: 2rem;

    &__blue {
      background-color: $color_blue;
    }

    &__red {
      background-color: $color_red;
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
      svg,img {
        fill: $color_white;
        height: 60px;
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
      position: absolute;
      width: 50%;
      height: 65vh;
      left: 0;
      top: auto;
      box-sizing: border-box;
    }
  }

  .image {
    position: absolute;
    width: 50%;
    height: 65vh;
    right: 0;
    top: auto;
    box-sizing: border-box;
  }

  @media (max-width: 1476px) {
    .card {
      width: 90%;
      div {
        width: 65%;
      }
    }

    .image {
      background-size: cover !important;
      width: 35%;
    }
  }
  @media (max-width: 1060px) {
    height: auto;
    min-height: auto;
    .card {
    }
  }

  @media (max-width: 745px) {
    height: auto;
    justify-content: flex-start;

    &.hippo {
      margin-top: 1.5rem;
    }
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

.hippo {
  .image {
    background-image: url("~assets/images/img_value_hippo.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
}

.amfam {
  .image {
    background-image: url("~assets/images/img_value_amfam.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }
}
.roofr {
  .image {
    background-image: url("~assets/images/img_value_roofr.jpg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  }
}

.kin {
  .image {
    background-image: url("~assets/images/img_value_kin.jpg");
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }
}
</style>

