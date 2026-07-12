<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'

const isMenuOpen = ref(false)

const links = [
  { name: 'Servicios', path: '/' },
  { name: 'Educación Financiera', path: '/educacion-financiera' },
  { name: 'Alianzas', path: '/alianzas' },
  { name: 'Sobre nosotros', path: '/sobre-nosotros' },
  { name: 'Contacto', path: '/contacto' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <div
    class="flex justify-between items-center px-6 py-4 sticky top-0 bg-white/80 backdrop-blur-md shadow-xs z-30"
  >
<div>
  <router-link :to="links[0].path">
    <img src="@/assets/img/logo-no-background.png" width="251" alt="Logo Banco Universitario" />
  </router-link>
</div>

    <div class="hidden lg:flex lg:items-center lg:gap-x-8">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.path"
        class="group text-page-text hover:text-brand-secondary transition-colors duration-200 relative"
      >
        {{ link.name }}
        <span
          class="hidden lg:block absolute left-0 -bottom-1 h-0.5 w-0 bg-brand-secondary transition-all duration-200 group-hover:w-full"
        ></span>
      </router-link>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-show="isMenuOpen"
        class="lg:hidden flex flex-col gap-4 w-full bg-white absolute left-0 right-0 top-full px-6 py-4 shadow-lg z-20"
      >
        <button
          type="button"
          class="self-end text-page-text"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen.toString()"
        >
          <X class="w-6 h-6" />
        </button>

        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.path"
          @click="closeMenu"
          class="text-page-text hover:text-brand-secondary transition-colors duration-200"
          >{{ link.name }}</router-link
        >

        <router-link
          :to="{ name: 'Login' }"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
          class="bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-colors duration-300 w-full text-center"
          >Banca en Línea</router-link
        >
      </div>
    </Transition>

    <router-link
      :to="{ name: 'Login' }"
      target="_blank"
      rel="noopener noreferrer"
      class="hidden lg:inline-block bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-secondary transition-colors duration-300"
      >Banca en Línea</router-link
    >

    <button
      v-if="!isMenuOpen"
      type="button"
      class="lg:hidden text-page-text"
      @click="toggleMenu"
      aria-label="Abrir menú"
    >
      <Menu class="w-6 h-6" />
    </button>
  </div>
</template>
