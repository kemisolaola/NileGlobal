<template>
  <v-footer class="mt-10 footer-container white" >
      <v-row align="center" class="mt-4" justify="center" >
        <v-col  class="pl-6" cols="12" sm="4" md="6">
               <div><router-link to="./"><v-img max-width="250" src="nilelogo.png"></v-img></router-link></div>
 <p class="pt-5">Our mission is to create a sustainable bridge between consumer goods and employment opportunities across
             all sectors, thereby making Africa a global marketplace.</p>
        <v-row class="mt-3">
      <v-col cols="2" >
        <a href="https://web.facebook.com/NileGlobalNG"><v-img width="20" src="facebook.png"></v-img></a>
      </v-col>
       <v-col cols="2">
        <v-img width="20" src="twitter.png"></v-img>
      </v-col>
       <v-col cols="2">
        <a href="https://www.instagram.com/nileglobalng/"><v-img width="20"  src="instagram.png"></v-img></a>
      </v-col>
       <v-col cols="2">
        <v-img width="20" src="linkedin.png"></v-img>
      </v-col>
    </v-row>
        </v-col>
        <v-col cols="6" sm="4" md="3" class="text-left">
          <ul>
            <p class="footer-head">Navigation</p>
        <li v-for="link in navLinks" :key="link.route"  class="links">
          <router-link :to="{path:link.route}">{{link.name}}</router-link>
        </li>   </ul> </v-col>
          <v-col cols="6" sm="4" md="3" class="text-left">
         <ul>
             <p class="footer-head">Information</p>
       <li  v-for="link in infoLinks" :key="link.route" class="links">
      <router-link :to="{path:link.route}">{{link.name}}</router-link>
       </li>
       <li style="color: white;">hjbhj</li>
         </ul>
        </v-col>
      </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navLinks: [
        { name: 'Home', route: './' },
        { name: 'Categories', route: './' },
        { name: 'Services', route: './' },
        { name: 'About Us', route: './' }
      ],
      infoLinks: [
        { name: 'Contacts', route: './contact' },
        { name: 'Terms of use', route: './' },
        { name: 'Privacy', route: './' },
        { name: '', route: './' }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .footer-container {
  padding-left: 2%;
}
}
@media screen and (min-width: 601px) {
  .footer-container {
  padding-left: 5%;
}
}@media screen and (min-width: 960px) {
  .footer-container {
  padding-left: 13%;
}
}

ul{
    list-style: none;
}
.links {
  font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: #5b5b5b;

}
li a {
  text-decoration: none;
  color: #5b5b5b;
  text-transform: uppercase;
   font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
color: #5b5b5b;
}
v-footer {
  font-family: 'Gotham', sans-serif;
}
.footer-head{
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 15.6px;
letter-spacing: 0em;
text-align: left;
color: #181B22;
text-transform: uppercase;
}
</style>
