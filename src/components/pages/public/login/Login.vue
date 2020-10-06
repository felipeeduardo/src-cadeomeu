<template>
  <v-container>
    <dialog-generic :data="dataDialog" />
    <v-row class="text-center">
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            outlined
            name="name"
            label="Usuário"
            type="text"
            v-model="form.name"
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
import { mapActions } from "vuex";
import DialogGeneric from "@/components/organisms/dialogs/dialogGeneric";
import { EventBus } from "@/services/event-bus.js";
import router from "@/router";
export default {
  components: {
    DialogGeneric,
  },
  data() {
    return {
      dataDialog: {
        // success | information | error
        type: "information",
        title: "Sessão expirada!",
        textButton: "log in",
        iconButton: "keyboard_backspace",
        sessionExpired: true,
        size: "290",
      },
      valid: true,
      form: {
        name: "",
        password: "",
      },
      rules: {
        required: (value) => !!value || "Campo obrigatório",
        counter: (value) => value.length <= 8 || "Max 8 characters",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["logIn"]),
    validate() {
      if (this.$refs.form.validate()) {
        this.logIn(this.form)
          .then((res) => {
            if (res.status == 200) {
              sessionStorage.cadeomeu = res.data.user.active;
              sessionStorage.cadeomeu_profile = res.data.user.id_user;
              EventBus.$emit("checkSessionAuth", true);
              router.push({
                name: "HomePrivate",
                params: { Rid: this.form.name },
              });
            }
          })
          .catch((err) => {
            if (err.response.status == 404) {
              this.dataDialog.type = "error";
              this.dataDialog.title = "Usuário ou senha inválido.";
              this.dataDialog.textButton = "Ok, Entendi";
              this.dataDialog.iconButton = "check";
              EventBus.$emit("dialogGeneric", true);
            } else {
              this.dataDialog.type = "information";
              this.dataDialog.title = "Serviço temporariamente indisponível.";
              this.dataDialog.textButton = "Ok, Entendi";
              this.dataDialog.iconButton = "check";
              EventBus.$emit("dialogGeneric", true);
            }
          });
      }
    },
  },
};
</script>

<style>
</style>