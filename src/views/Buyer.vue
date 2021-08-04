<template>
  <v-app>
    <Navbar/>
    <v-img max-height="40%" src="@/assets/buyers.png">
    <v-row  class="headers" align="center"  justify="center">
            <v-col class="text-center white--text" cols="6">
                <p class="header">Discover Africa’s leading<br> brands in a single place</p>
                    <v-btn color="#ff6433 " dark> Sign up now</v-btn>
            </v-col>
        </v-row></v-img>
    <v-container fluid class="">
          <v-row align="center"  justify="center">
            <v-col class="text-center " cols="6">
                <p class="how">HOW IT WORKS</p>
                <p class="simple">In 3 simple ways</p>
                            </v-col>
        </v-row>
  </v-container>
   <section id="conference-timeline">
    <div class="conference-center-line"></div>
    <div class="conference-timeline-content">
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left"  style="border: 0; padding-top: 12px;">
        <p class="task">SIGNUP</p>
        <v-img src="@/assets/megan-men.png"></v-img>          </div>
        </div>
        <div class="content-right-container">
          <div class="content-right"  style="border: 0;  padding-top: 150px">
 <v-card elevation="0">
         <p class="timeline-title">Join the NileGlobal<br> Marketplace</p>
         <p class="process">Sign-up today and get access<br> to our ever-growing database of<br> established and upcoming brands.</p>
        </v-card>          </div>
        </div>
              </div>
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left" style="border: 0;  padding-top: 150px">
         <p class="timeline-title">Discover Brands</p>
         <p class="process">Sign-up today and get access<br> to our ever-growing database of<br> established and upcoming brands.</p>
              </div>
        </div>
        <div class="content-right-container"  style="border: 0;">
        <p class="tasks">SEARCH</p>
        <v-img width="422" src="@/assets/megan-bino.png" ></v-img>
           </div>
      </div>
      <!-- // Article -->
            <!-- Article -->
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left"  style="border: 0;padding-top:10px;">
 <v-card elevation="0" width="422">
      <p class="task">COMPLETE ORDERS</p>
        <v-img class=""  src="@/assets/megan-shake.png"></v-img>
      </v-card>          </div>
        </div>
        <div class="content-right-container">
          <div class="content-right"  style="border: 0;  padding-top: 150px">
 <v-card width="422" elevation="0">
         <p class="timeline-title">Connect & Do Business</p>
         <p class="process">Products can be mass produced to meet<br> your requirements. Logistics and<br> warehousing will be handled by the<br> company to improve productivity</p>
        </v-card>          </div>
        </div>
              </div>
    </div>
  </section>
  <Faqbuyer/>
   <v-container fluid>
    <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center" cols="6">
        <p class="text-h6 text-center font-weight-bold">Discover some available products</p>
      </v-col>
    </v-row>
    <v-container style="margin-left: 5%;">
       <splide :options="prodoptions">
    <splide-slide style="width: 400px" class="" v-for="i in 4" :key="i">
              <v-card  elevation="1" height="" style="margin-bottom:50px" width="347">
        <div class="product pt-3 mb-5">
                  <v-img contain src="@/assets/chair.png" ></v-img>
         <v-row class="px-7 pt-3 mb-3">
           <v-col >
             <p class="classic">Classic Furniture</p>
           </v-col>
           <v-col class="ml-6"><p class="price text-right">N50000</p></v-col>
           <v-col cols="7"> <p class="goods-info">Packed with all the essentials to welcome employees or get clients excited.</p></v-col>
             <v-col cols="6"> <v-btn dark color="#FF6433">ORDER NOW</v-btn></v-col>
            <v-col class=" goods-quantity  text-right"><p>Min. 25 pieces</p></v-col>
          </v-row>  </div>
              </v-card> </splide-slide>
  </splide>
    </v-container>
    </v-container>
       <Email/>
  <Footer/>
   </v-app>
</template>

<script>
import Email from '@/components/Email.vue'
import Faqbuyer from '@/components/Faqbuyer.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import 'gotham-fonts/fonts/GothamRounded-Medium.ttf'
export default {
  name: 'Buyer',
  components: {
    Faqbuyer,
    Email,
    Navbar,
    Splide,
    SplideSlide,
    Footer
  },
  data () {
    return {
      prodoptions: {
        freeMode: true,
        rewind: true,
        perPage: 3,
        arrows: false,
        gap: '0.5rem',
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
      }
    }
  }
}
</script>

<style>
#conference-timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
#conference-timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #C4C4C4;
  border: 0.5px #C4C4C4;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
/* #conference-timeline .timeline-start,
#conference-timeline .timeline-end {
  display: table;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  background: #00b0bd;
  padding: 15px 23px;
  color: #fff;
  max-width: 5%;
  width: 100%;
  text-align: center;
  margin: 0 auto;
} */
.content-left-container::after {
    content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: 460px;
  background-color: white;
  border: 4px solid #FF6433;
  top: 10px;
  border-radius: 50%;
  z-index: 1;
}
#conference-timeline .conference-timeline-content {
    padding-top: 0px;
    padding-bottom: 67px;
}
.timeline-article {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}
.timeline-article .content-left-container,
.timeline-article .content-right-container {
  max-width: 44%;
  width: 100%;
}
.timeline-article .timeline-author {
  display: block;
  font-family: 'Gotham', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 350;
line-height: 38px;
letter-spacing: 0.05em;
color: #ff6433
}
.timeline-article .content-left,
.timeline-article .content-right {
  position: relative;
  width: auto;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
  padding: 27px 25px;
}

.timeline-article .content-left-container {
  float: left;
}
.timeline-article .content-right-container {
  float: right;
}
.timeline-article .content-left:before,
.timeline-article .content-right:before{
  position: absolute;
  top: 20px;
  font-size: 23px;
  font-family: "FontAwesome";
  color: #fff;
}
.timeline-article .content-left:before {
  content: "\f0da";
  right: -8px;
}
.timeline-article .content-right:before {
  content: "\f0d9";
  left: -8px;
}

.timeline-article .meta-date .date {
  font-size: 30px;
  line-height: 40px;
}
.timeline-article .meta-date .month {
  font-size: 18px;
  line-height: 10px;
}
/*===== // Vertical Timeline =====*/

/*===== Resonsive Vertical Timeline =====*/
@media only screen and (max-width: 960px) {
  #conference-timeline .timeline-start,
  #conference-timeline .timeline-end {
    margin: 0;
  }
  #conference-timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #C4C4C4;
  border: 0.5px #C4C4C4;
  top: 0;
  bottom: 0;
  left: 45px;
  margin-left: -3px;
}
.content-left-container::after {
    content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  left: 31px;
  background-color: white;
  border: 4px solid #FF6433;
  top: 10px;
  border-radius: 50%;
  z-index: 1;
}
  #conference-timeline .conference-center-line {
    margin-left: 0;
    left: 50px;
  }
  .timeline-article .meta-date {
    margin-left: 0;
    left: 20px;
  }
  .timeline-article .content-left-container,
  .timeline-article .content-right-container {
    max-width: 100%;
    width: auto;
    float: none;
    margin-left: 110px;
    min-height: 53px;
  }
  .timeline-article .content-left-container {
    margin-top: 50px;
    margin-bottom: 20px;
  }
  .timeline-article .content-left,
  .timeline-article .content-right {
    padding: 10px 25px;
    min-height: 65px;
  }
  .timeline-article .content-left:before {
    content: "\f0d9";
    right: auto;
    left: -8px;
  }
  .timeline-article .content-right:before {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .timeline-article p {
    margin: 0;
  }
  .timeline-article p span.article-number {
    display: none;
  }
}
.timeline {
  position: relative;
  max-width: 1200px;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: #C4C4C4;
  border: 0.5px #C4C4C4;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.containers {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.containers::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -10px;
  background-color: white;
  border: 4px solid #FF6433;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the containers to the left */
.left {
  left: 0;
}

/* Place the containers to the right */
.right {
  left: 50%;
}

/* Add arrows to the left containers (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right containers (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  /* Full-width containers */
  .containers {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  /* Make sure that all arrows are pointing leftwards */
  .containers::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }
  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
.headers{
    margin-top: 9%;
}
.header {
font-family: Gotham;
font-size: 4vw;
font-style: normal;
font-weight: 350;
line-height: 56px;
letter-spacing: 0em;
text-align: center;

}
.how{
 font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 72px;
letter-spacing: 0em;
text-align: center;

}
.simple{
font-family: Gotham;
font-size: 43px;
font-style: normal;
font-weight: 350;
line-height: 50px;
letter-spacing: -0.02em;
text-align: center;

}
.timeline {
  margin-left: 40px;
}
.timeline-title {
font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 350;
line-height: 37px;
letter-spacing: 0.05em;
text-align: left;

}
.timeline-titler {
font-family: 'Gotham', sans-serif;
color: #5B5B5B;
font-size: 26px;
font-style: normal;
font-weight: 350;
line-height: 37px;
letter-spacing: 0.05em;
text-align: right;

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
.goods-info {
  font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 325;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #C4C4C4;

}
.process {
font-family:' Gotham', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 23.3px;
letter-spacing: 0em;
color: #5B5B5B;
}
.v-timeline_opposite {
    width: 450;
}

.faq{
    font-family: Gotham;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 59px;
letter-spacing: 0em;
text-align: center;

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
.covered{
font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 21px;
letter-spacing: 0em;
text-align: center;

}
.about-faq {
    font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
padding-left: 2%;
padding-top: 1.8%;
padding-right: 5%;
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
.task {
font-family: 'Gotham,' sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 350;
line-height: 38px;
letter-spacing: 0.05em;
color: #ff6433;
text-align: right;
}
.tasks {
font-family: 'Gotham', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 350;
line-height: 38px;
letter-spacing: 0.05em;
text-align: left;
color: #ff6433
}
</style>
