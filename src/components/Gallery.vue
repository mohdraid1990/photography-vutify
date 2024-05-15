<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="text-center">Gallery</h2>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex"
          cols="6"
          sm="4"
        >
          <v-card flat tile class="d-flex">
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/img1.webp"),
        },
        {
          id: 2,
          src: require("../assets/images/img2.webp"),
        },
        {
          id: 3,
          src: require("../assets/images/img3.webp"),
        },
        {
          id: 4,
          src: require("../assets/images/img4.webp"),
        },
        {
          id: 5,
          src: require("../assets/images/img5.webp"),
        },
        {
          id: 6,
          src: require("../assets/images/img6.webp"),
        },
        {
          id: 7,
          src: require("../assets/images/img7.webp"),
        },
        {
          id: 8,
          src: require("../assets/images/img8.webp"),
        },
        {
          id: 9,
          src: require("../assets/images/img9.webp"),
        },
      ],
    };
  },
};
</script>


<style scoped>
h2{
  padding-bottom: 30px;
  color: rgb(126, 117, 103);
  font-size: 35px;
}
</style>