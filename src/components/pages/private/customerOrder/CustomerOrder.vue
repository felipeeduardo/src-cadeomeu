<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Pedidos</h1>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in 10" :key="i">
            <v-expansion-panel-header class="headline"
              >Mesa - {{ i }}</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <p>Descrição:</p>
              <div>[3] - Frango com queijo (Molho, farofa, vinagrete)</div>
              <div>[3] - Carne com queijo (Molho, farofa, vinagrete)</div>
              <div>[2] - Cervejas</div>
              <p class="mt-3">
                <v-btn color="primary" class="ma-2">Preparando</v-btn>
                <v-btn color="success" class="ma-2">Pronto</v-btn>
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>