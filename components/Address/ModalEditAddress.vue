<!-- <template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="pa-0" color="primary" v-bind="attrs" v-on="on">
        ویرایش آدرس
        <v-icon class="mr-2" color="primary">mdi-chevron-left</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-col>
        <v-row class="ma-0" justify="space-between" align="center">
          <span class="rheadline">ویرایش کردن آدرس</span>
          <v-btn icon @click="dialog = false">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-divider></v-divider>
      <v-col class="pa-6">
        <AddAddress :cancele="close"  sendMethod="put" :address="address"/>
      </v-col>
    </v-card>
  </v-dialog>
</template> -->

<template>
  <v-dialog v-model="dialog" width="725">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>
          mdi-square-edit-outline
        </v-icon>
      </v-btn>

    </template>

    <v-card color="transparent" elevation="0" class="py-8">
      <v-card elevation="0">
        <v-row class="ma-0 profile-header" justify="center" align="center">
          <span class="t14400 Secondary2--text">آدرس</span>
        </v-row>
        <v-col>
          <v-row class="ma-0" justify="end" align="center">
            <v-btn icon @click="dialog = false">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-col>

        <v-col class="pa-2 px-6">
          <AddAddress :cancele="close" sendMethod="put" :address="address" />

        </v-col>
      </v-card>
    </v-card>
  </v-dialog>

</template>
  

<script>
import AddAddress from "~/components/Address/AddAddress.vue";

export default {
  props: {
    address: "",
  },
  components: {
    AddAddress
  },

  methods: {
    close() {
      this.dialog = false;
    }
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>