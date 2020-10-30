<template>
  <v-container class="pa-0">
    <v-card>
      <v-tabs v-model="tab" show-arrows>
        <v-tab
          v-for="item in tabUnique"
          :key="item.tab"
          @click="filter(item)"
          >{{ item }}</v-tab
        >
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabUnique" :key="item">
          <!--cards-->
          <v-flex v-for="item in carte" :key="item.index" class="mb-4">
            <v-card class="mx-auto" color="grey lighten-5" tile>
              <v-card-title>
                <v-row>
                  <v-col cols="7"> {{ item.title }} </v-col>
                  <v-col cols="5" class="text-right">
                    <h3 class="success--text">R$ {{ item.price }}</h3>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

              <div v-show="item.accompaniments" class="mb-3">
                <v-btn color="primary" small text
                  >Veja os acompanhamentos</v-btn
                >
              </div>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-flex xs12 sm2>
                  <v-select
                    @change="addAnswer"
                    :items="items"
                    label="Quantidade"
                    dense
                    class="mr-3"
                  ></v-select>
                </v-flex>
                <v-btn color="primary" @click="addItem(item)" small tile
                  >Adicionar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  created() {
    this.getCartes(this.$route.params.Rid)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            let obj = {
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

          this.tabUnique = [...new Set(this.cards.map((x) => x.type))];
          this.carte = this.cards.filter((x) => x.type == this.tabUnique[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions("common", ["getCartes"]),
    filter(item) {
      this.carte = this.cards.filter((x) => x.type == item);
    },
    addItem(item) {
      EventBus.$emit("ItemCarte", item, this.qtd);
    },
    addAnswer(item) {
      this.qtd = item;
    },
  },
  data() {
    return {
      sauces: "",
      crumbs: "",
      vinaigrette: "",
      qtd: 1,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tab: null,
      tabUnique: [],
      carte: [],
      cards: [],
    };
  },
};
</script>

<style>
</style>