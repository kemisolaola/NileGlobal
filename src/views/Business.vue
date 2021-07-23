<template>
  <v-app>
      <Navbar/>
    <v-img max-height="336" src="@/assets/business.png"> </v-img>
    <v-container class="business-page">
        <v-row align="center" class="pt-14" justify="center">
            <v-col class="text-center" cols="12">
                <p class="business-header">Business Consultation</p>
                <p class="business-text">Business consultation could either be virtual or physical in nature. All necessary information required, such as<br> time, date, cost & venue will be communicated electronically ahead of the scheduled date.<br> Sudden changes by either parties should be communicated prior to the scheduled appointment date.</p>
            </v-col>
        </v-row>
         <v-container width="690" class="business-form">
             <v-form>
            <v-row >
                <v-col cols="12"  md="6" >
                    <label>Full Name</label>
                    <v-text-field solo  background-color= '#FAFAFA' flat fixed-label placeholder="Full Name" ></v-text-field>
                </v-col>
                <v-col cols="12"  md="6"  >
                    <label>Phone Number</label>
                    <v-text-field solo background-color= '#FAFAFA' flat single-line placeholder="Phone Number"
                     ></v-text-field>
                </v-col>
                <v-col cols="12" md="6"   >
                    <label>Email</label>
                    <v-text-field solo background-color= '#FAFAFA' flat placeholder="Email"
                     ></v-text-field>
                </v-col>
                <v-col cols="12"  md="6"   >
                    <label>Industry</label>
                    <v-select :items="industry"  outlined placeholder="industry"
                     ></v-select>
                </v-col><v-col cols="12" >
                    <label>Company Name</label>
                    <v-text-field solo background-color= '#FAFAFA' flat placeholder="Company Name"
                     ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <label>Company Address</label>
                    <v-text-field solo background-color= '#FAFAFA' flat placeholder="Company Address" ></v-text-field>
                </v-col>
                  <v-col cols="12">
                    <label>State your business challenges</label>
                    <v-textarea solo background-color= '#FAFAFA' flat placeholder="State your business challenges" ></v-textarea>
                </v-col>
                <v-btn color="#ff6433" block dark large> Submit</v-btn>
            </v-row>
             </v-form>
  </v-container>
 </v-container>
 <Footer/>
        </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Business',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      industry: ['Fashion', 'Drugs']
    }
  }
}
</script>

<style>
v-text-field{
    background-color: #FAFAFA;
}
.business-page {
  padding-left: 11%px;
  padding-right: 11%px;
}
.business-form {
  padding-top: 82px;
}
.business-header {
font-family: 'Gotham', sans-serif;
font-size: 22px;
font-style: normal;
font-weight: bold;
line-height: 26px;
letter-spacing: 0em;
text-align: align;
}
.business-text {
  font-family: 'Gotham', sans-serif;
font-size: 14.6px;
font-style: normal;
font-weight: 350;
line-height: 32px;
letter-spacing: 0em;
text-align: center;

}
</style>
