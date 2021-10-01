<template>
<nav>
 <v-app-bar flat app light color="white"  class=" pl-10 pl-md-8 pl-lg-10 pr-16" height="90" >
        <router-link to="./"><v-img class="mr-8 mr-md-4 mr-lg-8" min-width="200" max-width="200" contain src="nilelogo.png"></v-img></router-link>
        <v-spacer></v-spacer> <v-btn   class="  d-none d-md-flex" to="./"  plain color="black">home</v-btn>
         <v-spacer></v-spacer>
         <v-btn   class="  d-none d-md-flex"  to="./" plain color="black" text>Categories<v-icon>mdi-menu-down</v-icon></v-btn>
          <v-spacer></v-spacer><v-menu offset-y>
               <template #activator="{ on, attrs }">
                 <v-btn  v-bind="attrs"  text color="black" class=" d-none d-md-flex"  v-on="on">Services <v-icon>mdi-menu-down</v-icon></v-btn>
               </template>
              <v-list>
                <v-list-item-group>
                <v-list-item  v-for="(list, index) in services" :key="index" v-model="selectedServices" :to="list.route">
                  <v-list-item-title style="font-size: 12px;">{{list.name }}</v-list-item-title>
                </v-list-item>
                </v-list-item-group>
              </v-list>
             </v-menu>
            <v-spacer></v-spacer> <v-menu offset-y>
               <template #activator="{ on, attrs }">
                 <v-btn v-bind="attrs"    class=" d-none d-md-flex"  color="black--text" text v-on="on">About Us <v-icon>mdi-menu-down</v-icon></v-btn>
               </template>
              <v-list>
                <v-list-item-group>
                <v-list-item v-for="(list, index) in about" :key="index" v-model="selectedAbout" :to="list.route">
                  <v-list-item-title style="font-size: 12px;">{{list.name }}</v-list-item-title>
                </v-list-item>
                </v-list-item-group>
              </v-list>
             </v-menu>
        <v-spacer></v-spacer>  <v-btn   class=" d-none d-md-flex" to="./contact" text color="black">Contact</v-btn>
       <v-spacer></v-spacer>   <v-btn  class=" d-none d-md-flex" outlined rounded color="#FF6433" to="/login">login</v-btn>
      <v-spacer></v-spacer>    <v-btn    class="  d-none d-md-flex" to="./presignup"  rounded dark color="#FF6433">signup</v-btn>
             <v-app-bar-nav-icon class="hidden-md-and-up pl-0" @click="drawer = !drawer"></v-app-bar-nav-icon>
</v-app-bar>
 <v-navigation-drawer
      v-model="drawer"
      app
      width="260"
      dark
      right
      color="white--text"
      class="nav-drawer"
    >
    <v-app-bar color="white" light class="pl-0"><v-img contain width="200" height="50" src="nilelogo.png"></v-img>
    <v-icon>mdi-mulitply</v-icon><v-app-bar-nav-icon  @click="drawer = !drawer">
      <v-icon>mdi-close</v-icon></v-app-bar-nav-icon></v-app-bar>
     <v-list color="white--text" nav>
       <v-list-content >
      <v-list-item to="./">
        <v-list-item-title >HOME</v-list-item-title>
      </v-list-item>
       </v-list-content>
    <v-divider dark></v-divider>
      <v-list-group
      >
        <template #activator>
          <v-list-item-title>CATEGORIES</v-list-item-title>
        </template>
        <v-list-item>
              <v-list-item-title>ABOUT US</v-list-item-title>
              </v-list-item>

            <v-list-item>
              <v-list-item-title>CONTACT</v-list-item-title>
            </v-list-item>
      </v-list-group>
          <v-divider></v-divider>
      <v-list-group
      >
        <template #activator>
          <v-list-item-title>ABOUT US</v-list-item-title>
        </template>
            <v-list-item to="./company">
              <v-list-item-title>THE COMPANY</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>THE TEAM</v-list-item-title>
            </v-list-item>
      </v-list-group>
          <v-divider></v-divider><v-list-group
      >
        <template #activator>
          <v-list-item-content>
          <v-list-item-title>SERVICES</v-list-item-title>
          </v-list-item-content>
        </template>
            <v-list-item to="./imports">
              <v-list-item-title>IMPORT</v-list-item-title>
            </v-list-item>

            <v-list-item to="./exports">
              <v-list-item-title>EXPORT</v-list-item-title>
            </v-list-item>
            <v-list-item to="./payment">
              <v-list-item-title>FOREIGN EXCHANGE</v-list-item-title>
            </v-list-item>
            <v-list-item to="./consultion">
              <v-list-item-title>CONSULTATION</v-list-item-title>
            </v-list-item>
      </v-list-group>
          <v-divider></v-divider>
          <v-list-content>
      <v-list-item to="./contact">
        <v-list-item-title>CONTACT</v-list-item-title>
      </v-list-item>
          </v-list-content>
          <v-divider></v-divider>
        <v-list-content>
      <v-list-item to="./login">
        <v-list-item-title>LOGIN</v-list-item-title>
      </v-list-item>
        </v-list-content>
          <v-divider></v-divider>
               <v-list-content>
         <v-list-item to="./presignup">
        <v-list-item-title>SIGNUP</v-list-item-title>
      </v-list-item>
               </v-list-content>
          <v-divider></v-divider>
    </v-list>
    </v-navigation-drawer>
                </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      drawer: false,
      about: [
        { name: 'THE COMPANY', route: './company' },
        { name: 'THE TEAM', route: './' }
      ],
      selectedAbout: 1,
      services: [
        { name: 'IMPORT', route: './imports' },
        { name: 'EXPORT', route: './exports' },
        { name: 'FOREIGN EXCHANGE', route: './payment' },
        { name: 'CONSULTATION', route: './business' }
      ],
      selectedServices: 1
    }
  }
}
</script>

<style>
.nav-drawer {
  background-image: url('../static/containers.png');
  background-size: cover;
  background-position: center;
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
nav {
  font-family: 'Gotham', sans-serif;
}
a v-application{
  color: black;
}
.v-application .primary--text {
    color: #f89475 !important;
    caret-color: #f89475 !important;
}
</style>
