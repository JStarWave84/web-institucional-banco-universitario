<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  const layout = route.meta.layout ?? 'default'
  return layout === 'auth' ? AuthLayout : DefaultLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<style scoped></style>
