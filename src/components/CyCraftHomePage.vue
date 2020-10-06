<template>
  <div style="max-width: 1366px" class="bg-black flex justify-center">
    <div
      class="flex-col min-width-full justify-center"
      style="max-width: 1100px"
    >
      <!-- Mobile Header -->
      <div class="sm:hidden flex content-center justify-between p-3">
        <div class="flex items-center">
          <svg
            id="Monster"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="23.721"
            viewBox="0 0 28 23.721"
          >
            <g id="Layer_1" data-name="Layer 1">
              <path
                id="Path_18"
                data-name="Path 18"
                d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <!-- <button class="text-xl text-white" @click="clicked">Contact</button> -->
      </div>
      <!-- Hero -->
      <div class="flex">
        <div
          class="hidden sm:flex pt-24 sm:pl-10 md:pl-16 lg:pl-20 sm:pr-4 md:pr-10 lg:pr-20"
        >
          <!-- CyCraft Logo -->
          <div class="object-contain">
            <img src="../assets/CyCraft Logo.svg" alt="" />
          </div>
        </div>
        <!-- Title Text & Button-->
        <div
          class="flex-col justify-center content-center p-10 pb-10 sm:mt-6 sm:mr-4 sm:max-w-md"
        >
          <div class="text-h1 text-white">We Craft without cruft.</div>
          <div class="text-xl font-regular tracking-wide text-white pt-6">
            We craft beautiful apps and strive for a better web.
          </div>
          <button
            class="bg-white hover:bg-gray-400 text-black font-bold text-base uppercase py-3 px-4 inline-flex items-center my-20"
            @click="clicked"
          >
            <svg
              class="fill-current w-5 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.9 17"
            >
              <path
                d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z"
              />
            </svg>
            <span>Contact us</span>
          </button>
        </div>
      </div>
      <!-- Projects Section -->
      <div class="mx-10 mb-64 sm:mt-20">
        <!-- Section Title -->
        <div class="flex justify-start mb-6">
          <div
            class="text-xl sm:text-2xl font-light sm:font-normal text-white tracking-wide"
          >
            Projects
          </div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1 sm:grid-cols-2">
          <project
            v-for="p in 4"
            :key="p"
            title="popicons"
            img="../assets/martin.jpg"
            class=""
          />
        </div>
      </div>
      <!-- How we design and code -->
      <div class="mx-10 pb-64">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="w-5/6 sm:ml-10" style="max-width: 403px">
            <div class="flex pb-4">
              <div
                class="text-xl sm:hidden font-light text-white tracking-wide"
              >
                How we design
              </div>
              <div
                class="hidden sm:block text-2xl font-normal text-white tracking-wide sm:pr-2"
              >
                How We Design
              </div>
              <svg
                class="w-4 sm:w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 23.721"
              >
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div
              class="text-sm sm:text-base font-light text-white tracking-wide"
            >
              With clarity and focus, we enable the user to engage with purpose.
            </div>
          </div>
          <div
            class="w-5/6 mt-12 sm:ml-10 md:ml-12 lg:ml-16"
            style="max-width: 403px"
          >
            <div class="flex pb-4">
              <div
                class="text-xl sm:hidden font-light text-white tracking-wide"
              >
                How we code
              </div>
              <div
                class="hidden sm:block text-2xl font-normal text-white tracking-wide sm:pr-2"
              >
                How We Code
              </div>
              <svg
                class="w-4 sm:w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 23.721"
              >
                <g id="Layer_1" data-name="Layer 1">
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div
              class="text-sm sm:text-base font-light text-white tracking-wide"
            >
              Matching the beauty of the design, our code is modern, concise,
              and adaptive.
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 pb-64">
        <div
          class="text-xl sm:text-2xl font-light sm:font-normal text-white tracking-wide"
        >
          About Us
        </div>
        <AboutUs
          name="Luca Ban"
          bio="Has been a technology enthusiast since birth. He thinks of writing code as nothing less than poetry. Believes everything is possible - talent is a skill you teach yourself."
          twitter="#"
          github="#"
          class="sm:w-3/4 sm:mt-10"
        />
        <div class="flex justify-end">
          <AboutUs
            name="Tadaki Matsushita"
            bio="Self taught coder. He has helped companies all over Japan turn their vision into code. Excels at web marketing; and currently loves automation."
            class="sm:w-3/4 sm:mt-10"
          />
        </div>
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10 mt-20 pb-8">
        <a href="#">
          <img src="../assets/Contact Us@2x.png" alt="" />
        </a>
      </div>
      <!-- English or Japanese -->
      <div class="mx-10 mt-4 sm:mt-10 md:mt-16 flex-col justify-end">
        <p class="text-white uppercase text-sm tracking-widest text-center">
          English? or Japanese?
        </p>
        <div class="flex justify-center mt-2">
          <cy-toggle />
        </div>
      </div>
      <!-- Copyright and Terms -->
      <div class="mx-10 mt-16 sm:mt-20 md:mt-24 pb-10 flex-col justify-end">
        <p class="text-white uppercase text-sm tracking-widest text-center">
          &copy; 2020 CyCraft
        </p>
        <div class="flex justify-center mt-2">
          <button
            class="bg-white hover:bg-gray-400 text-black font-bold text-base uppercase py-3 px-4 inline-flex items-center"
            @click="clicked"
          >
            <svg
              class="fill-current w-5 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.9 17"
            >
              <path
                d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z"
              />
            </svg>
            <span>Terms &amp; Privacy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from './Project.vue'
import AboutUs from './AboutUs.vue'
import CyToggle from './CyToggle.vue'
export default {
  name: 'CycraftHomePage',
  components: {
    Project,
    AboutUs,
    CyToggle,
  },
  props: {},
  methods: {
    clicked() {
      console.log('clicked')
    },
  },
}
</script>

<style lang="sass" scoped>
@import '../assets/typography.sass'
text-h1
  color: #fff
</style>
