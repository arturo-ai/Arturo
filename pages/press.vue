<template>
  <div>
    <ScrollForMore/>
    <section  v-for="(block, blockIndex) in mentionBlocks" :key="blockIndex" class="cards cards__right fullHeight">
      <article class="card" v-bind:class="cardStyles[blockIndex % cardStyles.length]">
        <div class="card__content h__white">
          <div class="press-entry" v-for="(mention, subIndex) in block" :key="''+blockIndex+'-'+subIndex" >
            <div class="press-entry-image-container" >
              <image src="" alt="Press Cover" />
            </div>
            <div class="press-entry-date" >{{mention.date}}</div>
            <div class="press-entry-title" >{{mention.title}} - {{mention.sourceName}}</div>
            <div class="press-entry-spacer" ></div>
            <div class="press-entry-read" >
              <a class="button button__teal" v-bind:href="mention.link" target="_blank" >Read Article</a>
            </div>
          </div>
        </div>
      </article>
    </section>

    <Footer/>
  </div>
</template>

<script>
import mediaMentions from '@/data/mentions'
import ScrollForMore from "@/components/ScrollForMore";
import Footer from "@/layouts/partials/footer";
export default {
  components: {
    ScrollForMore,
    Footer
  },
  data() {
    const chunkedMentions = []
    const chunkSize = 4;
    for(let i=0; i<mediaMentions.length; i+=chunkSize) {
        chunkedMentions.push(mediaMentions.slice(i,i+chunkSize));
    }
    return {
      mentionBlocks: chunkedMentions,
      cardStyles: [['card__ltBlue'], ['card__yellow'], ['card__red']]
    }
  },
  mounted() {
    window._paq.push(['setCustomUrl', '/' + window.location.hash.substr(1)]);
    window._paq.push(['setDocumentTitle', 'Arturo Press']);
    window._paq.push(['trackPageView']);
  },
  head() {
    return {
      title: "Press | Arturo",
      meta: [{ hid: "description", name: "description", content: "Arturo Press" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  align-items: center;
  position: relative;

  .card {
    width: 70%;
    display: flex;
    margin-top: 2rem;
    height: auto;

    @media (min-width: 1200px) {
      height: 80vh;
    }

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
      width: 100% !important;
      display: flex;
    }

    &__content {
      padding: 5rem 2.5rem;
      display: flex;
      height: 100%;
      box-sizing: border-box;
      flex-direction: column;

      @media (min-width: 1200px) {
        flex-direction: row;
      }
    }
  }

  @media (max-width: 1476px) {
    .card {
      width: 90%;
    }
  }
  @media (max-width: 1060px) {
    height: auto;
    min-height: auto;
  }

  @media (max-width: 745px) {
    height: auto;
    justify-content: flex-start;

    .card {
      height: auto;
      padding: 2em 0;
      width: 100%;
    }
  }
}

.press-entry {
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
  width: 25%;
  flex: none;
  box-sizing: border-box;
  width: 100% !important;
  height: 80vh;

  @media (min-width: 1200px) {
    width: 25% !important;
    height: 100%;
  }

  .press-entry-image-container {
    height: 40%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    @media (min-width: 1200px) {
      width: 100%;
    }
    
    @media (max-width: 745px) {
      width: 100%;
    }

    > img {
      width: 100%;
      height: auto;

      &.tall {
        height: 100%;
        width: auto;
      }
    }
  }

  .press-entry-date, .press-entry-title, .press-entry-read {
    flex: none;
    padding: 1rem 0.1rem;
    text-align: center;
    
    @media (max-width: 745px) {
      width: 100%;
    }
  }

  .press-entry-read {
    padding-bottom: 2rem;
  }
  
  .press-entry-date {
    font-size: 120%;
    font-weight: bold;
    color: #444444;
  }

  .press-entry-spacer {
    flex: 1 1 0%;
    display: none;

    @media (min-width: 1200px) {
      display: block;
    }
    
    @media (max-width: 745px) {
      width: 100%;
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

