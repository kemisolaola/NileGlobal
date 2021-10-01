<template>
 <v-container>
               <v-row align="center" class="pt-14" justify="center">
              <v-col class="text-center" cols="6">
              <p class="covered">WE’VE GOT YOU COVERED</p>
              <p class="faq">Frequently Asked Questions</p></v-col>
          </v-row>
           <v-row align="center" class="pt-14" justify="center">
              <v-col>
                  <v-card elevation="0" width="481">
                       <v-btn @click="answer = !answer"  height="60" class="mb-4" block color="#ff6433" dark>Do I have to pay for clearing?<v-spacer></v-spacer><v-icon>mdi-minus-circle</v-icon></v-btn>
                        <p v-if="answer" class="about-faq">We cover all costs, including; product shipping, clearing, and all other duties. You pay a flat fee with everything
                         indicated for your products. All you have to do is collect
                          your products.</p>
                              <v-btn height="60" class="mb-4" outlined block text>How long before my products get here? <v-spacer></v-spacer> <v-icon>mdi-plus-circle</v-icon></v-btn>
                              <v-btn height="60" outlined block text>Where do I pick my products from? <v-spacer></v-spacer> <v-icon>mdi-plus-circle</v-icon></v-btn>
                                        </v-card>
              </v-col>
               <v-col>
                  <v-card elevation="0" width="481" height="315">
                                            <v-btn height="60" class="mb-6" outlined block text>Is there a size limit? <v-spacer></v-spacer> <v-icon>mdi-plus-circle</v-icon></v-btn>
                              <v-btn height="60"  class="mb-6" outlined block text>Is there a size limit?<v-spacer></v-spacer> <v-icon>mdi-plus-circle</v-icon></v-btn>
                              <v-btn height="60" outlined block text>How do you know what product I want?<v-spacer></v-spacer> <v-icon>mdi-plus-circle</v-icon></v-btn>
                                                    </v-card>
              </v-col>
                      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      answer: false
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
