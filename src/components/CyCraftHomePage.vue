<template>
  <div class="bg-black flex justify-center h-auto">
    <div
      class="flex-col min-width-full justify-center"
      style="max-width: 1100px"
    >
      <!-- Mobile Header -->
      <div class="sm:hidden flex content-center justify-between p-3">
        <div class="flex items-center">
          <Monster />
        </div>
        <!-- <button class="text-xl text-white" @click="clicked">Contact</button> -->
      </div>
      <!-- Hero -->
      <div class="flex">
        <div class="hidden sm:flex sm:items-end pt-24 sm:pl-12 sm:pr-4 md:pr-10 lg:pr-20">
          <!-- CyCraft Logo -->
          <div class="object-contain sm:max-w-xs md:max-w-none">
            <img
              src="/CyCraft Logo.svg"
              alt=""
            />
          </div>
        </div>
        <!-- Title Text & Button-->
        <div class="flex-col pt-10 px-10 mt-16 sm:mt-32 sm:mr-4">
          <div
            class="landing-page-title"
            style="max-width: 300px"
          >
            We Craft without cruft.
          </div>
          <div
            class="landing-page-subtitle pt-6"
            style="max-width: 370px"
          >
            We craft beautiful apps and strive for a better web.
          </div>
          <div
            class="mt-24 sm:mt-8 lg:mt-24"
            style="width: 11rem"
          >
            <CyButton
              id="1"
              data-text="CONTACT US"
              class="glitch"
              @click="clicked"
            >Contact Us</CyButton>
          </div>
        </div>
      </div>
      <!-- Projects Section -->
      <div class="mx-0 sm:mx-10 mt-64">
        <!-- Section Title -->
        <div class="flex justify-start mb-6">
          <div class="pl-4 sm:pl-0 text-h2">Our Projects</div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <Project
            title="Pepicons"
            img="/pepicons.png"
            description="Pepicons is a grand total of 118 hand-crafted icons — and counting! This completely original icon set is made in two retro variants: Pop! and Print. A live preview on the website allows you to play around with all the variations the icon pack has to offer."
          />
          <Project
            title="Cinematch"
            img="/cinematch.png"
            description="With the help of CineMatch a user can create film watchlists and share them with friends. This neat app has a clean user interface that organizes the user’s lists beautifully and with simplicity."
          />
          <Project
            title="UBI Calculator"
            img="/ubi.png"
            description="Ever wonder how you might benefit through a Universal Basic Income? The UBI Calculator is an ingenius plugin that allows a user to calculate their exact earnings with different UBI plans."
          />
          <Project
            title="Peer Learning"
            img="/peer-learning.png"
            description="PeerLearning is an online education software bringing students together to collaborate and learn from one another. Funded by education-focused grants, this software has the benefit of current user testing."
          />
        </div>
      </div>
      <FrameworksMobile
        class="sm:hidden mt-24"
        style="margin-bottom: 23rem"
      />
      <FrameworksDesktop
        class="hidden sm:block mt-64 mx-10"
        style="margin-bottom: 23rem"
      />
      <!-- How we design and code -->
      <div class="mx-10">
        <div class="flex flex-col">
          <div
            class=""
            style="max-width: 403px"
          >
            <div class="flex pb-4">
              <div class="text-h2">How we design</div>
              <svg
                class="w-4 sm:w-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 23.721"
              >
                <g
                  id="Layer_1"
                  data-name="Layer 1"
                >
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
            <div class="text-h4">
              With clarity and focus, we enable the user to engage with purpose.
            </div>
          </div>
          <div class="mt-16 sm:mt-24 flex justify-end">

            <div style="max-width: 403px">
              <div class="flex pb-4 justify-end sm:justify-start">
                <div class="text-h2">How we code</div>
                <svg
                  class="w-4 sm:w-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 23.721"
                >
                  <g
                    id="Layer_1"
                    data-name="Layer 1"
                  >
                    <path
                      id="Path_18"
                      data-name="Path 18"
                      d="M18.665,4.665V0h-14V4.665H0v14H4.665v5.056H9.721V18.665H14v5.056h5.056V18.665H28v-14Zm-4.274,9.726H9.721V9.721h4.67Zm8.944,0h-4.67V9.721h4.67Z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
              <div class="text-h4 text-right sm:text-left">
                Matching the beauty of the design, our code is modern, concise,
                and adaptive.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 pb-64 pt-20">
        <div class="text-h2">About Us</div>
        <!-- Luca -->
        <div class="flex-col mt-8 pb-8">
          <div class="w-full md:w-5/6 sm:mt-10">
            <div class="flex items-center mb-4">
              <span class="text-h3 pl-0 sm:pl-4 whitespace-no-wrap">Luca Ban</span>
              <span class="line ml-4 w-full"></span>
            </div>
            <div class="flex mt-2">
              <img
                class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4"
                src="/martin.jpg"
                alt="Avatar"
              />
              <div class="flex-col pl-0 sm:pl-4 pr-0 sm:pr-24">
                <p class="text-h4 ">
                  Has been a technology enthusiast since birth. He thinks of
                  writing code as nothing less than poetry. Believes everything
                  is possible — talent is a skill you teach yourself.
                </p>
                <div class="flex flex-wrap items-center mt-6">
                  <a
                    href="https://twitter.com/Mesqueeb"
                    target="_blank"
                    class="flex items-center"
                  >
                    <img
                      class="h-6 sm:h-12"
                      src="/Twitter_Logo.svg"
                      alt="Twitter Logo"
                    />
                    <p class="text-h3 ml-1 mr-6">Twitter</p>
                  </a>
                  <a
                    href="https://github.com/mesqueeb"
                    target="_blank"
                    class="flex items-center"
                  >
                    <img
                      class="h-4 sm:h-8"
                      src="/Github_Mark.svg"
                    />
                    <p class="text-h3 ml-3">Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tadaki -->
        <div class="flex-col mt-8 pb-8">
          <div class="flex justify-start sm:justify-end">
            <div class="w-full md:w-5/6 sm:mt-10">
              <div class="flex items-center mb-4">
                <span class="line hidden sm:block mr-4 ml-4 w-full"></span>
                <span class="text-h3 pr-0 sm:pr-4 whitespace-no-wrap">Tadaki Matsushita</span>
                <span class="line block sm:hidden ml-4 w-full"></span>

              </div>
              <div class="flex mt-2 sm:flex-row-reverse">
                <img
                  class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4 sm:mr-0"
                  src="/martin.jpg"
                  alt="Avatar"
                />
                <div class="flex-col pl-0 sm:pl-24 pr-0 sm:pr-4">
                  <p class="text-h4">
                    Self taught coder. He has helped companies all over Japan
                    turn their vision into code. Excels at web marketing; and
                    currently loves automation.
                  </p>
                  <div class="flex items-center mt-6">

                    <a
                      href="https://github.com/mesqueeb"
                      target="_blank"
                      class="flex items-center"
                    >
                      <img
                        class="h-4 sm:h-8"
                        src="/Github_Mark.svg"
                      />
                      <p class="text-h3 ml-3">Github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10 mt-20 pb-8">
        <a
          style="cursor: pointer"
          @click="clicked"
        >
          <img
            src="/Contact Us@2x.png"
            alt="Contact Us Button"
          />
        </a>
      </div>
      <!-- English or Japanese -->
      <div class="mx-10 mt-4 sm:mt-24 md:mt-32 flex-col justify-end">
        <p class="text-h3 text-center">
          English? or Japanese?
        </p>
        <div class="flex justify-center mt-4">
          <cy-toggle @input="toggled" />
        </div>
      </div>
      <!-- Copyright and Terms -->
      <div class="mx-10 mt-16 sm:mt-32 md:mt-48 pb-16 flex-col justify-end">
        <p class="text-h3 text-center">
          &copy; 2020 CyCraft
        </p>
        <div class="flex justify-center mt-4">
          <div style="width: 14rem">
            <CyButton
              id="2"
              @click="clicked"
            >Terms &amp; Privacy</CyButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CyToggle from './CyToggle.vue'
import Monster from './Monster.vue'
import CyButton from './CyButton.vue'
import Project from './Project.vue'
import FrameworksMobile from './FrameworksMobile.vue'
import FrameworksDesktop from './FrameworksDesktop.vue'

export default {
  name: 'CycraftHomePage',
  components: {
    CyToggle,
    Monster,
    CyButton,
    Project,
    FrameworksMobile,
    FrameworksDesktop,
  },
  methods: {
    clicked() {
      console.log('clicked')
    },
    toggled(value) {
      console.log('toggled: ', value)
    },
  },
}
</script>

<style lang="sass">
@import './src/assets/typography.sass'
.landing-page-title
  +header-globals()
  font-style: normal
  font-weight: 500
  font-size: 40px
  line-height: 49px
  @media (max-width: 640px)
    font-weight: 800
    font-size: 48px
    line-height: 58px
    letter-spacing: 0.025em
    text-transform: uppercase
.landing-page-subtitle
  +header-globals()
  font-style: normal
  font-weight: 500
  font-size: 20px
  line-height: 28px
.line
  background: white
  height: 1px
</style>
