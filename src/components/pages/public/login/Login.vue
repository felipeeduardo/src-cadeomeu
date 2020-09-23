<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            name="user"
            label="Usuário"
            type="text"
            v-model="form.user"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            outlined
            name="password"
            label="Senha"
            id="password"
            type="password"
            required
            maxlength="8"
            :counter="8"
            v-model="form.password"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="12">
        <v-btn :disabled="!valid" color="primary" block @click="validate()">Entrar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      valid: true,
      form: {
        user: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Campo obrigatório",
        counter: (value) => value.length <= 8 || "Max 8 characters",
      },
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.goHome(this.form.user);
      }
    },
    goHome(user) {
      router.push({
        name: "HomePrivate",
        params: { Rid: user },
      });
    },
  },
};
</script>

<style>
</style>