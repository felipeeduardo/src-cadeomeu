<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Incluir em estoque</h1>
      </v-col>
      <v-col cols="12">
        <v-select
          @change="addAnswer"
          :items="items"
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
          <v-btn :disabled="!valid" color="primary" block @click="addItem()"
            >Adicionar</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";
export default {
  computed: {
    ...mapState("auth", ["auth"]),
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
  methods: {
    ...mapActions("common", ["getTypes"]),
    ...mapActions("stock", ["createStock"]),
    addItem() {
      let obj = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
        id_type: this.form.id_type,
        product: this.form.name,
        description: this.form.description,
        accompaniment: this.form.accompaniment,
        price: this.form.price,
        count: this.form.count,
      };
      this.createStock(obj)
        .then((res) => {
          if (res.status == 204) {
            router.push({
              name: "Stock",
              params: { Rid: this.$route.params.Rid },
            });
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
  data() {
    return {
      valid: false,
      form: {
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
};
</script>

<style>
</style>