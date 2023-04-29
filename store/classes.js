import axios from "axios";
import cookies from 'vue-cookies'
import { gql , graphql} from 'nuxt-graphql-request';
export class ProductListFilter {
    constructor() {
        this.category_url = '';
        this.brand = [];
        this.sort = '';
        this.page = 1;
        this.numbers_in_page = 12;
    }

    query_maker() {
        let query = '?'
        if (this.brand && this.brand.length > 0) {
            query += "brand=";
            for (let i = 0; i < this.brand.length; i++) {
                if (i === (this.brand.length - 1)) {
                    query += this.brand[i].toString() + '&';
                } else {
                    query += this.brand[i].toString() + ',';
                }
            }
        }
        if (this.sort) {
            query += "sort=" + this.sort + "&"
        }
        if (this.page) {
            query += "page=" + this.page + "&"
        }
        return query.substring(0, query.length - 1)
    }
};

export class AxiosMethods {
    constructor() {
        this.method = ''
        this.endpoint = ''
        this.query = ''
    }
    sendDate(callback) {
        axios({
            method: this.method,
            url: process.env.apiUrl + this.endpoint,
            headers: {
                Authorization: "Bearer " + cookies.get("customer_token"),
            },
            data: this.query
        })
            .then(response => {
                callback(response.data);
            })
            .catch(err => {

            })
    }
}

export class GraphMethod {
    constructor() {
        this.query = ''
    }
    async getWithGraph(callback) {

        var requestHeaders = {
            Authorization: "Bearer " + cookies.get("customer_token"),
        };
        const query = gql`
        query{
         `+ this.query + `
        } `;

        callback(await graphql.default.request(query, {}, requestHeaders))

    }
}


