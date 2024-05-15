<template>
  <v-container>
    <v-footer padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="20px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0 rounded-xl"
          >Photography is not just about taking pictures, it's about capturing
          the essence of a moment and preserving it for a lifetime. Whether
          you're using a professional camera or just your smartphone, the power
          to tell a story and evoke emotions is in your hands. So go out and
          capture the beauty of the world, experiment with different techniques
          and styles, and find your own unique perspective. In the end, it's not
          about having the best equipment, it's about having an eye for
          capturing the special moments that make life truly
          memorable.</v-card-text
        >
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Website Created By Eng.mohd +79962662350</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
};
</script>

<style scoped>
.theme--light.v-footer {
    background-color: #9e9e9e !important;
    color: rgba(0, 0, 0, 0.87) !important;

}

</style>
