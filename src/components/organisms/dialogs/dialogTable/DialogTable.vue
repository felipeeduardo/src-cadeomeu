<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="450px">
        <v-card>
          <v-card-title class="headline">Mesa - {{ this.table }}</v-card-title>
          <v-card-text>
            <div v-for="item in datadialog" :key="item.index">
              <div>{{ "[" + item.qtd + "] - " + item.title }}</div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">
              fechar Conta
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" text @click="dialog = false"
              >Pedido Pronto
            </v-btn>
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
    return {
      dialog: false,
      table: "",
      datadialog: [],
    };
  },
  mounted() {
    EventBus.$on("dialogTable", (event, item) => {
      this.datadialog = [];
      this.dialog = event;
      item.map((x) => {
        this.table = x.table;
        const data = {
          title: x.customerOrder.title,
          qtd: x.qtd,
        };
        this.datadialog.push(data);
      });
    });
  },
};
</script>

<style>
</style>