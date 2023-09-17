<template>
  <div>
    <div v-if="expandSidebarFlag">
      <div @click="checkElementClicked" :class="blurBg ? 'menu-container' : ''">
        <div v-show="expandSidebarFlag" class="bg-dark-grey fixed bottom-0 z-30 top-0 right-0 w-64 overflow-y-auto"
          :style="blurBg ? 'box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.1), 2px 2px 10px rgba(0, 0, 0, 0.1);' : ''">
          <Sidebar :expandSidebarFlag="expandSidebarFlag" @expandSidebarFlag="expandSidebarFlag = $event" :blurBg="blurBg" @blurBg="blurBg = $event"/>
        </div>
      </div>
    </div>
    <div class="main xl:mr-64 md:pb-6 md:px-6 px-4 pb-6">
      <div class="h-6 bg-white sticky top-0 w-full z-10"></div>
      <div class="sticky top-6 bg-white z-10 pb-3">
        <Navbar :expandSidebarFlag="expandSidebarFlag" @expandSidebarFlag="expandSidebarFlag = $event" :blurBg="blurBg" @blurBg="blurBg = $event"/>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-4 mt-4">
        <div class="lg:col-span-2 md:col-span-3 col-span-1">
          <Title />
          <Statistics />
          <!-- Here is a static Chart just for design, not the Chart.js package -->
          <Chart />
        </div>
        <div class="lg:col-span-1 md:col-span-2 col-span-1 border border-[#EDF2F7] rounded-2xl lg:px-5 md:px-3 px-5 py-7">
          <div class="flex items-center justify-between">
            <p class="text-black text-lg font-extrabold">المحفظة</p>
            <span class="material-icons text-gray-400 cursor-pointer">more_horiz</span>
          </div>
          <div class="mt-4 px-1">
            <VisaCard />
            <MyInfo />
            <Advisor />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Title.vue'
import Statistics from '@/components/Statistics.vue'
import Chart from '@/components/Chart.vue'
import VisaCard from '@/components/VisaCard.vue'
import MyInfo from '@/components/MyInfo.vue'
import Advisor from '@/components/Advisor.vue'

export default {
  data () {
    return {
      expandSidebarFlag: true,
      blurBg: false,
      windowWidth: 0,
    }
  },
  watch: {
    windowWidth () {
      this.blurBg = false
      if (this.windowWidth < 1280) {
        this.expandSidebarFlag = false
      } else {
        this.expandSidebarFlag = true
      }
    },
  },
  methods: {
    checkElementClicked (event) {
      if (event.target.classList[0] === 'menu-container') {
        this.expandSidebarFlag = false
        this.blurBg = false
      }
    },
  },
  components: {
    Sidebar,
    Navbar,
    Title,
    Statistics,
    Chart,
    VisaCard,
    MyInfo,
    Advisor
  },
  created () {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
    if (this.windowWidth < 1024) {
      this.expandSidebarFlag = false
    } else {
      this.expandSidebarFlag = true
    }
  }
}
</script>
