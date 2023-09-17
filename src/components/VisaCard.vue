<template>
  <div>
    <div class="relative max-w-[320px] m-auto">
      <img class="h-48 w-full" src="@/assets/images/card.jpg" alt="">
      <div class="absolute bottom-4 w-full px-4">
        <div class="flex gap-2 items-start">
          <p class="text-[#E2E8F0] text-lg">الرصيد</p>
          <img src="@/assets/images/eye.png" alt="">
        </div>
        <p class="text-white font-extrabold text-2xl mt-2 mb-1">24,000.55 ر.س</p>
        <p class="text-[#D8E3F8] font-medium text-xs mb-2">رقم حسابك الاستثماري</p>
        <div class="w-full flex items-center gap-2 justify-between border border-[#E2E8F0] py-2 px-4 rounded-xl">
          <img src="@/assets/images/copy.png" alt="">
          <p class="text-[#E2E8F0] font-medium text-sm">SA10 301 0344 5454 545</p>
        </div>
      </div>
    </div>
    <!-- This is a static image, not a carousel functionality -->
    <img src="@/assets/images/indicator.png" class="mt-2 m-auto" alt="">
    <!--  -->
    <div class="flex items-center justify-evenly mt-4">
      <div class="text-center">
        <div class="border-2 border-[#EDF2F7] rounded-xl p-3">
          <img src="@/assets/images/card-send.png" alt="">
        </div>
        <p class="text-[#718096] text-sm font-semibold mt-4">سحب</p>
      </div>
      <div class="text-center">
        <div class="border-2 border-[#EDF2F7] rounded-xl p-3">
          <img src="@/assets/images/card-receive.png" alt="">
        </div>
        <p class="text-[#718096] text-sm font-semibold mt-4">ايداع</p>
      </div>
    </div>
  </div>
</template>