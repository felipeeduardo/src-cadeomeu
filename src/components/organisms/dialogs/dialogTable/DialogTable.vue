<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="450px">
        <v-card>
          <v-card-title class="headline">[Mesa]</v-card-title>
          <v-card-subtitle>Descrição:</v-card-subtitle>
          <v-card-text>
            <div>[3] - Frango com queijo (Molho, farofa, vinagrete)</div>
            <div>[3] - Carne com queijo (Molho, farofa, vinagrete)</div>
            <div>[2] - Cervejas</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">
              fechar Conta
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="dialog = false">Pedido Pronto </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row></v-container
  >
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
export default {
  data() {
    return { dialog: false };
  },
  mounted() {
    EventBus.$on("dialogTable", (event, item) => {
      this.dialog = event;
      console.log(item);
    });
  },
};
</script>

<style>
</style>