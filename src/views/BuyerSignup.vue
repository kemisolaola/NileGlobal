<template>
<v-app>
    <v-container >
           <v-card class="mx-auto mt-16 mb-12" width="200" elevation="0"><router-link to="./"><v-img src="@/assets/nile-light.png"></v-img></router-link></v-card>
                   <v-card class="mx-auto my-auto" width="455" elevation="0">
                          <v-row>
                            <v-col cols="12" class="title text-center"> <p>CREATE SELLER ACCOUNT</p></v-col>
                               <v-col cols="12">
             <v-text-field outlined placeholder="Email"></v-text-field>
                      </v-col>
                      <v-col cols="12">
            <v-text-field outlined placeholder="Password"></v-text-field>
                      </v-col>
                                             <v-col cols="12">
            <v-btn block color="#ff6433" height="55" dark>sign up</v-btn>
                      </v-col>
                               <v-col cols="12">
            <p class="login-account" >Already have an account? <router-link to="./login" color="black--text"> Login</router-link></p>
                      </v-col>
                      </v-row>
                              </v-card>
                                   </v-container>
                                   </v-app>
</template>

<script>
export default {
  name: 'BuyerSignup'
}
</script>

<style scoped>
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
.login {
  margin-left: 32%;
}
.logo {
    margin-left: 25%;
}
.title {
    font-family:' Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 400;
letter-spacing: 0em;
text-align: center;
color: #5B5B5B;
}
.custom-placeholer-color input::placeholder {
  color: red!important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

</style>
