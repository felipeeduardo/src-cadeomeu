<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('@/assets/cadeomeu.jpg')" contain height="350" />
        <h1 class="display-2 font-weight-light">Cadê o meu?</h1>
      </v-col>
      <v-col>
        <v-flex class="mb-4">
          <DialogCarte />
        </v-flex>
        <v-flex>
          <div class="grey--text">&copy; {{ new Date().getFullYear() }} - contato@cadeomeu.com.br</div>
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DialogCarte from "@/components/organisms/dialogs/dialogCarte";
export default {
  name: "Home",
  components: {
    DialogCarte,
  },
  data() {
    return {};
  },
};
</script>
