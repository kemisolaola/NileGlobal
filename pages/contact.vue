<template>
<v-app>
  <Navbar/>
    <v-container class="login" justify="center" >
                   <v-row class="pt-4" justify="center" align="center" >
              <v-col cols="12" class="text-center">
              <v-container class="contacts" width="1150" elevation="0">
                  <v-row >
                    <v-col cols="12" class="title">
                      <p class="title">Get in touch with us for more information</p></v-col>
                      <v-col cols="12" sm="6" md="4">
                        <div class="box">
                        <img width="20" height="30" class="mr-5"
                        contain src="gpslogo.png">
                        <span class="contact-us"><p><span class="contact-head">Address<br></span> 1A Gbemisola Street,<br> Off Alade Avenue,<br> Ikeja, Lagos.</p></span>
                        </div></v-col>
                       <v-col cols="12" sm="6" md="4">
                          <div class="box">
                        <img width="20" height="30" class="mr-5"
                        contain src="calls.png">
                        <span class="contact-us"><p><span class="contact-head">Contact</span><br> +86 187 4002 6018<br>0812 9575 709</p></span>
                        </div></v-col>
                       <v-col cols="12" sm="6" md="4">
                           <div class="box">
                        <img width="30" height="30" class="mr-5"
                        contain src="vector.png">
                        <span class="contact-us"><p> <span class="contact-head">Email</span><br> Info@nileglobalservice.com<br> Support@nileglobalservice.com</p></span>
                        </div> </v-col>
                        <br>
                                         </v-row>
                      <!-- <v-img width="1150px" max-height="1150"
                       contain src="map.png"></v-img> -->
                       <!-- <GmapMap
                       :center= "{lat:10, lng: 10}"
                       :zoom="7"
                       style="width:100%; height: 700px;"></GmapMap> -->
              </v-container>
              <v-container style="height: 350px; width: 100%">
                <client-only>
              <l-map :zoom="zoom"
          :center="center">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="[6.603570763029983, 3.348397182305296]"></l-marker>
      </l-map>
                </client-only></v-container>
              </v-col>
              </v-row>
               <v-card width="1150" elevation="0">
                  <v-row justify="center">
                    <v-col cols="12"  class="title"> <p>Share your thoughts with us</p></v-col>
                      <v-col cols="12" md="6">
             <v-text-field solo flat background-color="#FAFAFA"  label="Your Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
            <v-text-field solo flat background-color="#FAFAFA"  label="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12" >
            <v-text-field solo flat background-color="#FAFAFA"  label="Your Subject"></v-text-field>
                      </v-col>
                      <v-col cols="12" >
            <v-textarea solo flat background-color="#FAFAFA"  label="Your Message"></v-textarea>
                      </v-col>
                                        <v-col cols="12" class="text-center">
            <v-btn color="#ff6433" height="55" width="150" dark>Submit</v-btn>
                      </v-col>
                              </v-row>
                       </v-card>
            </v-container>
            <Footer/>
</v-app>
</template>

<script>
// import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
// import VueLeafletMinimap from 'vue-leaflet-minimap'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
        },
      ],
    }
  },
  name: 'Contact',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    // VueLeafletMinimap,
    Navbar,
    Footer
  },
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 13,
      center: [6.603570763029983, 3.348397182305296],
      options: {
        position: 'bottomleft',
        width: 200,
        height: 175
      },
      coordinates: {
        lat: 0,
        lng: 0
      }
    }
  }

  // created () {
  //   this.$getLocation({})
  //     .then(coordinates => {
  //       this.coordinates = coordinates
  //     })
  //     .catch(error => alert(error))
  // }
}
</script>

<style scoped>
.login {
  padding-left: 8%;
    font-family: 'Gotham', sans-serif;
    padding-right: 7%;
}
.box{
  display: flex;
  }
.title {
   font-family: 'Gotham', sans-serif;
font-size: 31px;
font-style: normal;
font-weight: 600;
line-height: 39px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;
padding-top: 40px;
}
.contacts {
    font-family: Gotham;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color:#5B5B5B
}
.contact-us {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B  ;

}
.contact-info{
  font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

}
.contact-head {
  font-family: 'Gotham', sans-serif;
  font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B  ;

}
</style>
