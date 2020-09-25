<template>
  <v-layout class="white">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
  },
};
</script>

<style>
</style>