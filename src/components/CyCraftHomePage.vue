<template>
  <div style="max-width: 1366px" class="bg-black">
    <div class="flex-col min-width-full">
      <!-- Mobile Header -->
      <div class="flex content-center justify-between p-3">
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
      <!-- Hero Title -->
      <div class="flex-col justify-center content-center m-10 pb-10">
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
      <!-- Projects Section -->
      <div class="mx-10 mb-64">
        <!-- Section Title -->
        <div class="flex justify-start mb-6">
          <div class="text-xl font-light text-white tracking-wide">
            Projects
          </div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2">
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
          <div class="w-5/6">
            <div class="flex pb-4">
              <div class="text-xl font-light text-white tracking-wide">
                How we design
              </div>
              <svg
                class="w-4 ml-2"
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
            <div class="text-sm font-light text-white tracking-wide">
              With clarity and focus, we enable the user to engage with purpose.
            </div>
          </div>
          <div class="w-5/6 mt-12">
            <div class="flex pb-4">
              <div class="text-xl font-light text-white tracking-wide">
                How we code
              </div>
              <svg
                class="w-4 ml-2"
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
            <div class="text-sm font-light text-white tracking-wide">
              Matching the beauty of the design, our code is modern, concise,
              and adaptive.
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 pb-64">
        <div class="text-xl font-light text-white tracking-wide">About Us</div>
        <AboutUs
          name="Luca Ban"
          bio="Has been a technology enthusiast since birth. He thinks of writing code as nothing less than poetry. Believes everything is possible - talent is a skill you teach yourself."
          twitter="#"
          github="#"
        />
        <AboutUs
          name="Tadaki Matsushita"
          bio="Self taught coder. He has helped companies all over Japan turn their vision into code. Excels at web marketing; and currently loves automation."
        />
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10">
        <a href="#">
          <img src="../assets/Contact Us@2x.png" alt="" />
        </a>
      </div>
      <!-- English or Japanese -->
      <div class="mx-10"></div>
    </div>
  </div>
</template>

<script>
import Project from './Project.vue'
import AboutUs from './AboutUs.vue'
export default {
  name: 'CycraftHomePage',
  components: {
    Project,
    AboutUs,
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
