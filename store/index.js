import axios from 'axios'
import cookies from 'vue-cookies'
import { gql } from 'nuxt-graphql-request';

export const strict = false
export const state = () => ({
  products: [],
  productPageLength: 1,
  prodcutHome: [],
  produCategories: [],
  bestVariant: '',
  collections: [],
  orderStep: 1,
  isLogin: false,
  meCustomer: '',
  deliveryMethods: [],
  orderBrache: [],
  braches: [],
  clientOrder: '',
  myOrders: [],
  clientPayment: '',
  clientBanners: [],
  produCategoriesHome: []
})

export const mutations = {
  set_produCategoriesHome(state, obj) {
    state.produCategoriesHome = obj
  },
  set_clientBanners(state, obj) {
    state.clientBanners = obj
  },
  set_clientPayment(state, obj) {
    state.clientPayment = obj
  },
  set_myOrders(state, obj) {
    state.myOrders = obj
  },
  set_clientOrder(state, obj) {
    state.clientOrder = obj
  },
  set_braches(state, obj) {
    state.braches = obj
  },
  set_orderBrache(state, obj) {
    state.orderBrache = obj
  },
  set_deliveryMethods(state, obj) {
    state.deliveryMethods = obj
  },
  set_meCustomer(state, obj) {
    state.meCustomer = obj
  },
  set_isLogin(state, bool) {
    state.isLogin = bool
  },
  decress_orderStep(state) {
    if (state.orderStep > 1) {
      --state.orderStep
    }
  },
  incress_orderStep(state) {
    if (state.orderStep < 5) {
      ++state.orderStep
    }

  },
  set_orderStep(state, num) {
    state.orderStep = num
  },
  set_collections(state, obj) {
    state.collections = obj
  },
  set_bestVariant(state, obj) {
    state.bestVariant = obj
  },
  set_produCategories(state, obj) {
    state.produCategories = obj
  },
  set_productHome(state, obj) {
    state.prodcutHome = obj
  },
  set_productPageLength(state, number) {
    state.productPageLength = number;
  },
  set_products(state, obj) {
    state.products = obj
  },
}



export const actions = {
  async set_produCategoriesHome({ commit }, form) {

    const query = gql`
        query{
            clientProductCategories(parent_Isnull:true){
              results{
                id,name,image,url
                subCategories{
                  id,name,url
                }
              }
            }
          } `;
    const categories = await this.$graphql.default.request(query, {});
    commit('set_produCategoriesHome', categories.clientProductCategories.results);
  },
  async set_clientBanners({ commit }, id) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
    query{
        clientBanners(type:SHOP_DESKTOP_MAIN_PAGE_TOP){
          results{
            image
            url
          }
        }
          
      } `;
    const banner = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientBanners', banner.clientBanners.results);
  },
  async set_clientPayment({ commit }, id) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
    query{
      clientPayment(payId:`+ id + `){
          id
          gateway
          amount
          createdAt
          paidAt
          refId
          requestId
          saleReferenceId
          authority
          order{
              id
              details{
                variant{
                  weight,price
                  product{
                    url
                    discountPercent
                    collection{
                      name
                    }
                    name
                    imageCover{
                      imageThumbnail{
                        medium
                      }
                    }
                  }
                }
                variantName
                variantUnitPriceWithoutDiscount
                variantUnitPrice
              }
              finalPrice
              delivery{
                name
              }
              address{
                addressDetail
                number
                postalCode
                city{
                  name
                  province{
                    name
                  }
                }
              }
              createdAt
              currentStatus{
                name
              }
              clientComment
          }
        }
          
      } `;
    const payment = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientPayment', payment.clientPayment);
  },

  async set_myOrders({ commit }) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
    query{
      meCustomer{
        orders{
          id
          details{
            variant{
              weight,price
              product{
                url
                discountPercent
                collection{
                  name
                }
                name
                imageCover{
                  imageThumbnail{
                    medium
                  }
                }
              }
            }
            variantName
            variantUnitPriceWithoutDiscount
            variantUnitPrice
          }
          finalPrice
          delivery{
            name
          }
          address{
            addressDetail
            number
            postalCode
            city{
              name
              province{
                name
              }
            }
          }
          createdAt
          currentStatus{
            name
          }
          clientComment
        }
        }
          
      } `;
    const orders = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_myOrders', orders.meCustomer.orders);
  },
  async set_clientOrder({ commit }, id) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
    query{
      clientOrder(orderId:`+ id + `){
        id
        details{
          variant{
            weight,price
            product{
              url
              discountPercent
              collection{
                name
              }
              name
              imageCover{
                imageThumbnail{
                  medium
                }
              }
            }
          }
          variantName
          variantUnitPriceWithoutDiscount
          variantUnitPrice
        }
        finalPrice
        delivery{
          name
        }
        address{
          addressDetail
          number
          postalCode
          city{
            name
            province{
              name
            }
          }
        }
        createdAt
        currentStatus{
          name
        }
        clientComment
        }
          
        } `;
    const order = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_clientOrder', order.clientOrder);
  },
  async set_braches({ commit }) {

    const query = gql`
    query{
        clientBranches{
          results{
            id , name , address
          }
        }
          
        } `;
    const me = await this.$graphql.default.request(query, {});
    commit('set_braches', me.clientBranches.results);
  },
  async set_orderBrache({ commit }, url) {

    const query = gql`
    clientBranchWarehouseStocks(variant_Product_Url:"`+ url + `"){
      results{
          variant{
              id,weight,
          price,
          },
          branch{
              id , name
          }
      }
  }
          
        } `;
    const me = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_orderBrache', me.clientBranchWarehouseStocks.results);
  },
  async set_deliveryMethods({ commit }) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
        query{
          clientDeliveryMethods{
            results{
              id,
              name,
              description
            }
          }
          
        } `;
    const me = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_deliveryMethods', me.clientDeliveryMethods.results);
  },
  async set_meCustomer({ commit }) {
    const requestHeaders = {
      Authorization: "Bearer " + cookies.get("customer_token"),
    };
    const query = gql`
        query{
          meCustomer{
            cartDetails{
              variant{
                id,weight,price
                product{
                  url
                  discountPercent
                  collection{
                    name
                  }
                  name
                  imageCover{
                    imageThumbnail{
                      medium
                    }
                  }
                }
              }
            }
             client{
              user{
                firstName
                lastName
                username
              },
              mobile,
              birthdate,
              addresses{
                id
                city{
                  id, name
                  province{
                    id, name
                  }
                }
                addressDetail
                number
                postalCode
                default
                latitude
                longitude
              }
             },
             sex,
             nationalCode,
            
            }
          } `;
    const me = await this.$graphql.default.request(query, {}, requestHeaders);
    commit('set_meCustomer', me.meCustomer);
  },
  async set_collections({ commit }, form) {

    const query = gql`
        query{
          clientCollections(limit:100){
              results{
                id,name,url
              }
            }
          } `;
    const collections = await this.$graphql.default.request(query, {});
    commit('set_collections', collections.clientCollections.results);
  },
  async set_produCategories({ commit }, form) {

    const query = gql`
        query{
            clientProductCategories{
              results{
                id,name,image,url
                subCategories{
                  id,name,url
                }
              }
            }
          } `;
    const categories = await this.$graphql.default.request(query, {});
    commit('set_produCategories', categories.clientProductCategories.results);
  },
  async set_productHome({ commit }, form) {

    const query = gql`
        query{
            clientProducts(limit:4) {
                totalCount
                results {
                  id,
                  name,
                  url,
                  discountPercent
                  collection{
                    name,
                    url,
                  }
                  bestVariant{
                      id,weight,price
                  }
                  imageCover{
                    imageThumbnail{
                      medium
                    }
                  },
                  mainCategory{
                    name,url,id
                  },

                }
              }
          } `;
    const products = await this.$graphql.default.request(query, {});
    commit('set_productHome', products.clientProducts.results);
  },
  async set_products({ commit }, form) {

    commit('set_tableLoading', true)
    const query = gql`
        query{
            clientProducts(limit:5`+ form + `) {
                totalCount
                results {
                  id,
                  name,
                  url,
                  discountPercent
                  collection{
                    name,
                    url,
                  }
                  bestVariant{
                      id,weight,price
                  }
                  imageCover{
                    imageThumbnail{
                      medium
                    }
                  },
                  mainCategory{
                    name,url,id
                  },

                }
              }
          } `;
    const products = await this.$graphql.default.request(query, {});
    commit('set_productPageLength', Math.ceil(products.clientProducts.totalCount / 5));
    commit('set_products', products.clientProducts.results);
  },
}

export const getters = {
  get_produCategoriesHome(state) {
    return state.produCategoriesHome
  },
  get_clientBanners(state) {
    return state.clientBanners
  },
  get_clientPayment(state) {
    return state.clientPayment
  },
  get_myOrders(state) {
    return state.myOrders
  },
  get_clientOrder(state) {
    return state.clientOrder
  },
  get_braches(state) {
    return state.braches
  },
  get_orderBrache(state) {
    return state.orderBrache
  },
  get_deliveryMethods(state) {
    return state.deliveryMethods
  },
  get_meCustomer(state) {
    return state.meCustomer
  },
  get_isLogin(state) {
    return state.isLogin
  },
  get_orderStep(state) {
    return state.orderStep
  },
  get_collections(state) {
    return state.collections
  },
  get_bestVariant(state) {
    return state.bestVariant
  },
  get_produCategories(state) {
    return state.produCategories
  },
  get_productHome(state) {
    return state.prodcutHome
  },
  get_productPageLength(state) {
    return state.productPageLength;
  },
  get_products(state) {
    return state.products
  },
}