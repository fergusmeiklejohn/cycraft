<template>
  <div class="flex-col mb-8">
    <div class="pl-4 sm:pl-0 flex items-center">
      <span class="text-h3 pr-4 whitespace-no-wrap">{{ title }}</span>
      <span class="line mr-4 sm:mr-0 w-full"></span>
    </div>
    <div class="relative mx-auto mt-3">
      <img
        class="h-full w-full"
        :src="img"
        alt="Project Photo"
      />
    </div>
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
  },
}
</script>
