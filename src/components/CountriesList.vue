<template>
  <h3>Lista estática Vue</h3>
  <div>
    <link-item v-for="link in allLinks" :key="link.id" :link="link">
    </link-item>
  </div>
  <h3>Lista AMP de source JSON</h3>
  <amp-list
    width="auto"
    height="100"
    layout="fixed-height"
    src="http://localhost:8080/continents"
  >
    <ul class="list-group">
      <template v-pre type="amp-mustache">
        <li class="list-group-item">{{ code }} - {{ name }}</li>
      </template>
    </ul>
  </amp-list>
  <span></span>
  <div class="alert alert-primary" role="alert">
    .\chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
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
  components: {
    LinkItem,
    //ContinentItem,
  },
};
</script>
