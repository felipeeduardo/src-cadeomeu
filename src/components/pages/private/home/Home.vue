<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Página inicial</h1>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto elevation-0"
          color="orange lighten-3"
          tile
          @click="goCustomerOrder()"
        >
          <v-card-title>Pedidos</v-card-title>
          <v-card-subtitle>Acompanhamento de pedidos</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto elevation-0"
          color="deep-orange lighten-5"
          tile
          @click="goStock()"
        >
          <v-card-title>Estoque</v-card-title>
          <v-card-subtitle>Administre seu estoque</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto elevation-0" color="green lighten-4" tile>
          <v-card-title>Fechamentos</v-card-title>
          <v-card-subtitle>Fechamentos de pedidos</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  methods: {
    goCustomerOrder() {
      router.push({
        name: "CustomerOrder",
        params: { Rid: this.$route.params.Rid },
      });
    },
    goStock() {
      router.push({
        name: "Stock",
        params: { Rid: this.$route.params.Rid },
      });
    },
  },
};
</script>

<style>
</style>