import { defineStore } from 'pinia'
// import { ref, onMounted, watch } from 'vue'
import { ref } from 'vue'


export const useNavStore = defineStore('nav', () => {
    const homeNav = ref(false)
    const topNavOpen = ref(true)

    const sidebarFilterParam = ref(false)

    return { homeNav, topNavOpen, sidebarFilterParam }
})
