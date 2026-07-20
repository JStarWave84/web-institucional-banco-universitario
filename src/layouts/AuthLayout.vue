<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BankSidebar from '@/components/layout/BankSidebar.vue'

const route = useRoute()
const scrollContainer = ref(null)

watch(
  () => route.path,
  () => {
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = 0
    }
  }
)
</script>

<template>
  <div class="h-screen flex overflow-hidden">
    <BankSidebar />
    <div
      ref="scrollContainer"
      class="flex-1 flex flex-col overflow-y-auto"
    >
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
