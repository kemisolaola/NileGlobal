<template>
    <v-app>
       <v-container>
              <v-card class="mx-auto mt-16 mb-12" width="200" elevation="0"><router-link to="./"><v-img src="nile-light.png"></v-img></router-link></v-card>
                  <v-card class="mx-auto my-auto" width="455" elevation="0">
                          <v-row>
                            <v-col cols="12" class="title text-center"> <p>LOGIN</p></v-col>
                              <v-col cols="12">
                              <v-text-field outlined placeholder="Email"></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                  :rules="[rules.required, rules.min]"
                                  :type="show1 ? 'text' : 'password'"
                                  name="input-10-1"
                                  hint="At least 8 characters"
                                  label="Password"
                                  @click:append="show1 = !show1"
                                  outlined placeholder="Password"></v-text-field>
                              </v-col>
                              <v-col cols="12">
                              <v-row>
                                 <v-col class="pt-0">
                                   <v-checkbox class="pt-0" label="Remember Me"></v-checkbox>
                                  </v-col >
                                  <v-col>
                                    <p class="links-right"><router-link to=""> Forgot Password</router-link></p>
                                  </v-col>
                              </v-row>
                              </v-col>
                              <v-col cols="12">
                                <v-btn block color="#ff6433" height="55" dark>login</v-btn>
                              </v-col>
                              <v-col cols="12">
                                <v-row> <v-col>
                                  <p class="links"><router-link to=""> Buyer Account</router-link></p>
                                </v-col>
                                <v-col><p class="links-right" ><router-link to=""> Seller Account</router-link></p></v-col>
                                </v-row>
                              </v-col>
                                      </v-row>
                              </v-card>
       </v-container>
              </v-app>
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        emailMatch: () => ('The email and password you entered do not match')
      }
    }
  }
}
</script>

<style scoped>
v-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.login {
   display: block;
  margin-left: auto;
  margin-right: auto;
}
 .logins {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.title {
    font-family: 'Gotham', sans-serif;
font-size: 26px;
font-style: normal;
font-weight: 700;
letter-spacing: 0em;
text-align: center;
color: #5b5b5b;

}
.logo {
    margin-left: 25%;
}
.v-application a {
  text-decoration: none;
font-family: 'Gotham',  sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: left;
color: #c4c4c4;

}
.links-right{
font-family: 'Gotham',  sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 350;
letter-spacing: 0em;
text-align: right;
color: #c4c4c4;

}
</style>
