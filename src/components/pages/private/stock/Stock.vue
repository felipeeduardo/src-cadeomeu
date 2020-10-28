<template>
  <v-container>
    <DialogStock />
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Estoque</h1>
      </v-col>
      <v-col cols="12">
        <v-card class="elevation-0">
          <v-card-title>
            <v-btn color="primary" @click="goStockAdd()">Incluir</v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="stock"
            :search="search"
            @click:row="handleClick"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DialogStock from "@/components/organisms/dialogs/dialogStock";
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
export default {
  components: {
    DialogStock,
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  created() {
    const data = {
      id_user: this.auth.user.id_user,
      token: this.auth.token,
    };
    this.getStock(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            let item = {
              productType: "Espetinhos",
              product: el.product,
              productDecription: el.description,
              accompaniment: el.accompaniment,
              productValue: el.price,
              qtd: el.qtd,
            };
            this.stock.push(item);
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 401) {
          EventBus.$emit("dialogGeneric", true);
        }
      });
  },
  methods: {
    ...mapActions("stock", ["getStock"]),
    goStockAdd() {
      router.push({
        name: "AddStock",
        params: { Rid: this.$route.params.Rid },
      });
    },
    handleClick(row) {
      EventBus.$emit("dialogStock", true, row);
    },
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Tipo", value: "productType" },
        { text: "Produto", value: "product" },
        { text: "Descrição", value: "productDecription" },
        { text: "Acompanhamentos", value: "accompaniment" },
        { text: "Valor", value: "productValue" },
        { text: "Quantidade", value: "qtd" },
      ],
      stock: [],
    };
  },
};
</script>

<style>
</style>