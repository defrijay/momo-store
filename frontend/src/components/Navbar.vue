<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Momo Mart</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          <ul class="flex flex- font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Tentang</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Artikel</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Produk</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Kontak</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-between py-4 px-4">
        <div class="relative flex-grow max-w-lg mx-auto">
          <input
            type="text"
            id="search-navbar"
            class="block w-full py-2 px-12 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9"
            placeholder="Search..."
          />
          <div class="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none">
            <svg
              class="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
        </div>
        <ul class="flex items-center space-x-4 rtl:space-x-reverse">
          <li>
            <a
              class="rounded-md px-2 py-2 text-sm font-medium text-teal-600 h-9 flex items-center justify-center"
              href="#"
            >
            <svg class="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg> 
            </a>
          </li>
          <li>
            <a
              class="rounded-md bg-teal-600 px-5 py-2 text-sm font-medium text-white shadow h-9 flex items-center justify-center"
              href="#"
            >
              Login
            </a>
          </li>
          <li>
            <a
              class="rounded-md bg-gray-100 px-5 py-2 text-sm font-medium text-teal-600 h-9 flex items-center justify-center"
              href="#"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </template>