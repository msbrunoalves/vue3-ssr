import Vuex from "vuex";
import Vue from "vue";
import { axios } from "axios";
import { createApp } from "vue";

const app = createApp();
app.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      allContinents: {},
    }),

    actions: {
      fetchContinents() {
        axios({
          url: "https://countries.trevorblades.com/",
          method: "post",
          data: {
            query: `
                {continents{
                    code
                    name
                }}
                `,
          },
        }).then((result) => {
          return result.data.data.continents;
        });
      },
    },
    mutations: {
      setContinents(state, { item }) {
        Vue.set(state.allContinents, item);
      },
    },
  });
}
