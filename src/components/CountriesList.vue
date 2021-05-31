<template>
  <h3>Lista estática Vue</h3>
  <div>
    <link-item v-for="link in allLinks" :key="link.id" :link="link">
    </link-item>
  </div>
  <h3>Lista AMP de source JSON</h3>
  <amp-list
    v-pre
    width="auto"
    height="100"
    layout="fixed-height"
    src="http://localhost:3000/continents"
  >
    <template type="amp-mustache">
      <div class="url-entry">
        <div>{{ code }} - {{ name }}</div>
      </div>
    </template>
  </amp-list>
</template>

<script>
//import ContinentItem from "./ContinentItem.vue";
import LinkItem from "./LinkItem";

export default {
  name: "LinkList",
  data() {
    return {
      allLinks: [
        {
          id: "1",
          description: "Google 😎",
          url: "https://www.google.pt",
        },
        {
          id: "2",
          description: "Bing",
          url: "http://www.bing.com/",
        },
      ],
    };
  },
  components: {
    LinkItem,
    //ContinentItem,
  },
};
</script>
