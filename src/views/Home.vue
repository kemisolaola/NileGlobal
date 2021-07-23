<template>
  <v-app >
    <Navbar/>
        <v-container class="head" fluid>
      <v-row  class=" contents">
        <v-col cols="12"  class="header-content" >
          <p class="header-title">Revolutionizing how brands go global</p>
          <p class="niles-global white--text">Niles Global is the leading Bilateral trade platform for businesses,Z connecting local brands & entreperneurs with international retailers.</p>
             <v-row >
 <v-col cols="2" md="2"><v-btn class="header-button1" color="#FF6433"  dark>For buyers</v-btn></v-col>
         <v-col cols="2" md="2" class=" header-button"><v-btn  dark outlined color="white">For brands</v-btn></v-col>
                    </v-row>
              </v-col>
              </v-row>
      <v-container class="brand">
      <v-row  justify="center">
        <v-col  cols="12" md="4">
          <v-card elevation='5' class="about" width="312" height="377">
            <v-img class="mx-auto pt-12" contain width="55" src="@/assets/magnifying-glass.png"></v-img>
              <p class="card-header">We Source</p>
        <p class="card-text" >We serve as a third party between individuals and in goods import and export. We also have boots on the groundto make product sourcing and market sourcing a breeze</p>
          </v-card>
        </v-col>
         <v-col  cols="12" md="4">
          <v-card elevation="5" class="about" width="312" height="377">
            <v-img class="mx-auto pt-12" contain width="55" src="@/assets/brand.png"></v-img>
              <p class="card-header">We Brand</p>
        <p class="card-text">Advertise your business or brand with excellent product branding solutions. Think fittings, souvenirs, business apparatus, and more. We brand them all.</p>
        </v-card>
     </v-col>
     <v-col cols="12" md="4">
        <v-card elevation="5" class="about" width="312" height="377">
            <v-img class="mx-auto pt-12" contain width="55" src="@/assets/truck.png"></v-img>
            <p  class="card-header">We Ship</p>
        <p class="card-text">We provide secure package delivery services between individuals, companies, and sellers. From China to your doorstep, without the hassle of dealing with customs,freight and forwarding.</p>
        </v-card>
      </v-col>
    </v-row>
      </v-container>
    </v-container>
  <v-container fluid class="start">
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center" cols="12">
        <h3> START YOUR GLOBAL JOURNEY TODAY</h3>
        <h1 class="pt-5">What makes <span color="#FF6433--text"> Nile Global</span> different?</h1>
      </v-col>
    </v-row>
    <v-container class="benefit">
    <v-row align="center"  justify="center"  class="mt-15 ">
      <v-col cols="12" md="4">
        <v-card  elevation="0" max-height="430">
        <div class="ml-5"><v-img  max-width="36" src="@/assets/shopping-basket.png"></v-img></div>
        <p class="benefit-title ml-5 mt-7">Removing<br> Friction</p>
        <ul class="mt-6 benefit-text">
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
          </ul>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="0" max-height="430">
<div class="ml-5"><v-img  max-width="36" src="@/assets/cart.png"></v-img></div>
        <p class="benefit-title ml-5 mt-7">Increasing Brand<br> Sales & Awareness</p>
          <ul class="mt-6 benefit-text">
            <li class="mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
            <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
            <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
            </ul>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="0" max-height="430">
<div class="ml-5"><v-img  max-width="36" src="@/assets/worldwide.png"></v-img></div>
         <p class="benefit-title ml-5 mt-7">Reliable and <br>Strategic Partners</p>
       <ul class="mt-6 benefit-text">
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
          <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
        </ul>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
  <v-container fluid class="services">
    <v-row align="center"  justify="center">
      <v-col cols="12">
        <h1 class="">Our Services</h1>
      </v-col>
    </v-row>
    <v-container>
    <v-row align="center"  justify="center"  class="mt-12  px-11 ">
      <v-col cols="12" md="3">
        <v-card elevation="5" class="services-card" width="268" height="323">
        <div class=""><v-img contain height="42" width="67" class="mx-auto" src="@/assets/trucker.png"></v-img></div>
        <p class="service-title mt-7">Import</p>
    <p class="services-text  mt-4">Tired of expensive and poorly branded items. You can also import quality branded items, machineries & sourvenirs for your events, business or occassions.</p>
        </v-card>
        </v-col>
      <v-col cols="12" md="3">
        <v-card elevation="5"  class="services-card" width="267" height="323">
        <div ><v-img contain height="44" width="66" class="mx-auto" src="@/assets/globe.png"></v-img></div>
        <p class="service-title mt-7">Export</p>
      <p class="services-text mt-4">One of our business strategies is exporting the much needed raw materials, agricultural produce and more much in large quantities to China.</p>
        </v-card>
        </v-col>
      <v-col cols="12" md="3" >
        <v-card elevation="5"  class="services-card" width="267" height="323">
        <div ><v-img contain height="44"  width="66" class="mx-auto" src="@/assets/exchange.png"></v-img></div>
        <p class="service-title mt-7">Foreign Exchange</p>
     <p class="services-text mt-4">Experience difficulties paying your foreign associates in foreign currencies. We can pay them on your behalf & you refund us the naira equivalent.</p>
        </v-card>
        </v-col>
      <v-col cols="12" md="3" >
        <v-card elevation="5"  class="services-card" width="267" height="323">
        <div ><v-img contain height="44"  width="66" class="mx-auto" src="@/assets/shake.png"></v-img></div>
        <p class="service-title mt-7">Consultation</p>
      <p class="services-text  mt-4">Are you worried, dismayed or confused because your business is facing challenges? Why not consult our team
of business expatriates.</p>
        </v-card></v-col>
    </v-row>
    </v-container>
  </v-container>
     <v-container fluid class="how-work">
      <v-row align="center"  justify="center">
      <v-col cols="12">
        <h1 class="">How It Works</h1>
      </v-col>
    </v-row>
    <v-row align="center"  justify="center"  class="mt-15  pl-11 ">
      <v-col class="text-center"  cols="10" md="3">
        <v-card class="how-card" height="470" width="270" elevation="0">
        <v-img  contain max-width="195" height="195" class="mx-auto pt-5" src="@/assets/consult.png"></v-img>
        <p class="how-title">Image Upload <br> and Consultation</p>
        <p class=" mt-4 how-text">Upload an image of the product you need. You can also browse through our categories for any industry you serve. Please endeavor to send clear images and specifications.</p>
        <v-btn color="#FF6433"  class="mt-6" dark>Explore now</v-btn>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="10" md="3">
        <v-card class="how-card" height="470" width="270" elevation="0">
         <v-img contain max-width="195" height="195" class="mx-auto" src="@/assets/branding.png"></v-img>
        <p class="how-title">Product Sourcing <br>and Branding</p>
        <p class="text-center how-text ">Our agents go into the market to find your products. All products of your specifications and any other variations are sent to you for verification.<br> We also brand any products youneed to advertise your business.</p>
        <v-btn color="#FF6433" dark>explore now</v-btn>
               </v-card>
      </v-col>
      <v-col  class="text-center" cols="10" md="3">
        <v-card class="how-card " height="470" width="270" elevation="0">
        <v-img  contain max-width="195" height="195" class="mx-auto" src="@/assets/delivery.png"></v-img>
        <p class="how-title">Product Delivery</p>
        <br>
        <p class="text-center how-text ">&nbsp; We ship the products to you.<br> You can pick up the products<br> at our designated warehouse<br> or have us deliver them to your doorstep.</p>
        <v-btn color="#FF6433" class="mt-6" dark>explore now</v-btn>
                </v-card>
      </v-col>
    </v-row>
    </v-container>
    <v-container  class="complicated">
      <v-row>
        <v-col class="missions" cols="12" md="3">
          <v-card  class="mission-card ">
            <p class="mission">Our mission is to create a sustainable bridge between consumer goods and employment opportunities across all sectors, thereby making Africa a global marketplace.</p>
          </v-card>
          <v-card class="goal-card">
            <p class="goal">“Our goal is to help brands grow on a global scale and meet the needs of the end users.” </p>
          </v-card>
        </v-col>
        <v-col class="ratings" cols="12" md="4">
          <v-card class="ratings-card" width="208" height="209">
             <p class="rates">4.9/5.0</p>
     <v-rating
     class="stars"
         v-model="rating"
        color="#ffd308"
        dense
        half-increments
        size="16"
      ></v-rating>
      <p class="ratings-text "> Fast product delivery rate which is second to none</p>
             </v-card>

              <v-card class="logistics">
           <p class="logistics-text ">&nbsp; “Products in large &nbsp; &nbsp;quantities will be properly handled with our team of experts on ground.<br>
<br>We have local branches or warehousing to accomodate & cater for  any sudden mishap with logistics”.

</p>
             </v-card>
        </v-col>
        <v-col class="brand-cols" cols="12" md="3">
          <v-card elevation="0" class="brands-card" width="373" height="480">
            <p class="brands-title">BRANDS COMPETITIVE EDGE</p>
         <p class="brands-head"> Build Your Brand</p>
            <p class="brands-text">We have strategic partnerhsips which can be leveraged on to boost sales and growth of a brand.</p>
            <v-btn color="#ff6433" dark class="mt-3">get started</v-btn>
            </v-card>
        </v-col>
      </v-row>
    </v-container>

      <v-container fluid class="mt-16">
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center mb-5" cols="12">
        <p class="testimony">GREAT WORDS ABOUT NILE GLOBAL</p>
        <h1>What make they love us?</h1>
      </v-col>
    </v-row>
      </v-container>
    <v-container fluid>
      <splide :options="options">
    <splide-slide style="width: 487px" class="testimonial" v-for="i in 4" :key="i">
               <v-card width="487" class="py-10 px-14 mb-16 mb-8" elevation="2"><p class="testimonial-text mt-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<br><br>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>     <div class="feedback-info"><v-avatar rounded="50" class="mb-4"><v-img width="50"  src="@/assets/man.png" ></v-img></v-avatar>
<span><p class="feedback-name">&nbsp; Amara Odenigbo</p><p class="feedback-job">&nbsp; Real Estate Developer</p></span></div>
               </v-card>
    </splide-slide>
  </splide>
            </v-container>
    <v-container fluid>
    <v-row align="center" class="pt-14 px-16" justify="center">
      <v-col cols="2" >
        <v-img width="77" src="@/assets/stylu.png"></v-img>
      </v-col>
       <v-col cols="2">
        <v-img width="56" src="@/assets/tree.png"></v-img>
      </v-col>
       <v-col cols="2">
        <v-img width="85" src="@/assets/pencil.png"></v-img>
      </v-col>
       <v-col cols="2">
        <v-img width="112" src="@/assets/brook.png"></v-img>
      </v-col>
       <v-col cols="2">
        <v-img width="91" src="@/assets/sixbase.png"></v-img>
      </v-col> <v-col cols="2">
        <v-img width="91" src="@/assets/alive.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
   <v-container fluid>
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center" cols="6">
        <p class="text-h6 text-center font-weight-bold">Discover some available products</p>
      </v-col>
    </v-row>
    <v-container style="margin-left: 5%;">
    <v-container style="margin-right:200px">
      <!-- <swiper class="swiper" :options="swiperOption">
    <swiper-slide style="width: 500px;" class="product-swipe" v-for="i in 3" :key="i">
      <v-card  elevation="1" height="" width="347">
        <v-img contain src="@/assets/chair.png" ></v-img>
        <v-card class="product">
         <v-row>
           <v-col >
             <p class="classic">Classic Furniture</p>
           </v-col>
           <v-col class="ml-6"><p class="price">N50000</p></v-col>
           <v-col cols="6"> <p class="goods-info">Packed with all the essentials to welcome employees or get clients excited.</p></v-col>
             <v-col cols="6"> <v-btn dark color="#FF6433">ORDER NOW</v-btn></v-col>
            <v-col class=" goods-quantity"><p>Min. 25 pieces</p></v-col>
          </v-row>  </v-card>
       </v-card>
    </swiper-slide>
    <swiper-slide style="opacity:0;"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper> -->
    </v-container>
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
    </v-container>
  <v-container>
    </v-container>
    </v-container>
    <v-container fluid>
    </v-container>
  <Email/>
  <Footer/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Email from '@/components/Email.vue'
import Footer from '@/components/Footer.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import 'swiper/css/swiper.css'
import 'gotham-fonts/fonts/GothamRounded-Medium.ttf'

export default {
  name: 'Home',
  components: {
    Email,
    Navbar,
    Footer,
    Splide,
    SplideSlide
  },
  data () {
    return {
      options: {
        freeMode: true,
        rewind: true,
        perPage: 3,
        arrows: false,
        gap: '3.5rem',
        pagination: 'slider',
        breakpoints: {
          1024: {
            perPage: 3
          },
          768: {
            perPage: 2
          },
          640: {
            perPage: 1,
            spaceBetween: 20
          },
          300: {
            perPage: 1
          }
        }
      },
      prodoptions: {
        freeMode: true,
        rewind: true,
        perPage: 3,
        arrows: false,
        gap: '0.5rem',
        pagination: true,
        breakpoints: {
          1024: {
            perPage: 3
          },
          768: {
            perPage: 2
          },
          640: {
            perPage: 1,
            spaceBetween: 20
          },
          300: {
            perPage: 1
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.head{
  background-image: url('../assets/containers.png');
  background-size: contain;
}
@media screen and (max-width: 600px) {
.head{
  background-image: url('../assets/containers.png');
  background-size: cover;
  background-position: center;
}
}
   @media screen and (min-width: 601px) {
.contents {
  margin-top: 8.4%;
  margin-left: 25%;
  margin-right: 24%;
}
}

@media screen and (max-width: 600px) {
.contents {
  margin-top: 8.4%;
  padding-left: 25px;
  padding-right: 25px;
}
}
/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .header-title {
    font-size: 40px;
    color: #FFFFFF;
    line-height: 30px;
    text-align: center;
    font-weight: 300;
  }
}
@media screen and (min-width: 601px) {
  .header-title {
    font-size: 65px;
     font-family: 'Gotham', sans-serif;
     color: #FFFFFF;
     text-align: center;
     font-weight: 400;
     line-height: 65px;
     letter-spacing: 0em;
  }
}
@media screen and (max-width: 600px) {
  .niles-global {
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;

  }
}
@media screen and (min-width: 601px) {
  .niles-global {
    font-size: 18px;
     font-family: 'Gotham', sans-serif;
     color: #FFFFFF;
     text-align: center;
     font-weight: 400;
     line-height: 28.6px;
     letter-spacing: 0em;
     text-align: center;
  }
}
/* /* .header-button {
  margin-left: 180px;
} */

@media screen and (min-width: 601px) {
.header-button {
  margin-left: 180px;
}
}
@media screen and (min-width: 601px) {
.header-button1 {
  margin-left: 120px;
}
}
@media screen and (max-width: 600px) {
.header-button {
  padding-left: 180px;
}
}
@media screen and (max-width: 600px) {
.header-button1 {
  padding-left: 50px;
}
}
.brand {
  margin-left: 9%;
  margin-top: 120px;
}
.card-header{
  font-family: 'Gotham', sans-serif;
font-size: 22px;
font-style: normal;
font-weight: bold;
line-height: 26px;
letter-spacing: 0em;
text-align: center;

}
.card-text {
font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 325;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;

}
.about {
  text-align: center;
  padding-left: 42.9px;
  padding-right: 42.9px;
  padding-top: 40px;
}
.great {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

}
.start {
  margin-top: 50px;
}
 h3 {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 34px;
letter-spacing: 0em;
text-align: center;

}
h1 {
  font-family: 'Gotham', sans-serif;
font-size: 36px;
font-style: normal;
font-weight: bold;
line-height: 33.8px;
letter-spacing: 0em;
text-align: center;

}
span {
  color: #ff6433;
}
.benefit-title {
  font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 350;
line-height: 34px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;

}
.benefit-text {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: left;

}
.services {
margin-top: 57px;
}
.services-card {
  text-align: center;
  box-shadow: 0px 0px 15px 5px #0000000D;
   text-align: center;
  padding-left: 22px;
  padding-right: 21px;
  padding-top: 72px;

}
.service-title {
  font-family: 'Gotham', sans-serif;
font-size: 19.5px;
font-style: normal;
font-weight: bold;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;
color: #000000;

}
.services-text {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 19.5px;
letter-spacing: 0em;
text-align: center;

}
.card-title {
font-family: 'Gotham', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: bold;
line-height: 23px;
letter-spacing: 0em;
text-align: center;

}
.how-work {
  margin-top: 57px;
}
.how {
  margin-top: 100px;
}
.how-card {
  padding-left: 22px;
  padding-right: 21px;
}
.how-text {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 22px;
letter-spacing: 0em;
text-align: center;

}
.how-title {
  font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 350;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.testimony {
font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.swiper {
  width: 100%;
}

.swiper-wrapper {
  box-sizing: border-box;
}

.swiper-slide {
  display: inline-flex;
  width: auto;
}
.product-swipe .swiper-slide {
  width: 250px;
}
.product {
  text-align: center;
  padding-left: 30px;
  padding-right: 21px;
}
.v-btn--icon.v-size--small {
    height: 20px;
    width: 20px;
}
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
.swiper .swiper-slide  {
  width: 500px;
}
.price {
color: #ff6433;
font-family: 'Gotham', sans-serif;
font-size: 11px;
font-style: normal;
font-weight: 350;
line-height: 13px;
letter-spacing: 0em;
text-align: left;

}
.goods-info {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
.goods-quantity{
font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
.discover {
 font-family: 'Gotham', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.feedback-info{
  display: flex;
  }
.headers {
  font-family: 'Gotham', sans-serif;
font-size: 65px;
font-style: normal;
font-weight: 350;
line-height: 65px;
letter-spacing: 0em;
text-align: center;
color: #FFFFFF;
}
.complicated{
  margin-left: 9%;
  margin-top: 115.7px;
}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 32.5px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.missions {
  background-image: url("../assets/shape-slant-dots.png");
  background-position: -2px 400px;
  margin-left: 5%;
  background-size: 162px;
  width: 500px;
}
.mission-card {
  width: 320px;
  height: 385px;
  padding-left: 60.4px;
  padding-right: 55px;
  padding-top: 75px;
  margin-top: 50px;
  margin-left: 45px;
}
.goal-card{
  margin-top: 71.412px;
  margin-left: 35px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.goal {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #C4C4C4;
}
.ratings{
  height: 800px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
}
.ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
  margin-left: 60px;
}
.rates {
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 15.6px;
letter-spacing: 0em;
text-align: center;

}
.logistics {
  width: 252.6px;
  height: 385px;
  padding-left: 27.3px;
  padding-right: 26.8px;
  padding-top: 65px;
  padding-bottom: 65px;
  margin-left: 60px;
  margin-top: 53.3px;
}
.logistics-text {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 600;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 600;
line-height: 25px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.testimonial-text{
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: left;

}
.brand-cols{
  margin-left: 0;
}
.brands-title{
  font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 15.6px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;

}
.brands-card {
  padding-top: 75px;
}
.brands-head {
  font-family: 'Gotham', sans-serif;
font-size: 45px;
font-style: normal;
font-weight: 350;
line-height: 58.5px;
letter-spacing: -0.02em;
text-align: left;

}
.brand-text {
  font-family: Gotham;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 23.4px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
.stars {
  text-align: center;
}
.ratings-text {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 22.1px;
letter-spacing: 0em;
text-align: center;
color: #C4C4C4;
}
.splide__pagination__page{
  background-color: #ff6433;
}
.splide__pagination__page {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #b92d2d;
    border-radius: 50%;
    margin: 3px;
    padding: 0;
    transition: transform .2s linear;
    border: none;
    opacity: .7;
}
/* .splide__pagination__page.is-active {
    transform: scale(1.4);
    background: red;
}
.splide__pagination{
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #b92d2d;
    border-radius: 50%;
    margin: 3px;
    padding: 0;
    transition: transform .2s linear;
    border: none;
    opacity: .7;
} */
.feedback-name {
  font-family: 'Gotham';
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 15.6px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;
margin-bottom: 0;
margin-top: 16px;

}
.feedback-job {
  font-family: Gotham;
font-size: 10.4px;
font-style: normal;
font-weight: 350;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}

</style>
