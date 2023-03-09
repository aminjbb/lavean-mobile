import Vue from 'vue'
import Vuetify from 'vuetify'

// import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#12924F',
          secondary: '#21313C',
          accent: '#F39C12',
          error: '#E74C3C',
          warning: '#FEDC49',
          info: '#0082FD',
          success: '#13AA52',
          text1: "#181818",
          Gunmetal: "#263742",
          OuterSpace: "#424950",
          DimGray: "#636D77",
          Cultured: '#F5F6F7',
          Gainsboro: '#DFDFDF',
          FunGreen: '#096437',
          PigmentGreen: '#03A756',
          WhiteSmoke: '#F5F5F5',
          EerieBlack: "#181818",
          Azure: "#0082FD",
          CosmicLatte: '#DBFDE9',
          BananaMania: "#FFEEA9",
          LavenderBlue: "#D6D3FF",
          AeroBlue: "#B8E6CB",
          LightSlateBlue: "#766BFF",
          Nero: "#1A1A1A",
          MagicMint: "#ACE6C4",
          VampireBlack: "#0A0A0A",
          ChineseWhite: "#E0E0E0",
          SuccessMain: "#21725E",
          
        },
        dark: {

        }
      }
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}