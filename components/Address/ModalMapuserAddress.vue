<template>
  <div class="text-center">
    <v-dialog fullscreen v-model="addressMapModal" width="700" eager>
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn @click="mapLoad()" text depressed color="Azure" class="pa-0" v-bind="attrs" v-on="on">
          تغییر نشانی از روی نقشه
        </v-btn>

      </template> -->

      <v-card elevation="0">
        <div class="mt-5">
          <v-row justify="space-between" class="pr-10 pl-8 pb-8 pt-6">
            <div class="up-titel-section">
              <v-row align="center" class="pt-3 pr-2">
                <span class="mr-3"> <img class="mt-1" src="~/assets/img/map-pin-up.svg" alt=""></span>
                <span class="t12400 mr-3">ثبت آدرس جدید</span>
              </v-row>
            </div>
            <div>
              <v-icon @click="close()">
                mdi-chevron-left-circle-outline
              </v-icon>
            </div>
          </v-row>
        </div>

        <v-divider></v-divider>

        <v-col v-if="map">
          <div class="position__relative leaf_map" id="map-wrap">
            <client-only>
              <l-map @moveend="getCenterMap" :zoom="12" :center="latLng1" id="map">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <!-- <l-marker :draggable="true" :lat-lng="latLng"></l-marker> -->
              </l-map>
              <div class="search_location-btn">
                <v-autocomplete v-model="selectAddress" :loading="loadingSearch" :search-input.sync="search"
                  @keyup="searchFunction()" label="جست و جوی نشانی" dense item-text="title" item-value="location"
                  :items="Address" background-color="white" outlined prepend-inner-icon="mdi-magnify"
                  no-data-text="آدرس مورد نظر را وارد کنید" class="over_map br-15" color="black">
                  <template v-slot:item="address">
                    <v-col class="pa-0" cols="12">
                      <v-row class="ma-0" align="center">
                        <v-col cols="1" class="d-flex align-center justify-center">
                          <img src="~/assets/img/location.svg" alt="" />
                        </v-col>
                        <v-col>
                          <p class="t12600 OuterSpace--text mb-1">
                            {{ address.item.title }}
                          </p>
                          <p class="t10400 DimGray--text mb-0">
                            {{ address.item.neighbourhood }}
                          </p>
                        </v-col>

                      </v-row>
                      <v-divider></v-divider>
                    </v-col>

                  </template>

                </v-autocomplete>
              </div>
              <v-btn small fab depressed @click="getLocation()" absolute class="my_location-btn">
                <v-icon>mdi-crosshairs-gps</v-icon>
              </v-btn>
            </client-only>
            <img width="40" src="~/assets/img/map-pin.svg" class="marker_center" alt="" />
          </div>
        </v-col>

        <v-col cols="12">
          <v-row class="ma-0" align="center">

            <span class="t14400 mr-3">سفارش شما به این نشانی ارسال خواهد شد.</span>
          </v-row>
        </v-col>
        <!-- <v-divider></v-divider> -->
        <div class="map-add-box mt-8">
          <v-row class="pt-10" justify="center" align="center">
            <v-btn :loading="loading" @click="getGraphLocation()" width="292" color="Black" dark rounded="xl"> ثبت آدرس
              جدید
            </v-btn>

          </v-row>
        </div>
      </v-card>


    </v-dialog>
  </div>
</template>


<script>
import { gql } from "nuxt-graphql-request";
export default {
  props: {
    lat: '',
    long: ''
  },
  data() {
    return {
      dialog: false,
      latLng: [35.6996, 51.4018],
      latLng1: [35.6996, 51.4018],
      loading: false,
      loadingSearch: false,
      search: "",
      selectAddress: "",
      search: "",
      Address: [],
      map: false
    };
  },

  watch: {
    selectAddress(val) {
      if (val) {
        this.latLng1 = [val.y, val.x];
      }
    },
    addressMapModal(val) {
      if (val) {
        this.mapLoad()
      }
    }
  },

  methods: {
    close() {
      this.$store.commit('public/set_addressMapModal', false)
    },
    mapLoad() {
      setTimeout(() => {
        this.map = true
      }, 500)
    },
    searchFunction() {
      if (this.search) {
        setTimeout(() => {
          this.searchAddress();
        }, 2000);
      } else {
        this.Address = [];
      }
    },
    async searchAddress() {
      const query =
        gql`
      query {
        neshan(requestUrl:"v1/search?term=` +
        this.search +
        `&lat=` +
        this.latLng[0] +
        `&lng=` +
        this.latLng[1] +
        `")
    } `;
      this.loadingSearch = true;
      const map = await this.$graphql.default.request(query, {});
      var text = map.neshan;
      let result = text.replace(/'/g, '"');
      const obj = JSON.parse(result);
      this.loadingSearch = false;
      this.Address = obj.items;
    },
    async getGraphLocation() {
      const query = gql`
        query {
          neshan(requestUrl:"v5/reverse?lat=`+ this.latLng1[0] + `&lng=` + this.latLng1[1] + `")
          } `;
      this.loading = true
      const map = await this.$graphql.default.request(query, {});
      var text = map.neshan
      var result = text.replace(/'/g, '"').replace(/True/g, 'true').replace(/False/g, 'false').replace(/None/g, 'null');

      var form = {
        lat: this.latLng1[0],
        lng: this.latLng1[1],
        address: JSON.parse(result)
      }

      this.$store.commit('public/set_addressOnMap', form)
      this.close()
      if (localStorage.getItem('modalMap') != 'edit') {
        this.$store.commit('public/set_addAddressModal', true)

      }


      // this.$store.commit('user/set_mapAddress', form);
      this.loading = false
    },
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((e) => {
          this.latLng1 = [e.coords.latitude, e.coords.longitude];
        });
        console.log(this.latLng1);
      } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
      }
    },

    getCenterMap(e) {
      // console.log(e.target.getCenter());
      var latlng = e.target.getCenter();
      // console.log(latlng.lat);
      this.latLng1 = [latlng.lat, latlng.lng];
    },
    // map.on('click', onMapClick);
  },

  computed: {
    addressMapModal() {
      return this.$store.getters['public/get_addressMapModal']
    }
  },

  mounted() {

    if (this.lat && this.long) {
      this.latLng1 = [this.lat, this.long];
    }
  }
};
</script>