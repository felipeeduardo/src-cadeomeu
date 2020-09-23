<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto elevation-0" color="deep-orange lighten-5" tile>
          <v-card-title>Pedidos</v-card-title>
          <v-card-subtitle>Acompanhamento de pedidos</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="goCustomerOrder()">Entrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto elevation-0" color="deep-orange lighten-5" tile>
          <v-card-title>Estoque</v-card-title>
          <v-card-subtitle>Administre seu estoque</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text>Incluir</v-btn>
            <v-btn color="primary" text>Editar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto elevation-0" color="deep-orange lighten-5" tile>
          <v-card-title>Fechamentos</v-card-title>
          <v-card-subtitle>Fechamentos de pedidos</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text>Entrar</v-btn>
          </v-card-actions>
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
  },
};
</script>

<style>
</style>