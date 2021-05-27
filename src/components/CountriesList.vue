<template>
  <div>
    <link-item v-for="link in allLinks" :key="link.id" :link="link">
    </link-item>
  </div>
</template>

<script>
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
  },
};
</script>
