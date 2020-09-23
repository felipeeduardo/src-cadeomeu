<template>
  <v-layout row justify-center>
    <v-dialog v-model="this.loader" persistent max-width="290">
      <v-card>
        <v-card-text>
          <v-img height="100px" contain :src="require('@/assets/cadeomeuLoading.gif')"></v-img>
          <div class="mt-4">
            <h1 class="title text-xs-center font-weight-light" color="red--text">Aguarde...</h1>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
</style>