<template>
  <div>{{ country.code }} ({{ country.name }})</div>
</template>

<script>
export default {
  name: "countryItem",
  props: ["country"],
};
</script>
