<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn @click="goLogin()" text>Login</v-btn>
    </v-app-bar>

    <v-main>
      <Content />
    </v-main>
  </v-app>
</template>

<script>
import router from "@/router";
import Content from "./components/layouts/content";

export default {
  name: "App",
  components: {
    Content,
  },
  methods: {
    goLogin() {
      router.push({
        name: "Login",
      });
    },
  },
  data() {
    return {};
  },
};
</script>
