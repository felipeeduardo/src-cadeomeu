<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/clients/' + this.$route.params.Rid + '.jpg')"
          contain
          height="180"
        />
        <h1 class="headline">Cardápio mesa - {{ this.table }}</h1>
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
        <v-row>
          <v-col cols="12" class="text-center">
            <h3 class="sub-title">Total: R$ {{ this.totalItemCarte.toLocaleString("pt-BR") }}</h3>
            <h1 class="headline success--text">
              <span class="caption">10% opcional</span><br />
              Total serviço: R$ {{ this.totalItemCarteService.toLocaleString("pt-BR") }}
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
import router from "@/router";
export default {
  name: "Carte",
  components: {
    CardCarte,
  },
  mounted() {
    EventBus.$on("ItemCarte", (item, qtd, verifyTable) => {
      var obj = {
        user: this.$route.params.Rid,
        table: this.table,
        qtd: qtd,
        customerOrder: item,
      };
      this.verifyTable = verifyTable;
      this.itemsCarte.push(obj);
      this.totalItemCarte += parseFloat(item.price * qtd);
      this.totalItemCarteService += parseFloat(item.price * qtd) + parseFloat(item.price * qtd * 0.1);
    });
  },
  methods: {
    ...mapActions("common", [
      "getCartes",
      "addCustomerOrder",
      "UpdateCustomerOrder",
    ]),
    goDemand() {
      const data = {
        customer_order_table: this.table,
        customer_order_json: this.itemsCarte,
      };
      if (this.verifyTable) {
        //table open
        const dataUp = {
          client: this.$route.params.Rid,
          customer_order_table: this.table,
          customer_order_json: this.itemsCarte,
        };
        this.UpdateCustomerOrder(dataUp)
          .then((res) => {
            if (res.status == 200 || res.status == 204) {
              router.push({
                name: "Demand",
                params: {
                  Rid: this.$route.params.Rid,
                  Mid: this.$route.params.Mid,
                },
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        //verify here
        this.addCustomerOrder(data)
          .then((res) => {
            if (res.status == 200 || res.status == 204) {
              router.push({
                name: "Demand",
                params: {
                  Rid: this.$route.params.Rid,
                  Mid: this.$route.params.Mid,
                },
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    removeItem(i, price) {
      this.itemsCarte.splice(i, 1);
      this.totalItemCarte -= parseFloat(price);
      this.totalItemCarteService -= parseFloat(price);
    },
  },
  data() {
    return {
      verifyTable: false,
      itemsCarte: [],
      totalItemCarte: 0,
      totalItemCarteService: 0,
      table: this.$route.params.Mid,
    };
  },
};
</script>

<style>
</style>