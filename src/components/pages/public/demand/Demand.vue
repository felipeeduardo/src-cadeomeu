<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/clients/' + this.$route.params.Rid + '.jpg')"
          contain
          height="180"
        />
        <h1 class="headline">Pedidos mesa - {{ this.$route.params.Mid }}</h1>
        {{ this.created }}
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Qtd</th>
            <th class="text-left">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.index">
            <td>{{ item.title }}</td>
            <td class="text-left">{{ item.qtd }}</td>
            <td class="text-left text-truncate">
              R$ {{ item.price * item.qtd }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-row class="text-center">
      <v-col cols="12" class="text-center">
        <h3 class="sub-title">Total: R$ {{ this.totalItem.toLocaleString("pt-BR") }}</h3>
        <h1 class="headline success--text">
          <span class="caption">10% opcional</span><br />
          Total serviço: R$ {{ this.totalItemService.toLocaleString("pt-BR") }}
        </h1>
      </v-col>
    </v-row>
    <v-col cols="12">
      <v-btn color="primary" block @click="goCarte()">Novo pedido</v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";
export default {
  created() {
    const data = {
      table: this.$route.params.Mid,
      client: this.$route.params.Rid,
    };
    this.getCustomerOrder(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            this.created = this.formatDateDb(el.created);
            el.customer_order_json.forEach((x) => {
              const item = {
                qtd: x.qtd,
                title: x.customerOrder.title,
                price: x.customerOrder.price,
              };
              this.items.push(item);
              this.totalItem += parseFloat(x.customerOrder.price * x.qtd);
              this.totalItemService +=
                parseFloat(x.customerOrder.price * x.qtd) +
                parseFloat(x.customerOrder.price * x.qtd * 0.1);
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions("common", ["getCustomerOrder"]),
    formatDateDb(date) {
      var data = new Date(date),
        dia = data.getDate().toString().padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear(),
        h = data.getHours(),
        m = data.getMinutes();
      return dia + "/" + mes + "/" + ano + " " + h + ":" + m;
    },
    goCarte() {
      router.push({
        name: "Carte",
        params: { Rid: this.$route.params.Rid, Mid: this.$route.params.Mid },
      });
    },
  },
  data() {
    return {
      created: "",
      items: [],
      totalItem: 0,
      totalItemService: 0,
    };
  },
};
</script>

<style>
</style>