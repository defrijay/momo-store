<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';

</script>

<template>
    <Navbar />
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-8 bg-slate-400">
        <div class="rounded-lg justify-center mb-4">
            <div id="default-carousel" class="relative w-full mb-8" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg"
                            class="w-full h-full object-cover" alt="...">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg"
                            class="w-full h-full object-cover" alt="...">
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg"
                            class="w-full h-full object-cover" alt="...">
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg"
                            class="w-full h-full object-cover" alt="...">
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg"
                            class="w-full h-full object-cover" alt="...">
                    </div>
                </div>
                <!-- Slider indicators -->
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                        data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                        data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                        data-carousel-slide-to="2"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                        data-carousel-slide-to="3"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                        data-carousel-slide-to="4"></button>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div class="flex space-x-4 justify-between">
                <div class="flex flex-col space-y-4 items-center">
                    <form class="">
                        <div class="relative flex items-center max-w-[8rem]">
                            <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input"
                                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" data-input-counter data-input-counter-min="1"
                                data-input-counter-max="50" aria-describedby="helper-text-explanation"
                                class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="999" value="5" required />
                            <button type="button" id="increment-button" data-input-counter-increment="quantity-input"
                                class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div class="flex space-x-4">
                        <h1 class="text-2xl">Subtotal</h1>
                        <h1 class="text-xl">Rp.90.000,00</h1>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center space-y-2">
                    <button type="button"
                        class="w-32 h-12 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 18 21">
                            <path
                                d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        Keranjang
                    </button>
                    <button type="button"
                        class="w-32 h-12 flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Beli
                        <svg class="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>


        <div class="h-auto rounded-lg bg-gray-200 lg:col-span-2">
            <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl class="-my-3 divide-y divide-gray-100 text-sm">
                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Title</dt>
                        <dd class="text-gray-700 sm:col-span-2">Mr</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Name</dt>
                        <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Occupation</dt>
                        <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Salary</dt>
                        <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                    </div>

                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt class="font-medium text-gray-900">Bio</dt>
                        <dd class="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                            doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                            aspernatur neque molestiae labore aliquam soluta architecto?
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-4 p-8">
        <h1 class="text-4xl font-bold">Ulasan Produk</h1>
        <div class="grid grid-cols-2 gap-4">
            <!-- Card User -->
            <div class="flex">
                <div class="bg-slate-700 rounded-xl p-4">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex space-x-4">
                            <img class="w-10 h-10 rounded-full" src=".." alt="">
                            <div class="font-medium dark:text-white">
                                <div>Jese Leos</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">6 hari lalu</div>
                            </div>
    
                        </div>
                        <!-- Dropdown menu -->
                        <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 "
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
    
                        <!-- Dropdown menu -->
                        <div id="dropdownDotsHorizontal"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
                                    link</a>
                            </div>
                        </div>
                    </div>
    
                    <div class="flex mb-4 text-yellow-400">
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
    
                    <p class="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nulla rerum vel vitae? Ut expedita
                        accusamus
                        adipisci ratione, eaque error.
                    </p>
                </div>
            </div>
            <div class="flex">
                <div class="bg-slate-700 rounded-xl p-4">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex space-x-4">
                            <img class="w-10 h-10 rounded-full" src=".." alt="">
                            <div class="font-medium dark:text-white">
                                <div>Jese Leos</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">6 hari lalu</div>
                            </div>
    
                        </div>
                        <!-- Dropdown menu -->
                        <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 "
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
    
                        <!-- Dropdown menu -->
                        <div id="dropdownDotsHorizontal"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
                                    link</a>
                            </div>
                        </div>
                    </div>
    
                    <div class="flex mb-4 text-yellow-400">
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <p class="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nulla rerum vel vitae? Ut expedita
                        accusamus
                        adipisci ratione, eaque error.
                    </p>
                </div>
            </div>
            <div class="flex">
                <div class="bg-slate-700 rounded-xl p-4">
                    <div class="flex justify-between items-center mb-4">
                        <div class="flex space-x-4">
                            <img class="w-10 h-10 rounded-full" src=".." alt="">
                            <div class="font-medium dark:text-white">
                                <div>Jese Leos</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">6 hari lalu</div>
                            </div>
    
                        </div>
                        <!-- Dropdown menu -->
                        <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal"
                            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 "
                            type="button">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 16 3">
                                <path
                                    d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
    
                        <!-- Dropdown menu -->
                        <div id="dropdownDotsHorizontal"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownMenuIconHorizontalButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-2">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
                                    link</a>
                            </div>
                        </div>
                    </div>
    
                    <div class="flex mb-4 text-yellow-400">
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
    
                    <p class="text-white text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nulla rerum vel vitae? Ut expedita
                        accusamus
                        adipisci ratione, eaque error.
                    </p>
                </div>
            </div>
        </div>
        <a href="#" class="flex justify-end">
            <span>Selengkapnya</span>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
        </a>
    </div>

    <div class="grid grid-cols-1 gap-4 p-8">
        <!-- Recommendation Article -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div class="rounded-xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 p-2 space-y-1">
                <h1 class="text-4xl text-white font-bold mb-8">Rekomendasi Produk</h1>
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Card 1 -->
                    <div class="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                        <a href="#" class="group relative block overflow-hidden">
                            <button
                                class="absolute start-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75">
                                <span class="sr-only">Wishlist</span>
                                <h1 class="text-xs">Category</h1>
                            </button>
                            <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                alt="Wireless Headphones"
                                class="h-28 w-full object-cover transition duration-500 group-hover:scale-105" />
                            <div class="relative border border-gray-100 bg-white p-4 rounded-b-xl">
                                <p class="text-sm text-gray-700">
                                    $49.99
                                    <span class="text-xs text-gray-400 line-through">$80</span>
                                </p>
                                <h3 class="mt-1 text-sm font-bold text-gray-900">Wireless Headphones</h3>
                                <p class="mt-1 line-clamp-2 text-xs text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure
                                    obcaecati.
                                </p>
                                <form class="mt-2 flex gap-2">
                                    <button type="button"
                                        class="block w-full rounded text-xs font-medium text-blue-500 text-start transition hover:scale-105">
                                        Read More
                                    </button>
                                </form>
                            </div>
                        </a>
                    </div>
                    <!-- Tambahkan kartu tambahan seperti ini -->
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation example" class="flex justify-center mt-4">
            <ul class="flex items-center -space-x-px h-8 text-sm">
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page"
                        class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>

        </nav>
    </div>
    <Footer />
</template>