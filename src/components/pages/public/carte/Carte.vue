<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="headline">O que tem aqui - {{ this.table}}</h1>
      </v-col>
    </v-row>
    <CardCarte :data="cards" />
    <v-container>
      <div v-if="this.itemsCarte !=0">
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
        <v-flex v-for="item in this.itemsCarte" :key="item.index">
          <v-row no-gutters>
            <v-col sm="5" md="8">
              <v-card class="pa-1" outlined tile>{{item.title}}</v-card>
            </v-col>
            <v-col sm="5" md="2">
              <v-card class="pa-1" outlined tile>{{item.qtdCustomerOrder}}</v-card>
            </v-col>
            <v-col sm="5" md="2">
              <v-card class="pa-1" outlined tile>R$ {{item.prince * item.qtdCustomerOrder}}</v-card>
            </v-col>
          </v-row>
        </v-flex>
        <v-row class="text-center">
          <v-col cols="12">
            <h1 class="headline success--text">Total: R$ {{this.totalItemCarte}}</h1>
          </v-col>
        </v-row>
        <v-btn color="primary" dark block large @click="goDemand()">Pronto, terminei</v-btn>
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
import CardCarte from "@/components/organisms/cards/cardCarte";
import router from "@/router";
export default {
  name: "Carte",
  components: {
    CardCarte,
  },
  mounted() {
    EventBus.$on("ItemCarte", (event) => {
      this.itemsCarte.push(event);
      this.totalItemCarte += parseFloat(event.prince);
    });
  },
  methods: {
    goDemand() {
      router.push({
        name: "Demand",
        params: { Rid: this.$route.params.Rid, Mid: this.$route.params.Mid },
      });
    },
  },
  data() {
    return {
      itemsCarte: [],
      totalItemCarte: 0,
      table: this.$route.params.Mid,
      cards: [
        {
          type: "Espetinho",
          accompaniments: true,
          title: "Frango com queijo",
          subtitle: "Descrição do produto",
          prince: "7.00",
          qtdCustomerOrder: 1,
          qtdstock: 10,
          sauces: false,
          crumbs: false,
          vinaigrette: false,
        },
        {
          type: "Espetinho",
          accompaniments: true,
          title: "Frango com queijo",
          subtitle: "Descrição do produto",
          prince: "8.00",
          qtdCustomerOrder: 1,
          qtdstock: 10,
          sauces: false,
          crumbs: false,
          vinaigrette: false,
        },
        {
          type: "Espetinho",
          accompaniments: true,
          title: "Frango com queijo",
          subtitle: "Descrição do produto",
          prince: "9.00",
          qtdCustomerOrder: 1,
          qtdstock: 10,
          sauces: false,
          crumbs: false,
          vinaigrette: false,
        },
        {
          type: "Petiscos",
          accompaniments: true,
          title: "Frango com queijo",
          subtitle: "Descrição do produto",
          prince: "10.00",
          qtdCustomerOrder: 1,
          qtdstock: 10,
          sauces: false,
          crumbs: false,
          vinaigrette: false,
        },
        {
          type: "Bebidas",
          accompaniments: false,
          title: "Cerveja",
          subtitle: "Descrição do produto",
          prince: "7.50",
          qtdCustomerOrder: 1,
          qtdstock: 10,
          sauces: false,
          crumbs: false,
          vinaigrette: false,
        },
      ],
    };
  },
};
</script>

<style>
</style>