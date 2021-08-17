<template>
 <v-container>
               <v-row align="center" class="pt-14" justify="center">
              <v-col class="text-center" cols="6">
              <p class="covered">WE’VE GOT YOU COVERED</p>
              <p class="faq">Frequently Asked Questions</p></v-col>
          </v-row>
          <v-row align="center" class="pt-14 mx-3" justify="center">
            <v-col cols="12" sm="10" md="6">
                    <v-card elevation="0">
                      <v-expansion-panels hover>
                         <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Do I have to pay for clearing?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>We cover all costs, including; product shipping,
             clearing, and all other duties.
              You pay a flat fee with everything indicated for your products. All you have to do is collect your products.
              </v-expansion-panel-content>
        </v-expansion-panel><v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
              Any Hidden fees?
             <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content> No, there are no hidden fees.</v-expansion-panel-content>
         </v-expansion-panel>
         <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Is there a return policy?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>No, but we verify all goods are 100% intact before and after shipping.</v-expansion-panel-content>
</v-expansion-panel>
      </v-expansion-panels>
     </v-card>
              </v-col>
               <v-col cols="12" sm="10" md="6">
                    <v-card elevation="0">
                        <v-expansion-panels>
                          <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Where do I pick my products from?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>Products will be delivered to the address stated on the manifest</v-expansion-panel-content>
</v-expansion-panel>
<v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }"> Are products inspected before shipping? <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>Yes, all products goes through quality control inspection by our field agents.</v-expansion-panel-content>
</v-expansion-panel>
<v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Can products be branded to my specification
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>Yes, products can be branded as well.</v-expansion-panel-content>
</v-expansion-panel>
          </v-expansion-panels>
                     </v-card>
              </v-col>
                      </v-row>
                          </v-container>
               </template>

<script>
export default {
  name: 'Faqbuyer',
  components: {
  },
  data () {
    return {
      answer: false,
      icon: 'mdi-plus-circle',
      iconMinus: 'mdi-minus-circle',
      clicked: true,
      clicked1: true,
      clicked2: true,
      clicked3: true,
      clicked4: true,
      clicked5: true
    }
  }
}
</script>

<style scoped>
  .covered {
  font-family: 'Gotham', sans-serif;
}
  .v-expansion-panel--active > .v-expansion-panel-header {
    background: #ff6344;
    color: white;
}
  .v-expansion-panel__header {
  padding: 0px;
  color: pink;
}
.v-expansion-panel__header div {
  padding: 12px 24px;
  width: 100%;
  height: 100%;
}
.v-expansion-panel__header .header__icon {
  display: none;
}
  .active-class{
    background: #ff6433;
  }
  #accordion div p{
    display: none;

  }
  #accordion div:hover p{
    display: block;

  }
  #accordion div v-btn:hover {
background-color: #ff6433;
  }
  .click {
  background: #ff6433;
}
.about-faq {
    font-family: Gotham;
font-size: 13px;
font-style: normal;
font-weight: 350;
line-height: 21px;
letter-spacing: 0em;
padding-left: 33.8px;
padding-top: 1.8%;
padding-right: 72.8px;
}

.clear {
font-family: Gotham;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
padding-left: 25px ;
padding-top: 17px;

}
@media only screen and (max-width: 767px) {
.faq{
    font-family: 'Gotham', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 350;
line-height: 30px;
letter-spacing: 0em;
text-align: center;

}
}
@media only screen and (min-width: 768px) {
.faq{
    font-family: 'Gotham', sans-serif;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 59px;
letter-spacing: 0em;
text-align: center;

}
}
</style>
