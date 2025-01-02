<template>
  <Navbar/>
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
            <div class="bg-gray-300 rounded-lg w-full h-80 mb-4"></div>
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
                  <span class="text-gray-800 font-bold text-lg">1</span>
                  <button class="bg-gray-400 text-white px-3 py-1 rounded">+</button>
                </div>
                <span class="text-gray-500 text-sm">XXX Jumlah</span>
              </div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-gray-600 font-bold">Subtotal</span>
                <span class="text-gray-800 font-bold text-lg">Rp. xxx.xxx</span>
              </div>
              <div class="flex space-x-4">
                <button class="bg-gray-500 text-white px-4 py-2 rounded w-1/2">Keranjang</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded w-1/2">Beli</button>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <h1 class="text-2xl font-bold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
            <div class="flex items-center space-x-4 mb-4">
              <div class="flex items-center">
                <i class="bi bi-star-fill text-yellow-500"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
              </div>
              <span class="text-gray-500 text-sm">XXX Terjual</span>
              <button class="text-gray-500 text-sm flex items-center">
                <i class="bi bi-chat-dots mr-1"></i> Chat Penjual
              </button>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Rp. X.XXX</h2>
            <ul class="list-disc list-inside text-gray-600 text-lg mb-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Incididunt ut labore et dolore magna aliqua.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Posuere morbi leo urna molestie.</li>
              <li>Vel pharetra vel turpis nunc eget lorem dolor sed.</li>
              <li>Posuere morbi leo urna molestie.</li>
              <li>Posuere morbi leo urna molestie.</li>
              <li>Vel pharetra vel turpis nunc eget lorem dolor sed.</li>
              <li>Posuere morbi leo urna molestie.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 p-8">
      <div class="container mx-auto bg-white p-6 rounded-lg shadow">
        <div class="border-b pb-4 mb-6">
          <h2 class="text-xl font-bold">Spesifikasi Produk</h2>
          <p class="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
            turpis nunc eget lorem dolor sed.
          </p>
        </div>

        <div class="space-y-6">
          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>

          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>

          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>

          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>

          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>

          <div class="border-b pb-4">
            <h3 class="text-lg font-bold mb-2">Lorem ipsum dolor sit</h3>
            <p class="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Vel pharetra vel
              turpis nunc eget lorem dolor sed.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 p-8">
      <div class="container mx-auto bg-white p-6 rounded-lg shadow">
        <div class="mb-6">
          <h2 class="text-xl font-bold">Forum Diskusi</h2>
          <p class="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>

        <div class="flex items-center space-x-4 bg-gray-200 p-4 rounded-lg mb-6">
          <button class="bg-gray-500 text-white px-4 py-2 rounded">Tulis Pertanyaan</button>
          <input
            type="text"
            placeholder="Masih bingung dengan produknya? Ketik disini untuk berdiskusi..."
            class="flex-1 bg-gray-300 px-4 py-2 rounded-lg text-sm focus:outline-none"
          />
          <button class="text-gray-500">
            <i class="bi bi-chat-dots-fill text-lg"></i>
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="i in 10" :key="i" class="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
            <div>
              <div class="flex items-center text-sm text-gray-700 mb-1">
                <i class="bi bi-person-circle text-lg mr-2"></i>
                <span>Nama Pelanggan</span>
                <span class="mx-2">•</span>
                <span>XXX Februari 2024</span>
              </div>
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?
              </p>
            </div>
            <button class="text-gray-500">
              <i class="bi bi-chevron-down"></i>
            </button>
          </div>
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

    <div class="bg-gray-100 p-8">
      <div class="container mx-auto bg-white p-6 rounded-lg shadow">
        <div class="mb-6">
          <h2 class="text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="i in 10" :key="i" class="bg-gray-200 rounded-lg overflow-hidden shadow">
            <div class="bg-gray-300 h-40 w-full"></div>
            <div class="p-4">
              <h3 class="text-sm font-bold text-gray-700 mb-1">Lorem ipsum dolor sit amet</h3>
              <p class="text-gray-600 text-sm mb-2">Rp. X.XXX</p>
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <i class="bi bi-star-fill text-yellow-500"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
                <i class="bi bi-star text-gray-300"></i>
                <span class="ml-2">XXX Terjual</span>
              </div>
              <p class="text-xs text-gray-500">lorem ipsum dolor</p>
            </div>
          </div>
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
</template>

<script setup>
import Navbar from '../../components/Navbar.vue';

</script>

<style scoped></style>
