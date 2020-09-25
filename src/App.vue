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
    <Footer />
  </v-app>
</template>

<script>
import router from "@/router";
import Content from "./components/layouts/content";
import Footer from "./components/layouts/footer";

export default {
  name: "App",
  components: {
    Content,
    Footer,
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
