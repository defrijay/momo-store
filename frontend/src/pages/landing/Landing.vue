<template>
    <div class="landing">
      <Navbar />
      <Hero />
      <Benefits />
      <Category />
      <Products />
      <Discover />
      <News />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "../../components/Navbar.vue";
  import Footer from "../../components/Footer.vue";
//   import Hero from "./Hero.vue";
//   import Benefits from "./Benefits.vue";
//   import Category from "./Category.vue";
//   import Products from "./Produtcs.vue";
//   import Discover from "./Discover.vue";
//   import News from "./News.vue";
  
  export default {
    name: "Landing",
    components: {
      Navbar,
    //   Hero,
    //   Benefits,
    //   Category,
    //   Products,
    //   Discover,
    //   News,
      Footer
    },
  };
  </script>