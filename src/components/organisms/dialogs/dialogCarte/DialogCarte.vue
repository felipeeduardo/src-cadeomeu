<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent scrollable max-width="400px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark block large v-bind="attrs" v-on="on">O que tem aqui</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Fala ai, onde tu tá?</v-card-title>
          <v-img :src="require('@/assets/clients/crocipa.jpg')" contain height="200" />
          <v-card-text style="height: 300px;">
            <v-radio-group v-model="typeRequest" column>
              <v-radio label="Em casa" value="delivery"></v-radio>
              <v-radio label="Mesa - 01" value="01"></v-radio>
              <v-radio label="Mesa - 02" value="02"></v-radio>
              <v-radio label="Mesa - 03" value="03"></v-radio>
              <v-radio label="Mesa - 04" value="04"></v-radio>
              <v-radio label="Mesa - 05" value="05"></v-radio>
              <v-radio label="Mesa - 06" value="06"></v-radio>
              <v-radio label="Mesa - 07" value="07"></v-radio>
              <v-radio label="Mesa - 08" value="08"></v-radio>
              <v-radio label="Mesa - 09" value="09"></v-radio>
              <v-radio label="Mesa - 10" value="10"></v-radio>
              <v-radio label="Mesa - 11" value="11"></v-radio>
              <v-radio label="Mesa - 12" value="12"></v-radio>
              <v-radio label="Mesa - 13" value="13"></v-radio>
              <v-radio label="Mesa - 14" value="14"></v-radio>
              <v-radio label="Mesa - 15" value="15"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-flex v-if="this.typeRequest!=''">Tipo: {{this.typeRequest}}</v-flex>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="this.typeRequest?false:true"
              text
              @click="goCarte()"
            >Aqui ó</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      typeRequest: "",
      dialog: false,
    };
  },
  methods: {
    goCarte() {
      this.dialog = false;
      router.push({
        name: "Carte",
        params: { Rid: "crocipa", Mid: this.typeRequest },
      });
    },
  },
};
</script>

<style>
</style>