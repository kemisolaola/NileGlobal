<template>
  <nav>
    <v-app-bar app class="pl-16 pt-5" height="143" flat color="white"  >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title  class="pl-5"><router-link to="./"><v-img class="mx-2" max-width="200" contain src="@/assets/nilelogo.png"></v-img></router-link></v-toolbar-title>
             <v-btn class="mx-3  d-none d-md-flex" to="./" text>Home</v-btn>
              <v-btn class="mx-3 d-none d-md-flex" text>Categories <v-icon>mdi-menu-down</v-icon></v-btn>
              <v-menu offset-y>
               <template v-slot:activator="{ on, attrs }">
                 <v-btn v-bind="attrs" v-on="on"  class="mx-2 d-none d-md-flex" text>Services <v-icon>mdi-menu-down</v-icon></v-btn>
               </template>
              <v-list>
                <v-list-item-group>
                <v-list-item v-for="(list, index) in services" :key="index" v-model="selectedServices">
                  <v-list-item-title><router-link :to="list.route" style="text-decoration: none; color: black; font: 'Gotham',sans-serif;">{{list.name }}</router-link></v-list-item-title>
                </v-list-item>
                </v-list-item-group>
              </v-list>
             </v-menu>
              <v-menu offset-y>
               <template v-slot:activator="{ on, attrs }">
                 <v-btn class="mx-3 d-none d-md-flex" text v-bind="attrs" v-on="on" >About Us<v-icon>mdi-menu-down</v-icon></v-btn>
               </template>
              <v-list>
                <v-list-item-group>
                <v-list-item v-for="(list, index) in about" :key="index" v-model="selectedAbout">
                  <v-list-item-title><router-link :to="list.route" style="text-decoration: none; color: black; font-family: 'Gotham',sans-serif;">{{list.name}}</router-link></v-list-item-title>
                </v-list-item>
                </v-list-item-group>
              </v-list>
             </v-menu>
             <v-btn class="mx-3 d-none d-md-flex" text>Contact</v-btn>
              <v-btn  class="mx-3 d-none d-md-flex" outlined rounded color="#FF6433" to="./login">login</v-btn>
              <v-btn class="mx-4 d-none d-md-flex" to="./presignup" rounded dark color="#FF6433" >Signup</v-btn>
           </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      about: [
        { name: 'THE COMPANY', route: './' },
        { name: 'THE TEAM', route: './' }
      ],
      selectedAbout: 1,
      services: [
        { name: 'IMPORT', route: './imports' },
        { name: 'EXPORT', route: './exports' },
        { name: 'FOREIGN EXCHANGE', route: './payment' },
        { name: 'CONSULTATION', route: './' }
      ],
      selectedServices: 1
    }
  }
}
</script>

<style>
nav {
  font-family: 'Gotham', sans-serif;
}
a v-application{
  color: black;
}
</style>
