<template>
   <v-container fluid>
       <v-container>
  <v-row align="center" class="pt-14" justify="center">
      <v-col class="text-center pl-sm-2" cols="12">
        <h1 color="#5b5b5b">Need to discover more?</h1>
        <p class="access pt-5 mb-7">Access our guide and discover everything</p>
      <v-btn  dark color="#FF6433" width="300" height="52">GET STARTED NOW</v-btn>
      </v-col>
    </v-row>
       </v-container>
    <v-container fluid class="mt-10 coffee">
    <v-row align="center" class="emails" justify="center">
        <v-col cols="12">
          <p class="email-us">Get industry tips and import tricks straight into your inbox.</p>
          <p class="email">Enter your email address to get our newsletters. No spam!</p>
          </v-col>
           </v-row>
       <v-row style="padding-left: 19%" no-gutters :align="align" class="mr-16" justify="center">
        <v-col cols="6" md="5">
          <v-text-field solo flat placeholder="Your Email" style="border-radius: 0" />
        </v-col>
        <v-col cols="4">
          <v-btn tile color="#ff6433" depressed dark large height="48px">
            Subscribe
          </v-btn>
                  </v-col>
      </v-row></v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Email'
}
</script>

<style scoped>
.access {
  font-family: 'Gotham', sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #C4C4C4;
}

@media screen and (max-width: 600px) {
  .emails {
  padding-top: 122.2px;
  margin-left: 10%;
  margin-right: 10%;
}
}
@media screen and (min-width: 601px) {
  .emails {
  padding-top: 122.2px;
  margin-left: 22%;
  margin-right: 22%;
}
}
.email {
  font-family: 'Gotham', sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 325;
line-height: 34px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
}
@media screen and (min-width: 601px) {
  .email {
font-family: 'Gotham', sans-serif;
font-size: 21px;
font-style: normal;
font-weight: 325;
line-height: 34px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
}
}
@media screen and (max-width: 600px) {
  .email {
font-family: 'Gotham', sans-serif;
font-size: 15px;
font-style: normal;
font-weight: 325;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color:#FFFFFF;
}
}
h1 {
font-family: 'Gotham', sans-serif;
font-size: 36px;
font-style: normal;
font-weight: bold;
line-height: 33.8px;
letter-spacing: 0em;
text-align: center;

}
.coffee{
  background-image: url('../assets/coffeetable.png');
  background-size: cover;
  height: 480px;
}
@media screen and (max-width: 600px) {
.coffee{
  background-image: url('../assets/coffeetable.png');
  background-size: cover;
  background-position: center;
}
}
@media screen and (min-width: 600px) {
.email-us {
  font-family: 'Gotham', sans-serif;
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 50px;
color: #FFFFFF;
letter-spacing: 0em;
text-align: center;

}
}
@media screen and (max-width: 600px) {
.email-us {
  font-family: 'Gotham', sans-serif;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 35px;
color: #FFFFFF;
letter-spacing: 0em;
text-align: center;

}
}
</style>
