<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import NavbarA from "../../components/NavbarA.vue";
import Footer from "../../components/Footer.vue";


export default {
  name: "Cart",
   async logout() {
      try {
        await axios.post("http://localhost:5000/api/users/logout", {}, { withCredentials: true });
        localStorage.removeItem("userInfo");
        this.isLoggedIn = false;
      } catch (error) {
        console.error("Logout failed", error);
      }
    },
  components: {
    Navbar,
    NavbarA,
    Footer
  },
  isLoggedIn: false,
  computed: {
    navbarComponent() {
      return this.isLoggedIn ? "NavbarA" : "Navbar";
    },
  },
  created() {
    const userInfo = localStorage.getItem("userInfo");
    this.isLoggedIn = !!userInfo;
  },
};
</script>

<template>
  <component :is="navbarComponent" />
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-3xl">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>

        <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing & Delivery information</h4>

          <dl>
            <dt class="text-base font-medium text-gray-900 dark:text-white">Individual</dt>
            <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Bonnie Green - +62-8970-3432-2098,
              Geger Arum Street, Bandung, West Java, Indonesian</dd>
          </dl>

        </div>

        <div class="mt-6 sm:mt-8">
          <div class="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
            <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
              <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td class="whitespace-nowrap py-4 md:w-[384px]">
                    <div class="flex items-center gap-4">
                      <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                        <img class="h-auto w-full max-h-full dark:hidden"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                        <img class="hidden h-auto w-full max-h-full dark:block"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                          alt="imac image" />
                      </a>
                      <a href="#" class="hover:underline">Uniqlo Denim Jacket</a>
                    </div>
                  </td>

                  <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

                  <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">Rp 1.598.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-4 space-y-6">
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Harga Normal</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">Rp 799.000,00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Ongkos Kirim</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">Rp.20.000,00</dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Pajak</dt>
                  <dd class="text-base font-medium text-gray-900 dark:text-white">Rp.15.980,00</dd>
                </dl>
              </div>

              <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-lg font-bold text-gray-900 dark:text-white">Rp. 1.633.980,00</dd>
              </dl>
            </div>



            <div class="gap-4 sm:flex sm:items-center">
              <button type="button"
                class="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return
                to Shopping</button>

              <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                class="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                type="button">
                Bayar
              </button>

              <div id="popup-modal" tabindex="-1"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                      class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                      <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Pesanan berhasil dibuat. Terima kasih telah berbelanja di toko kami.
                      </h3>

                      <button data-modal-hide="popup-modal" type="button"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-teal-500 rounded-lg border border-gray-200 hover:bg-teal-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-lime-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <router-link to="/" href="#">
                          Kembali
                        </router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </form>
  </section>

  <div id="billingInformationModal" tabindex="-1" aria-hidden="true"
    class="antialiased fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-auto w-full max-h-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased md:inset-0">
    <div class="relative max-h-auto w-full max-h-full max-w-lg p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Billing Information</h3>
          <button type="button"
            class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="billingInformationModal">
            <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-5">
            <div class="flex items-center gap-4 sm:col-span-2">
              <div class="flex items-center">
                <input id="company_address_billing_modal" data-collapse-toggle="company-info-container-modal"
                  aria-expanded="false" type="checkbox" value="" name="address-type-modal"
                  class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="company_address_billing_modal"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Order as a company </label>
              </div>
            </div>

            <div class="grid hidden grid-cols-2 gap-4 sm:col-span-2" id="company-info-container-modal">
              <div>
                <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company
                  name </label>
                <input type="text" id="company_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Flowbite LLC" />
              </div>

              <div>
                <label for="vat_number" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number
                </label>
                <input type="text" id="vat_number"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="DE42313253" />
              </div>
            </div>


            <div>
              <label for="first_name_billing_modal"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First Name* </label>
              <input type="text" id="first_name_billing_modal"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter your first name" required />
            </div>

            <div>
              <label for="last_name_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Last Name* </label>
              <input type="text" id="last_name_billing_modal"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter your last name" required />
            </div>



            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select_country_input_billing_modal"
                  class="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
              </div>
              <select id="select_country_input_billing_modal"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>United States</option>
                <option value="AS">Australia</option>
                <option value="FR">France</option>
                <option value="ES">Spain</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>

            <div>
              <div class="mb-2 flex items-center gap-2">
                <label for="select_city_input_billing_modal"
                  class="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
              </div>
              <select id="select_city_input_billing_modal"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                <option selected>San Francisco</option>
                <option value="NY">New York</option>
                <option value="LA">Los Angeles</option>
                <option value="CH">Chicago</option>
                <option value="HU">Houston</option>
              </select>
            </div>

            <div class="sm:col-span-2">
              <label for="address_billing_modal" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Shipping Address* </label>
              <textarea id="address_billing_modal" rows="4"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Enter here your address"></textarea>
            </div>

          </div>
          <div class="border-t border-gray-200 pt-4 dark:border-gray-700 md:pt-5">
            <button type="submit"
              class="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save
              information</button>
            <button type="button" data-modal-toggle="billingInformationModal"
              class="me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>