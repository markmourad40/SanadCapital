<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <p @click="expandSidebar()" class="bg-dark-grey w-12 h-12 rounded-full flex items-center justify-center xl:hidden cursor-pointer">
        <span class="material-icons text-black">menu</span>
      </p>
      <p class="text-2xl font-extrabold text-black md:block hidden">الرئيسية</p>
    </div>
    <div class="flex items-center justify-center sm:gap-3 gap-2">
      <p class="bg-dark-grey w-12 h-12 rounded-full flex items-center justify-center">
        <span class="material-icons-outlined text-black">search</span>
      </p>
      <div class="bg-dark-grey w-12 h-12 rounded-full flex items-center justify-center">
        <div class="material-icons-outlined text-black relative">
          <span>notifications</span>
          <p class="absolute text-red w-3 h-3 bg-red-500 rounded-full border-dark-grey border-2 top-0 -right-0.5"></p>
        </div>
      </div>
      <div class="bg-dark-grey h-12 rounded-full flex items-center justify-center gap-2 px-2">
        <img src="@/assets/images/user-icon.png" alt="">
        <div class="sm:flex hidden">
          <p class="text-base font-extrabold">محمد حسن</p>
          <p class="material-icons ml-2 mr-4 text-gray-500">expand_more</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['expandSidebarFlag', 'blurBg'],
  methods: {
    expandSidebar () {
      this.$emit('expandSidebarFlag', true)
      this.$emit('blurBg', true)
    }
  }
}
</script>