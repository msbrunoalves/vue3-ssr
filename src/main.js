import { createSSRApp } from "vue";
import App from "./App.vue";

import { initRouter } from "./router";
import { createStore } from "./store";
import { sync } from "vuex-router-sync";

export function initApp() {
  const app = createSSRApp(App);
  const router = initRouter();
  //create store instance
  const store = createStore();

  // sync so that route state is available as part of the store
  sync(store, router);

  app.use(router, store);

  return {
    app,
    router,
    store,
  };
}
