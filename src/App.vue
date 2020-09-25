<template>
  <v-app>
    <v-main>
      <Content />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Content from "./components/layouts/content";
import Footer from "./components/layouts/footer";

export default {
  name: "App",
  components: {
    Content,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
