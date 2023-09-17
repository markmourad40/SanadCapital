<template>
  <div class="border border-[#EDF2F7] rounded-2xl p-5 mt-6">
    <div class="overflow-x-auto">
      <div class="min-w-[650px] mb-4">
        <div class="flex items-center justify-between">
          <p class="text-lg font-extrabold text-black">توزيع مبالغ التمويل</p>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
              <p class="text-xs text-black font-extrabold">المبلغ المسدد</p>
              <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
            </div>
            <div class="flex items-center gap-1">
              <p class="text-xs text-black font-extrabold">الدفعات المتبقية</p>
              <input type="checkbox" id="switch2" /><label for="switch2">Toggle</label>
            </div>
            <div class="flex items-center gap-2 bg-dark-grey px-3 py-2 rounded-lg">
              <p class="material-icons text-black">expand_more</p>
              <p class="text-xs text-[#718096] font-bold"> يناير  2023</p>
            </div>
          </div>
        </div>
        <div class="mt-10" style="direction: ltr;">
          <div class="flex items-end gap-8">
            <div>
              <p class="text-[#718096] text-xs font-semibold">25k</p>
              <p class="text-[#718096] text-xs font-semibold mt-4">20k</p>
              <p class="text-[#718096] text-xs font-semibold mt-4">15k</p>
              <p class="text-[#718096] text-xs font-semibold mt-4">10k</p>
              <p class="text-[#718096] text-xs font-semibold mt-4">5k</p>
              <p class="text-[#718096] text-xs font-semibold mt-4">0k</p>
            </div>
            <div class="w-10 h-20 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-28 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-32 bg-primary rounded-md relative">
              <div class="tooltip absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded-md">
                <p class="flex items-end gap-0.5 text-white">
                  <span class="text-[8px]"> ر.س</span>
                  <span class="text-xs font-semibold">5000</span> 
                </p>
              </div>
            </div>
            <div class="w-10 h-20 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-28 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-12 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-36 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-32 bg-[#F2F6FF] rounded-md"></div>
            <div class="w-10 h-24 bg-[#F2F6FF] rounded-md"></div>
          </div>
          <div class="flex items-center mt-2 gap-8">
            <p class="w-5"></p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>10</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>11</span>
            </p>
            <p class="text-primary font-semibold text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>12</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>13</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>14</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>15</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>16</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>17</span>
            </p>
            <p class="text-[#718096] text-xs w-10 flex justify-center gap-0.5">
              <span>يناير</span>
              <span>18</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>