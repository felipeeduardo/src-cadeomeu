<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="450px">
        <v-card>
          <div class="text-right">
            <v-btn icon color="red" @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <v-card-title class="headline">Mesa - {{ this.table }}</v-card-title>
          <v-card-text>
            <div v-for="item in datadialog" :key="item.index">
              <div>{{ item.qtd + " - " + item.title }}</div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="closeOrOpenCustomer()">
              fechar Conta
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row></v-container
  >
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  data() {
    return {
      dialog: false,
      table: "",
      datadialog: [],
      idCustomOrder: "",
    };
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("common", ["UpdateCustomerOrderTable"]),
    closeOrOpenCustomer() {
      const data = {
        id_customer_order: this.idCustomOrder,
        token: this.auth.token,
        flag: false,
      };
      this.UpdateCustomerOrderTable(data)
        .then((res) => {
          if (res.status == 204) {
            this.dialog = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    EventBus.$on("dialogTable", (event, item, id) => {
      this.datadialog = [];
      this.dialog = event;
      this.idCustomOrder = id;
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