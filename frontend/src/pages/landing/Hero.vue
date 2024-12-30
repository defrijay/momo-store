<template>
    <div id="indicators-carousel" class="relative w-full h-screen" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative w-full h-full overflow-hidden rounded-lg">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
                data-carousel-item="active">
                <div class="flex flex-col items-end justify-center h-full px-4 mx-auto max-w-screen-xl text-end py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-3xl sm:px-8 lg:px-20">
                        We invest in the world’s potential
                    </h1>
                    <p class="mb-8 text-md font-normal text-gray-300 lg:text-lg sm:px-8 lg:px-20 ms">
                        Here at Flowbite we focus on
                        markets where technology, innovation, and capital can unlock long-term value and drive economic
                        growth.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-y-0 sm:px-8 lg:px-20">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-lime-400 via-lime-600 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-green-700 hover:bg-green-100 focus:ring-4 focus:ring-green-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
                data-carousel-item>
                <div class="flex flex-col items-end justify-center h-full px-4 mx-auto max-w-screen-xl text-end py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-3xl sm:px-8 lg:px-20">
                        We invest in the world’s potential
                    </h1>
                    <p class="mb-8 text-md font-normal text-gray-300 lg:text-lg sm:px-8 lg:px-20">
                        Here at Flowbite we focus on
                        markets where technology, innovation, and capital can unlock long-term value and drive economic
                        growth.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-y-0 sm:px-8 lg:px-20">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-lime-400 via-lime-600 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" class="inline-flex justify-center hover:text-lime-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-green-700 hover:bg-green-100 focus:ring-4 focus:ring-green-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 rtl:space-x-reverse bottom-5 left-1/2 transform -translate-x-1/2">
            <button type="button" class="w-3 h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 4"
                data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 5"
                data-carousel-slide-to="4"></button>
        </div>
    </div>
</template>
