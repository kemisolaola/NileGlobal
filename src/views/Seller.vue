<template>
  <v-app>
    <Navbar/>
    <v-img max-height="550" src="@/assets/seller.png">
    <v-row class="headers" align="center"  justify="center">
            <v-col class="white--text" cols="12">
                <p class="seller-header">Evolving brands to <br>global frontiers</p>
                <p class=" header-text">Improve sales and unlock opportunities<br> for your brand’s growth</p>
                   <v-btn color="#ff6433" dark> Sign up now</v-btn>
                    <br>
                    <v-btn class="fab" fab><v-img height='15' width="12" contain src="@/assets/Polygon 6.png"></v-img></v-btn>
            </v-col>
        </v-row></v-img>
    <v-container fluid class="mt-5">
          <v-row align="center" class="pt-14" justify="center">
            <v-col class="text-center " cols="6">
                <p class="trusted">TRUSTED BY HUNDREDS OF LOCAL BRANDS</p>
                <p class=" strategy">Our strategy is to see Local Brands do Business with<br> International Retailers is the companys focal point.</p>
                            </v-col>
        </v-row>
  </v-container>
   <v-container fluid class="mt-5">
          <v-row class="pt-14" justify="center">
            <v-col cols="6" md="2">
                <p class="num" >1.206</p>
                <p class="brands" >ONBOARDED<br> BRANDS</p>
            </v-col>
              <v-col  cols="6" md="2">
                <p class="num" >3250</p>
                <p class="brands" >COMPLETED<br> TRANSACTIONS</p>
            </v-col>
              <v-col  cols="6" md="2">
                <p class="num">545334</p>
                <p class="brands" >PRODUCTS<br> DELIVERED</p>
            </v-col>
              <v-col cols="6" md="2">
                <p class="num" >100%</p>
                <p class="brands">SATISFACTION<br>RATE</p>
            </v-col>
        </v-row>
  </v-container>
  <v-container class="works">
                <v-row align="center" class="pt-14">
                    <v-col class="dots" cols="12" md="4">
                        <p class="how">HOW IT WORKS</p>
                        <p class="simple">Simple<br> Onboarding</p>
                                 <p class="process">With Niles Global, the brand<br> registration process is streamlined<br> in 4
                                     easy steps without any<br> need for official documentation. </p>
                                                </v-col>
                    <v-col class="shape" cols="12" md="6" >
                        <v-img class="megan" width="540" contain src="@/assets/megan-man.png"></v-img>
                    </v-col>
                </v-row>
                 <v-row align="center" class="pt-14">
                     <v-col class="reverse-shape" cols="12" md="6">
                        <v-img class="megan" contain src="@/assets/megan-woman.png"></v-img>
                    </v-col>
                    <v-col cols="12" md="6" style="padding-left: 128px">
                        <p class="how">HOW IT WORKS</p>
                        <p class="simple">Be Easily<br> Discovered</p>
                                 <p class="process">Get noticed by uploading your<br> products as buyers tend to use the<br> plaftform to source for multiple<br> products in large quantities.  </p>
                                                </v-col>
                                    </v-row>
                 <v-row align="center" class="pt-14">
                    <v-col class="dots" cols="12" md="4">
                        <p class="how">HOW IT WORKS</p>
                        <p class="simple">Connect & <br>Do Business</p>
                                 <p class="process">Brands get notified about orders<br> and logistics of the products can be<br> handled by the company with<br> numerous warehouses with agents<br> around the country. </p>
                                                </v-col>
                    <v-col class="shape" cols="12" md="6" >
                                         <v-img class="megan" width="540" contain src="@/assets/megan-shake.png"></v-img></v-col>
                          </v-row>
  </v-container>
  <Faqseller/>
       <Email/>
  <Footer/>
        </v-app>
</template>

<script>
import Email from '@/components/Email.vue'
import Faqseller from '@/components/Faqseller.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Seller',
  components: {
    Faqseller,
    Email,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.shape{
  background-image: url('../assets/shape-dots.png'), url('../assets/shape-circle.png'), url('../assets/shape-dots.png');
  background-position: right top, right bottom, left bottom;
  animation: anime-circle 10s linear infinite alternate;
}
@keyframes anime {
  from {
     background-position: left top, left bottom, right bottom;
     }
  to {
     background-position: 20px -90px, 200px 200px, 20px 90px;
     }
}
  .reverse-shape{
  background-image: url('../assets/shape-dots.png'), url('../assets/shape-circle.png'), url('../assets/shape-dots.png');
  background-position: left top, left bottom, right bottom;
    animation: anime-circle 10s linear infinite alternate;
  }
  @keyframes anime-circle {
  from {
     background-position: left top, left bottom, right bottom;
     }
  to {
     background-position: 20px -90px, 200px 200px, 20px 90px;
     }
}
.headers{
    margin-top: 9%;
    text-align: center;
}
.seller-header {
font-family: 'Gotham', sans-serif;
font-size: 4.8vw;
font-style: normal;
font-weight: 350;
line-height: 70px;
letter-spacing: 0em;
text-align: center;
}
.header-text {
font-family: "Gotham", sans-serif;
font-size: 1.6vw;
font-style: normal;
font-weight: 350;
line-height: 29px;
letter-spacing: 0em;
text-align: center;

}
.trusted {
font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 65px;
letter-spacing: 0.2em;
text-align: center;
}
.strategy{
font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 350;
line-height: 30px;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.num {
font-family: "Gotham", sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
color: #ff6433;
text-align: center;
}
.brands {
font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 20.8px;
letter-spacing: 0em;
text-align: center;
color: #c4c4c4;
}
.megan {
height: 350px;
width: 540px;
}
.works {
font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 72px;
letter-spacing: 0em;
text-align: left;
padding-left: 5%;
}
/* .how-works{
margin-left: 24%;
margin-right: 16%;
} */
.how{
 font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 72px;
letter-spacing: 0em;
text-align: left;

}
.simple{
font-family: 'Gotham', sans-serif;
font-size: 43px;
font-style: normal;
font-weight: 350;
line-height: 50px;
letter-spacing: -0.02em;
text-align: left;

}
.process {
font-family: 'Gotham', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 325;
line-height: 24px;
letter-spacing: 0em;

}
.faq{
    font-family: 'Gotham', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 59px;
letter-spacing: 0em;
text-align: center;

}
.fab {
    margin-top: 8.7%;
}
.covered{
font-family: 'Gotham', sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 21px;
letter-spacing: 0em;
text-align: center;

}
.clear {
font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
padding-left: 25px ;
padding-top: 17px;

}
.about-faq {
    font-family: 'Gotham', sans-serif;
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

.discover {
 font-family: 'Gotham', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;

}
.access {
  font-family: 'Gotham', sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #C4C4C4;
}
.dots {
  text-align: left;
}
</style>
