<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="headline">Pedidos</h1>
      </v-col>
      <v-col sm="4" md="3" v-for="(item, i) in 15" :key="i">
        <v-card
          class="mx-auto"
          color="orange lighten-3"
          tile
          @click="handleClick(i)"
        >
          <v-card-title>Mesa - {{ i }}</v-card-title>
          <v-card-subtitle>
            <div>00/00/0000</div>
            <div>00:00:0000</div>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <!--<v-col cols="6" xs12 sm7>
        <v-card
          class="mx-auto"
          color="green lighten-4"
          tile
          @click="handleClick()"
        >
          <v-card-title>Mesa - 4</v-card-title>
          <v-card-subtitle>
            <div>00/00/0000</div>
            <div>00:00:0000</div>
          </v-card-subtitle>
        </v-card>
      </v-col>-->
    </v-row>
    <DialogTable />
  </v-container>
</template>

<script>
import DialogTable from "@/components/organisms/dialogs/dialogTable";
import { EventBus } from "@/services/event-bus.js";
export default {
  components: {
    DialogTable,
  },
  methods: {
    handleClick(item) {
      EventBus.$emit("dialogTable", true, item);
    },
  },
};
</script>

<style>
</style>