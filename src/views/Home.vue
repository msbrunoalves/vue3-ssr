<template>
  <div class="container">
    <h1 class="">Vue 3 SSR - Hello world do Bruno Alves</h1>
    <app-counter />
    <countries-list />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppCounter from "../components/AppCounter.vue";
import CountriesList from "../components/CountriesList.vue";

export default defineComponent({
  name: "Home",

  components: {
    AppCounter,
    CountriesList,
  },
});
</script>
