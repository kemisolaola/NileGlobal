<template>
    <v-container class="presignup my-16" justify="center" >
           <v-row class="mt-4" align="center" justify="center">
                     <v-col class="text-center logo " cols="12"><router-link to="./"> <v-img width="200" src="@/assets/nile-light.png"></v-img></router-link> </v-col>
                  </v-row>
                   <v-row class="pt-14" align="center" justify="center">
              <v-col cols="12">
              <v-card width="680" height="400"  class="signups pt-12" elevation="0">
                  <v-row class="px-15">
                    <v-col cols="6">
                        <v-card elevation="0" class="text-center pr-14">
                            <v-avatar width="80px" height="80px" color="#ff6433"><v-img width="40px" height="40px" contain src="@/assets/buyericon.png"></v-img></v-avatar>
                        <p class="buyer mt-8 mb-4">BUYER</p>
                        <p class="signup">Searching for trusted foreign brands? Create a simple profile and start exploring</p>
                        <v-btn color="#FF6433" class="mt-11" to="./buyer" block dark>BUYER SIGN UP</v-btn>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card elevation="0" class="text-center pl-14">
                            <v-avatar width="80px" height="80px" color="#ff6433"><v-img width="40px" height="40px" contain src="@/assets/market 1.png"></v-img></v-avatar>
                        <p class="buyer mt-8 mb-4">SELLER</p>
                        <p class="signup">Are you looking for a platform to increase business sales?Advertise and get noticed</p>
                        <v-btn color="#ff6433" class="mt-11" to="./brands" block dark>seller SIGN UP</v-btn>
                        </v-card>
                    </v-col>
                       </v-row>
                       </v-card>
              </v-col>
              </v-row>
            </v-container>
</template>

<script>
export default {
  name: 'Presignup'
}
</script>

<style scoped>
.presignup {
  margin-left: 25%;
    font-family: 'Gotham', sans-serif;
}
.signups{
    border: solid 0.3px #c4c4c4;
}
.title {
    font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: center;

}
.logo {
    margin-left: 45%;
}
.buyer{
font-family: 'Gotham', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: bold;
line-height: 17px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.signup{
font-family: 'Gotham', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 325;
line-height: 18px;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
</style>
