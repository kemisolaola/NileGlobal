<template>
  <v-app>
      <v-container style="margin-left: 5%;">
       <splide :options="prodoptions">
    <splide-slide style="width: 400px" class="testimonial" v-for="i in 4" :key="i">
              <v-card  elevation="1" height="" style="margin-bottom:50px" width="347">
        <v-img contain src="@/assets/chair.png" ></v-img>
        <div class="product pt-3 mb-5">
         <v-row>
           <v-col >
             <p class="classic">Classic Furniture</p>
           </v-col>
           <v-col class="ml-6"><p class="price">N50000</p></v-col>
           <v-col cols="7"> <p class="goods-info">Packed with all the essentials to welcome employees or get clients excited.</p></v-col>
             <v-col cols="6"> <v-btn dark color="#FF6433">ORDER NOW</v-btn></v-col>
            <v-col class=" goods-quantity"><p>Min. 25 pieces</p></v-col>
          </v-row>  </div>
              </v-card> </splide-slide>
  </splide>
    </v-container>
  </v-app>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
export default {
  name: 'Product',
  components: {
    Splide,
    SplideSlide
  },
  data () {
    return {
      options: {
        freeMode: true,
        rewind: true,
        perPage: 2,
        arrows: false,
        gap: '0.5rem',
        pagination: true
      },
      prodoptions: {
        freeMode: true,
        rewind: true,
        perPage: 3,
        arrows: false,
        gap: '0.5rem',
        pagination: true
      }
    }
  }
}
</script>

<style scoped>
.classic {
color: #ff6433;
font-family: 'Gotham', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

}
.product {
  text-align: center;
  padding-left: 30px;
  padding-right: 21px;
}

</style>
