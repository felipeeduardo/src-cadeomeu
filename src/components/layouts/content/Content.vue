<template>
  <v-layout class="white">
    <v-app-bar app color="primary" dark>
      <v-menu
        transition="slide-x-transition"
        bottom
        right
        v-if="checkSessionAuth"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title @click="goPath(item.path)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title></v-toolbar-title>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
      <v-btn @click="goLogin()" text v-if="!checkSessionAuth">Login</v-btn>
      {{ this.auth.user.email }}
      <v-btn @click="logout()" text v-if="checkSessionAuth">Sair</v-btn>
    </v-app-bar>
    <Loader :loader="this.loading" />
    <router-view></router-view>
  </v-layout>
</template>

<script>
import router from "@/router";
import { EventBus } from "@/services/event-bus.js";
import Loader from "@/components/organisms/loader";
import { mapState, mapActions } from "vuex";
export default {
  components: { Loader },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapState(["loading"]),
  },
  data() {
    return {
      checkSessionAuth: false,
      items: [
        { title: "Página inicial", path: "HomePrivate" },
        { title: "Pedidos", path: "CustomerOrder" },
        { title: "Estoque", path: "Stock" },
        { title: "Fechamentos", path: "" },
        { title: "Promoções", path: "" },
      ],
    };
  },
  created() {
    if (this.auth.token == "") this.checkSessionAuth = false;
    else this.checkSessionAuth = true;
  },
  mounted() {
    EventBus.$on("checkSessionAuth", (event) => {
      this.checkSessionAuth = event;
    });
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    logout() {
      EventBus.$emit("checkSessionAuth", false);
      this.checkSessionAuth = false;
      sessionStorage.hawinsoft = false;
      sessionStorage.hawinsoft_profile = "";
      this.logOut();
      router.push({ name: "Home" });
    },
    goLogin() {
      router.push({
        name: "Login",
      });
    },
    goPath(path) {
      router.push({
        name: `${path}`,
        params: { Rid: this.auth.user.email },
      });
    },
  },
};
</script>

<style>
</style>