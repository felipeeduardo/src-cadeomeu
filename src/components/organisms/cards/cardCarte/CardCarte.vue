<template>
  <v-container>
    <v-card>
      <v-tabs v-model="tab" show-arrows>
        <v-tab v-for="item in tabUnique" :key="item.tab" @click="filter(item)">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabUnique" :key="item">
          <!--cards-->
          <v-flex v-for="item in carte" :key="item.index" class="mb-4">
            <v-card class="mx-auto" color="grey lighten-5" tile>
              <v-card-title class="headline">{{item.title}}</v-card-title>
              <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
              <v-card-text>
                <div v-show="item.accompaniments">
                  <h3>Acompanhamentos</h3>
                  <v-row>
                    <v-switch v-model="item.sauces" class="mx-2" label="Molhos"></v-switch>
                    <v-switch v-model="item.crumbs" class="mx-2" label="Farofa"></v-switch>
                    <v-switch v-model="item.vinaigrette" class="mx-2" label="Vinagrete"></v-switch>
                  </v-row>
                </div>
                <div class="display-1 success--text">R$ {{item.prince}}</div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-flex xs12 sm2>
                  <v-select @change="addAnswer" :items="items" label="Quantos?" dense class="mr-3"></v-select>
                </v-flex>
                <v-btn color="primary" @click="addItem(item)">Quero esse</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
export default {
  props: {
    data: {
      type: Array,
      default: null,
    },
  },
  created() {
    this.tabUnique = [...new Set(this.data.map((x) => x.type))];
    this.carte = this.data.filter((x) => x.type == this.tabUnique[0]);
  },
  methods: {
    filter(item) {
      this.carte = this.data.filter((x) => x.type == item);
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
    };
  },
};
</script>

<style>
</style>