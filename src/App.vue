<template>
  <div class="antialiased text-gray-700">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import LayoutDefault from "./layouts/LayoutDefault.vue";
import LayoutBlank from "./layouts/LayoutBlank.vue";
import AmpOptimizer from "@ampproject/toolbox-optimizer";

export default defineComponent({
  name: "App",

  components: {
    LayoutDefault,
    LayoutBlank,
  },

  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout || "LayoutDefault");

    return {
      layout,
    };
  },
});

const ampOptimizer = AmpOptimizer.create();

const originalHtml = `
  <!doctype html>
  <html ⚡>
    ...
  </html>`;

ampOptimizer.transformHtml(originalHtml).then((optimizedHtml) => {
  console.log(optimizedHtml);
});
</script>

<style src="./assets/styles/main.css"></style>
