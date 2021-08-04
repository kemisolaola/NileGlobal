<template>
 <v-container>
               <v-row align="center" class="pt-14" justify="center">
              <v-col class="text-center" cols="6">
              <p class="covered">WE’VE GOT YOU COVERED</p>
              <p class="faq">Frequently Asked Questions</p></v-col>
          </v-row>
          <v-row align="center" class="pt-14" justify="center">
            <v-col>
                <v-container>
                  <v-col>
                    <v-card elevation="0" width="481" height="315">
                      <v-expansion-panels hover>
    <v-expansion-panel>
      <v-expansion-panel-header expand-icon="mdi-plus-circle" dark disable-icon-rotate color="#ff6433 white--text"> Do I have to pay for clearing?</v-expansion-panel-header>
      <v-expansion-panel-content>
We cover all costs, including; product shipping, clearing, and all other duties. You pay a flat fee with everything indicated for your products. All you have to do is collect your products.
    </v-expansion-panel-content>
    </v-expansion-panel>
        <v-expansion-panel  @click="answerFaq">
    <v-expansion-panel-header> Any Hidden fees?<template v-slot:actions  > <v-icon>
              {{icon}}
            </v-icon></template>
    </v-expansion-panel-header>
      <v-expansion-panel-content expand-icon="mdi-plus-circle">No there are no hidden charges.    </v-expansion-panel-content>
        </v-expansion-panel>
            <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-plus-circle">How are my products exported?</v-expansion-panel-header>
      <v-expansion-panel-content>Logistics of products or goods will be handled by our field agents</v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
                         </v-card>
              </v-col>
                                     </v-container>
              </v-col>
               <v-col>
                 <v-container width="481" >
                  <v-col>
                    <v-card elevation="0" width="481" height="315">
                        <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header expand-icon="mdi-plus-circle"> Are products inspected before shipping?</v-expansion-panel-header>
      <v-expansion-panel-content>  Yes, all products goes through quality control inspection by our field agents.    </v-expansion-panel-content>
    </v-expansion-panel>
        <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-plus-circle"> I can’t upload products?</v-expansion-panel-header>
      <v-expansion-panel-content>No there are no hidden charges.    </v-expansion-panel-content>
        </v-expansion-panel>
            <v-expansion-panel>
    <v-expansion-panel-header expand-icon="mdi-plus-circle">Is there a size limit?</v-expansion-panel-header>
      <v-expansion-panel-content> No therse are no size limits for products.    </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
                     </v-card>
              </v-col>
                                     </v-container>
              </v-col>
                      </v-row>
                              </v-container>
               </template>

<script>
import 'vue-simple-accordion/dist/vue-simple-accordion.css'
export default {
  name: 'Faqseller',
  components: {
  },
  data () {
    return {
      answer: false,
      icon: 'mdi-plus-circle',
      clicked: false,
      toggle_exclusive: 2,
      tags: {
        heading__icon: ''
      },
      isOpen: true
    }
  },
  method: {
    answerFaq () {
      this.clicked = !this.clicked
      this.icon = 'mdi-minus-circle'
    }
  }
}
</script>

<style scoped>
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
