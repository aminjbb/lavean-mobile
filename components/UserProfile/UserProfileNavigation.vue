<template>
  <v-card class=" mt-15" color="WhiteSmoke" outlined rounded="lg">
    <v-avatar class="pa-2  position__relative up-info-section" color="white" size="106">
      <v-img width="94" height="94" :src="require('~/assets/img/userProfile.svg')"></v-img>
    </v-avatar>
    <div class="text-center mt-m-4">
      <span class="t14400">
        امین جباری
      </span>
    </div>
    <div class="text-center mt-2">
      <v-chip class="ma-2 px-5" color="white" text-color="white">
        <span class="t14400 VampireBlack--text">
          09223732465
        </span>
      </v-chip>
    </div>
    <!-- <v-divider></v-divider> -->

    <v-list color="WhiteSmoke">
      <v-list-item-group class="mx-5 Gunmetal--text " active-class="SuccessFocus" color="primary">
        <template v-for="(item, i) in items">
          <v-list-item :key="i" :to="item.to" exact class="border-r-15 ma-3 white">
            <v-list-item-icon class="ml-3">
              <!-- <v-icon v-text="item.icon" ></v-icon> -->

              <v-img width="24" height="24" :src="item.icon"></v-img>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <span class=" Black--text t14400">{{ item.text }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item exact class="rounded-lg-2 ma-3" @click="logout()">
          <v-list-item-icon class="ml-3">
            <!-- <v-icon v-text="item.icon" ></v-icon> -->


          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="error--text">خروج</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "اطلاعات شخصی",
        icon: '',
        to: "/user-profile/user-info",
      },
      {
        text: "آدرس ها",
        icon: '',
        to: "/user-profile/address",
      },
      {
        text: "تاریخچه سفارش ها",
        icon: '',
        to: "/user-profile/my-order",
      },
      {
        text: "امتیاز های لاوین",
        icon: '',
        to: "/user-profile/emtiaz",
      },

    ],
  }),

  computed: {
    thumbnail() {
      try {
        return this.userAccount.thumbnail
      } catch (error) {
        return ''
      }
    },
    userAccount() {
      return this.$store.getters['wallet/get_userAccount']
    },
    userInfo() {
      return this.$store.getters["public/get_userInfo"];
    },

    name() {
      try {
        return this.userInfo.user.first_name
      } catch (error) {
        return ''
      }
    },

    userPhone() {
      try {
        return this.userInfo.mobile
      } catch (error) {
        return ''
      }
    },

    baseUrl() {
      return process.env.baseUrl + '/media/'
    }
  },

  methods: {
    gotoAvatar() {
      this.$router.push('/user-profile/avatar')
    },

    logout() {
      this.$cookies.remove('customer_token')
      this.$router.push('/')
    }
  }
};
</script>