<template>
  <v-app >
    <Navbar/>
      <v-container fluid class="headss" >
        <v-row  class=" contents">
          <v-col cols="12"  class="header-content" >
            <div class="header-title"><p >Revolutionizing how brands go global</p></div>
                          <p class="niles-global mx-auto white--text">Niles Global is the leading Bilateral trade platform for businesses, connecting local brands & entreperneurs with international retailers.</p>
            <v-container class="text-center pb-16">
            <v-btn class="" color="#FF6433" to="/buyer"  dark>For buyers</v-btn>
            <v-btn class="brands-btn" dark outlined color="white" to="brands">For brands</v-btn>
            </v-container> </v-col>
        </v-row>
      </v-container>
         <v-container class="brand mx-auto ">
          <v-row class="brands-row">
            <v-col  cols="12" sm="6" md="4" lg="4">
              <v-card elevation='5' class="about"   min-height="400">
                <v-img class="mx-auto pt-12" contain width="55" src="magnifying-glass.png"></v-img>
                <p class="card-header">We Source</p>
                <p class="card-text" >We serve as a third party between individuals and companies in goods import and export. We also have boots on the ground to make product sourcing and market sourcing a breeze</p>
              </v-card>
            </v-col>
            <v-col  cols='12' sm="6" md="4" lg="4">
              <v-card elevation="5" class="about"   min-height="400">
                <v-img class="mx-auto pt-12" contain width="55" src="brand.png"></v-img>
                <p class="card-header">We Brand</p>
                <p class="card-text">Advertise your business or brand with excellent product branding solutions. Think fittings, souvenirs, business apparatus, and more. We brand them all.</p>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
              <v-card elevation="5" class="about"  min-height="400">
                <v-img class="mx-auto pt-12" contain width="55" src="truck.png"></v-img>
                <p  class="card-header">We Ship</p>
                <p class="card-text">We provide secure package delivery services between individuals, companies, and sellers. From China to your doorstep, without the hassle of dealing with customs,freight and forwarding.</p>
              </v-card>
            </v-col>
         </v-row>
      </v-container>
       <v-container fluid class="start">
         <v-row align="center" class="pt-14" justify="center">
          <v-col class="text-center" cols="12">
            <h3> START YOUR GLOBAL JOURNEY TODAY</h3>
            <h1 class="pt-5">What makes <span color="#FF6433--text"> Nile Global</span> different?</h1>
          </v-col>
        </v-row>
        <v-container class="benefit">
          <v-row align="center" class="beneifits-row mt-15 ">
            <v-col cols="12" sm="6" md="4">
              <v-card  elevation="0" max-height="430">
                <div class="ml-5"><v-img  max-width="36" src="shopping-basket.png"></v-img></div>
                <p class="benefit-title ml-5 mt-7">Removing<br> Friction</p>
                <ul class="mt-6 benefit-text">
                  <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                  <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                  <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                  </ul>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-card elevation="0" max-height="430">
                <div class="ml-5"><v-img  max-width="36" src="cart.png"></v-img></div>
                <p class="benefit-title ml-5 mt-7">Increasing Brand<br> Sales & Awareness</p>
                <ul class="mt-6 benefit-text">
                  <li class="mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                  <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                  <li class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias </li>
                </ul>
              </v-card>
            </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card elevation="0" max-height="430">
          <div class="ml-5"><v-img  max-width="36" src="worldwide.png"></v-img></div>
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
    <v-row align="center">
      <v-col cols="12">
        <h1 class="">Our Services</h1>
      </v-col>
    </v-row>
    <v-container fluid>
    <v-row align="center" class="services-row mt-12  "  justify="center"  >
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="5" to="./imports" class="services-card"  height="350">
          <div class=""><v-img contain height="42" width="67" class="mx-auto" src="trucker.png"></v-img></div>
          <p class="service-title mt-7">Import</p>
          <p class="services-text  mt-4">Tired of expensive and poorly branded items. You can also import quality branded items, machineries & sourvenirs for your events, business or occassions.</p>
        </v-card>
        </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="5" to="./exports"  class="services-card"  height="350">
          <div ><v-img contain height="44" width="66" class="mx-auto" src="globe.png"></v-img></div>
          <p class="service-title mt-7">Export</p>
          <p class="services-text mt-4">One of our business strategies is exporting the much needed raw materials, agricultural produce and more much in large quantities to China.</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" >
        <v-card elevation="5"  class="services-card" to="./payment"  height="350">
          <div ><v-img contain height="44"  width="66" class="mx-auto" src="exchange.png"></v-img></div>
          <p class="service-title mt-7">Foreign Exchange</p>
          <p class="services-text mt-4">Experience difficulties paying your foreign associates in foreign currencies. We can pay them on your behalf & you refund us the naira equivalent.</p>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" >
        <v-card elevation="5"  class="services-card" to="/business"  height="350">
          <div ><v-img contain height="44"  width="66" class="mx-auto" src="shake.png"></v-img></div>
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
   </v-container>
        <v-container class="benefit">
           <v-row align="center" class="mt-15 ">
            <v-col class="how-it-works" cols="12" sm="6" md="4">
              <v-card class="how-card text-center" height="470" width="270" elevation="0">
          <v-img  contain max-width="195" height="195" class="mx-auto pt-5" src="consult.png"></v-img>
          <p class="how-title">Image Upload <br> and Consultation</p>
          <p class=" mt-4 how-text">Upload an image of the product you need. You can also browse through our categories for any industry you serve. Please endeavor to send clear images and specifications.</p>
          <v-btn color="#FF6433"  class="mt-5" dark>Explore now</v-btn>
        </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
             <v-card class="how-card text-center" height="470" width="270" elevation="0">
          <v-img contain max-width="195" height="195" class="mx-auto" src="branding.png"></v-img>
         <p class="how-title">Product Sourcing <br>and Branding</p>
         <p class="text-center how-text ">Our agents go into the market to find your products. All products of your specifications and any other variations are sent to you for verification. We also brand any products youneed to advertise your business.</p>
        <v-btn color="#FF6433" dark>explore now</v-btn>
          </v-card>
            </v-col>
             <v-col cols="12" sm="6" md="4">
              <v-card class="how-card text-center" height="470" width="270" elevation="0">
         <v-img  contain max-width="195" height="195" class="mx-auto" src="delivery.png"></v-img>
          <p class="how-title">Product Delivery</p>
          <br>
          <p class="text-center how-text ">&nbsp; We ship the products to you.<br> You can pick up the products<br> at our designated warehouse<br> or have us deliver them to your doorstep.</p>
          <br><v-btn color="#FF6433" class="mt-7" dark>explore now</v-btn>
        </v-card>
            </v-col>
           </v-row>
              </v-container>
     <v-container  class="complicated">
      <v-row class="missions-row">
         <v-col class="missions" cols="12" sm="6" md="4">
          <v-card  class="mission-card " height= '385'>
            <p class="mission">Our mission is to create a sustainable bridge between consumer goods and employment opportunities across all sectors, thereby making Africa a global marketplace.</p>
          </v-card>
          <v-card class="goal-card">
            <p class="goal">“Our goal is to help brands grow on a global scale and meet the needs of the end users.” </p>
          </v-card>
        </v-col>
         <v-col class="ratings" cols="12" sm="6" md="4">
          <v-card class="ratings-card" width="208" height="209">
             <p class="rates">4.9/5.0</p>
     <v-rating class="stars" v-model="rating" color="#ffd308" dense value="5" size="16"
      ></v-rating>
      <p class="ratings-text "> Fast product delivery rate which is second to none</p>
             </v-card>

              <v-card class="logistics">
           <p class="logistics-text ">&nbsp; “Products in large &nbsp;quantities will be properly handled with our team of experts on ground.<br>
<br>We have local branches or warehousing to accomodate & cater for  any sudden mishap with logistics”.

</p>
             </v-card>
        </v-col>
        <v-col class="brand-cols" cols="12" sm="12" md="3">
          <v-card elevation="0" class="brands-card" width="373" max-height="480">
            <p class="brands-title">BRANDS COMPETITIVE EDGE</p>
         <p class="brands-head"> Build Your Brand</p>
            <p class="brands-text">We have strategic partnerhsips which can be leveraged on to boost sales and growth of a brand.</p>
            <v-btn color="#ff6433" dark class="mt-3 mx-2">get started</v-btn>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
      <v-container fluid class="mt-10">
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center mb-5" cols="12">
        <p class="testimony">GREAT WORDS ABOUT NILE GLOBAL</p>
        <h1>What make them love us?</h1>
      </v-col>
    </v-row>
      </v-container>
         <v-container fluid>
             <swiper class="swiper" :options="swiperOption">
    <swiper-slide  class="" v-for="(story, index) in customerStory" :key="index">
        <v-card  height="300" class="testimonies pt-10 mb-16" elevation="2">
          <p class="testimonial-text mt-4"> {{story.story}}</p>
          <div class="feedback-info"><v-avatar rounded="50" class="mb-4">
          <v-img width="50"  :src="story.img" ></v-img></v-avatar>
<span class="pl-2 pt-2"><p class="feedback-name">&nbsp;{{story.name}}</p>
<p class="feedback-job">&nbsp;{{story.occupation}}</p></span></div>
               </v-card>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </v-container>
     <v-container fluid>
    <v-row align="center" class="pt-14 px-16" justify="center">
      <v-col cols="2" >
        <v-img width="60" src="stylu.png"></v-img>
      </v-col><v-col cols="2" >
        <v-img width="60" src="stylu.png"></v-img>
      </v-col><v-col cols="2" >
        <v-img width="60" src="stylu.png"></v-img>
      </v-col><v-col cols="2" >
        <v-img width="60" src="stylu.png"></v-img>
      </v-col><v-col cols="2" >
        <v-img width="60" src="stylu.png"></v-img>
      </v-col>
        </v-row>
  </v-container>
     <v-container fluid>
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center" cols="6">
        <p class="text-h6 text-center font-weight-bold">Discover some available products</p>
      </v-col>
    </v-row>
     <v-container>
             <swiper class="swiper" :options="swiperOptionProd">
    <swiper-slide  style="width: 400px" class="" v-for="i in 4" :key="i">
        <v-card  elevation="1" height="" style="margin-bottom:50px" width="347">
        <v-img contain src="chair.png" ></v-img>
        <div class="product pt-3 mb-5">
         <v-row>
           <v-col >
             <p class="classic">Classic Furniture</p>
           </v-col>
           <v-col class="ml-6" ><p class="price text-right">N50000</p></v-col>
           <v-col cols="7"> <p class="goods-info">Packed with all the essentials to welcome employees or get clients excited.</p></v-col>
             <v-col cols="6"> <v-btn small dark color="#FF6433">ORDER NOW</v-btn></v-col>
            <v-col  class=" goods-quantity text-right"><p class="pt-2">Min. 25 pieces</p></v-col>
          </v-row>  </div>
              </v-card>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </v-container>
    </v-container>
     <Email/>
  <Footer/>
  </v-app>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Navbar from '@/components/Navbar.vue'
import Email from '@/components/Email.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Email,
    Navbar,
    Footer,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptionProd: {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1240: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1000: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          540: {
            slidesPerView: 1.5,
            spaceBetween: 15
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      swiperOption: {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          1240: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      customerStory: [
        {
          story: '"Ever since I started doing business with Nile Global Service, my cocoa business has been booming. \n No more on and off business season for me again. They’re giving local businesses like mine, the opportunity to do business on a global scale and grow financially.”',
          name: 'Mr. Sayeed Olawale ',
          occupation: 'Farmer & Entrepreneur',
          img: require('../assets/testimonial-img/Mr.-Sayeed-Olawale.jpg')
        },
        {
          story: '"I have used NGS for numerous times now and on each occasion, they have surpassed my expectations. No mistakes, no damaged goods in transit, 100% professionals from start to finish.”',
          name: ' Amara Odenigbo',
          occupation: 'Real Estate Developer',
          img: require('@/assets/testimonial-img/Amara-Odenigbo.jpg')
        },
        {
          story: '"Nile Global Service came at the right time. After been the usual victim of expensive and poorly branded products. I gave NGS a trail and have not looked back since then. I always import quality branded products & souvenirs from china, stress free. Delivered to my doorstep.”',
          name: 'Sharon Tolulope ',
          occupation: ' Event Planner',
          img: require('@/assets/testimonial-img/sharon-tolulope.jpg')

        },
        {
          story: '"Staying in business in the ever competitive Nigerian market is hard work. NGS foreign exchange service is a blessing to me. Kudos. Keep up the good work”.',
          name: ' Mrs. Blessing Amadi ',
          occupation: 'Fashion Entrepreneur',
          img: require('@/assets/testimonial-img/mrs-blessing-amadi.jpg')

        },
        {
          story: '"As a businessman who deals in timber and agricultural produce. Working with foreign based businesses was a pipe dream till Nile Global came into the picture. Partnering with NGS has made my business grow rapidly. Thank You.”',
          name: ' Mr. Segun Victor  ',
          occupation: 'Entrepreneur',
          img: require('@/assets/testimonial-img/Mr.-Segun-Victor.jpg')
        },
        {
          story: '"Thanks to Nile Global, I shipped all baking machinery for my bakery business and I have not experienced any technical issues. My output rate is on the rise. One year & counting on the horizon.”',
          name: '  Kome Savage ',
          occupation: 'Bakery & Confectionary',
          img: require('@/assets/testimonial-img/kome-savage.jpg')
        },
        {
          story: '"Importing timber from Africa is an extreme sport. It’s either some are damaged, spoilt or not properly handled. Partnering with Nile Global is changing the narrative about African businesses. I now import quality timber and logs of wood at business friendly rates”',
          name: ' Michael Wong ',
          occupation: 'Import Trade Expert',
          img: require('@/assets/testimonial-img/Michael-Wong.jpg')
        },
        {
          story: '"As the middleman, NGS enhanced my business growth. I don’t only handle local clients, but I also perform foreign exchange transactions with individuals and companies who are open to do business”',
          name: ' Richard King',
          occupation: 'Sales Executive',
          img: require('@/assets/testimonial-img/richard-king.jpg')

        },
        {
          story: '"Ever since I started using NGS, my salon business has been seen in a different light. I now get more value for money. No more repairs for quack equipments.”',
          name: ' Orlu Amarachi',
          occupation: ' Hair Stylist',
          img: require('@/assets/testimonial-img/orlu-amarchi.jpg')

        },
        {
          story: '"Nile Global is second to none for me, especially their logistics team. Professionals all the way”',
          name: ' Isaac Alasia ',
          occupation: 'Printer',
          img: require('@/assets/testimonial-img/Isaac-Alasia.jpg')
        },
        {
          story: '"My business has been experiencing difficulty in breaking even and staying afloat. I booked an appointment with one of NGS’ business expatriates and I can now say, the rest is history. No more worries or fear of failures, reduces expenditures, more profit”',
          name: ' Felix Osage',
          occupation: 'Photographer',
          img: require('@/assets/testimonial-img/Felix-Osage.jpg')

        },
        {
          story: '"I’m now every customers’ favorite vendor. Kudos to Nile Global and their team”',
          name: ' Michael Ezekiel ',
          occupation: 'Entrepreneur',
          img: require('@/assets/testimonial-img/Michael-Wong.jpg')
        }
      ],
      options: {
        freeMode: true,
        rewind: true,
        perPage: 3,
        arrows: false,
        gap: '3.5rem',
        pagination: 'slider',
        breakpoints: {
          1092: {
            perPage: 2
          },
          768: {
            perPage: 2
          },
          690: {
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
            perPage: 1
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
      rating: 5
    }
  }
}
</script>

<style scoped>
.head{
  background-image: url('../assets/containers.png');
  background-size: contain;
}

@media screen and (max-width: 359px) {
  .testimonies {
  position: relative;
  padding-left: 36px;
  padding-right: 36px;
}
.testimonial-text{
font-family: 'Gotham-light', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
}
.feedback-info{
  display: flex;
  position: absolute;
  top: 250px
  }
  .feedback-job {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
}
 @media screen and (max-width: 360px) {
 .brands-row{
  margin-left: auto;
  margin-right: auto;
}
.brands-btn {
    margin-top: 12px;
  }
   .services-row{
  margin-left: auto;
  margin-right: auto;
}
.beneifits-row {
   margin-left: auto;
  margin-right: auto;
}
     .ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
}
    .goal-card{
  margin-top: 40px;
  margin-left: 40px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.mission-card {
  height: 385px;
  padding-left: 60.4px;
  padding-right: 55px;
  padding-top: 75px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 350;
line-height: 32.5px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
   .logistics {
  height: 385px;
  padding-left: 60px;
  padding-right: 55px;
  padding-top: 65px;
  padding-bottom: 65px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 53.3px;
}
.how-it-works{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.ratings{
  height: 700px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
    animation: anime-circle 10s linear infinite alternate;
}
   }
   @media screen and (min-width: 361px) {
 .brands-row{
  margin-left: auto;
  margin-right: auto;
}
.brands-btn {
    margin-top: 12px;
  }
   .services-row{
  margin-left: auto;
  margin-right: auto;
}
.beneifits-row {
   margin-left: auto;
  margin-right: auto;
}
     .ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
}
    .goal-card{
  margin-top: 40px;
  margin-left: 100px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.mission-card {
  height: 385px;
  padding-left: 60.4px;
  padding-right: 55px;
  padding-top: 75px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 350;
line-height: 32.5px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
   .logistics {
  height: 385px;
  padding-left: 60px;
  padding-right: 55px;
  padding-top: 65px;
  padding-bottom: 65px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 53.3px;
}
.how-it-works{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.ratings{
  height: 700px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
    animation: anime-circle 10s linear infinite alternate;
}
}
 @media screen and (min-width: 421px) and (max-width: 541px) {
     .brands-row{
  margin-left: 45px;
  margin-right: 45px;
}
.brands-btn {
    margin-left: 20px;

  }
.beneifits-row {
   margin-left: 45px;
  margin-right: 45px;
}
.services-row {
   margin-left: 45px;
  margin-right: 45px;
}
     .ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
}
    .goal-card{
  margin-top: 40px;
  margin-left: 150px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.missions-row {
  margin-right: 45px;
  margin-left: 45px;
}
.mission-card {
  height: 385px;
  padding-left: 60.4px;
  padding-right: 55px;
  padding-top: 75px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 350;
line-height: 32.5px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
   .logistics {
  height: 350px;
  padding-left: 60px;
  padding-right: 55px;
  padding-top: 65px;
  padding-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 53.3px;
}
.how-it-works{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.ratings{
  height: 700px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
    animation: anime-circle 10s linear infinite alternate;
}
   }
   @media screen and (max-width: 600px){
.process-cont{
  margin-left:25%;
}
}
@media screen and (max-width: 620px) {
  .headss{
  background-image: url('../assets/containers.png');
  background-size: 100% 100%;
  padding-bottom: 90px;
}
.contents {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.about {
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  width: 500px
}
.brand {
  margin-top: -135px;
  margin-left: 10%;
}
/* .brands-row{
  margin-left: 45px;
  margin-right: 45px;
} */
.niles-global {
  font-family: 'Gotham-light', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 14 px;
letter-spacing: 0em;
text-align: center;
}
 .header-button {
  padding-left: 60px;
}
.header-button1 {
  margin-left: 100px;
}
.brands-card {
  padding-top: 10px;
  /* margin-left: px; */
}
.how-card {
  padding-left: 21px;
  padding-right: 21px;
  margin-left: auto;
  margin-right: auto;
}
}
@media screen and (max-width: 800px) {
.header-button {
  padding-left: 180px;
}
.header-button1 {
  padding-left: 50px;
}
}
@media screen and (max-width: 959px) {
  .how-title {
  font-family: 'Gotham', sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 350;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;
}
}
@media screen and (min-width: 360px) {
  .testimonies {
  position: relative;
  padding-left: 56px;
  padding-right: 56px;
}
.testimonial-text{
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
}
.feedback-info{
  display: flex;
  position: absolute;
  top: 250px
  }
  .feedback-job {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
}
  @media screen and (min-width: 600px) {
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
      .ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
  margin-left: 60px;
}
      .goal-card{
  margin-top: 71.412px;
  margin-left: 80px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.mission-card {
  width: 300px;
  height: 385px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  margin-top: 50px;
  margin-left: 40px;
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
.ratings{
  height: 800px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
    animation: anime-circle 10s linear infinite alternate;
}
   }
@media screen and (min-width: 621px) {
  .header-title {
    font-family: 'Gotham', sans-serif;
    font-size: 40px;
    color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    font-weight: 300;
}
  .headss{
  background-image: url('../assets/containers.png');
  background-size: 100% 100%;
  padding-bottom: 90px;
}
.about {
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  width: 500px
}
.niles-global {
  font-family: "Gotham-light", sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
}
.contents {
  margin: 5% auto 5px;
  width: 70%;
}
 .header-button {
  margin-left: 150px;
}
.header-button1 {
  margin-left: 90px;
}
.brand {
  margin-top: -135px;
  margin-left: 10%;
}
.brands-card {
  padding-top: 10px;
  margin-left: 70px;
}
.how-card {
  padding-left: 21px;
  padding-right: 21px;
  margin-left: auto;
  margin-right: auto;
}
}
 @media screen and (min-width: 650px) {
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
      .ratings-card {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 54.6px;
  margin-left: 60px;
}
      .goal-card{
  margin-top: 71.412px;
  margin-left: 80px;
  width: 252.603px;
  height: 137.8px;
  padding-left: 33px;
  padding-right: 30px;
  padding-top: 30px;
}
.mission-card {
  width: 300px;
  height: 385px;
  padding-left: 60.4px;
  padding-right: 55px;
  padding-top: 75px;
  margin-top: 50px;
  margin-left: 40px;
}
.mission {
  font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.ratings{
  height: 800px;
  background-image: url('../assets/shape-circle.png'), url('../assets/big-circle.png');
  background-position: 40px 020px, 200px 600px;
    animation: anime-circle 10s linear infinite alternate;
}
   }
   @media screen and (min-width: 691px) {
.testimonial-text{
  font-family: 'Gotham-light', sans-serif;
font-size: 11px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: left;
}
.feedback-info{
  display: flex;
  position: absolute;
  top: 250px
  }
  .feedback-job {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
}
@media screen and (min-width: 768px) {
  .brands-btn {
    margin-left: 20px;
    margin-top: 0;
  }
.testimonies {
  position: relative;
  padding-left: 56px;
  padding-right: 56px;
}
.testimonial-text{
  font-family: 'Gotham-light', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: left;
}
.feedback-info{
  display: flex;
  position: absolute;
  top: 200px
  }
  .feedback-job {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
}
 @media screen and (min-width: 806px) {
     .header-title {
    font-family: 'Gotham', sans-serif;
    font-size: 50px;
    color: #FFFFFF;
    line-height: 45px;
    text-align: center;
    font-weight: 300;
}

   }
@media screen and (min-width: 960px) {
  .headss{
  background-image: url('../assets/containers.png');
  background-size: 100% 100%;
  padding-bottom: 90px;
}
  .header-title {
    font-size: 50px;
    color: #FFFFFF;
    line-height: 40px;
    text-align: center;
    font-weight: 300;
}
.about {
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  width: 350px;
  }
.niles-global {
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
}
.header-button {
  margin-left: 180px;
}
.header-button1 {
  margin-left: 120px;
}
.how-card {
  padding-left: 21px;
  padding-right: 21px;
  margin-left: auto;
  margin-right: auto;
}
.brand {
  margin-top: -145px;
  margin-left: 10%;
}
.contents {
  margin-top: 90px;
  margin: 5% auto 10px;
  width: 60%;
}
.brands-card {
  padding-top: 75px;
}
}
@media screen and (min-width: 1011px) {
    .about {
  text-align: center;
  padding-left: 35px;
  padding-right: 35px;
  padding-top:35px;
  width: 450px;
  }
}
  @media screen and (min-width: 1264px) {
    .headss{
  background-image: url('../assets/containers.png');
  background-size: 100% 100%;
  padding-bottom: 90px;
}
.brand {
  margin-top: -165px;
  margin-left: 10%;
}
.header-title {
    font-size: 60px;
     font-family: 'Gotham', sans-serif;
     color: #FFFFFF;
     text-align: center;
     font-weight: 400;
     line-height: 70px;
     letter-spacing: 0em;
  }
  .how-card {
  padding-left: 21px;
  padding-right: 21px;
  margin-left: auto;
  margin-right: auto;
}
  .contents {
  margin-top: 4.5%;
  margin-bottom: 69px;
  width: 50%;
}
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
  .about {
  text-align: center;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 40px;
  width: 450px;
  }
.brands-card {
  padding-top: 75px;
}
}
@media screen and (min-width: 1024px) {
  .testimonies {
  position: relative;
  padding-left: 56px;
  padding-right: 56px;
}
.testimonial-text{
  font-family: 'Gotham-light', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: left;
}
.feedback-info{
  display: flex;
  position: absolute;
  top: 250px
  }
  .feedback-job {
  font-family: 'Gotham-light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
}

.starts{
   margin-top: 8.4%;
   margin-left: 10%;
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
font-family: 'Gotham-Light', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 325;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

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
.services-card:hover {
  border: #ff6344 solid 2px;
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
  font-family: 'Gotham-Light', sans-serif;
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
  padding-left: 21px;
  padding-right: 21px;
  margin-left: auto;
  margin-right: auto;
}
.how-text {
  font-family: 'Gotham-Light', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 22px;
letter-spacing: 0em;
text-align: center;

}
.testimony {
font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 23.4px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.product {
  text-align: center;
  padding-left: 30px;
  padding-right: 25px;
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
  font-family: 'Gotham-Light', sans-serif;
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
font-size: 10px;
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
  margin-top: 115.7px;
}
.missions {
  background-image: url("../assets/shape-slant-dots.png");
  background-position: -2px 400px;
  background-size: 162px;
  width: 500px;
  animation: anime 10s linear infinite alternate;
}

@keyframes anime {
  from {
     background-position: -2px 400px;
     }
  to {
     background-position: 200px 500px;
     }
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
@keyframes anime-circle {
  from {
     background-position: 40px 20px, 200px 600px;
     }
  to {
     background-position: 90px -5px, 200px 100px;
     }
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

.brands-head {
  font-family: 'Gotham', sans-serif;
font-size: 40px;
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
.brands-text{
font-family: 'Gotham', sans-serif;
font-size: 15.6px;
font-style: normal;
font-weight: 350;
line-height: 22.1px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}

.feedback-name {
  font-family: 'Gotham', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
line-height: 15.6px;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;
margin-bottom: 2px;
/* margin-top: 16px; */

}
v-btn{
  font-family: 'Gotham', sans-serif;
}
@media screen and (min-width: 960px) {
  .how-title {
  font-family: 'Gotham', sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 350;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;
}
}
@media screen and (min-width: 1264px) {
  .how-title {
  font-family: 'Gotham', sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 350;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;
}
}
@media screen and (max-width: 361px) {
.header-title {
    font-family: 'Gotham', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 35px;
    text-align: center;
    font-weight: 300;
}
}
@media screen and (min-width: 361px) and (max-width: 620px) {
.header-title {
    font-family: 'Gotham', sans-serif;
    font-size: 35px;
    color: #FFFFFF;
    line-height: 35px;
    text-align: center;
    font-weight: 300;
}
}
</style>
