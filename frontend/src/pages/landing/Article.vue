<script>
import axios from "axios";

export default {
  name: "Articles",
  data() {
    return {
      articles: [],
      currentIndex: 0, // Tambahkan currentIndex di sini
    };
  },
  computed: {
    limitedArticles() {
      return this.articles.slice(0, 6);
    },
  },
  methods: {
    limitedIsiArtikel(text) {
      const words = text.split(" ");
      return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : text;
    },
    formatTanggal(tanggal) {
      const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];

      const date = new Date(tanggal);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${day} ${month} ${year}`;
    },
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:5000/api/articles");
      this.articles = response.data;
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  },
};
</script>

<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-0">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="container mx-auto py-8">
        <h2 class="text-xl font-bold mb-4">Artikel Pilihan</h2>
        <!-- Card Carousel -->
        <div class="relative">
          <!-- Artikel Container -->
          <div class="flex overflow-hidden">
            <div v-for="(article, index) in limitedArticles" :key="article._id" class="w-full flex-shrink-0">
              <div class="relative bg-gray-300 rounded-lg overflow-hidden py-8 px-10"
                :style="{
                  backgroundImage: `url('/Images/Articles/${article.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }">
                
                <div class="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full">
                  <span v-for="(tag, index) in article.hastag" :key="index"
                    class="absolute top-2 left-2 text-xs font-bold uppercase bg-gray-700 text-white px-2 py-1 rounded-lg">
                    {{ tag }}
                  </span>
                </div>
                <div class="flex flex-col justify-between h-full w-full md:w-1/2 pt-20 px-10">
                  <div>
                    <div class="flex items-center text-sm text-white space-x-2">
                      <i class="bi bi-person-circle"></i>
                      <span>by {{ article.penulis }}</span>
                      <i class="bi bi-calendar"></i>
                      <span>{{ formatTanggal(article.tanggalRilis) }}</span>
                    </div>
                    <h2 class="text-2xl font-bold text-white mt-4">{{ article.judul }}</h2>
                    <p class="text-sm text-white mt-2">{{ limitedIsiArtikel(article.isiArtikel) }}</p>
                  </div>
                  <button class="text-blue-500 mt-4 font-bold flex items-center">
                    Read More <i class="bi bi-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Article Card -->
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="article in limitedArticles" :key="article._id"
            class="bg-white shadow-lg border-2 rounded-lg p-4 flex flex-col justify-between">
            <div class="relative h-40 w-full rounded-lg overflow-hidden mb-4">
              <img :src="`/Images/Articles/${article.image}`" :alt="article.judul" class="mx-auto h-full" />
              <span v-if="article.hastag.length > 0"
                class="absolute top-2 left-2 text-xs font-bold uppercase bg-gray-700 text-white px-2 py-1 rounded-lg">
                {{ article.hastag[0] }}
              </span>
            </div>
            <div>
              <h3 class="text-lg font-bold">{{ article.judul }}</h3>
              <p class="text-sm text-gray-600 mt-2">{{ limitedIsiArtikel(article.isiArtikel) }}</p>
            </div>
            <router-link to="/detail/artikel">
              <button class="text-blue-500 mt-4 font-medium flex items-center">
                Read More <i class="bi bi-arrow-right ml-2"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full text-center">
        <router-link to="/article" type="button"
          class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show
          more</router-link>
      </div>
    </div>
  </section>
</template>

