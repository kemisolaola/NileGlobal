<template>
  <v-app>
    <Navbar/>
    <v-container fluid class="importations">
    <v-row  class="my-auto">
            <v-col class=" white--text mt-16" cols="12">
                <p class="import-header">Import</p>
                <p class=" import-header-text" >Import products from foreign countries, seamlessly without the usual customs, clearing and forwarding debacle.</p>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="import-form mx-auto">
         <v-container width="690" class="">
             <v-form>
            <v-row >
                <v-col cols="12">
                    <label>Full Name</label>
                    <v-text-field fixed-label   solo flat background-color="#FAFAFA" placeholder="Full Name"  ></v-text-field>
                </v-col>
                <v-col cols="12"  sm="6"   >
                    <label>Phone Number</label>
                    <v-text-field outlined placeholder="Phone Number"
                      ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6"   >
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
                  <v-row class="my-4" justify="center">
                    <v-col  cols="6" sm="3"> <div class="base-image-input"   :style="{ 'background-image': `url(${imageData})` }"  @click="chooseImage"
                      >
                        <span  v-if="!imageData"  class="placeholder"      >
                          <v-icon>mdi-plus</v-icon>
                        </span>
                        <input class="file-input" ref="fileInput" type="file"  @input="onSelectFile">
                                              </div>
                        </v-col>
                        <v-col cols="6" sm="3"> <div class="base-image-input"   :style="{ 'background-image': `url(${imageData1})` }"  @click="chooseImage1"
                      >
                        <span  v-if="!imageData1"  class="placeholder"      >
                          <v-icon>mdi-plus</v-icon>
                        </span>
                        <input   class="file-input" ref="fileInput1" type="file"  @input="onSelectFile1">
                                              </div>
                        </v-col>
                        <v-col  cols="6" sm="3"> <div class="base-image-input"   :style="{ 'background-image': `url(${imageData2})` }"  @click="chooseImage2"
                      >
                        <span  v-if="!imageData2"  class="placeholder" >
                          <v-icon>mdi-plus</v-icon>
                        </span>
                        <input  class="file-input" ref="fileInput2" type="file"  @input="onSelectFile2">
                                              </div>
                        </v-col>
                        <v-col  cols="6" sm="3"> <div class="base-image-input"   :style="{ 'background-image': `url(${imageData3})` }"  @click="chooseImage3"
                      >
                        <span  v-if="!imageData3"  class="placeholder"      >
                          <v-icon>mdi-plus</v-icon>
                        </span>
                        <input  class="file-input" ref="fileInput3" type="file"  @input="onSelectFile3">
                                              </div>
                        </v-col>
                        </v-row>
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
                <v-btn block plain text @click="addRow">Add more items <v-icon>mdi-plus</v-icon></v-btn>
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
  name: 'Imports',
  components: {
    Navbar,
    Footer
  },
  data  () {
    return {
      rows: [
        { title: '', qty: '' }
      ],
      selectItems: ['Brand only', ' Source only', 'Brand and Source'],
      image: [],
      images: [],
      url: null,
      fileList: [],
      imageData: null,
      imageData1: null,
      imageData2: null,
      imageData3: null,
      product: ''
    }
  },
  methods: {
    addRow () {
      this.rows.push({ title: '', qty: '' })
    },
    chooseImage () {
      this.$refs.fileInput.click()
    },
    chooseImage1 () {
      this.$refs.fileInput1.click()
    },
    chooseImage2 () {
      this.$refs.fileInput2.click()
    },
    chooseImage3 () {
      this.$refs.fileInput3.click()
    },
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
    onSelectFile1 () {
      const input = this.$refs.fileInput1
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData1 = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
    onSelectFile2 () {
      const input = this.$refs.fileInput2
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData2 = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    },
    onSelectFile3 () {
      const input = this.$refs.fileInput3
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData3 = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 992px) {
.importations{
  background-image: url('../assets/import.png');
  background-size: cover;
  background-repeat: no-repeat  ;
  background-position: center;
  height: 320px;
}
}
@media only screen  and (max-width: 991px) {
.importations{
  background-image: url('../assets/import.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 270px;
}
}
/* .importations{
  background-image: url('../assets/import.png');
  background-size: cover;
} */
.base-image-input {
  display: block;
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}
.import-header{
  font-family: "Gotham", sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 46.8px;
letter-spacing: 0em;
text-align: center;

}
@media screen and (max-width: 960px) {
.import-header-text {
font-family: "Gotham", sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 350;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
}
}
@media screen and (min-width: 961px) {
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
