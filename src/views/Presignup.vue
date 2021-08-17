<template>
<v-app>
    <!-- <router-link to="./"> -->
     <v-card class="mx-auto mt-16 mb-12" width="200" elevation="0"><router-link to="./"><v-img src="@/assets/nile-light.png"></v-img></router-link></v-card>
     <!-- </router-link> </v-col> -->
    <v-card class="presignup-card">
       <v-row class="mx-auto py-16 px-6 px-lg-12" >
                    <v-col cols="12" sm="12" md="6" class="px-lg-12">
                        <v-card elevation="0" class="text-center" >
                            <v-avatar width="80px" height="80px" color="#ff6433"><v-img width="40px" height="40px" contain src="@/assets/buyericon.png"></v-img></v-avatar>
                        <p class="buyer mt-9">BUYER</p>
                        <p class="signup mt-6">Searching for trusted foreign<br> brands? Create a simple profle<br> and start exploring</p>
                        <v-btn color="#FF6433" class="mt-12" to="./buyer" block dark>BUYER SIGN UP</v-btn>
                        </v-card>
                    </v-col>
                    <v-divider class="divider" vertical></v-divider>
                    <v-divider class="" ></v-divider>
                    <v-col cols="12" sm="12" md="6"  class="px-lg-12">
                        <v-card elevation="0" class="text-center">
                            <v-avatar width="80px" height="80px" color="#ff6433"><v-img width="40px" height="40px" contain src="@/assets/market 1.png"></v-img></v-avatar>
                        <p class="buyer  mt-9">SELLER</p>
                        <p class="signup mt-6">Are you looking for a platform<br> to increase business sales?<br>Advertise and get noticed</p>
                        <v-btn color="#ff6433" class="mt-12" to="./brands" block dark>seller SIGN UP</v-btn>
                        </v-card>
                    </v-col>
                       </v-row> </v-card>
</v-app>
</template>

<script>
export default {
  name: 'Presignup'
}
</script>

<style scoped>
 @media screen and (max-width: 420px) {
.presignup-card {
    max-width: 340px;
         margin-left: auto;
         margin-right: auto;
     }
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.signup{
font-family: 'Gotham-Light', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 325;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.divider {
    display: none;
}
 }
 @media screen and (min-width: 421px) and (max-width: 541px) {
.presignup-card {
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
     }
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.divider {
    display: none;
}
.signup{
font-family: 'Gotham-Light', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 325;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
}
 @media screen and (min-width: 542px) and (max-width: 768px) {
.presignup-card {
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
     }
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.divider {
    display: none;
}
.signup{
font-family: 'Gotham-Light', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 325;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
 }
 @media screen and (min-width: 769px) {
.presignup-card {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
     }
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}@media screen and (min-width: 1025px) {
.presignup-card {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
     }
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;
}
}
/* .divider {
    display: none;
} */
.signup{
font-family: 'Gotham-Light', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 325;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
 }
.signups{
    border: solid 0.3px #c4c4c4;
}

.logo {
    margin-left: 45%;
}
/* .buyer{
font-family: 'Gotham', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

} */
</style>
