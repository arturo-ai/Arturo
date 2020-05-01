<template>
  <div>
    <section class="splash">
      <img src="~assets/images/img_af_landing.png" alt="Touchless Home Inpections">
    </section>
    <section class="description cards ">
      <article class="card ">
        <div>
          <div class="card__content  center">
            <p>
              Social distancing. Work from Home. Community Spread. These phrases
              and concerns are affecting every industry around the world. And
              they feel especially close to home for Insurance Carriers who are
              challenged with gathering high-quality and accurate data within
              the constraints of social distancing.
            </p>
            <p>
              If you are an Insurance Carrier looking for solutions to balance
              the need to manage risk, take care of policyholders and continue
              to grow your business, we can help.
            </p>
            <p>
              Join speakers John-Isaac “JC” Clark, CEO of Arturo, Inc., and Cole
              Winans, CEO of Flyreel, Inc. for our Webinar: Touchless Home
              Inspections: Using AI & ML for Home Inspections. You’ll discover
              their unique approach to touchless home inspections and how to
              provide peace of mind for your business and your policyholders.
            </p>
            <p class="b-0">
              During this webinar you’ll learn about:
            </p>
            <ul class="p-style">
              <li>
                Challenges with home inspections while social distancing
              </li>
              <li>
                Policyholder insights and preferences
              </li>
              <li>
                Technology enabling humanless and touchless home inspections
              </li>
            </ul>
          </div>
        </div>
        <div>
          <iframe
            id="st_registerform_iframe"
            class="center"
            width="395px"
            height="611px"
            frameborder="0"
            src="https://arturo.zohoshowtime.com/embedform#sessionId=3226034000000016010&zaid=10016841748&utm_st_source=embed&header=true"
          ></iframe>
        </div>
      </article>
    </section>
    <section class="speaker-list bg__ltblue">
      <h3 class="section_title">Speakers</h3>
      <div class="speakers">
        <div class="speaker">
          <div class="image">
            <img src="~assets/images/img_jc.jpg" class="hidden" />
          </div>
          <div class="speaker__info h__white t__white">
            <h3>John-Isaac Clark</h3>
            <p>CEO of Arturo, Inc.</p>
          </div>
        </div>
        <div class="speaker">
          <div class="image image__tall">
            <img src="~assets/images/img_cole_winans.jpg" class="hidden" />
          </div>
          <div class="speaker__info h__white t__white">
            <h3>Cole Winans</h3>
            <p>CEO of Flyreel, Inc.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="spacer"></div>
    <Footer />
  </div>
</template>

<script>
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer-wo-demo";
export default {
  components: {
    ScrollForMore,
    Footer
  },
  head() {
    return {
      title: "Touchless Home Inspections - 12 May 2020 | Arturo",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Touchless Home Inspections - 12 May 2020"
        }
      ]
    };
  },
  mounted() {
    if (!window._paq) {
      window._paq = [];
    }
    window._paq.push(["setCustomUrl", "/" + window.location.hash.substr(1)]);
    window._paq.push(["setDocumentTitle", "TouchlessHomeInspections12May2020"]);
    window._paq.push(["trackPageView"]);
    var animateHTML = function() {
      var elems;
      var windowHeight;
      function init() {
        elems = document.querySelectorAll(".hidden");
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
      }
      function addEventHandlers() {
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init);
        checkPosition();
      }
      function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
          var positionFromTop = elems[i].getBoundingClientRect().top;
          if (positionFromTop - windowHeight <= -200) {
            elems[i].className = elems[i].className.replace(
              "hidden",
              "fade-in-element"
            );
          }
        }
      }
      return {
        init: init
      };
    };
    animateHTML().init();
  }
};
</script>

<style lang="scss" scoped>
p,
ul.p-style li {
  padding-bottom: 1.15em;
}
.b-0 {
  margin-bottom: 0;
  padding-bottom: 0;
}
.center {
  margin: auto;
}
.cards.description  {
  font-weight: 300;
  .justify-left {
    justify-content: flex-start;
  }
  .card {
    width: 85%;
    height: auto;
    display: flex;
    margin-top: 2rem;
    padding: 2em 0;
    > div {
      flex-basis: 50%;
    }
  }
}

.splash {
  width: 100%;
  padding-left: 70px; // Space for nav bar
  > img {
    width: 100%;
  }
}

.bg__ltblue {
  background-color: $color_lightBlue;
}

.section_title{
  color: $color_white;
  font-weight: bold;
}

// for cole's image
.speakers {
  .speaker {
    .speaker__info{
      margin-top: -2rem; // account for shorter images
    }
    .image > img {
      max-height: 320px;
    }
  }
}

.spacer{
  height: 10vh;
}

.bgImage__content {
  h4 {
    padding-top: 2rem;
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
  animation: fade-in 0.75s;
}

.hidden {
  opacity: 0;
  transition: all 0.75s ease;
}

@media (max-width: 1100px) {
  .cards.description {
    .card {
      width: 90%;
      padding-left: 70px;
      flex-direction: column;
      > div {
        width: 100%;
        .card__content {
          width: 100%;
          padding: 0 2rem 0 2rem;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .card {
    height: auto;
    padding: 2em 0;
    div {
      width: 80%;
    }
  }

}
@media (max-width: 745px) {
  .splash {
    padding-left: 0;
    padding-top: 60px
  }


  .cards.description{
    .card {
        padding-left: 0;
        width:100%
    }
  }

}
</style>
