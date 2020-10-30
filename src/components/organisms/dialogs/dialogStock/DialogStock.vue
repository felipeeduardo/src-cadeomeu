<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="400px">
        <v-card>
          <v-card-title class="headline">Editar estoque</v-card-title>
          <v-card-text>
            <v-select
              class="mt-1"
              @change="addAnswer"
              :items="items"
              v-model="defaultSelected.id"
              item-selected="123"
              item-text="name"
              item-value="id"
              label="Tipo do produto"
              outlined
            ></v-select>
            <v-form ref="form" v-model="valid">
              <v-text-field
                outlined
                name="name"
                label="Nome do produto"
                type="text"
                v-model="form.name"
                :rules="[rules.required]"
              ></v-text-field>
              <v-textarea
                outlined
                name="description"
                label="Descrição do produto"
                type="text"
                v-model="form.description"
                :rules="[rules.required]"
              ></v-textarea>
              <v-switch
                v-model="form.accompaniment"
                class="mx-2"
                label="Molhos, vinagrete, farofa"
              ></v-switch>
              <v-text-field
                outlined
                name="price"
                label="R$ Valor unitário"
                type="number"
                v-model="form.price"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                outlined
                name="count"
                label="Quantidade"
                type="number"
                v-model="form.count"
                :rules="[rules.required]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="Excluir()">Excluir</v-btn>
            <v-btn :disabled="!valid" color="success" @click="EditItem()"
              >Editar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { EventBus } from "@/services/event-bus.js";
export default {
  data() {
    return {
      defaultSelected: {
        id: "",
      },
      valid: false,
      dialog: false,
      qtd: 1,
      form: {
        id_stock: "",
        id_type: "",
        name: "",
        description: "",
        accompaniment: "",
        price: "",
        count: "",
      },
      items: [],
      rules: {
        required: (value) => !!value || "Campo obrigatório",
        counter: (value) => value.length <= 8 || "Max 8 characters",
      },
    };
  },
  created() {
    const data = {
      id_user: this.auth.user.id_user,
      token: this.auth.token,
    };
    this.getTypes(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            this.items.push({ name: el.name, id: el.id_type });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    EventBus.$on("dialogStock", (event, item) => {
      this.dialog = event;
      this.form.id_stock = item.productId;
      this.form.name = item.product;
      this.form.description = item.productDescription;
      this.form.accompaniment = item.accompaniment;
      this.form.price = item.productValue;
      this.form.count = item.qtd;
      this.defaultSelected.id = item.productIdType;
    });
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("common", ["getTypes"]),
    ...mapActions("stock", ["updateStock", "deleteStock"]),
    EditItem() {
      let obj = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
        id_type:
          this.form.id_type == "" ? this.defaultSelected.id : this.form.id_type,
        id_stock: this.form.id_stock,
        product: this.form.name,
        description: this.form.description,
        accompaniment: this.form.accompaniment,
        price: this.form.price,
        count: this.form.count,
      };
      this.updateStock(obj)
        .then((res) => {
          if (res.status == 204) {
            this.dialog = false;
            EventBus.$emit("updateActionStock", true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Excluir() {
      const data = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
        id_stock: this.form.id_stock,
      };
      this.deleteStock(data)
        .then((res) => {
          if (res.status == 204) {
            this.dialog = false;
            //location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addAnswer(item) {
      this.form.id_type = item;
    },
  },
};
</script>

<style>
</style>