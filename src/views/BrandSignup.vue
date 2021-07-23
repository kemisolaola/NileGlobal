<template>
    <v-container class="login" >
          <v-row class="" align="center" justify="center">
                     <v-col class="text-center logo" cols="12"> <router-link to="./"><v-img width="200" src="@/assets/nile-light.png"></v-img></router-link> </v-col>
                  </v-row>
                   <v-row class="pt-14" align="center" justify="center">
                                         <v-col cols="12" class="title text-center"> <p>CREATE SELLER ACCOUNT</p></v-col>
              <v-col cols="12" md="6">
              <v-card width="455" elevation="0">
                 <p class="greet"> Hello,<br><br>
                 We are super excited to have you join the thousands of local and foreign brands who partner, import, export and perform transactions with Nile Global Service.<br><br>
                 Our mission is to create a sustainable bridge between consumer goods and employment opportunities across all sectors, thereby making Africa a global marketplace.<br><br>
                  We exist to enable ease of running your business by effective shipment of your products, orders to your customers when needed.<br><br>
                  Our support team is just a chat away to attend to your queries and enquiries.<br><br>
                   We remain totally committed to the growth and success of your business.<br><br>
                    Warm Regards<br><br>
                     Nile Global Service Team
                 </p> </v-card>
              </v-col>
               <v-col cols="12" md="6">
              <v-card width="455" elevation="0">
                  <v-row>
                      <v-col cols="12">
             <v-text-field outlined label="Business Name"></v-text-field>
                      </v-col>
                            <v-col cols="12">
             <v-text-field outlined label="Phone Number"></v-text-field>
                      </v-col>
                        <v-col cols="12">
             <v-text-field outlined label="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12">
            <v-text-field outlined label="Password"></v-text-field>
                      </v-col>
                      <v-col cols="12">
            <v-select outlined label="Country"></v-select>
                      </v-col>                   <v-col cols="12">
            <v-btn block color="#ff6433" height="55" dark>create account</v-btn>
                      </v-col>
                              </v-row>
                       </v-card>
              </v-col>
              </v-row>
            </v-container>
</template>

<script>
export default {
  name: 'BrandSignup'
}
</script>

<style scoped>
.logo {
    margin-left: 35%;
    text-align: center;
}
.greet{font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
line-height: 30px;
letter-spacing: 0em;
color: #5B5B5B;
text-align: left;
}
</style>
