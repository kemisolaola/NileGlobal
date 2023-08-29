<template>
    <v-container>
                    <v-card class="mx-auto mt-16 mb-12" width="200" elevation="0"><router-link to="./"><v-img src="/nile-light.png"></v-img></router-link></v-card>
      <v-container justify="center">
          <v-row class="" align="center" justify="center">
                    <v-col cols="12" class="create"> <p>CREATE SELLER ACCOUNT</p></v-col>
  </v-row>
      </v-container>
                   <v-row class="brandsignup mx-auto pt-14" align="center" justify="center">
              <v-col cols="12" md="6" class="d-none d-md-flex">
              <v-card width="455" elevation="0">
                 <p class="greet"> Hello,<br><br>
                 We are super excited to have you join the thousands of local and foreign brands who partner, import, export and perform transactions with Nile Global Service.<br><br>
                 Our mission is to create a sustainable bridge between consumer goods and employment opportunities across all sectors, thereby making Africa a global marketplace.<br><br>
                  We exist to enable ease of running your business by effective shipment of your products, orders to your customers when needed.<br><br>
                  Our support team is just a chat away to attend to your queries and enquiries.<br><br>
                   We remain totally committed to the growth and success of your business.<br><br>
                    Warm Regards<br><br>
                    <span style="font-weight: 600; "> Nile Global Service Team</span>
                 </p> </v-card>
              </v-col>
               <v-col cols="12" md="6">
              <v-card width="455" class="mx-sm-auto" elevation="0">
                  <v-row>
                      <v-col cols="12">
             <v-text-field outlined  :rules="[rulesBusiness.required]" label="Business Name"></v-text-field>
                      </v-col>
                            <v-col cols="12">
             <v-text-field  outlined label="Phone Number"></v-text-field>
                      </v-col>
                        <v-col cols="12">
             <v-text-field outlined  label="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12">
            <v-text-field outlined
              v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            hint="At least 8 characters"
            label="Password"
               @click:append="show1 = !show1"></v-text-field>
                      </v-col>
                      <v-col cols="12">
            <v-select outlined label="Country"></v-select>
                      </v-col>                   <v-col cols="12">
            <v-btn block color="#ff6433" height="55" dark>create account</v-btn>
                      </v-col>
                               <v-col cols="12">
            <p class="login-account" >Already have an account? <router-link to="/login" color="black--text"> Login</router-link></p>
                      </v-col>
                              </v-row>
                       </v-card>
              </v-col>
              </v-row>
            </v-container>
</template>

<script>
export default {
  name: 'BrandSignup',
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered do not match')
      },
      rulesBusiness: {
        required: value => !!value || 'Business name is required.'
      }
    }
  }
}
</script>

<style scoped>
.brandsignup {
    font-family: 'Gotham', sans-serif;
}
.logo {
    margin-left: 80%;
    margin-top: 100px;
}
.create{
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Gotham', sans-serif;
  color: #5B5B5B;
}
.greet{
font-family: 'Gotham', sans-serif;
font-weight: 30o;
font-size: 18px;
font-style: normal;
line-height: 30px;
letter-spacing: 0em;
color: #5B5B5B;
text-align: left;
}
.login-account{
font-family:' Gotham', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: center;
color: #c4c4c4;

}
.v-application a {
    color: black;
}
a {
  color: black;
  text-decoration: none;
}
/* .custom-placeholer-color input::placeholder {
  color: black !important;
}

.custom-label-color .v-label {
  color: black;
  opacity: 1;
} */
/* .v-text-field--outlined >>> fieldset {
  border-color: #ff6433;
} */
</style>
