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
    src="https://playground.amp.dev/static/inline-examples/data/amp-list-urls.json"
  >
    <template type="amp-mustache">
      <div class="url-entry">
        <a href="{{url}}">{{ title }}</a>
      </div>
    </template>
  </amp-list>
  <h3>Lista Vue de dados GraphQL</h3>
  <div></div>
  <ul id="example-1">
    <li v-for="continent in allContinents" :key="continent.code">
      {{ continent.code }} - {{ continent.name }}
    </li>
  </ul>
</template>

<script>
//import ContinentItem from "./ContinentItem.vue";
import LinkItem from "./LinkItem";
const axios = require("axios");

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
      allContinents: axios({
        url: "https://countries.trevorblades.com/",
        method: "post",
        data: {
          query: `
            {continents{
              code
              name
            }}
            `,
        },
      }).then((result) => {
        console.log(this.allContinents);
        return result.data.data.continents;
      }),
    };
  },
  components: {
    LinkItem,
    //ContinentItem,
  },
};
</script>
