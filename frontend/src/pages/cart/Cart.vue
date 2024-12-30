<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import Navbar from '../../components/Navbar.vue';

</script>

<template>
    <Navbar />
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="rounded-lg bg-gray-200 lg:col-span-2 p-8 m-8">
            <div class="mx-auto max-w-screen-xl">
                <div class="mx-auto max-w-3xl">
                    <h1 class="text-2xl text-black font-bold">Keranjang</h1>
                    <header class="text-center">
                        <h1 class="text-xl font-bold text-gray-900 sm:text-3xl"></h1>
                    </header>
                    <div class="mt-4">
                        <ul class="space-y-4">
                            <li class="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                    alt="" class="size-16 rounded object-cover" />

                                <div>
                                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt class="inline">Size:</dt>
                                            <dd class="inline">XXS</dd>
                                        </div>

                                        <div>
                                            <dt class="inline">Color:</dt>
                                            <dd class="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="flex flex-1 items-center justify-end gap-2">
                                    <form>
                                        <label for="Line1Qty" class="sr-only"> Quantity </label>

                                        <input type="number" min="1" value="1" id="Line1Qty"
                                            class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                    </form>
                                    <button class="text-gray-600 transition hover:text-red-600">
                                        <span class="sr-only">Remove item</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>

                                </div>
                            </li>

                            <li class="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                    alt="" class="size-16 rounded object-cover" />

                                <div>
                                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt class="inline">Size:</dt>
                                            <dd class="inline">XXS</dd>
                                        </div>

                                        <div>
                                            <dt class="inline">Color:</dt>
                                            <dd class="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="flex flex-1 items-center justify-end gap-2">
                                    <form>
                                        <label for="Line2Qty" class="sr-only"> Quantity </label>

                                        <input type="number" min="1" value="1" id="Line2Qty"
                                            class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                    </form>

                                    <button class="text-gray-600 transition hover:text-red-600">
                                        <span class="sr-only">Remove item</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </li>

                            <li class="flex items-center gap-4">
                                <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                    alt="" class="size-16 rounded object-cover" />

                                <div>
                                    <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                        <div>
                                            <dt class="inline">Size:</dt>
                                            <dd class="inline">XXS</dd>
                                        </div>

                                        <div>
                                            <dt class="inline">Color:</dt>
                                            <dd class="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div class="flex flex-1 items-center justify-end gap-2">
                                    <form>
                                        <label for="Line3Qty" class="sr-only"> Quantity </label>

                                        <input type="number" min="1" value="1" id="Line3Qty"
                                            class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                                    </form>

                                    <button class="text-gray-600 transition hover:text-red-600">
                                        <span class="sr-only">Remove item</span>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-lg flex justify-center items-betw m-8">
            <div class="relative space-y-12 w-screen max-w-md" aria-modal="true" role="dialog" tabindex="-1">
                <div class="mt-4 space-y-6 p-8 rounded-lg bg-gray-200">
                    <ul class="space-y-4 text-black">
                        <li class="flex items-center justify-between gap-4">
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value=""
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-checkbox" class="ms-4 text-sm font-medium text-black">Pilih Semua
                                    Barang</label>
                            </div>
                        </li>
                        <li class="flex items-center gap-4">
                            <button class="text-gray-600 transition hover:text-red-600">
                                <span class="sr-only">Remove item</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                            <label class="text-sm font-medium text-black">Hapus Semua Barang</label>
                        </li>
                    </ul>
                </div>

                <div class="mt-4 space-y-6 p-8 rounded-lg bg-gray-200">
                    <ul class="space-y-4 text-black">
                        <h1 class="text-2xl font-bold">Ringkasan Keranjang</h1>
                        <li class="flex items-center justify-between gap-4">
                            <h3 class="text-xs">Jumlah Barang : </h3>
                            <h3 class="text-xs">3 Buah</h3>
                        </li>
                        <li class="flex items-center justify-between gap-4">
                            <h3 class="text-xs">Total Barang : </h3>
                            <h3 class="text-xs">Rp. 640.000,00</h3>
                        </li>
                    </ul>

                    <div class="space-y-4 text-center">
                        <a href="#"
                            class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                            Beli Barang (3)
                        </a>

                        <a href="#"
                            class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600">
                            Continue shopping
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 gap-4 m-8 p-8 rounded-lg bg-slate-500">
        <!-- Recommendation Article -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div class="rounded-xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-6 p-2 space-y-1">
                <h1 class="text-4xl text-white font-bold mb-8">Produk Lainnya</h1>
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
        <div class="flex items-center justify-between px-8">
            <nav aria-label="Page navigation example" class="flex justify-center mt-4">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a href="#"
                            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 1 1 5l4 4" />
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
                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <a href="" class="flex space-x-2 text-blue-500">
                <span>
                    Lainnya
                </span>
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
            </a>
        </div>

    </div>
    <Footer />
</template>