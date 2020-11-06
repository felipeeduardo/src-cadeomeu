<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="headline">Mesa - {{ this.table }}</h1>
      </v-col>
    </v-row>
    <CardCarte />
    <v-container>
      <div v-if="this.totalItemCarte != 0">
        <v-row class="text-center">
          <v-col cols="12">
            <h1 class="headline">Detalhes do pedido</h1>
          </v-col>
        </v-row>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-right">Qtd</th>
                <th class="text-right">Valor</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in itemsCarte" :key="item.index">
                <td>{{ item.customerOrder.title }}</td>
                <td class="text-right">{{ item.qtd }}</td>
                <td class="text-right text-truncate">
                  R$ {{ item.customerOrder.price * item.qtd }}
                </td>
                <td class="text-right">
                  <v-btn
                    color="error"
                    fab
                    small
                    text
                    @click="
                      removeItem(index, item.customerOrder.price * item.qtd)
                    "
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-row class="text-center">
          <v-col cols="12">
            <h1 class="headline success--text">
              Total: R$ {{ this.totalItemCarte }}
            </h1>
          </v-col>
        </v-row>
        <v-btn color="primary" dark block large @click="goDemand()"
          >Finalizar pedido</v-btn
        >
      </div>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
import CardCarte from "@/components/organisms/cards/cardCarte";
//import router from "@/router";
export default {
  name: "Carte",
  components: {
    CardCarte,
  },
  mounted() {
    EventBus.$on("ItemCarte", (item, qtd) => {
      var obj = {
        user: this.$route.params.Rid,
        table: this.table,
        qtd: qtd,
        customerOrder: item,
      };
      this.itemsCarte.push(obj);
      this.totalItemCarte += parseFloat(item.price * qtd);
    });
  },
  methods: {
    ...mapActions("common", ["getCartes"]),
    goDemand() {
      console.log(JSON.stringify(this.itemsCarte));
      /*router.push({
        name: "Demand",
        params: { Rid: this.$route.params.Rid, Mid: this.$route.params.Mid },
      });*/
    },
    removeItem(i, price) {
      this.itemsCarte.splice(i, 1);
      this.totalItemCarte -= parseFloat(price);
    },
  },
  data() {
    return {
      itemsCarte: [],
      totalItemCarte: 0,
      table: this.$route.params.Mid,
    };
  },
};
</script>

<style>
</style>