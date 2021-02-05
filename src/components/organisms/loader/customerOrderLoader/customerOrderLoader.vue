<template>
  <v-flex v-show="this.loaderCustomerOrder">
    <v-progress-linear
      indeterminate
      color="primary"
      class="mt-3"
    ></v-progress-linear>
  </v-flex>
</template>

<script>
export default {
  props: {
    loaderCustomerOrder: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style>
</style>