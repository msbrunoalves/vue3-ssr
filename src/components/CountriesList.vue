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
    <template v-pre type="amp-mustache">
      <div class="url-entry">
        <a href="{{url}}">{{ title }}</a>
      </div>
    </template>
  </amp-list>
  <h3>Lista Vue de dados GraphQL</h3>
</template>

<script>
import LinkItem from "./LinkItem";
const axios = require("axios");
var axiosResult = "";

axios({
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
  axiosResult = result.data;
  console.log(result.data);
});

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
      axiosResult,
    };
  },
  components: {
    LinkItem,
  },
};
</script>
