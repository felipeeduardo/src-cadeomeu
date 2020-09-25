<template>
  <v-dialog v-model="this.loader" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        Aguarde...
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    loader: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style>
</style>