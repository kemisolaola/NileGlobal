<template>
 <v-container>
               <v-row align="center" class="pt-14" justify="center">
              <v-col class="text-center" cols="6">
              <p class="covered">WE’VE GOT YOU COVERED</p>
              <p class="faq">Frequently Asked Questions</p></v-col>
          </v-row>
          <v-row align="center" class="pt-14" justify="center">
            <v-col cols="12" sm="10" md="6">
                    <v-card elevation="0" >
                                  <v-expansion-panels hover>
                                    <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Do I have to pay for clearing?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
We cover all costs, including; product shipping, clearing, and all other duties. You pay a flat fee with everything indicated for your products. All you have to do is collect your products.          </v-expansion-panel-content>
        </v-expansion-panel><v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
             Any Hidden fees?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>No there are no hidden charges.          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            How are my products exported?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>Logistics of products or goods will be handled by our field agents          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
                         </v-card>
              </v-col>
               <v-col cols="12" sm="10" md="6">
                    <v-card elevation="0">
                        <v-expansion-panels>
                           <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
            Are products inspected before shipping?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
Yes, all products goes through quality control inspection by our field agents.
        </v-expansion-panel-content>
        </v-expansion-panel>
          <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
              I can’t upload products?
            <v-fade-transition hide-on-leave >
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content>No there are no hidden charges.          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions v-slot="{ open }">
           Is there a size limit?
            <v-fade-transition hide-on-leave>
                            <v-icon dark v-if="open" class="flex-grow-0 ml-auto" :key="open">mdi-minus-circle</v-icon>
              <v-icon  v-else class="flex-grow-0 ml-auto" :key="open">mdi-plus-circle</v-icon>
            </v-fade-transition>
          </v-expansion-panel-header>
          <v-expansion-panel-content> No there are no size limits for products. </v-expansion-panel-content>
        </v-expansion-panel> </v-expansion-panels>
                     </v-card>
              </v-col>
                                                </v-row>
                              </v-container>
               </template>

<script>
export default {
  name: 'Faqseller',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
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
.covered {
  font-family: 'Gotham', sans-serif;
}
 .v-expansion-panel--active > .v-expansion-panel-header {
    background: #ff6344;
    color: white;
}

.v-expansion-panel__header div {
  padding: 12px 24px;
  width: 100%;
  height: 100%;
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
.faq{
    font-family: Gotham;
font-size: 39px;
font-style: normal;
font-weight: 350;
line-height: 59px;
letter-spacing: 0em;
text-align: center;

}
</style>
