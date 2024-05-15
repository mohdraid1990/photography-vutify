<template>
  <v-content>
    <div class="staticHero h-25">
      <v-img src="../assets/images/img13.webp" height="400">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p class="pa-6">
          Photography is an art form that allows us to express our creativity
          and preserve memories for generations to come. It's a way to capture
          the world around us, from the grand landscapes to the small details,
          and to tell a story through a single image. Whether you're a
          professional photographer or just starting out, the journey of
          improving your craft is always exciting. You can experiment with
          different lighting, compositions, and techniques to create unique and
          visually stunning images. Additionally, photography allows us to
          document the world, capture social and political issues, and raise
          awareness about important causes. So grab your camera, go out and
          explore, and let your creativity run free.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h1 class="text-center">Our Teams</h1>
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.id"
            class="d-flex child-flex"
            cols="12"
            sm="4"
          >
            <v-card flat tile class="mx-auto">
              <v-img
                :src="item.src"
                aspect-ratio="1"
                class="grey lighten-2"
              ></v-img>
              <v-card-text class="text--primary text-center">
                <div class="title">{{ item.name }}</div>
                <p class="pa-2">{{ item.title }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/images/team1.webp"),
          name: "Adam Jonson",
          title: "Director",
        },
        {
          id: 2,
          src: require("../assets/images/team2.webp"),
          name: "Ivan Darsy",
          title: "Photographer",
        },
        {
          id: 3,
          src: require("../assets/images/team3.webp"),
          name: "Sara Parker",
          title: "Freelancer",
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 18px !important;
  color: #17171ab8 !important;
}
.v-application .text-center {
  padding-bottom: 30px;
  color: rgb(126, 117, 103);
  font-size: 35px;
}

.text--primary p {
  color: #4432cd45;
  font-size: 35px;
}

</style>
