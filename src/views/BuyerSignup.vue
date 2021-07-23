<template>
    <v-container class="login" justify="center" >
                  <v-row class="pt-14" align="center" justify="center">
                     <v-col class="text-center logo " cols="12"><router-link to="./"> <v-img width="200" src="@/assets/nile-light.png"></v-img> </router-link> </v-col>
                  </v-row>
          <v-row class="pt-14" align="center" justify="center">
              <v-col cols="12">
              <v-card width="455" elevation="0">
                  <v-row>
                      <v-col cols="12" class="title"> <p>CREATE SELLER ACCOUNT</p>
                      </v-col>
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
            <v-btn block text height="55" >Already have an account? Login</v-btn>
                      </v-col>
                              </v-row>
                       </v-card>
              </v-col>
              </v-row>
            </v-container>
</template>

<script>
export default {
  name: 'BuyerSignup'
}
</script>

<style scoped>
.login {
  margin-left: 32%;
}
.logo {
    margin-left: 25%;
}
.title {
    font-family: Gotham;
font-size: 26px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: center;

}
</style>
