<template>
  <v-app>
    <Navbar/>
    <v-container fluid class="importations">
    <v-row align="center" class="my-auto" justify="center">
            <v-col class="text-center white--text mt-16" cols="12">
                <p class="export-header">Export</p>
                <p class="export-header-text" >We create the market for our african clientele. Export raw materials, agricultural produce and more much in large quantities to China.</p>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="export-form">
         <v-container width="690" class="">
             <v-form>
            <v-row >
                <v-col cols="12">
                    <label>Exporter</label>
                    <v-text-field fixed-label  solo flat background-color="#FAFAFA" placeholder="Exporter"  ></v-text-field>
                </v-col>
                <v-col cols="12"  md="6"   >
                    <label> Exporter Phone Number</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Exporter Phone Number"
                      ></v-text-field>
                </v-col>
                <v-col   cols="12"  md="6"   >
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
                <v-col   cols="12"  md="6"   >
                    <label>Original Country</label>
                    <v-select outlined placeholder=""
                      ></v-select>
                </v-col>
                <v-col   cols="12"  md="6"   >
                    <label>Country of Destination</label>
                    <v-select outlined placeholder=""
                      ></v-select>
                </v-col>
                <v-col cols="12"  >
                    <label>Order Number</label>
                    <v-text-field  solo flat background-color="#FAFAFA"  placeholder="Order Number"
                      ></v-text-field>
                         </v-col>
                     <v-row v-for="(row, index) in rows" :key="index">
                  <v-col cols="9" >
                    <label>Product Description</label>
                    <v-text-field  v-model="row.title" solo flat background-color="#FAFAFA" placeholder="Product Description"  ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <label>Qty</label>
                    <v-text-field type="number" v-model="row.qty" solo flat background-color="#FAFAFA" placeholder="Qty"  ></v-text-field>
                </v-col>
                  </v-row>
                  <v-col cols="12">
                <v-btn block plain outlined class="py-5" text @click="addRow">Add more items <v-icon>mdi-plus</v-icon></v-btn>
                </v-col>
                <v-col cols="12">
                  <p>Products, branded items or agricultural produce meant for export will go through NGS quality assurance control</p>
                </v-col>
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
  name: 'Exports',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      rows: [
        { title: '', qty: '' }
      ]
    }
  },
  methods: {
    addRow () {
      this.rows.push({ title: '', qty: '' })
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 992px) {
.importations{
  background-image: url('../assets/exports.png');
  background-size: cover;
  background-repeat: no-repeat  ;
  background-position: center;
  height: 320px;
}
}
@media only screen  and (max-width: 991px) {
.importations{
  background-image: url('../assets/exports.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 270px;
}
}
.export-header{
  font-family: "Gotham", sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 46.8px;
letter-spacing: 0em;
text-align: center;

}
@media screen and (max-width: 960px) {
.export-header-text {
    font-family: "Gotham", sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
}
}
@media screen and (min-width: 961px) {
.export-header-text {
    font-family: "Gotham", sans-serif;
font-size: 18.2px;
font-style: normal;
font-weight: 350;
line-height: 33.8px;
letter-spacing: 0em;
text-align: center;
padding-left: 25%;
padding-right: 25%;

}
}
.export-form {
  padding-top: 50px;
  padding-left: 11.5%;
  padding-right: 11.5%;
}
label{
  font-family: "Gotham", sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;

}
</style>
