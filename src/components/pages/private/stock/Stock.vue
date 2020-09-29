<template>
  <v-container>
    <DialogStock />
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Estoque</h1>
      </v-col>
      <v-col cols="12">
        <v-card class="elevation-0">
          <v-card-title>
            <v-btn color="primary" @click="goStockAdd()">Incluir</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            @click:row="handleClick"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DialogStock from "@/components/organisms/dialogs/dialogStock";
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
export default {
  components: {
    DialogStock,
  },
  methods: {
    goStockAdd() {
      router.push({
        name: "AddStock",
        params: { Rid: this.$route.params.Rid },
      });
    },
    handleClick(row) {
      EventBus.$emit("dialogStock", true, row);
    },
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Tipo",
          align: "start",
          sortable: false,
          value: "productType",
        },
        { text: "Produto", value: "product" },
        { text: "Valor", value: "productValue" },
        { text: "Quantidade", value: "qtd" },
      ],
      desserts: [
        {
          productType: "Espetinhos",
          product: "Frango com queijo",
          productValue: 7.5,
          qtd: 24,
        },
        {
          productType: "Bebidas",
          product: "cervejas",
          productValue: 9.0,
          qtd: 37,
        },
        {
          productType: "Espetinhos",
          product: "Carne com queijo",
          productValue: 16.0,
          qtd: 7.5,
        },
        {
          productType: "Espetinhos",
          product: "Carne",
          productValue: 3.7,
          qtd: 67,
        },
      ],
    };
  },
};
</script>

<style>
</style>