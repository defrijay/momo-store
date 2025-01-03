<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "DetailArticle",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      article: null, // Menyimpan detail artikel
      recommendedArticles: [], // Menyimpan artikel rekomendasi
      isLoading: true, // Indikator loading
      error: null, // Menyimpan pesan error jika ada
    };
  },
  methods: {
    async fetchArticleDetails(articleId) {
      try {
        this.isLoading = true;
        const response = await axios.get(`http://localhost:5000/api/articles/${articleId}`);
        const fetchedArticle = response.data;

        // Pastikan isiArtikel berupa array paragraf
        if (typeof fetchedArticle.isiArtikel === "string") {
          fetchedArticle.isiArtikel = fetchedArticle.isiArtikel.split("\n").map((para) => para.trim());
        }

        this.article = fetchedArticle;
        this.error = null;
        this.isLoading = false;

        // Muat rekomendasi artikel
        this.fetchRecommendedArticles(articleId);
      } catch (error) {
        console.error("Error fetching article details:", error);
        this.error = "Gagal memuat detail artikel.";
        this.isLoading = false;
      }
    },
    async fetchRecommendedArticles(currentArticleId) {
      try {
        const response = await axios.get("http://localhost:5000/api/articles");
        // Filter artikel yang berbeda dengan artikel saat ini
        this.recommendedArticles = response.data.filter(
          (item) => item._id !== currentArticleId
        );
      } catch (error) {
        console.error("Error fetching recommended articles:", error);
        this.error = "Gagal memuat rekomendasi artikel.";
      }
    },
  },
  async mounted() {
    const articleId = this.$route.params.id; // Ambil ID dari URL
    this.fetchArticleDetails(articleId);
  },
  watch: {
    // Deteksi perubahan ID di route
    "$route.params.id"(newId) {
      this.fetchArticleDetails(newId);
    },
  },
};
</script>



<template>
  <Navbar />
  <div class="bg-gray-100 min-h-screen py-8">
    <div v-if="isLoading" class="text-center p-8">Memuat detail artikel...</div>
    <div v-else-if="error" class="text-center p-8 text-red-500">{{ error }}</div>
    <div v-else class="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <!-- Hastag -->
        <div class="flex space-x-2 mb-4">
          <span
            v-for="(tag, index) in article.hastag"
            :key="index"
            class="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Judul Artikel -->
        <h1 class="text-2xl font-bold mb-4">{{ article.judul }}</h1>

        <!-- Informasi Penulis -->
        <div class="bg-white p-4 rounded-lg mb-6">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <img
                :src="article.penulis.image || 'https://via.placeholder.com/40'"
                alt="Author"
                class="rounded-full h-10 w-10"
              />
              <div>
                <p class="text-sm font-bold text-gray-800 flex items-center">
                  {{ article.penulis }}
                  <a href="#" class="text-blue-500 ml-2 text-sm">Follow</a>
                </p>
                <p class="text-xs text-gray-500">
                  Published in {{ article.mediaPenerbit }} &bull;
                  {{ new Date(article.tanggalRilis).toLocaleDateString() }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Gambar Artikel -->
        <div class="mb-6">
          <img
            :src="`/Images/Articles/${article.image}`"
            alt="Artikel"
            class="rounded-lg w-full object-cover"
          />
        </div>

        <!-- Isi Artikel -->
      <div class="text-gray-700 space-y-4">
        <p v-for="(paragraph, index) in article.isiArtikel" :key="index" class="text-justify">
          {{ paragraph }}
        </p>
        <p class="text-gray-600 text-lg mb-6">{{ paragraph }}</p>
      </div>

      </div>

      <!-- Rekomendasi Artikel -->
      <aside v-if="recommendedArticles.length" class="bg-white rounded-lg shadow p-6">
        <h2 class="text-lg font-bold mb-4">Artikel Lainnya</h2>
        <ul class="space-y-4">
          <li
            v-for="(recommended, index) in recommendedArticles"
            :key="index"
            class="flex items-center space-x-4"
          >
            <img
              :src="`/Images/Articles/${recommended.image}`"
              alt="Artikel"
              class="rounded-lg h-16 w-16 object-cover"
            />
            <div>
              <router-link
                :to="`/detail-article/${recommended._id}`"
                class="font-bold text-sm text-gray-800 hover:underline"
              >
                {{ recommended.judul }}
              </router-link>
              <p class="text-xs text-gray-500">{{ recommended.paragraph }}</p>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  </div>
  <Footer />
</template>
