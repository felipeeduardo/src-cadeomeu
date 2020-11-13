<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="headline">Pedidos mesa - {{ this.$route.params.Mid }}</h1>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Qtd</th>
            <th class="text-left">Valor</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemsCarte" :key="item.index">
            <td>{{ item.customerOrder.title }}</td>
            <td class="text-left">{{ item.qtd }}</td>
            <td class="text-left text-truncate">
              R$ {{ item.customerOrder.prince * item.qtd }}
            </td>
            <td class="text-left warning--text" v-if="item.status == 0">
              Preparando
            </td>
            <td class="text-left success--text" v-if="item.status == 1">
              Pronto
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itemsCarte: [
        {
          qtd: 1,
          customerOrder: {
            accompaniments: true,
            crumbs: false,
            prince: "7.00",
            qtdStock: 10,
            sauces: false,
            subtitle: "Descrição do produto",
            title: "Frango com queijo",
            type: "Espetinho",
            vinaigrette: false,
          },
          status: 1,
        },
        {
          qtd: 2,
          customerOrder: {
            accompaniments: true,
            crumbs: false,
            prince: "7.00",
            qtdStock: 10,
            sauces: false,
            subtitle: "Descrição do produto",
            title: "Frango com queijo",
            type: "Espetinho",
            vinaigrette: false,
          },
          status: 0,
        },
      ],
    };
  },
};
</script>

<style>
</style>