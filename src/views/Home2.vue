<template>
  <div class="container">
    <h1 class="">Vue 3 SSR - Hello world do Bruno Alves</h1>
    <app-counter />
    <countries-list-no-amp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppCounter from "../components/AppCounter.vue";
import CountriesListNoAmp from "../components/CountriesListNoAMP.vue";

export default defineComponent({
  name: "Home",

  components: {
    AppCounter,
    CountriesListNoAmp,
  },
});
</script>
