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
            class="main-title text-white"
            style="max-width: 300px"
          >
            We Craft without cruft.
          </div>
          <div
            class="main-subtitle text-white pt-6"
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
      <div class="mx-10 mb-64 mt-64">
        <!-- Section Title -->
        <div class="flex justify-start mb-6">
          <div class="title-text text-white">Projects</div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <!-- Pepicons -->
          <div class="flex-col">
            <div class="flex items-center">
              <span class="text-white project-title">Pepicons</span>
              <div class="line"></div>
            </div>
            <div class="relative mx-auto mt-3">
              <img
                class="h-full w-full"
                src="/pepicons.png"
                alt="Project Photo"
              />
            </div>
          </div>
          <!-- Cinematch -->
          <div class="flex-col">
            <div class="flex items-center">
              <span class="text-white project-title">Cinematch</span>
              <div class="line"></div>
            </div>
            <div class="relative mx-auto mt-3">
              <img
                class="h-full w-full"
                src="/cinematch.png"
                alt="Project Photo"
              />
            </div>
          </div>
          <!-- Cinematch -->
          <div class="flex-col">
            <div class="flex items-center">
              <span class="text-white project-title">UBI Calculator</span>
              <div class="line"></div>
            </div>
            <div class="relative mx-auto mt-3">
              <img
                class="h-full w-full"
                src="/ubi.png"
                alt="Project Photo"
              />
            </div>
          </div>
          <!-- Cinematch -->
          <div class="flex-col">
            <div class="flex items-center">
              <span class="text-white project-title">Peer Learning</span>
              <div class="line"></div>
            </div>
            <div class="relative mx-auto mt-3">
              <img
                class="h-full w-full"
                src="/peer-learning.png"
                alt="Project Photo"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- How we design and code -->
      <div class="mx-10 pb-64 pt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div
            class="w-5/6 sm:ml-10"
            style="max-width: 403px"
          >
            <div class="flex pb-4">
              <div class="title-text text-white">How we design</div>
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
            <div class="about-us-body text-white">
              With clarity and focus, we enable the user to engage with purpose.
            </div>
          </div>
          <div
            class="w-5/6 mt-16 sm:mt-24 sm:ml-10 md:ml-12 lg:ml-16"
            style="max-width: 403px"
          >
            <div class="flex pb-4">
              <div class="title-text text-white">How we code</div>
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
            <div class="about-us-body text-white">
              Matching the beauty of the design, our code is modern, concise,
              and adaptive.
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 pb-64 pt-20">
        <div class="title-text text-white">About Us</div>
        <!-- Luca -->
        <div class="flex-col mt-8 pb-8">
          <div class="sm:w-3/4 sm:mt-10">
            <div class="flex items-center">
              <div
                class="text-white name-title"
                style="white-space: nowrap; margin-right: 20px"
              >
                Luca Ban
              </div>
              <div class="line"></div>
            </div>
            <div class="flex mt-2">
              <img
                class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4"
                src="/martin.jpg"
                alt="Avatar"
              />
              <div class="flex-col sm:ml-4">
                <p class="about-us-body text-white sm:w-11/12">
                  Has been a technology enthusiast since birth. He thinks of
                  writing code as nothing less than poetry. Believes everything
                  is possible — talent is a skill you teach yourself.
                </p>
                <div class="flex items-center mt-2">
                  <a
                    href="https://twitter.com/Mesqueeb"
                    target="_blank"
                    class="flex items-center"
                  >
                    <img
                      class="h-6 sm:h-10"
                      src="/Twitter_Logo.svg"
                      alt="Twitter Logo"
                    />
                    <p class="text-white about-us-body">Twitter</p>
                  </a>
                  <a
                    href="https://github.com/mesqueeb"
                    target="_blank"
                    class="flex items-center ml-3"
                  >
                    <img
                      class="h-4 sm:h-6"
                      src="/Github_Mark.svg"
                    />
                    <p class="text-white about-us-body ml-1">Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tadaki -->
        <div class="flex-col mt-8 pb-8">
          <div class="flex sm:justify-end">
            <div class="sm:w-3/4 sm:mt-10">
              <div class="flex items-center sm:flex-row-reverse">
                <div
                  class="text-white name-title tadaki-line-margin"
                  style="white-space: nowrap"
                >
                  Tadaki Matsushita
                </div>
                <div class="line"></div>
              </div>
              <div class="flex mt-2 sm:flex-row-reverse">
                <img
                  class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4 sm:mr-0"
                  src="/martin.jpg"
                  alt="Avatar"
                />
                <div class="flex-col sm:ml-4">
                  <p class="about-us-body text-white sm:w-11/12">
                    Self taught coder. He has helped companies all over Japan
                    turn their vision into code. Excels at web marketing; and
                    currently loves automation.
                  </p>
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
        <p class="text-white uppercase text-sm tracking-widest text-center">
          English? or Japanese?
        </p>
        <div class="flex justify-center mt-2">
          <cy-toggle @input="toggled" />
        </div>
      </div>
      <!-- Copyright and Terms -->
      <div class="mx-10 mt-16 sm:mt-24 md:mt-32 pb-16 flex-col justify-end">
        <p class="text-white uppercase text-sm tracking-widest text-center">
          &copy; 2020 CyCraft
        </p>
        <div class="flex justify-center mt-4">
          <div style="width: 13rem">
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

export default {
  name: 'CycraftHomePage',
  components: {
    CyToggle,
    Monster,
    CyButton,
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
.main-title
  font-size: 48px
  line-height: 58px
  font-weight: 700
  letter-spacing: 0.06em
  text-transform: uppercase
@media (min-width: 640px)
  .main-title
    font-size: 40px
    line-height: 49px
    font-weight: 500
    letter-spacing: 0.025em
    text-transform: none

.main-subtitle
  font-size: 20px
  line-height: 28px
  font-weight: 300
  letter-spacing: 0.001em

.title-text
  font-size: 20px
  line-height: 28px
  font-weight: 300
  letter-spacing: 0.001em
@media (min-width: 640px)
  .title-text
    font-size: 40px
    line-height: 49px
    font-weight: 500
    letter-spacing: 0.025em

.about-us-body
  font-size: 12px
  font-weight: 300
  line-height: 15px
  letter-spacing: 0.028
@media (min-width: 640px)
  .about-us-body
    font-size: 20px
    line-height: 28px

.button-text
  font-size: 14px
  line-height: 18px
  font-weight: 700
  letter-spacing: 0.024em
  text-transform: uppercase

.project-title
  font-size: 14px
  line-height: 18px
  font-weight: 600
  letter-spacing: 0.07em
  text-transform: uppercase
@media (min-width: 640px)
  .project-title
    font-size: 20px
    line-height: 28px
    letter-spacing: 0.1em

.name-title
  font-size: 14px
  font-weight: 600
  line-height: 18px
  letter-spacing: 0.08em
  text-transform: uppercase
@media (min-width: 640px)
  .name-title
    font-size: 20px
    line-height: 28px

.line
  background: white
  height: 1px
  width: 100%

.tadaki-line-margin
  margin-right: 20px
@media (min-width: 640px)
  .tadaki-line-margin
    margin-right: 0px
    margin-left: 20px
</style>
