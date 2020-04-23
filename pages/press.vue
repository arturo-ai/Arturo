<template>
  <div>
    <ScrollForMore/>
    <section  v-for="(block, blockIndex) in mentionBlocks" :key="blockIndex" class="cards cards__right fullHeight">
      <article class="card" v-bind:class="cardStyles[blockIndex % cardStyles.length]">
        <div class="card__content h__white">
          <div class="press-entry" v-for="(mention, subIndex) in block" :key="''+blockIndex+'-'+subIndex" >
            <div class="press-entry-image-container" >
              <div class="press-entry-image-wrapper" v-bind:style="{ backgroundColor: mention.mediaSource.backgroundColor || 'white' }" >
                <div class="press-entry-image">
                  <img v-bind:src="mention.mediaSource.image" alt="Press Cover" />
                </div>
              </div>
            </div>
            <div class="press-entry-date" >{{mention.date}}</div>
            <div class="press-entry-title" >{{mention.title}} - <i>{{mention.mediaSource.name}}</i></div>
            <div class="press-entry-spacer" ></div>
            <div class="press-entry-read" >
              <a class="button button__teal" v-if="mention.type === 'pdf'" :href="mention.link" target="_blank" >Read Article</a>
              <a class="button button__teal" v-else v-bind:href="mention.link" target="_blank" >Read Article</a>
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
    if (window._paq) {
      window._paq.push(['setCustomUrl', '/' + window.location.hash.substr(1)]);
      window._paq.push(['setDocumentTitle', 'Arturo Press']);
      window._paq.push(['trackPageView']);
    }
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
      flex-wrap: wrap;

      @media (min-width: 996px) {
        flex-direction: row;
      }

      @media (min-width: 1200px) {
        flex-direction: row;
        flex-wrap: nowrap;
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

  @media (min-width: 996px) {
    width: 50% !important;
    height: 60vh;
  }

  @media (min-width: 1200px) {
    width: 25% !important;
    height: 100%;
  }

  .press-entry-image-container {
    min-height: 40%;
    height: auto;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    @media (min-width: 996px) {
      width: 100%;
      height: 32vh;
    }

    @media (min-width: 1200px) {
      height: 40%;
    }
    
    @media (max-width: 745px) {
      width: 100%;
    }

    a {
      width: auto;
    }

    .press-entry-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 996px) {
        width: 50%;
      }

      @media (min-width: 1200px) {
        width: 100%;
      }
    
      .press-entry-image {
        padding: 1rem;
        img {
          width: 100%;
          height: auto;

          &.tall {
            height: 100%;
            width: auto;
          }
        }
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

  .press-entry-date, .press-entry-title {
    color: #444444;
  }
  
  .press-entry-title {
    font-size: 120%;
    font-weight: bold;
  }

  .press-entry-spacer {
    flex: 1 1 0%;
    display: none;

    @media (min-width: 996px) {
      display: block;
    }
    
    @media (max-width: 745px) {
      width: 100%;
    }
  }
}

</style>

