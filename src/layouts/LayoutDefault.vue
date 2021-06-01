<template>
  <div class="flex flex-col min-h-screen">
    <app-header />

    <div class="container">
      <slot />
    </div>

    <!--app-footer class="px-5" /-->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "./AppHeader.vue";
//import AppFooter from "./AppFooter.vue";

export default defineComponent({
  name: "LayoutDefault",

  components: {
    AppHeader,
    //AppFooter,
  },
});
</script>
