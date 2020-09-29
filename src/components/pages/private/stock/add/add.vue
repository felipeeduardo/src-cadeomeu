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
          label="Tipo de produto"
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
            name="decription"
            label="Descrição do produto"
            type="text"
            v-model="form.decription"
            :rules="[rules.required]"
          ></v-textarea>
          <v-switch
            v-model="form.accompaniment"
            class="mx-2"
            label="Molhos, vinagrete, farofa"
          ></v-switch>
          <v-text-field
            outlined
            name="prince"
            label="R$ Valor unitário"
            type="number"
            v-model="form.prince"
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
export default {
  methods: {
    addItem() {
      let obj = {
        name: this.form.name,
        decription: this.form.decription,
        accompaniment: this.form.accompaniment,
        prince: this.form.prince,
        count: this.form.count,
        qtd: this.qtd,
      };
      console.log(obj);
    },
    addAnswer(item) {
      this.qtd = item;
    },
  },
  data() {
    return {
      valid: false,
      qtd: 1,
      form: {
        name: "",
        decription: "",
        accompaniment: "",
        prince: "",
        count: "",
      },
      items: [
        "Combos",
        "Espetinhos",
        "Diversos",
        "Petiscos",
        "Bebidas - Diversas",
        "Cervejas long long neck's",
        "Cervejas 600ml",
        "Cervejas Litrinhos 300ml",
      ],
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