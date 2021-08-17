<template>
  <v-app>
    <Navbar/>
    <v-container fluid class="foreign-exchange">
    <v-row  class="payment">
            <v-col class="" cols="12">
                <p class="payment-title white--text">Foreign Exchange</p>
                <p class="payment-title-text white--text">It’s another auxillary service, in order to foster a strong<br> working business relationship amongst all parties.</p>
            </v-col>
        </v-row></v-container>
    <v-container  class="payment-form">
         <v-container width="690" class="">
             <v-form>
            <v-row >
                <v-col cols="12"  sm="6" >
                    <label>Currency Type</label>
                    <v-select outlined fixed-label placeholder="Currency Type" ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                              <v-menu
                              ref="menu"
                              v-model="menu"
                              :close-on-content-click="false"
                              transition="scale-transition"
                              offset-y
                              min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                  <label>Date</label>
                                <v-text-field
                                outlined
                                background-color="#fafafa"
                                  v-model="date"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                                              v-model="date"
                                :active-picker.sync="activePicker"
                                color="#ff6433"
                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                              ></v-date-picker>
                            </v-menu>
                </v-col>
                <v-col cols="12" sm="6"  >
                    <label>Country</label>
                    <v-select outlined single-line placeholder="Country"
                     ></v-select>
                </v-col>
                <v-col  cols="12" sm="6" >
                    <label>City</label>
                    <v-text-field outlined placeholder="City"
                     ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" >
                    <label>Beneficiary</label>
                    <v-text-field solo background-color="#FAFAFA" flat placeholder="As stated on the bank account"
                     ></v-text-field>
                </v-col>
                <v-col cols="12" >
                    <label>Recieving Bank</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Bank Name"
                     ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <label>ABA Routing or Bank Swift Code</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="ABA Routing or Bank Swift Code" ></v-text-field>
                </v-col>
                  <v-col cols="12" md="6">
                    <label>Bank Account Number</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Bank Account Number" ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <label>IBAN</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="IBAN ( Required for European Banks)" ></v-text-field>
                </v-col>
                  <v-col cols="12" md="6">
                    <label>Sort Code</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Sort Code" ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" >
                    <label>Country</label>
                    <v-select outlined placeholder=""></v-select>
                </v-col>
                <v-col cols="12" sm="6" >
                    <label>City</label>
                    <v-select outlined placeholder=""></v-select>
                </v-col>
                <v-col cols="12" >
                    <label>Amount In Figures</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Amount In Figures"
                     ></v-text-field>
                </v-col>
                <v-col cols="12" >
                    <label>Sender Full Name</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Sender Full Name"
                     ></v-text-field>
                </v-col>
                 <v-col cols="12" sm="6">
                    <label>Phone Number</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Phone Number" ></v-text-field>
                </v-col>
                  <v-col cols="12" sm="6">
                    <label>Email</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Email" ></v-text-field>
                </v-col>
                <br>
                <v-col>
                <v-btn color="#ff6433" block dark large> Submit</v-btn>
                </v-col>
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
  name: 'Payment',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
@media only screen and (min-width: 992px) {
.foreign-exchange{
  background-image: url('../assets/payment.png');
  background-size: cover;
  background-repeat: no-repeat  ;
  background-position: center;
  height: 320px;
}
}
@media only screen  and (max-width: 991px) {
.foreign-exchange{
  background-image: url('../assets/payment.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 270px;
}
}
v-text-field{
    background-color: red;
}
.payment {
  margin-top: 5% ;
}
.payment-title {
  font-family: 'Gotham', sans-serif;
font-size: 33px;
font-style: normal;
font-weight: 350;
line-height: 49px;
letter-spacing: 0em;
text-align: center;

}
@media screen and (max-width: 960px) {
  .payment-title-text{
  font-family: 'Gotham', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
  }
}
@media screen and (min-width: 961px) {
.payment-title-text{
  font-family: 'Gotham', sans-serif;
font-size: 18.2px;
font-style: normal;
font-weight: 350;
line-height: 26px;
letter-spacing: 0em;
text-align: center;
}
}
.payment-form {
  padding-left: 11%;
  padding-right: 12%;
  padding-top: 50px;
}
</style>
