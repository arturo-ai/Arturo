<template>
    <v-popover
        offset="0"
        placement="top-start"
    >
    <!-- This will be the popover target (for the events and position) -->
    <a class="link learn-more">Learn more about insights</a>

    <!-- This will be the content of the popover -->
    <template slot="popover">
        <p>
            Arturo provides AI derived insights in the form of physical property characteristics. Property Characteristics relate to distinct features of a property (i.e., physically bounded spatial area largely defined by the legal parcel) derived from running our deep learning models on aerial and satellite imagery.
        </p>
        <p>
            Each insight includes characteristics such as number of buildings, roof type &amp; area, roof material, roof complexity &amp; condition, pools, trampolines, cars, number of stories, building/tree overlap, and much more.
        </p>
        <p class="b-0">
            You can <a class="link" v-on:click="show" v-close-popover>request a demo</a> to learn more about all of the insights we offer.
        </p>
    </template>
    </v-popover>
</template>

<script>
import Modal from "@/components/Modal";
export default {
    components: {
        Modal
    },
    methods: {
        show() {
            this.$modal.show("demo");
        }
    }
}
</script>

<style lang="scss" scoped>
    .b-0{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    a.link{
        color: $color_teal;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
        }
    }
    a.link.learn-more{
        font-weight: bold;
        color: $color_red;
        font-size: em(11);
    }
</style>
