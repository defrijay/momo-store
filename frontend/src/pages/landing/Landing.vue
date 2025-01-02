<template>
  <div class="landing">
    <component :is="navbarComponent" />
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
import NavbarA from "../../components/NavbarA.vue";
import Footer from "../../components/Footer.vue";
import Hero from "./Hero.vue";
import Carousel from "./Carousel.vue";
import Category from "./Category.vue";
import Products from "./Products.vue";
import Article from "./Article.vue";
import Team from "./Team.vue";
import axios from "axios";

export default {
  name: "Landing",
  components: {
    Navbar,
    NavbarA,
    Hero,
    Carousel,
    Category,
    Products,
    Article,
    Team,
    Footer
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  computed: {
    navbarComponent() {
      return this.isLoggedIn ? "NavbarA" : "Navbar";
    },
  },
  created() {
    const userInfo = localStorage.getItem("userInfo");
    this.isLoggedIn = !!userInfo;
  },
  methods: {
    async logout() {
      try {
        await axios.post("http://localhost:5000/api/users/logout", {}, { withCredentials: true });
        localStorage.removeItem("userInfo");
        this.isLoggedIn = false;
      } catch (error) {
        console.error("Logout failed", error);
      }
    },
  },
};
</script>