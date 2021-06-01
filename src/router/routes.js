const Home = () => import(/* webpackChunkName: "about" */ "../views/Home.vue");
const Home2 = () => import("../views/Home2.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Blank = () =>
  import(/* webpackChunkName: "blank" */ "../views/Blank.vue");

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home2",
    name: "Home2",
    component: Home2,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blank",
    name: "BlankPage",
    component: Blank,
    meta: { layout: "LayoutBlank" },
  },
];
