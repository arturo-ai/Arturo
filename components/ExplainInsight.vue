<template>
    <v-popover
    offset="16"
    placement="top-start"
    >
    <!-- This will be the popover target (for the events and position) -->
    <button class="info-icon">i</button>

    <!-- This will be the content of the popover -->
    <template slot="popover">
        <p>
            Arturo provides AI derived insights in the form of physical property characteristics. Property Characteristics relate to distinct features of a property (i.e., physically bounded spatial area largely defined by the legal parcel) derived from running our deep learning models on aerial and satellite imagery.
        </p>
        <p>
            Each insight includes characteristics such as number of buildings, roof type & area, roof material, roof complexity & condition, pools, trampolines, cars, number of stories, building/tree overlap, and much more.
        </p>
        <p class="b-0">
            You can <a v-on:click="show" v-close-popover>request a demo</a> to learn more about all of the insights we offer.
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
    a{
        color: $color_teal;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
        }
    }
    .info-icon {
        font-weight: bold;
        background-color: $color_darkBlue;
        color: $color_white;
        border: 2px solid $color_white;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        outline: none;
        transition: all 0.3s;
        &:hover{
            cursor: pointer;
            border: 2px solid $color_teal;
        }
    }
</style>
