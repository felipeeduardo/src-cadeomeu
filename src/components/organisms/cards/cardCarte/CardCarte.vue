<template>
  <v-container class="pa-0">
    <v-divider class="mx-4"></v-divider>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <!--<v-list-item v-for="item in item.child" :key="item.title">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-title v-text="item.test"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
        <v-flex v-for="item in item.child" :key="item.title" class="mb-3">
          <v-card class="mx-auto elevation-1" color="grey lighten-5" tile>
            <v-card-title>
              <v-row>
                <v-col cols="8"
                  ><p class="subtitle-1 font-weight-black">
                    {{ item.title }}
                  </p>
                </v-col>
                <v-col cols="4" class="text-right">
                  <h4 class="success--text">R$ {{ item.price }}</h4>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-subtitle>
              <v-row>
                <v-col cols="7">
                  {{ item.subtitle }}
                </v-col>
                <v-col cols="5" class="text-right">
                  <span class="text--secondary caption"
                    >Estoque <b>{{ item.qtdStock }}</b></span
                  >
                </v-col>
              </v-row>
            </v-card-subtitle>
            <v-card-text v-show="item.accompaniments">
              <b>Selecione os acompanhamentos:</b>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    class="ma-0 pa-0"
                    v-model="item.crumbs"
                    label="Farofa"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    class="ma-0 pa-0 ml-1"
                    v-model="item.sauces"
                    label="Molhos"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    class="ma-0 pa-0 ml-3"
                    v-model="item.vinaigrette"
                    label="Vinagrete"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-flex xs12 sm2>
                <v-select
                  @change="addAnswer"
                  :items="itemsQtdCustomerOrder"
                  label="Quantidade"
                  dense
                  class="mr-3"
                ></v-select>
              </v-flex>
              <v-btn color="primary" @click="addItem(item)" tile
                >Adicionar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-list-group>
    </v-list>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  created() {
    const data = {
      client: this.$route.params.Rid,
      table: this.$route.params.Mid,
    };
    this.getVeryfyOpenTable(data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.verifyTable = true;
        } else if (res.status == 204) {
          this.verifyTable = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.getCartes(this.$route.params.Rid)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            let obj = {
              id_stock: el.id_stock,
              type: el.tname,
              accompaniments: el.accompaniment,
              title: el.product,
              subtitle: el.description,
              price: el.price,
              qtdStock: el.qtd,
              sauces: false,
              crumbs: false,
              vinaigrette: false,
            };
            if (el.qtd != 0) {
              this.cards.push(obj);
            }
          });
          let titles = [...new Set(this.cards.map((x) => x.type))];
          titles.forEach((el) => {
            let objItemList = {
              action: "mdi-menu",
              title: el,
              child: this.cards.filter((x) => x.type == el),
            };
            this.items.push(objItemList);
          });
        }
      })
      .catch((err) => {
        //500 temporariamente indisponivel
        console.log(err);
      });
  },
  methods: {
    ...mapActions("common", ["getCartes", "getVeryfyOpenTable"]),
    filter(item) {
      this.carte = this.cards.filter((x) => x.type == item);
    },
    addItem(item) {
      EventBus.$emit("ItemCarte", item, this.qtd, this.verifyTable);
    },
    addAnswer(item) {
      this.qtd = item;
    },
    toggle(event) {
      this.accompaniments = event ? true : false;
    },
  },
  data() {
    return {
      accompaniments: true,
      sauces: "",
      crumbs: "",
      vinaigrette: "",
      qtd: 1,
      itemsQtdCustomerOrder: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tab: null,
      carte: [],
      cards: [],
      verifyTable: false,
      items: [],
      child: [],
    };
  },
};
</script>

<style>
</style>