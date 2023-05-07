import axios from 'axios'
import cookies from 'vue-cookies'
import { gql } from 'nuxt-graphql-request';

export const strict = false
export const state = () => ({
    provinces: [],
    citys: [],
    addressMapModal: false,
    addAddressModal: false,
    addressOnMap: ''

})

export const mutations = {
    set_addAddressModal(state, bool) {
        state.addAddressModal = bool
    },
    set_addressOnMap(state, obj) {
        state.addressOnMap = obj
    },
    set_addressMapModal(state, bool) {
        state.addressMapModal = bool
    },
    set_citys(state, obj) {
        state.citys = obj
    },

    set_provinces(state, obj) {
        state.provinces = obj
    },
}



export const actions = {
    async set_citys({ commit }, id) {
        const requestHeaders = {
            Authorization: "Bearer " + cookies.get("customer_token"),
        };
        const query = gql`
        query{
            clientCities(limit:1000 ,province_Id: `+ id + `){
                results{
                    id,
                    name
                }
            }
          } `;
        const me = await this.$graphql.default.request(query, {}, requestHeaders);
        commit('set_citys', me.clientCities.results);
    },
    async set_provinces({ commit }) {
        const requestHeaders = {
            Authorization: "Bearer " + cookies.get("customer_token"),
        };
        const query = gql`
        query{
            clientProvinces(limit:1000){
                results{
                    id,
                    name
                }
            }
          } `;
        const me = await this.$graphql.default.request(query, {}, requestHeaders);
        commit('set_provinces', me.clientProvinces.results);
    },
}


export const getters = {
    get_addAddressModal(state) {
        return state.addAddressModal
    },
    get_addressOnMap(state) {
        return state.addressOnMap
    },
    get_addressMapModal(state) {
        return state.addressMapModal
    },
    get_citys(state) {
        return state.citys
    },
    get_provinces(state) {
        return state.provinces
    },
}