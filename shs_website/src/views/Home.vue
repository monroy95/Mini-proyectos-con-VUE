<template>
  <div class="Home">
    <h1>Inicio</h1>
    <!-- Ejemplos de botones y estilos -->
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="black white--text">Click Me</v-btn>
    <v-btn flat color="light-green">Click Me</v-btn>

    <!-- Iconos como botones -->
    <v-btn class="pink white--text">
      <v-icon left>memory</v-icon>
      <span>IA</span>
    </v-btn>

    <v-btn class="pink white--text">
      <v-icon left small>memory</v-icon>
      <span>IA</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>IA</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>
  </div>

  <!-- For more in documentation https://vuetifyjs.com/en/components/buttons#button -->
</template>

<script>
export default {};
</script>
