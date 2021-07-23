<template>
<v-app>
  <Navbar/>
    <v-container class="login" justify="center" >
                   <v-row class="pt-14" justify="center" align="center" >
              <v-col cols="12" class="text-center">
              <v-container class="contacts" width="1150" elevation="0">
                  <v-row justify="center">
                    <v-col cols="12" class="title">
                      <p class="title">Get in touch with us for more information</p></v-col>
                      <v-col>
                        <div class="box">
                        <img width="20" height="30" class="mr-5"
                        contain src="@/assets/gpslogo.png">
                        <span class="contact-us"><p>Address<br> 1A Gbemisola Street,<br> Off Alade Avenue,<br> Ikeja, Lagos.</p></span>
                        </div></v-col>
                       <v-col>
                          <div class="box">
                        <img width="20" height="30" class="mr-5"
                        contain src="@/assets/calls.png">
                        <span class="contact-us"><p>Contact<br> +86 187 4002 6018</p></span>
                        </div></v-col>
                       <v-col cols="">
                           <div class="box">
                        <img width="20" height="30" class="mr-5"
                        contain src="@/assets/calls.png">
                        <span class="contact-us"><p>Email<br> Info@nileglobalservice.com<br> Support@nileglobalservice.com</p></span>
                        </div> </v-col>
                      <v-img width="1150px" max-height="1150"
                       contain src="@/assets/map.png"></v-img>
                  </v-row>
              </v-container>
              </v-col>
              </v-row>
               <v-card width="1150" elevation="0">
                  <v-row justify="center">
                    <v-col cols="12"  class="title"> <p>Share your thoughts with us</p></v-col>
                      <v-col cols="12" md="6">
             <v-text-field solo flat label="Your Name"></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
            <v-text-field solo flat label="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12" >
            <v-text-field solo flat label="Your Subject"></v-text-field>
                      </v-col>
                      <v-col cols="12" >
            <v-textarea solo flat label="Your Message"></v-textarea>
                      </v-col>
                                        <v-col cols="12" class="text-center">
            <v-btn color="#ff6433" height="55" dark>Submit</v-btn>
                      </v-col>
                              </v-row>
                       </v-card>
            </v-container>
            <Footer/>
</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Contact',
  components: {
    Navbar,
    Footer
  }
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
font-size: 31 px;
font-style: normal;
font-weight: 350;
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
  font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 18px;
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
</style>
