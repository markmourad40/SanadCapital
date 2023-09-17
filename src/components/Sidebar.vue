<template>
  <div class="px-5 py-7">
    <div class="flex items-center justify-between">
      <img src="@/assets/images/logo.png" alt="">
      <p v-show="blurBg" @click="closeSidebar" class="material-icons-outlined text-gray-500 cursor-pointer">close</p>
    </div>
    <div class="mt-10">
      <div class="bg-primary rounded-xl flex items-center gap-3 px-4 py-3 cursor-pointer">
        <img src="@/assets/images/home.png" alt="">
        <p class="text-white font-bold text-sm">الرئيسية</p>
      </div>
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/receipt.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">بيانات المنشأة</p>
      </div>
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/coin.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">طلبات التمويل</p>
      </div>
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/card.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">المحفظة</p>
      </div>
      <div class="flex justify-between items-center px-4 py-3 cursor-pointer mt-3">
        <div class="flex items-center gap-3">
          <img src="@/assets/images/group.png" alt="">
          <p class="text-zinc-500 font-bold text-sm">العمليات</p>
        </div>
        <p class="material-icons text-gray-500">expand_more</p>
      </div>
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/settings.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">الإعدادات</p>
      </div>
    </div>
    <div class="absolute bottom-10">
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/question-circle-outlined.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">الدعم والمساعدة</p>
      </div>
      <div class="flex items-center gap-3 px-4 py-3 cursor-pointer mt-3">
        <img src="@/assets/images/arrow-right.png" alt="">
        <p class="text-zinc-500 font-bold text-sm">تسجيل الخروج</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['expandSidebarFlag', 'blurBg'],
  methods: {
    closeSidebar () {
      this.$emit('expandSidebarFlag', false)
      this.$emit('blurBg', false)
    }
  }
}
</script>