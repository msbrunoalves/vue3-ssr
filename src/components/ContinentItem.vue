<template>
  <div>{{ continent.code }} ({{ continent.name }})</div>
</template>

<script>
export default {
  name: "continentItem",
  props: ["continent"],
};
</script>
