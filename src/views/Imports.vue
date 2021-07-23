<template>
  <v-app>
    <Navbar/>
    <v-img max-height="336" src="@/assets/import.png">
    <v-row align="center" class="pt-14" justify="center">
            <v-col class=" white--text" cols="12">
                <p class="import-header">Import</p>
                <p class=" import-header-text" >Import products from foreign countries, seamlessly without
the usual customs, clearing and forwarding debacle.</p>
            </v-col>
        </v-row></v-img>
    <v-container class="import-form">
         <v-container width="690" class="">
             <v-form>
            <v-row >
                <v-col cols="12">
                    <label>Full Name</label>
                    <v-text-field fixed-label   solo flat background-color="#FAFAFA" placeholder="Full Name"  ></v-text-field>
                </v-col>
                <v-col cols="12"  md="6"   >
                    <label>Phone Number</label>
                    <v-text-field outlined placeholder="Phone Number"
                      ></v-text-field>
                </v-col>
                <v-col cols="12" md="6"   >
                    <label>Select Option</label>
                    <v-select :items="selectItems" outlined placeholder=""
                      ></v-select>
                </v-col>
                <v-col cols="12"  >
                    <label>Address</label>
                    <v-text-field solo flat background-color="#FAFAFA" placeholder="Address"
                      ></v-text-field>
                         </v-col>
                <v-col cols="12" >
                    <label>Attach Pictures</label>
                    <v-file-input id="actual-btn"  solo flat background-color="#FAFAFA" prepend-icon="" placeholder="Pictures aid swift product sourcing or branding" truncate-length="42"></v-file-input>
                </v-col>
                <v-col cols="12" >
                  <uploader title="" multiple=true></uploader>
                </v-col>
                <v-col cols="12">
                  <v-row>
                  <v-col cols="3"><label class="labels" for="actual-btn" > <v-icon>mdi-plus</v-icon></label></v-col>
                  <v-col cols="3"><label class="labels" for="actual-btn" > <v-icon>mdi-plus</v-icon></label></v-col>
                  <v-col cols="3"><label class="labels" for="actual-btn" > <v-icon>mdi-plus</v-icon></label></v-col>
                  <v-col cols="3"><label class="labels" for="actual-btn" > <v-icon>mdi-plus</v-icon></label></v-col>
                  </v-row></v-col>
                  <v-col cols="10">
                    <label>Product Description</label>
                    <v-text-field  solo flat background-color="#FAFAFA" placeholder="Product Description"  ></v-text-field>
                </v-col>
                <v-col cols="2">
                    <label>Qty</label>
                    <v-text-field type="number"  solo flat background-color="#FAFAFA" placeholder="Qty"  ></v-text-field>
                </v-col>
                  <v-col cols="12">
                <v-btn block plain text>Add more items <v-icon>mdi-plus</v-icon></v-btn>
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
import Uploader from 'vux-uploader-component'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Imports',
  components: {
    Uploader,
    Navbar,
    Footer
  },
  data  () {
    return {
      selectItems: ['Brand only', ' Source only', 'Brand and Source']
    }
  }
}
</script>

<style scoped>
.import-header{
  font-family: "Gotham", sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 46.8px;
letter-spacing: 0em;
text-align: center;

}
.import-header-text {
    font-family: "Gotham", sans-serif;
font-size: 18.2px;
font-style: normal;
font-weight: 350;
line-height: 33.8px;
letter-spacing: 0em;
text-align: center;
padding-left: 29%;
padding-right: 29.4%;

}
@media screen and (max-width: 600px) {
.import-header-text {
font-family: "Gotham", sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
padding-left: 29%;
padding-right: 29.4%;

}
}
@media screen and (min-width: 601px) {
.import-header-text {
    font-family: "Gotham", sans-serif;
font-size: 18.2px;
font-style: normal;
font-weight: 350;
line-height: 33.8px;
letter-spacing: 0em;
text-align: center;
padding-left: 29%;
padding-right: 29.4%;

}
}
.import-form {
  padding-left: 11.5%;
  padding-right: 11.5%;
  padding-top: 50px;
}
label{
  font-family: 'Gotham', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
letter-spacing: 0em;
text-align: left;
color: #5B5B5B;

}
.labels {
display: block;
 padding: 50px;
  width: 120px;
  height:120px;
  border: 1px solid #c4c4c4;
}
</style>
