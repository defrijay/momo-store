<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";


export default {
  name: "About",
  components: {
    Navbar,
    Footer
  },
};
</script>

<template>
<Navbar/>    
<section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Fashionmu, Identitasmu</h2>
            <p class="mb-4">
              Di Momo Mart, kami percaya bahwa fashion bukan hanya sekedar pakaian – ini adalah cara untuk mengekspresikan siapa dirimu. 
              Kami menghadirkan desain yang memadukan elegansi abadi dengan tren terkini, memastikan kamu selalu merasa percaya diri dan unik.
            </p>
            <p class="mb-4">
              Sebagai inovator dan kreator, kami berdedikasi untuk menciptakan koleksi yang merayakan keberagaman dan inklusivitas. 
              Baik untuk kenyamanan sehari-hari atau momen spesial, koleksi kami dirancang untuk melengkapi setiap langkah hidupmu.
            </p>
            <p>
              Bergabunglah bersama kami untuk mendefinisikan ulang fashion – satu gaya dalam satu waktu. Biarkan lemari pakaianmu menjadi 
              kanvas dari ide-ide paling berani milikmu.
            </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
        </div>
    </div>
</section>
<Footer/>
</template>
