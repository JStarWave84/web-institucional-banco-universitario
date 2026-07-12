<script setup>
import BankSidebar from '@/components/layout/BankSidebar.vue'
</script>

<template>
  <div class="h-screen flex overflow-hidden">
    <BankSidebar />
    <div class="flex-1 flex flex-col overflow-y-auto">
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
