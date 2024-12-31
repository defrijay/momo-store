<template>
    <div class="landing">
      <Navbar />
      <Hero />
      <Carousel />
      <Category />
      <Products />
      <Article />
      <Team />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "../../components/Navbar.vue";
  import Footer from "../../components/Footer.vue";
  import Hero from "./Hero.vue";
  import Carousel from "./Carousel.vue";
  import Category from "./Category.vue";
  import Products from "./Products.vue";
  import Article from "./Article.vue";
  import Team from "./Team.vue";
  
  export default {
    name: "Landing",
    components: {
      Navbar,
      Hero,
      Carousel,
      Category,
      Products,
      Article,
      Team,
      Footer
    },
  };
  </script>