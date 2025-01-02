<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-0">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="container mx-auto py-8">
        <h2 class="text-xl font-bold mb-4">Artikel Pilihan</h2>
        <div class="relative bg-gray-300 rounded-lg overflow-hidden py-8 px-10">
          <div
            class="absolute top-4 left-4 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-md mx-10"
          >
            Category
          </div>
  
          <div class="flex flex-col justify-between h-full w-full md:w-1/2 pt-20 px-10">
            <div>
              <div class="flex items-center text-sm text-gray-700 space-x-2">
                <i class="bi bi-person-circle"></i>
                <span>by Admin</span>
                <i class="bi bi-calendar"></i>
                <span>29 Maret 2024</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mt-4">Produk Tumbler Tahan Api</h2>
              <p class="text-sm text-gray-600 mt-2">Berikut 5 tumbler favorit anak muda yang tahan api...</p>
            </div>
            <button class="text-blue-500 mt-4 font-medium flex items-center">
              Read More <i class="bi bi-arrow-right ml-2"></i>
            </button>
          </div>
  
          <!-- navigasi button -->
          <div class="absolute inset-y-0 left-4 flex items-center">
            <button class="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <i class="bi bi-chevron-left"></i>
            </button>
          </div>
          <div class="absolute inset-y-0 right-4 flex items-center">
            <button class="bg-white p-3 rounded-full shadow-md hover:bg-gray-100">
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- <div class="container mx-auto py-8">
        <h2 class="text-xl font-bold mb-4">Category</h2>
        <div class="flex justify-between space-x-4">
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
          <div class="relative bg-gray-300 rounded-lg h-20 w-20 overflow-hidden">
            <img src="https://via.placeholder.com/80" alt="Category" class="object-cover w-full h-full" />
          </div>
        </div>
      </div> -->
  
      <!-- <div class="container mx-auto py-8">
        <div class="flex space-x-4">
          <input
            type="text"
            placeholder="Cari artikel MomoMart"
            class="flex-1 bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select class="bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Jenis Berita</option>
            <option>Terbaru</option>
            <option>Populer</option>
          </select>
        </div>
      </div> -->
  
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div class="bg-gray-300 rounded-lg p-4 flex flex-col justify-between" v-for="i in 8" :key="i">
            <div class="relative h-40 w-full rounded-lg overflow-hidden mb-4">
              <img src="https://via.placeholder.com/300x200" alt="Artikel" class="object-cover w-full h-full" />
              <span class="absolute top-2 left-2 text-xs font-bold uppercase bg-gray-700 text-white px-2 py-1 rounded-lg">
                Category
              </span>
            </div>
            <div>
              <h3 class="text-lg font-bold">Produk Tumbler Tahan Api</h3>
              <p class="text-sm text-gray-600 mt-2">Berikut 5 tumbler favorit anak muda yang tahan api...</p>
            </div>
            <router-link to="/detail/artikel">
              <button class="text-blue-500 mt-4 font-medium flex items-center">
                Read More <i class="bi bi-arrow-right ml-2"></i>
              </button>
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="container mx-auto py-8 flex justify-center">
        <nav aria-label="Page navigation example">
          <ul class="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                >Previous</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
  </template>