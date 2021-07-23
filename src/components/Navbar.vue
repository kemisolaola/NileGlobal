<template>
  <nav>
    <v-app-bar app class="" flat color="white" >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title  class="ml-5"><router-link to="./"><v-img class="mx-2" max-width="200" contain src="@/assets/nilelogo.png"></v-img></router-link></v-toolbar-title>
             <v-btn class="mx-2  d-none d-md-flex" to="./" text>Home</v-btn>
              <v-btn class="mx-2 d-none d-md-flex" text>Categories <v-icon>mdi-menu-down</v-icon></v-btn>
              <v-btn class="mx-2 d-none d-md-flex" text>Services <v-icon>mdi-menu-down</v-icon></v-btn>
              <v-btn class="mx-2 d-none d-md-flex" text >About Us<v-icon>mdi-menu-down</v-icon></v-btn>
              <v-btn class="mx-2 d-none d-md-flex" text>Contact</v-btn>
              <v-btn  class="mx-2 d-none d-md-flex" outlined rounded color="#FF6433" to="./login">login</v-btn>
              <v-btn class="mx-2 d-none d-md-flex"  rounded dark color="#FF6433" >Signup</v-btn>
           </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
nav {
  font-family: 'Gotham', sans-serif;
}
</style>
