<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

      <!-- Background overlay, show/hide based on modal state. -->
      <transition
        enter-active-class="ease-out duration-400"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="ease-in duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="active"
          class="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div
            class="absolute inset-0 bg-gray-700 opacity-75"
            @click="close"
          ></div>
        </div>
      </transition>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >&#8203;</span>

      <!-- Modal panel, show/hide based on modal state. -->
      <transition
        enter-active-class="ease-out duration-500"
        enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        leave-active-class="ease-in duration-400"
        leave-class="opacity-100 translate-y-0 sm:scale-100"
        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="active"
          class="inline-block align-bottom bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full">

              <img
                class="h-10 w-10"
                src="/cy-icon-white-on-black.svg"
                alt=""
              />
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <div class="mt-6">
                <CyButton>Gmail (Browser)</CyButton>
              </div>
              <div class="mt-2">
                <CyButton>Email (Default)</CyButton>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-green-100 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 sm:text-sm"
              @click="close"
            >
              Close
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>

</template>
<script>
import CyButton from './CyButton'
export default {
  name: 'ContactDialog',
  components: {
    CyButton,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>