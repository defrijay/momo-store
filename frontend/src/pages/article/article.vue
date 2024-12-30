<template>
  <div>
    <Navbar />

    <section class="p-8 text-black">

      <!-- drawer component -->
      <div id="drawer-right-example"
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full w-80 dark:bg-gray-800"
        tabindex="-1" aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg
            class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
            viewBox="0 0 20 20">
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>Komentar (18)</h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <div class="space-y-8">
          <div class="bg-slate-700 rounded-xl p-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-4">
                <img class="w-10 h-10 rounded-full" src=".." alt="">
                <div class="font-medium dark:text-white">
                  <h1 class="font-bold">Jese Leos</h1>
                </div>
              </div>
            </div>
    
            <form class="max-w-sm mx-auto space-y-4 mt-4">
              <textarea id="message" rows="4"
                class="block p-2.5 w-full text-sm bg-slate-600 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Apa pendapatmu?"></textarea>
              <div class="flex justify-end">
                <button type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Tanggapi
                </button>
              </div>
            </form>
          </div>
  
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
    
            <p class="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nulla rerum vel vitae? Ut expedita accusamus
              adipisci ratione, eaque error.
            </p>
    
            <form action="" class="flex justify-between mt-4">
              <div class="flex space-x-2 text-white">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475" />
                </svg>
                <p>644</p>
              </div>
    
              <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Balas
              </button>
              
            </form>
          </div>
        </div>



      </div>

      <div>


      </div>

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <!-- News -->
        <div class="rounded-lg bg-gray-200 lg:col-span-2 p-4 space-y-1">
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
          <span
            class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
          <h1 class="text-4xl font-bold">Judul Artikel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus voluptates optio.
          </p>

          <div class="flex">
            <!-- Div Kiri -->
            <div class="flex basis-10/12 items-center space-x-4">
              <img class="w-10 h-10 rounded-full" src=".." alt="">
              <div class="font-medium">
                <div class="space-x-2">
                  <span>John Alexandra</span>
                  <span class="text-gray-900">•</span>
                  <a href="#" class="text-blue-500 cursor-pointer hover:underline">Follow</a>
                </div>
                <div class="text-sm text-gray-500 space-x-2">
                  <span>Published in Fantare</span>
                  <span class="text-gray-900">•</span>
                  <span class="cursor-pointer hover:underline">21 Oktober 2024</span>
                </div>
              </div>
            </div>

            <!-- Div Kanan -->
            <div class="flex basis-2/12 justify-end items-center space-x-2">
              <a href="#"
                class="text-gray-800 dark:text-white border bg-slate-300 border-zinc-400 rounded-sm shadow-md">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#"
                class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-sm shadow-md">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd" />
                </svg>

              </a>
              <a href="#"
                class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-sm shadow-md">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#"
                class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-sm shadow-md">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <hr class="border-t border-gray-400 my-4">
          <div class="flex justify-between items-center">
            <!-- Grup Kiri -->
            <div class="flex space-x-4">
              <span class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                    clip-rule="evenodd" />
                </svg>
                <small>966</small>
              </span>
              <span class="flex items-center space-x-2">
                <button class="text-white font-medium rounded-lg text-sm focus:outline-none" type="button"
                  data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
                  data-drawer-placement="right" aria-controls="drawer-right-example">
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
                <small>
                  655
                </small>
              </span>
            </div>

            <!-- Grup Kanan -->
            <div class="flex space-x-4">
              <span class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <span class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              <span class="flex items-center space-x-2">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          <hr class="border-t border-gray-400 my-4">
          <img class="h-auto max-w-full" src=".." alt="image description">
          <small class="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt molestias aspernatur?
          </small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci ex ratione veniam sapiente?
            Esse amet, deserunt quia dolore quod illum adipisci enim fuga earum, quibusdam similique dolorum odit, fugit
            eius cum ex tempore voluptate explicabo neque obcaecati? Adipisci explicabo voluptates odio consectetur
            maiores architecto, pariatur officia, amet provident debitis temporibus aliquid porro in rerum numquam,
            beatae possimus suscipit nesciunt error ipsam quia. Maiores laboriosam quis, nesciunt consectetur rerum
            ipsum ad voluptates nisi natus adipisci ipsam mollitia dolorum, commodi reiciendis, voluptatum consequuntur
            doloremque quia eos repellat. Doloribus eaque temporibus cum reprehenderit odit error, odio perspiciatis
            earum ducimus beatae, veniam id? Blanditiis delectus natus, earum doloremque deleniti reiciendis incidunt
            quos fugit quaerat amet dolores assumenda voluptatibus cupiditate suscipit, magnam provident quidem eius
            odio ex? Cupiditate nulla quos impedit similique dolorum exercitationem assumenda tenetur laudantium fugit
            ipsum debitis sequi, deserunt iusto eius praesentium, iste unde incidunt et sunt ex molestias velit.
            Veritatis dolore eligendi, dignissimos sunt quos neque! Quasi delectus, unde quod illo placeat veniam esse
            fugit debitis tenetur laboriosam ipsa soluta, quidem eos quos doloribus exercitationem quia culpa. Porro,
            vitae cumque dolorem iure modi deserunt sunt consectetur! Voluptatum natus quidem totam voluptates deserunt
            illo ratione modi fugiat, ut similique ipsam necessitatibus sed accusamus beatae atque voluptatibus eaque
            dolore quo et quisquam qui. Quos nemo officiis eligendi voluptas! Quam minus expedita ducimus similique
            minima, voluptatum praesentium perspiciatis, pariatur quibusdam dolores earum dolor et a, rem distinctio
            repudiandae assumenda cupiditate iste totam unde. In quisquam corrupti officia praesentium asperiores,
            repudiandae, voluptate nisi, enim doloremque illum hic at aliquam laboriosam?
          </p>


        </div>

        <!-- Receomendation News -->
        <div class="rounded-lg bg-gray-200 p-4 space-y-4">
          <span class="flex items-center">
            <span class="text-2xl font-bold pr-4">Rekomendasi Artikel</span>
            <span class="h-px flex-1 bg-black"></span>
          </span>

          <div class="flex flex-col items-center bg-slate-700 rounded-lg shadow md:flex-row md:max-w-xl">
            <img class="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src=".." alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology
                acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <a href="" class="text-blue-700 text-sm">Selengkapnya</a>
            </div>
          </div>

        </div>
      </div>

      <!-- Card Profile -->
      <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        <div class="rounded-lg bg-gray-800 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 p-2 space-y-1">
          <div class="w-full max-w-3xl p-4 rounded-lg shadow sm:p-6 md:p-8">
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                  <div class="flex flex-col md:flex-row items-center md:items-start">
                    <div class="flex-shrink-0">
                      <img class="w-16 h-16 rounded-full" src=".." alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0 mt-4 md:mt-0 md:ml-4 space-y-2">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Written by
                      </p>
                      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 truncate dark:text-white">
                        John Alexander
                      </h1>
                      <div class="flex flex-wrap text-sm text-gray-500 space-x-2">
                        <span>1.1K Followers</span>
                        <span class="hidden md:inline">•</span>
                        <span class="cursor-pointer hover:underline">Writer for Fanfare</span>
                      </div>
                      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        Lifestyle, gen Z, music, lifestyle
                      </p>
                    </div>
                    <div class="col mt-2 space-y-4">
                      <a href="" class="flex text-blue-400">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h1>Follow</h1>
                      </a>
                      <div class="mt-4 md:mt-0 flex justify-center md:justify-end space-x-4">
                        <!-- Social Buttons -->
                        <a href="#"
                          class="text-gray-800 dark:text-white border bg-slate-300 border-zinc-400 rounded-full shadow-md p-2">
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                        <a href="#"
                          class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-full shadow-md p-2">
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                        <a href="#"
                          class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-full shadow-md p-2">
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                        <a href="#"
                          class="text-blue-500 hover:underline border bg-slate-300 border-zinc-400 rounded-full shadow-md p-2">
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                              d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                              clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendation Article -->
      <div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div class="rounded-xl col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 p-2 space-y-1">
          <h1 class="text-4xl text-white font-bold mb-8">Rekomendasi Artikel</h1>
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
            <div class="bg-gray-200 rounded-xl shadow-lg overflow-hidden">
              <a href="#" class="group relative block overflow-hidden">
                <button
                  class="absolute start-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span class="sr-only">Wishlist</span>
                  <h1 class="text-sm">Category</h1>
                </button>

                <img src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                  alt="Wireless Headphones"
                  class="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />

                <div class="relative border border-gray-100 bg-white p-6 rounded-b-xl">
                  <p class="text-gray-700">
                    $49.99
                    <span class="text-gray-400 line-through">$80</span>
                  </p>

                  <h3 class="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                  <p class="mt-1.5 line-clamp-3 text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                    Officiis
                    qui, enim cupiditate aliquam corporis iste.
                  </p>

                  <form class="mt-4 flex gap-4">
                    <button type="button"
                      class="block w-full rounded text-sm font-medium text-blue-500 text-start transition hover:scale-105">
                      Read More
                    </button>
                  </form>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>



    </section>


    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Landing",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* Tambahkan styling khusus jika diperlukan */
</style>