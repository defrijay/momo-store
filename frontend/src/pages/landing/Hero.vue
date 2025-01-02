<template>
    <section class="bg-white dark:bg-gray-900">
      <div class="bg-gray-200 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
            <span id="typewriting-text" class="typewriting"></span>
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Temukan gaya fashion Anda dengan koleksi terbaik kami untuk semua musim dan kesempatan.
          </p>
          <router-link to="/product"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Mulai Belanja
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </router-link>
          <!-- <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Lihat Koleksi
          </a> -->
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/Images/LandingPage/Hero-2.jpg" alt="mockup" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    mounted() {
      this.initTypewriting();
    },
    methods: {
      initTypewriting() {
        const textArray = [
          "Discover the latest trends.",
          "Dress to impress.",
          "Find your perfect style.",
        ];
        const typingSpeed = 100; // Kecepatan mengetik (ms)
        const pauseBetween = 1500; // Waktu jeda antar teks (ms)
        const element = document.getElementById("typewriting-text");
  
        let textIndex = 0;
        let charIndex = 0;
  
        function type() {
          if (charIndex < textArray[textIndex].length) {
            element.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
          } else {
            setTimeout(erase, pauseBetween);
          }
        }
  
        function erase() {
          if (charIndex > 0) {
            element.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, typingSpeed / 2);
          } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed);
          }
        }
  
        type();
      },
    },
  };
  </script>
  
  <style scoped>
  .typewriting {
    border-right: 2px solid;
    animation: blink 0.7s step-end infinite;
  }
  
  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
  </style>
  