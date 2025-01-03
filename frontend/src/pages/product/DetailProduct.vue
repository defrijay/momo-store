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
    };
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
          <!-- Gambar utama -->
          <img 
            :src="`/Images/${product.category.name}/${product.image}`" 
            :alt="product.name" 
            class="w-64 h-64 object-cover rounded-lg mb-4 mx-auto"
          />
        </div>
        <div class="lg:col-span-6">
          <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
          <p class="text-gray-500 text-sm mb-2">Kategori: {{ product.category.name }}</p>
          <div class="flex items-center mb-4">
            <span class="text-yellow-500 mr-2">{{ product.rating }} / 5</span>
            <span class="text-gray-500 text-sm">{{ product.numReviews }} ulasan</span>
          </div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Rp. {{ product.price }}</h2>
          <p class="text-gray-600 text-lg mb-6">{{ product.description }}</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded w-1/2">Beli Sekarang</button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<!-- <template> 
  <Navbar />
  <div v-if="isLoading" class="text-center p-8">Memuat detail produk...</div>
  <div v-else-if="error" class="text-center p-8 text-red-500">{{ error }}</div>
  <div v-else></div>
    <div>
      <div class="bg-gray-200 p-4">
        <div class="container mx-auto">
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <label class="text-sm font-bold">Cari Produk</label>
              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="Cari produk"
                  class="bg-gray-300 text-sm text-gray-700 px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button class="bg-gray-500 text-white px-4 py-2 rounded-r-lg">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div>
              <i class="bi bi-cart text-2xl text-gray-700"></i>
            </div>
          </div>
  
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-2">
              <label class="text-sm font-bold">Urutkan</label>
              <div class="flex space-x-2">
                <button class="bg-gray-700 text-white px-4 py-2 rounded font-medium">Terbaru</button>
                <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded font-medium">Terkait</button>
                <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded font-medium">Terlaris</button>
                <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded font-medium flex items-center">
                  Harga <i class="bi bi-chevron-down ml-1"></i>
                </button>
              </div>
            </div>
  
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium">1/20</span>
              <div class="flex space-x-2">
                <button class="bg-gray-300 text-gray-700 px-3 py-2 rounded-l-lg font-medium">
                  <i class="bi bi-chevron-left"></i>
                </button>
                <button class="bg-gray-700 text-white px-3 py-2 rounded-r-lg font-medium">
                  <i class="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 min-h-screen p-8">
        <div class="container mx-auto">
          <div class="text-sm text-gray-500 mb-6">Home > lorem > Ipsum > dolor > Ipsum > Ipsum > Ipsum</div>
  
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-6">
              <img :src="product.image" alt="Produk" class="bg-gray-300 rounded-lg w-full h-80 mb-4 object-cover" />
              <div class="flex space-x-4">
                <div class="bg-gray-300 rounded-lg w-24 h-24"></div>
                <div class="bg-gray-300 rounded-lg w-24 h-24"></div>
                <div class="bg-gray-300 rounded-lg w-24 h-24"></div>
                <div class="bg-gray-300 rounded-lg w-24 h-24"></div>
              </div>
  
              <div class="bg-gray-200 p-4 rounded-lg mt-4">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center space-x-2">
                    <button class="bg-gray-400 text-white px-3 py-1 rounded">-</button>
                    <span class="text-gray-800 font-bold text-lg">{{ product.countInStock }}</span>
                    <button class="bg-gray-400 text-white px-3 py-1 rounded">+</button>
                  </div>
                  <span class="text-gray-500 text-sm">{{ product.countInStock }} Jumlah</span>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-gray-600 font-bold">Subtotal</span>
                  <span class="text-gray-800 font-bold text-lg">Rp. {{ product.price }}</span>
                </div>
                <div class="flex space-x-4">
                  <button class="bg-gray-500 text-white px-4 py-2 rounded w-1/2">Keranjang</button>
                  <button class="bg-blue-500 text-white px-4 py-2 rounded w-1/2">Beli</button>
                </div>
              </div>
            </div>
  
            <div class="lg:col-span-6">
              <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
              <div class="flex items-center space-x-4 mb-4">
                <div class="flex items-center">
                  <i class="bi bi-star-fill text-yellow-500"></i>
                  <i class="bi bi-star text-gray-300"></i>
                  <i class="bi bi-star text-gray-300"></i>
                  <i class="bi bi-star text-gray-300"></i>
                  <i class="bi bi-star text-gray-300"></i>
                </div>
                <span class="text-gray-500 text-sm">{{ Math.floor(Math.random() * 100) + 1 }} Terjual</span>
              </div>
              <h2 class="text-3xl font-bold text-gray-800 mb-4">Rp. {{ product.price }}</h2>
              <ul class="list-disc list-inside text-gray-600 text-lg mb-6">
                <li v-for="desc in product.description" :key="desc">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div class="bg-gray-100 p-8">
        <div class="container mx-auto bg-white p-6 rounded-lg shadow">
          <div class="mb-6">
            <h2 class="text-xl font-bold">Forum Diskusi</h2>
            <p class="text-sm text-gray-600 mt-1">Ulasan dan diskusi terkait produk</p>
          </div>
  
          <div v-for="review in product.reviews" :key="review.id" class="bg-gray-200 p-4 rounded-lg mb-4">
            <div class="flex items-center text-sm text-gray-700 mb-2">
              <i class="bi bi-person-circle text-lg mr-2"></i>
              <span>{{ review.user }}</span>
              <span class="mx-2">•</span>
              <span>{{ review.date }}</span>
            </div>
            <p class="text-sm text-gray-600">{{ review.comment }}</p>
          </div>
  
          <div class="flex justify-center items-center space-x-2 mt-6">
            <button class="bg-gray-300 px-3 py-2 rounded-l-lg">&lt;</button>
            <button class="bg-gray-500 text-white px-3 py-2">1</button>
            <button class="bg-gray-300 px-3 py-2">2</button>
            <button class="bg-gray-300 px-3 py-2">3</button>
            <button class="bg-gray-300 px-3 py-2">4</button>
            <button class="bg-gray-300 px-3 py-2">5</button>
            <button class="bg-gray-300 px-3 py-2">...</button>
            <button class="bg-gray-300 px-3 py-2 rounded-r-lg">&gt;</button>
          </div>
        </div>
      </div>
  
    </div>
  <Footer />
  </template> -->