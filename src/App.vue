<template>
  <v-app class="">
      <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
<style>
@font-face {
  font-family: 'Gotham';
  src: url('/fonts/GothamRounded-Medium.ttf'), local('Gotham') format('truetype');
}
#app{
  font-family: 'Gotham', sans-serif;
}
v-btn {
  font-family: 'Gotham', sans-serif;
}
</style>
