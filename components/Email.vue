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
    <v-container fluid class="mt-10 coffee px-0">
    <v-row align="center" class="emails" justify="center">
        <v-col cols="10" md="9">
          <p class="email-us">Get industry tips and import tricks straight into your inbox.</p>
          <p class="email">Enter your email address to get our newsletters. No spam!</p>
        </v-col>
    </v-row>
    <v-container>
    <v-row style="" no-gutters justify="center" class="email-form-row"  justify-sm="center">
      <v-col cols="12">
        <v-row no-gutters> 
        <v-col class="email-form" cols="12" sm="7" md="">
          <v-text-field solo flat placeholder="Your Email" style="border-radius: 0" />
        </v-col>
        <v-col class="email-form-btn" cols="4" sm="5" md="6">
          <v-btn tile color="#ff6433" depressed dark large height="48px">
            Subscribe
          </v-btn>
                  </v-col>
        </v-row>
      </v-col>
      </v-row>
    </v-container>
            </v-container>
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
.email-form {
    width: 100%;
    margin: 0 auto;
}
}
@media screen and (min-width: 601px) {
  .email-form-row {
    margin-left: 75px;
  }
  .emails {
  padding-top: 122.2px;
  margin-left: 11%;
  margin-right: 11%;
}
.email-form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
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
  background-image: url('../static/coffeetable.png');
  background-size: cover;
  height: 480px;
}
@media screen and (max-width: 600px) {
.coffee{
  background-image: url('../static/coffeetable.png');
  background-size: cover;
  background-position: center;
}
}
@media screen and (min-width: 961px) {
  .email-form-row {
    margin-left: 25%;
  }
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
.email-form {
    width: 700px;
    margin: 0 auto;
}
}
@media screen and (max-width: 960px) {
.email-us {
  font-family: 'Gotham', sans-serif;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 35px;
color: #FFFFFF;
letter-spacing: 0em;
text-align: center;

}
}
@media screen and (max-width: 600px) {
.email-us {
  font-family: 'Gotham', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 25px;
color: #FFFFFF;
letter-spacing: 0em;
text-align: center;

}
}
</style>
