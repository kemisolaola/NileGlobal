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
  src: url("~@/assets/gotham-fonts/GothamPro-Medium.woff"), local('Gotham') format('truetype');
}
#app{
  font-family: 'Gotham', sans-serif;
}
v-btn {
  font-family: 'Gotham', sans-serif;
}
.custom-placeholer-color input::placeholder {
  color: red!important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

</style>
