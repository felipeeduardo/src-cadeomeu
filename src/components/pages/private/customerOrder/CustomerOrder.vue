<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Pedidos</h1>
        <p class="sub-title">
          Atualizado em: <b>{{ this.formatDateDb(new Date()) }}</b>
        </p>
        <CustomerOrderLoader :loaderCustomerOrder="this.loadingCustomerOrder" />
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
          <v-card-title> Mesa - {{ item.table }} </v-card-title>
          <v-card-subtitle>
            <div>{{ item.created }}</div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <DialogTable />
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import DialogTable from "@/components/organisms/dialogs/dialogTable";
import CustomerOrderLoader from "@/components/organisms/loader/customerOrderLoader";
import { EventBus } from "@/services/event-bus.js";
export default {
  components: {
    DialogTable,
    CustomerOrderLoader,
  },
  computed: {
    ...mapState("auth", ["auth"]),
    ...mapGetters("common", ["getAllCustomerOrderUser"]),
    ...mapState(["loadingCustomerOrder"]),
  },
  methods: {
    ...mapActions("common", ["getCustomerOrderUser"]),
    handleClick(item) {
      EventBus.$emit("dialogTable", true, item);
    },
    formatDateDb(date) {
      var data = new Date(date),
        dia = data.getDate().toString().padStart(2, "0"),
        mes = (data.getMonth() + 1).toString().padStart(2, "0"), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear(),
        hora = data.getHours(),
        min = data.getMinutes(),
        seg = data.getSeconds();
      return dia + "/" + mes + "/" + ano + " " + hora + ":" + min + ":" + seg;
    },
    getCustomer() {
      this.custoterOrders = [];
      const data = {
        id_user: this.auth.user.id_user,
        token: this.auth.token,
      };
      this.getCustomerOrderUser(data)
        .then((res) => {
          if (res.status == 200) {
            res.data.forEach((el) => {
              let item = {
                created: this.formatDateDb(el.created),
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
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  created() {
    this.getCustomer();
    this.timer = setInterval(this.getCustomer, 60000);
  },
  data() {
    return {
      timer: "",
      custoterOrders: [],
    };
  },
};
</script>

<style>
</style>