<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Pedidos</h1>
      </v-col>
      <v-col
        sm="4"
        md="3"
        v-for="item in custoterOrders"
        :key="item.index"
        class="ma-0"
      >
        <v-card
          class="mx-auto"
          color="orange lighten-3"
          tile
          @click="handleClick(item.customer_order_json)"
        >
          <v-card-title class="sub-title">Mesa - {{ item.table }}</v-card-title>
          <v-card-subtitle>
            <div>{{ item.created }}</div>
            <div>{{ item.modific }}</div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <DialogTable />
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DialogTable from "@/components/organisms/dialogs/dialogTable";
import { EventBus } from "@/services/event-bus.js";
export default {
  components: {
    DialogTable,
  },
  computed: {
    ...mapState("auth", ["auth"]),
  },
  methods: {
    ...mapActions("common", ["getCustomerOrderUser"]),
    handleClick(item) {
      EventBus.$emit("dialogTable", true, item);
    },
  },
  created() {
    const data = {
      id_user: this.auth.user.id_user,
      token: this.auth.token,
    };
    this.getCustomerOrderUser(data)
      .then((res) => {
        if (res.status == 200) {
          res.data.forEach((el) => {
            let item = {
              created: el.created,
              modific: el.modific,
              table: el.customer_order_table,
              customer_order_json: el.customer_order_json,
            };
            this.custoterOrders.push(item);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      custoterOrders: [],
    };
  },
};
</script>

<style>
</style>