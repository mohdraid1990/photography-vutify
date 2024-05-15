<template>
  <div class="heroBlock d-none d-sm-flex">
    <v-carousel
      :show-arrows="false"
      cycle
      height="800"
      vertical
      vertical-delimiters
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/images/img-carousel1.webp"),
        },
        {
          src: require("../assets/images/img-carousel2.webp"),
        },
        {
          src: require("../assets/images/img-carousel3.webp"),
        },
        {
          src: require("../assets/images/img-carousel4.webp"),
        },
        {
          src: require("../assets/images/img-carousel5.webp"),
        },
        {
          src: require("../assets/images/img-carousel6.webp"),
        },
      ],
    };
  },
};
</script>
