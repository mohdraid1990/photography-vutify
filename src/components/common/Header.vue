<template>
  <v-container>
    <v-toolbar flat class="mainHeader position-fixed" color="transparent">
      <v-toolbar-title>Photography</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Home</router-link></v-btn>
        <v-btn text><router-link to="/about">About</router-link></v-btn>
        <v-btn text><router-link to="/contact">Contact</router-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/about">About</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/contact"
                  >Contact</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>

<style scoped>
.v-toolbar__content, .v-toolbar__extension {
    background-color: rgb(0, 23, 128) !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: rgba(151, 51, 51, 0.12) !important;
}
.v-toolbar a {
  text-decoration: none;
  color: rgb(80, 71, 61);
  font-size: 15px;
}

.v-menu__content  {
  min-width: 0 !important;
  max-width: 100% !important;
  top: 57px !important;
  left: 0 !important;
  transform-origin: left top;
  z-index: 8;
  width: 100% !important;
  text-align: center;
}
.theme--light.v-list {
    background: #00fbd8;
}
</style>
