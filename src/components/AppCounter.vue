<template>
  <div>
    <h4>Count: {{ count }}</h4>
  </div>

  <div class="mt-4">
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppCounter",

  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    function decrement() {
      count.value--;
    }

    return {
      count,
      increment,
      decrement,
    };
  },
});
</script>
