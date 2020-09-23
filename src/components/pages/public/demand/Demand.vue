<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="headline">Acompanha ai... Blz?</h1>
      </v-col>
    </v-row>
    <!--<v-alert dense text type="success">Pronto</v-alert>-->
    <v-alert dense text type="warning">Em fila para atendimento</v-alert>
    <!--<v-alert dense text type="error">Em fila para atendimento</v-alert>-->
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="headline">Detalhes do pedido</h1>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="5" md="8">
        <v-card class="pa-1" outlined tile>
          <h4>Nome</h4>
        </v-card>
      </v-col>
      <v-col sm="5" md="2">
        <v-card class="pa-1" outlined tile>
          <h4>Qtd</h4>
        </v-card>
      </v-col>
      <v-col sm="5" md="2">
        <v-card class="pa-1" outlined tile>
          <h4>Valor</h4>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>