<template>
  <div class="flex-col mt-8 pb-8">
    <div class="flex items-center">
      <div
        class="text-white uppercase text-sm sm:text-base tracking-widest"
        style="white-space: nowrap"
      >
        {{ name }}
      </div>
      <div class="line"></div>
    </div>
    <div class="flex mt-2">
      <img
        class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4"
        src="../assets/martin.jpg"
        alt="Avatar"
      />
      <div class="flex-col sm:ml-4">
        <p class="text-body-2 text-white sm:w-9/12">
          {{ bio }}
        </p>
        <div v-if="twitter || github" class="flex items-center mt-2">
          <a :href="twitter" class="flex items-center">
            <img
              class="h-6"
              src="../assets/Twitter_Logo.svg"
              alt="Twitter Logo"
            />
            <p class="text-white text-body-2">Twitter</p>
          </a>
          <a :href="github" class="flex items-center ml-3">
            <img class="h-4" src="../assets/Github_Mark.svg" />
            <p class="text-white text-body-2 ml-1">Github</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.line
  background: white
  height: 1px
  margin-left: 6px
  width: 100%
</style>
<script>
export default {
  name: 'AboutUs',
  props: {
    name: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    github: {
      type: String,
      default: '',
    },
  },
}
</script>
