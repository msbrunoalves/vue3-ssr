<template>
  <h3>Lista estática Vue</h3>
  <div>
    <link-item v-for="link in allLinks" :key="link.id" :link="link">
    </link-item>
  </div>
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
  created() {
    this.$ssrContext.isAMP = false;
  },
  components: {
    LinkItem,
    //ContinentItem,
  },
};
</script>
