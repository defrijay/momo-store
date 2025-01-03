<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "DetailProduct",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: null, // Menyimpan detail produk
      isLoading: true, // Indikator loading
      error: null, // Menyimpan pesan error jika ada
      quantity: 1,
    };
  },
  methods: {
    maskName(name) {
      if (!name) return "";
      return name[0] + "*".repeat(name.length - 1);
    },
    incrementQuantity() {
      if (this.quantity < this.product.countInStock) {
        this.quantity++;
      }
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    formatRupiah(number) {
      return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace("IDR", "").trim();
    },
  },
  async mounted() {
    const productId = this.$route.params.id; // Ambil ID dari URL
    try {
      const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
      this.product = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error("Error fetching product details:", error);
      this.error = "Gagal memuat detail produk.";
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <Navbar />
  <div v-if="isLoading" class="text-center p-8">Memuat detail produk...</div>
  <div v-else-if="error" class="text-center p-8 text-red-500">{{ error }}</div>
  <div v-else>
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-6">
          <img 
            :src="`/Images/${product.category.name}/${product.image}`" 
            :alt="product.name" 
            class="w-64 h-64 object-cover rounded-lg mb-4 mx-auto"
          />
        </div>

        
        <div class="lg:col-span-6">
          <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
          <p class="text-gray-500 text-sm mb-2">Category: {{ product.category.name }}</p>
          <div class="flex items-center mb-4">
            <span class="text-yellow-500 mr-2">{{ product.rating }} / 5</span>
            <span class="text-gray-500 text-sm">{{ product.numReviews }} reviews</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">{{ formatRupiah(product.price) }}</h2>
          <p class="text-gray-600 text-lg mb-6">{{ product.description }}</p>
          <p class="text-gray-500 mb-4">Available Stock: {{ product.countInStock }}</p>

          
          <div class="flex items-center space-x-4 mb-6">
            <button 
              class="bg-gray-300 px-4 py-2 rounded text-lg font-bold" 
              @click="decrementQuantity"
              :disabled="quantity === 1"
            >
              -
            </button>
            <span class="text-xl">{{ quantity }}</span>
            <button 
              class="bg-gray-300 px-4 py-2 rounded text-lg font-bold" 
              @click="incrementQuantity"
              :disabled="quantity === product.countInStock"
            >
              +
            </button>
          </div>

          <button 
            class="bg-blue-500 text-white px-4 py-2 rounded w-1/2"
            :disabled="product.countInStock === 0"
          >
            Add to Cart
          </button>
        </div>
      </div>

      
      <div class="mt-12">
        <h2 class="text-xl font-bold mb-6">Customer Reviews</h2>
        <div v-if="product.reviews.length === 0" class="text-gray-500">
          There are no reviews for this product yet.
        </div>
        <div v-else class="space-y-6">
          <div v-for="review in product.reviews" :key="review._id" class="p-4 bg-gray-100 rounded-lg">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">{{ maskName(review.name) }}</h3>
              <span class="text-yellow-500">{{ review.rating }} / 5</span>
            </div>
            <p class="text-gray-600 mt-2">{{ review.comment }}</p>
            <p class="text-gray-400 text-sm mt-1">Ditulis pada: {{ new Date(review.createdAt).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>