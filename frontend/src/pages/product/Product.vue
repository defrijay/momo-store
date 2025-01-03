<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  methods: {
    formatRupiah(number) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace("IDR", "").trim();
    },
    handleSearch() {
      this.filteredProducts = this.products.filter(product => {
        const searchLower = this.searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) || 
          product.category.name.toLowerCase().includes(searchLower)
        );
      });
    },
    generateRandomRating() {
    return (Math.random() * (5 - 4) + 4).toFixed(1);
}

  },
  name: "Products",
  data() {
    return {
      products: [],
      filteredProducts: [],
      searchTerm: "",
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5000/api/products/all-products");
      this.products = response.data;

      this.products.forEach(product => {
        if (product.rating === 0) {
          product.rating = this.generateRandomRating(); // Mengganti rating dengan angka acak
        }
      });

      this.filteredProducts = response.data; 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  components: {
    Navbar,
    Footer
  },
};
</script>

<template>
  <Navbar />
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-12">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <!-- Heading & Filters -->
      <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Katalog Produk</h2>
        <!-- Search Bar -->
        <input
          v-model="searchTerm"
          @input="handleSearch"
          type="text"
          placeholder="Cari produk atau kategori..."
          class="w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <!-- Display products -->
      <div class="mb-4 grid gap-4 sm:grid-cols-4 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        <div v-for="product in filteredProducts" :key="product._id" class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div class="h-32 w-full">
            <router-link :to="`/detail-product/${product._id}`">
              <img :src="`/Images/${product.category.name}/${product.image}`" :alt="product.name" class="mx-auto h-full" />
            </router-link>
          </div>
          <div class="pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
              <span class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                {{ product.discount }}% off
              </span>
              <div class="flex items-center justify-end gap-1">
                <button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Add to Favorites</span>
                  <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
                  </svg>
                </button>
              </div>
            </div>
            <router-link :to="`/detail-product/${product._id}`" class="text-md font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
              {{ product.name }}
            </router-link>
            <div class="mt-2 flex items-center gap-2">
              <div class="flex items-center">
                <svg 
                  v-for="n in Math.floor(product.rating === 0 ? generateRandomRating() : product.rating)" 
                  :key="n" 
                  class="h-3 w-3 text-yellow-400" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24">
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ product.rating === 0 ? generateRandomRating() : product.rating }}
              </p>
            </div>
            <div class="mt-4 flex items-center justify-between gap-4">
              <p class="text-lg font-extrabold leading-tight text-gray-900 dark:text-white">
                {{ formatRupiah(product.price) }}
              </p>
              <button type="button" class="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2 text-sm text-white hover:bg-primary-800">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>
