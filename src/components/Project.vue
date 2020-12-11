<template>
  <div class="flex-col mb-8">
    <div class="pl-4 sm:pl-0 flex items-center mb-3">
      <span class="text-h3 pr-4 whitespace-no-wrap">{{ title }}</span>
      <span class="line mr-4 sm:mr-0 w-full"></span>
    </div>
    <a
      :href="url"
      target="_blank"
    >
      <div class="relative mx-auto">
        <img
          class="h-full w-full"
          :src="img"
          alt="Project Photo"
        />
        <div class="absolute flex flex-col justify-center items-center top-0 h-full w-full bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out">
          <div class="text-center hidden sm:flex sm:flex-row sm:items-center">
            <div class="text-h1 inline-block">

              {{linkText}}
            </div>
            <img
              class="inline-block ml-3"
              style="height: 37px"
              src="/external-link.svg"
              alt=""
            />

          </div>
        </div>
      </div>
    </a>
    <div class="text-h4 pt-4 px-4 sm:pt-8 sm:px-0">{{description}}</div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    textsm: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
}
</script>
