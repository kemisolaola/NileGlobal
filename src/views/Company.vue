<template>
  <v-app>
    <Navbar/>
    <v-img max-height="336"  src="@/assets/Conpany.png"></v-img>
    <v-container fluid class="company">
        <p class="story"> Our Story</p><br><br><br>
        <p class="company-story">
Nile Global Service (NGS) is the future of easy access to consumer goods through product sourcing, branding, and delivery in Africa. We are focused on creating an ideal environment where consumer goods can be easily imported by individuals or business people without the difficulties and challenges encountered during branding, shipping, clearing, and goods delivery.
<br><br><br>
As a forward-thinking company, NGS is the bridge between easy access to goods and businesses' future in Africa. We have seen the challenges and
have proffered a solution that changes the landscape of business & employment opportunities for everyone. Launched in 2015, our mission is
to create a sustainable bridge between consumer goods & employment opportunities across all sectors, thereby making Africa a global marketplace.
<br><br><br>
We are a registered company in China and Nigeria alike. Our office address
in China is 777 Shenzen Avenue, CN 54321, while our registered address
in Nigeria is located at 1A Gbemisola Street, Off Alade Avenue. Ikeja, Lagos.
<br><br><br>
The NGS vision is to deliver a reliable experience to all our clients and to become the preferred choice for product and commodity sourcing, branding, and delivery service in Africa. We value hard work & dedication to providing
a source of livelihood and alternative to become self-employed.</p>
    </v-container>
 <Footer/>
        </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Company',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'Gothams';
  src: url("~@/assets/gotham-fonts/GothamPro-Light.woff"), local('Gotham') format('truetype');
}
.company{
    padding-top: 9%;
    padding-left: 16.4%;
    padding-right: 16%;
    padding-bottom: 5%;
}

@media screen and (max-width: 768px) {
.company-story {
font-family: 'Gotham-light', sans-serif;
font-size: 16px;
font-style: normal;
line-height: 20px;
color: #9c9c9c;
}
}
@media screen and (min-width: 1025px) {
.company-story {
font-family: 'Gotham-light', sans-serif;
font-size: 18px;
font-style: normal;
line-height: 22px;
letter-spacing: 0em;
text-align: justify;
font-weight: lighter;
color: #9c9c9c;
}
.story {
font-family:'Gotham', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: justify;
color: #5b5b5b;
}
}
@media screen and (min-width: 769px) {
.company-story {
font-family: 'Gotham-light', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 325;
line-height: 25px;
text-align: justify;
color: #9c9c9c;
}
.story {
font-family:'Gotham', sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 25px;
letter-spacing: 0em;
text-align: justify;
color: #5b5b5b;
}
}
</style>
