<template>
  <router-view></router-view>
</template>

<script>
import { EventBus } from "@/services/event-bus.js";
import { mapState } from "vuex";
export default {
  components: {},
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
};
</script>

<style>
</style>